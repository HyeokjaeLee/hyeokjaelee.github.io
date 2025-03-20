export const IS_DEV = process.env.NODE_ENV === 'development';

export const IS_CLIENT = typeof window !== 'undefined';
export const BASE_URL = IS_DEV
  ? 'http://localhost:8000'
  : 'https://hyeokjaelee.github.io';

export enum EXTERNAL_LINKS {
  GITHUB = 'https://github.com/HyeokjaeLee',
}
