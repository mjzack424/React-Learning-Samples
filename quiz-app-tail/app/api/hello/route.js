//Export async function GET(request)  {}
//Export async function HEAD(request)  {}
//Export async function POST(request)  {}
//Export async function PUT(request)  {}
//Export async function PATCH(request)  {}
//Export async function DELETE(request)  {}
//Export async function OPTIONS(request)  {}

export async function GET(request) {
  console.log(request);
  return new Response("Hello World! : New API Route");
}
