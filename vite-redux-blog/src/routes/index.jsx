import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import SingleBlog from "../components/SingleBlog.jsx";
import CreateBlog from "../components/createBlog.jsx";
import EditBlog from "../components/EditBlog.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h3 className="text-center">صفحه مورد نظر یافت نشد!😔</h3>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/blogs/create-blog",
        element: <CreateBlog />,
      },
      {
        path: "/blogs/:blogid",
        element: <SingleBlog />,
      },
      {
        path: "/EditBlog/:blogid",
        element: <EditBlog />,
      },
    ],
  },
]); //تمامی مسیر ها و کامپوننت هایی که باید نمایشد داده شود
