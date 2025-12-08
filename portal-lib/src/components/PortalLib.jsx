import { Portal } from "react-portal";

const PortalLib = () => {
  return (
    <>
      <Portal>
        <p>Portal Inside Body</p>
      </Portal>
      <Portal node={document.getElementById("portal-root")}>
        <p>Portal Inside 'portal-root'</p>
      </Portal>
    </>
  );
};

export default PortalLib;
