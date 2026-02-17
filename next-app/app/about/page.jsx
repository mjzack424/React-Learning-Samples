// export const metadata = {
//   title: "about me",
// };

export async function generateMetadata({ params, searchParams }) {
  const resolvedSearchParams = await searchParams;

  return {
    title: resolvedSearchParams?.name || "درباره ما",
  };
}

const About = () => {
  return (
    <div>
      <h1>درباره ما</h1>
    </div>
  );
};

export default About;
