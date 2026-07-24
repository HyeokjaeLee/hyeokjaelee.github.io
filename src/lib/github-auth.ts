import { GITHUB_LIKE_CONFIG } from '@constants/github';

export interface DeviceCodeResponse {
  device_code: string;
  user_code: string;
  verification_uri: string;
  expires_in: number;
  interval: number;
}

export type DeviceFlowError =
  | 'authorization_pending'
  | 'slow_down'
  | 'expired_token'
  | 'access_denied'
  | 'device_flow_disabled';

export type PollResult =
  | { status: 'ok'; access_token: string }
  | { status: 'error'; error: DeviceFlowError };

export async function requestDeviceCode(): Promise<DeviceCodeResponse> {
  const { clientId, proxyBaseUrl, scope } = GITHUB_LIKE_CONFIG;
  const response = await fetch(`${proxyBaseUrl}/login/device/code`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ client_id: clientId, scope }),
  });

  return (await response.json()) as DeviceCodeResponse;
}

export async function pollForToken(
  deviceCode: string,
  _interval: number,
): Promise<PollResult> {
  const { clientId, proxyBaseUrl } = GITHUB_LIKE_CONFIG;
  const response = await fetch(`${proxyBaseUrl}/login/oauth/access_token`, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: JSON.stringify({
      client_id: clientId,
      device_code: deviceCode,
      grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
    }),
  });
  const data = (await response.json()) as {
    access_token?: string;
    error?: DeviceFlowError;
  };

  if (data.access_token) {
    return { status: 'ok', access_token: data.access_token };
  }

  return { status: 'error', error: data.error as DeviceFlowError };
}

export async function getCurrentUser(
  token: string,
): Promise<{ login: string }> {
  const response = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub user: ${response.status}`);
  }

  const data = (await response.json()) as { login: string };

  return { login: data.login };
}
