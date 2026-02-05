import { useEffect } from "react";

export default function ArchwayRedirect() {
  useEffect(() => {
    window.open(
      "https://docs.archway.io/validators/running-a-node/install",
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  return null;
}

