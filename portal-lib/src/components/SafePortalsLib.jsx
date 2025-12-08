import { Portal } from "react-portal";
import { useEffect, useState } from "react";

const SafePortalsLib = () => {
  const [root, setRoot] = useState(null);

  useEffect(() => {
    setRoot(document.getElementById("portal-root"));
  }, []);

  return (
    <>
      <Portal>
        <p>Safe Portal Inside Body</p>
      </Portal>

      {root && (
        <Portal node={root}>
          <p>Safe Portal Inside 'portal-root'</p>
        </Portal>
      )}
    </>
  );
};

export default SafePortalsLib;
