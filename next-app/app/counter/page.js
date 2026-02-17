
import Count from "./count";

export const metadata = {
  title: {
    absolute: "counter page",
  },
};

const page = () => {
  return (
    <>
      <h2>شمارنده</h2>
      <Count />
    </>
  );
};

export default page;
