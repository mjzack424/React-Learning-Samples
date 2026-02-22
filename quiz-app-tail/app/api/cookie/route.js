import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies(); // ← این مهمه
  const token = cookieStore.get("token");
  console.log(token);
  const tokenValue = token?.value ?? "No Token";

  return new Response(`Nextjs Token: ${tokenValue}`, {
    status: 200,
    headers: { "Set-Cookie": `token=${token}` },
  });
}
