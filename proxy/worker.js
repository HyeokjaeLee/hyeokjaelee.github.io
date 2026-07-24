// CORS proxy for the two GitHub OAuth token-exchange endpoints.
// Stateless: the browser supplies client_id in the body; no secrets live here.

const ALLOW_ORIGIN = { 'Access-Control-Allow-Origin': '*' };

// Map of proxied upstream paths -> full GitHub URL.
const UPSTREAMS = {
  '/login/device/code': 'https://github.com/login/device/code',
  '/login/oauth/access_token': 'https://github.com/login/oauth/access_token',
};

export default {
  async fetch(request) {
    const { method } = request;
    const path = new URL(request.url).pathname;

    // Handle CORS preflight.
    if (method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          ...ALLOW_ORIGIN,
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Accept',
        },
      });
    }

    // Resolve the upstream URL from the request path; 404 for anything else.
    const upstream = UPSTREAMS[path];
    if (!upstream) {
      return new Response('Not Found', { status: 404 });
    }

    // Forward the POST body to GitHub, copying Content-Type/Accept.
    if (method === 'POST') {
      const resp = await fetch(upstream, {
        method: 'POST',
        body: request.body,
        headers: {
          'Content-Type':
            request.headers.get('Content-Type') ?? 'application/json',
          Accept: request.headers.get('Accept') ?? 'application/json',
        },
      });
      // Return GitHub's response with permissive CORS layered on top.
      const text = await resp.text();
      return new Response(text, {
        status: resp.status,
        headers: {
          ...ALLOW_ORIGIN,
          'Content-Type':
            resp.headers.get('Content-Type') ?? 'application/json',
        },
      });
    }

    // Any other method on a known path is not allowed.
    return new Response('Not Found', { status: 404 });
  },
};
