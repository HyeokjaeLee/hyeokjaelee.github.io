import { SITE_META } from './site';

export const GITHUB_LIKE_CONFIG = {
  clientId: import.meta.env.PUBLIC_GH_LIKE_CLIENT_ID ?? '',
  proxyBaseUrl: import.meta.env.PUBLIC_GH_LIKE_PROXY_URL ?? '',
  scope: 'public_repo',
  repo: 'Hyeokjaelee/hyeokjaelee.github.io',
  label: 'comment',
  reaction: 'heart',
  get isEnabled() {
    return Boolean(this.clientId && this.proxyBaseUrl);
  },
} as const;

// MUST equal the title utterances writes for issue-term:'url'. VERIFIED against real issues:
//   buildIssueTerm('/briend/') === 'https://hyeokjaelee.github.io/briend/'
export const buildIssueTerm = (slug: string) =>
  SITE_META.siteUrl.replace(/\/$/, '') + slug;
