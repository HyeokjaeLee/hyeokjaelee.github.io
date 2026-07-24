'use client';

import { Button } from '@components/atoms/Button';
import { Spinner } from '@components/atoms/Spinner';
import { Modal } from '@components/molecules/Modal';
import {
  getCurrentUser,
  pollForToken,
  requestDeviceCode,
} from '@lib/github-auth';
import { useAuthStore } from '@stores/useAuthStore';
import { useCallback, useEffect, useRef, useState } from 'react';

type Phase = 'idle' | 'loading-code' | 'polling' | 'error';

export const LoginModal = () => {
  const open = useAuthStore((state) => state.loginModalOpen);
  const closeLoginModal = useAuthStore((state) => state.closeLoginModal);
  const setAuth = useAuthStore((state) => state.setAuth);

  const [phase, setPhase] = useState<Phase>('idle');
  const [userCode, setUserCode] = useState('');
  const [verificationUri, setVerificationUri] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Bumping runId invalidates any in-flight request/poll from a prior attempt,
  // a close, or unmount.
  const runIdRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startFlow = useCallback(() => {
    const runId = ++runIdRef.current;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setErrorMessage('');
    setUserCode('');
    setVerificationUri('');
    setPhase('loading-code');

    const schedulePoll = (code: string, initialInterval: number) => {
      let interval = initialInterval;

      const tick = () => {
        timeoutRef.current = setTimeout(() => {
          if (runIdRef.current !== runId) {
            return;
          }

          void (async () => {
            const result = await pollForToken(code, interval);

            if (runIdRef.current !== runId) {
              return;
            }

            if (result.status === 'ok') {
              try {
                const { login } = await getCurrentUser(result.access_token);

                if (runIdRef.current !== runId) {
                  return;
                }

                setAuth(result.access_token, login);
                closeLoginModal();
              } catch {
                setErrorMessage('사용자 정보를 불러오지 못했습니다.');
                setPhase('error');
              }

              return;
            }

            switch (result.error) {
              case 'authorization_pending':
                tick();

                break;
              case 'slow_down':
                interval += 5;
                tick();

                break;
              case 'expired_token':
                setErrorMessage(
                  '인증 코드가 만료되었습니다. 다시 시도해 주세요.',
                );
                setPhase('error');

                break;
              case 'access_denied':
                setErrorMessage('인증이 취소되었습니다.');
                setPhase('error');

                break;
              case 'device_flow_disabled':
                setErrorMessage('OAuth App에서 Device Flow를 활성화해 주세요.');
                setPhase('error');

                break;
              default:
                setErrorMessage(
                  '알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.',
                );
                setPhase('error');

                break;
            }
          })();
        }, interval * 1000);
      };

      tick();
    };

    void (async () => {
      try {
        const data = await requestDeviceCode();

        if (runIdRef.current !== runId) {
          return;
        }

        setUserCode(data.user_code);
        setVerificationUri(data.verification_uri);
        setPhase('polling');
        schedulePoll(data.device_code, data.interval);
      } catch {
        if (runIdRef.current !== runId) {
          return;
        }

        setErrorMessage(
          '로그인 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.',
        );
        setPhase('error');
      }
    })();
  }, [setAuth, closeLoginModal]);

  // Start the device flow when the modal opens; cancel pending work on close/unmount.
  useEffect(() => {
    if (open) {
      startFlow();
    }

    return () => {
      runIdRef.current++;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [open, startFlow]);

  return (
    <Modal
      header="GitHub 로그인"
      onOpenChange={(nextOpen) => {
        if (!nextOpen) {
          closeLoginModal();
        }
      }}
      open={open}
    >
      {phase === 'loading-code' ? (
        <div className="flex flex-col items-center gap-4 py-8">
          <Spinner className="size-12" />
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            로그인 정보를 불러오는 중…
          </p>
        </div>
      ) : null}

      {phase === 'polling' ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            아래 코드를 복사한 뒤 GitHub 기기 인증 페이지에서 입력해 주세요.
          </p>
          <code className="select-text rounded-lg border bg-zinc-100 px-6 py-4 text-center font-mono text-3xl font-bold tracking-[0.3em] dark:bg-zinc-800">
            {userCode}
          </code>
          <Button
            onClick={() => {
              window.open(verificationUri, '_blank');
            }}
          >
            github.com/login/device 열기
          </Button>
          <div className="flex items-center gap-2 text-zinc-400">
            <Spinner className="size-4" />
            <span className="text-sm">인증을 기다리는 중…</span>
          </div>
        </div>
      ) : null}

      {phase === 'error' ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-red-500">{errorMessage}</p>
          <Button
            onClick={() => {
              startFlow();
            }}
          >
            다시 시도
          </Button>
        </div>
      ) : null}
    </Modal>
  );
};
