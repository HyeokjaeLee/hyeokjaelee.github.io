// giscus (GitHub Discussions) config — replaces utterances.
//
// PREREQUISITES (owner, one time):
//   1. Install the giscus app: https://giscus.app -> "Sign in with GitHub"
//      (same model as the utterances app you already use).
//   2. Create a Discussions category of type "Announcements" (UI only):
//      https://github.com/HyeokjaeLee/hyeokjaelee.github.io/discussions
//      -> Categories -> New category -> name it (e.g. "Comments") -> Announcements.
//   3. Fill `category` + `categoryId` below. Get the category id via:
//        gh api graphql -f query='query{repository(owner:"Hyeokjaelee",name:"hyeokjaelee.github.io"){discussionCategories(first:10){nodes{id name}}}}'
//      or copy it from the https://giscus.app configurator.
//
// Until both are filled, Comment.tsx renders utterances (no downtime).

export const GISCUS_CONFIG = {
  repo: 'Hyeokjaelee/hyeokjaelee.github.io',
  repoId: 'MDEwOlJlcG9zaXRvcnkzNTA4NDE3Nzg=',
  // Fill after creating the Announcements category:
  category: 'Comments',
  categoryId: 'DIC_kwDOFOlrss4DCUFZ',
  mapping: 'url', // matches utterances issue-term:'url' (title = full page URL)
  reactionsEnabled: '1', // enables the reaction bar; the discussion's +1 is the "like"
  inputPosition: 'bottom',
  lang: 'ko',
  get isEnabled() {
    return Boolean(this.category && this.categoryId);
  },
};
