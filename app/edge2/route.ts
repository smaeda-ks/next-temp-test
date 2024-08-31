export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET() {
  const response = await fetch("https://httpbin.org/anything", {
    cache: "no-store",
  });

  return new Response(response.body, {
    headers: {
      "cache-control": "private, no-store, max-age=0",
    },
  });
}
