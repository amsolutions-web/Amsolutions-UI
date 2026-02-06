import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ArchwayRedirect() {
  const router = useRouter();

  useEffect(() => {
    window.open(
      "https://docs.archway.io/validators/running-a-node/install",
      "_blank",
      "noopener,noreferrer"
    );
    router.replace("/");
  }, [router]);

  return null;
}
