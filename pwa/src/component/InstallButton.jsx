import { useEffect, useState } from "react";

const InstallButton = () => {
  const [deferedPromt, setDeferedPromt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferedPromt(e);
      setShowInstallButton(true);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);
  const handleInstallClick = () => {
    if (deferedPromt) {
      deferedPromt.prompt();
      deferedPromt.userChoice.then((result) => {
        if (result.outcome === "accepted") {
          console.log("use accepted install prompt");
        } else {
          console.log("user disnissed installed prompt");
        }
        setDeferedPromt(null);
        setShowInstallButton(false);
      });
    }
  };
  if (!showInstallButton) {
    return null;
  }
  return (
    <>
      <button
        className="install-button"
        style={{ margin: "1em" }}
        onClick={handleInstallClick}
      >
        نصب اپلیکیشن
      </button>
    </>
  );
};
export default InstallButton;
