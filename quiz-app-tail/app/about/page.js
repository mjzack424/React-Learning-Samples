import Image from "next/image";
import Link from "next/link";

export default async function About() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  const photo =
    "https://pishkesvatan.net/fa/wp-content/uploads/2020/08/%D8%AF%D8%B1%DB%8C%D8%A7%D9%81%D8%AA-%D9%88%D8%A7%D9%85-%D8%A8%D8%A7-%D9%85%D8%AF%D8%B1%DA%A9-%D9%81%D9%86%DB%8C-%D9%88-%D8%AD%D8%B1%D9%81%D9%87-%D8%A7%DB%8C-scaled-1-1024x300.jpg";

  return (
    <main className="p-5 mt-2 bg-gray-50 dark:bg-gray-800 shadow-lg dark:shadow-dark rounded mx-auto w-7/12 ">
      <div>
        <div className="text-gray-300  text-center mb-5">
          <h1 className="text-lg">محمد جواد ذاکریان</h1>
          <h2>برنامه نویس و مدرس</h2>
        </div>
        <Link href={`/about/photo`}>
          <Image
            alt=""
            src={photo}
            height={400}
            width={400}
            className="mx-auto rounded object-cover aspect-square"
          />
        </Link>
      </div>
    </main>
  );
}
