export async function GET() {
  const res = await fetch("https://json.xstack.ir/api/v1/posts", {
    next: { revalidate: 20 },
    method: "GET", //by default is get
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data } = await res.json(); // این همون pagination object ـه

  console.log(data);

  return Response.json({ data });
}
