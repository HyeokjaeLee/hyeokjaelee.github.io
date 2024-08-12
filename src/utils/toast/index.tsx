import React from 'react';
import { toast as toastifyToast } from 'react-toastify';

import { ReactComponent as FailIcon } from './icon/fail.svg';
import { ReactComponent as InfoIcon } from './icon/info.svg';
import { ReactComponent as SuccessIcon } from './icon/success.svg';
import { ReactComponent as WarningIcon } from './icon/warning.svg';

export interface ToastOptions {
  type?: 'fail' | 'success' | 'warning' | 'info';
  message: string;
  holdTime?: number;
}

export const toast = ({
  message,
  holdTime = 3000,
  type = 'success',
}: ToastOptions) => {
  const Icon = {
    success: SuccessIcon,
    fail: FailIcon,
    warning: WarningIcon,
    info: InfoIcon,
  }[type];

  return toastifyToast(message, {
    autoClose: holdTime,
    icon: <Icon className="size-5" />,
  });
};
