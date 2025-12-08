import {createPortal} from "react-dom";

const Portal = () => {
  return createPortal(
    <>
      <h2>Portal</h2>
      <p>React Portal Sample</p>
    </>
  , document.getElementById("portal-root"));
};
export default Portal;
