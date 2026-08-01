import routes from './routes.json';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Check if the requested path exists in our JSON redirect map
    if (routes[path]) {
      return Response.redirect(routes[path], 308);
    }

    // Fallback: If not a redirect path, serve the regular static assets of your site
    return env.ASSETS.fetch(request);
  }
};