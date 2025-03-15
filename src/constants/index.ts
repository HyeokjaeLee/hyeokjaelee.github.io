export enum SCREEN_BREAKPOINTS {
  PHONE_MAX = 767,
  TABLET_MIN = 768,
  TABLET_MAX = 1023,
}

export enum SELECTOR {
  MAIN = 'main',
}

export enum LOCAL_STORAGE_KEY {
  DARK_MODE = 'dark-mode',
  LIKE_POST_LIST = 'like-post-list',
}

export enum SESSION_STORAGE_KEY {
  WELCOME_TOAST = 'welcome-toast',
}

export const IS_TOUCH_DEVICE =
  (typeof window !== 'undefined' && 'ontouchstart' in window) ||
  0 < navigator.maxTouchPoints;

export const IS_DEV = process.env.NODE_ENV === 'development';
export const BASE_URL = IS_DEV
  ? 'http://localhost:8000'
  : 'https://hyeokjaelee.github.io';
