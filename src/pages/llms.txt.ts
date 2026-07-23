import type { APIRoute } from 'astro';

import { SITE_META } from '../constants/site';
import { getAllPosts } from '../utils/posts';

// https://llmstxt.org/ — machine-readable Markdown summary for LLMs/agents.
export const GET: APIRoute = async () => {
  const posts = await getAllPosts();
  const base = SITE_META.siteUrl.replace(/\/$/, '');

  const lines = [
    `# ${SITE_META.title}`,
    '',
    `> ${SITE_META.description} 프론트엔드 엔지니어 이혁재(HyeokjaeLee)의 기술 블로그로, 프론트엔드 개발·컴포넌트 설계·개발 환경(DX)·트러블슈팅·디지털 노마드 경험을 다룹니다.`,
    '',
    '## Blog',
    ...posts.map(
      (post) => `- [${post.title}](${base}${post.slug}): ${post.description}`,
    ),
    '',
    '## Pages',
    `- [About](${base}/about/): 저자 소개`,
    `- [Portfolio](${base}/portfolio/): 포트폴리오 및 작업 경험`,
    '',
    '## Optional',
    `- [llms-full.txt](${base}/llms-full.txt): 모든 블로그 글의 본문을 하나의 마크다운 파일로 정리`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
};
