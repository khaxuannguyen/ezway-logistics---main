export * from './components/TrackingForm';
export * from './components/TrackingResults';
export * from './hooks/useTracking';
export * from './types/tracking';
export * from './TrackingPage';
export default {
  async fetch(request: Request) {
    const url = new URL(request.url)
    const code = url.searchParams.get("code")

    if (!code) {
      return new Response(JSON.stringify({ error: "Missing code" }), {
        status: 400,
      })
    }

    const response = await fetch(
      `https://kango-post.com/api/get-tracking?code=${code}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "api-key": "cgS8S9ND8RqczJ7M98d27cUD6oouqgYN5apP1hWpYOMY8gyAUj"
        },
      }
    )

    const data = await response.json()

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    })
  },
}