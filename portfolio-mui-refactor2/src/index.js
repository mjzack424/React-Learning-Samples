import { createRoot } from "react-dom/client";
import "./index.css";
import AppContainers from "./containers/AppContainers";

//React Slick Css Files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = createRoot(document.getElementById("root"));
root.render(<AppContainers />);
