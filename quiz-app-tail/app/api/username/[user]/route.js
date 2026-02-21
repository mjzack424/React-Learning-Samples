export async function GET(request, { params }) {
  const user = params.user;
  console.log(user);

  return new Response(`Hello world: The User ${user}`);
}
