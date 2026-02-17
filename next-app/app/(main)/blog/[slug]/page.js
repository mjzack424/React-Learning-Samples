export async function generateMetadata({ params, searchParams }) {
  const resolvedSearchParams = await params;

  return {
    title: resolvedSearchParams?.slug || "جدید",
  };
}

const Blog = async ({ params }) => {
  const newPar = await params;
  console.log(newPar);
  return (
    <div>
      <h2>وبلاگ</h2>
      <h3>
        مقاله
        {" "}
        {newPar.slug}
      </h3>
    </div>
  );
};

export default Blog;
