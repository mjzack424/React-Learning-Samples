import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>سلام چی شد؟!</h1>
      <Link href={"/about"} prefetch>
        درباره من
      </Link>
      <br />
      <Link
        href={{
          pathname: "/about",
          query: { name: "zack" },
        }}
      >
        ممد برو
      </Link>
      <br />
      <Link href={"/about"} replace>
        درباره من-بدون برگشت!
      </Link>
    </main>
  );
}
