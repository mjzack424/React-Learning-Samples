import Link from "next/link";

async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
}

export default async function Home() {
  await wait();

  return (
    <main>
      <div className="container">
        <h1>اپلیکیشن Quiz</h1>
        <Link href={"/quiz"}>
          <button>شروع آزمون</button>
        </Link>
      </div>
    </main>
  );
}
