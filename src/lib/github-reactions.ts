import { GITHUB_LIKE_CONFIG } from '@constants/github';

const API_BASE = 'https://api.github.com';

export class GithubApiError extends Error {
  status: number;

  constructor(status: number, message?: string) {
    super(message ?? `GitHub API error: ${status}`);
    this.name = 'GithubApiError';
    this.status = status;
  }
}

function buildHeaders(token?: string): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

export interface Reaction {
  id: number;
  user: { login: string };
}

export async function findIssueNumber(
  term: string,
  token?: string,
): Promise<number | null> {
  const { repo } = GITHUB_LIKE_CONFIG;
  const q = `"${term}" type:issue in:title repo:${repo}`;
  const response = await fetch(
    `${API_BASE}/search/issues?q=${encodeURIComponent(q)}`,
    { headers: buildHeaders(token) },
  );

  if (!response.ok) {
    throw new GithubApiError(response.status);
  }

  const data = (await response.json()) as { items?: { number: number }[] };

  return data.items?.[0]?.number ?? null;
}

interface EnsureIssueParams {
  term: string;
  title: string;
  description: string;
  url: string;
}

export async function ensureIssue(
  { term, title, description, url }: EnsureIssueParams,
  token: string,
): Promise<number> {
  const existing = await findIssueNumber(term, token);

  if (existing) {
    return existing;
  }

  const { repo, label } = GITHUB_LIKE_CONFIG;
  const response = await fetch(`${API_BASE}/repos/${repo}/issues`, {
    method: 'POST',
    headers: buildHeaders(token),
    body: JSON.stringify({
      title: term,
      body: `# ${title}\n\n${description}\n\n[${url}](${url})`,
      labels: [label],
    }),
  });

  if (!response.ok) {
    throw new GithubApiError(response.status);
  }

  const data = (await response.json()) as { number: number };

  return data.number;
}

export async function listHeartReactions(
  issueNumber: number,
  token: string,
): Promise<Reaction[]> {
  const { repo } = GITHUB_LIKE_CONFIG;
  const response = await fetch(
    `${API_BASE}/repos/${repo}/issues/${issueNumber}/reactions?content=heart`,
    { headers: buildHeaders(token) },
  );

  if (!response.ok) {
    throw new GithubApiError(response.status);
  }

  const data = (await response.json()) as Reaction[];

  return Array.isArray(data) ? data : [];
}

export async function createHeartReaction(
  issueNumber: number,
  token: string,
): Promise<{ id: number; status: number }> {
  const { repo } = GITHUB_LIKE_CONFIG;
  const response = await fetch(
    `${API_BASE}/repos/${repo}/issues/${issueNumber}/reactions`,
    {
      method: 'POST',
      headers: buildHeaders(token),
      body: JSON.stringify({ content: 'heart' }),
    },
  );

  if (!response.ok) {
    throw new GithubApiError(response.status);
  }

  const data = (await response.json()) as { id: number };

  return { id: data.id, status: response.status };
}

export async function deleteHeartReaction(
  issueNumber: number,
  reactionId: number,
  token: string,
): Promise<void> {
  const { repo } = GITHUB_LIKE_CONFIG;
  const response = await fetch(
    `${API_BASE}/repos/${repo}/issues/${issueNumber}/reactions/${reactionId}`,
    {
      method: 'DELETE',
      headers: buildHeaders(token),
    },
  );

  if (response.status !== 204) {
    throw new GithubApiError(response.status);
  }
}
