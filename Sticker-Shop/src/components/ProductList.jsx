import ProductCard from "./ProductCard";
import { useGetAllProductsQuery } from "../slices/productApi";

const ProductList = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery();

  // شبیه‌سازی status
  const status = isLoading ? "pending" : isError ? "failed" : "success";

  return (
    <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {status === "success" ? (
        <>
          {data?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </>
      ) : status === "pending" ? (
        <p>در حال بارگذاری...</p>
      ) : (
        <p>مشکلی پیش آمده...</p>
      )}
    </div>
  );
};

export default ProductList;


// import { useSelector } from "react-redux";
// import ProductCard from "./ProductCard";
// import { useGetAllProductsQuery } from "../slices/productApi";
// const ProductList = () => {
//   const { status } = useSelector((state) => state.products);
//   const { data } = useGetAllProductsQuery();
//   return (
//     <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
//       {status === "success" ? (
//         <>
//           {data?.map((product, index) => (
//             <ProductCard key={index} product={product} />
//           ))}
//         </>
//       ) : status === "pending" ? (
//         <p>در حال بارگذاری</p>
//       ) : (
//         <p>مشکلی پیش آمده...</p>
//       )}
//     </div>
//   );
// };

// export default ProductList;

