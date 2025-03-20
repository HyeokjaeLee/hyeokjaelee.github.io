export enum SELECTOR {
  ROOT = 'root',
  MAIN = 'main',
}

//! global.css와 동일한 값 유지
export enum MEDIA_QUERY_BREAKPOINT {
  XS = 480,
  SM = 640,
  MD = 768,
  LG = 1024,
  XL = 1280,
}

export type MediaQuery = keyof typeof MEDIA_QUERY_BREAKPOINT;
