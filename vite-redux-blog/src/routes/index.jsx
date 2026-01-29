import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
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
    ],
  },
]); //تمامی مسیر ها و کامپوننت هایی که باید نمایشد داده شود
