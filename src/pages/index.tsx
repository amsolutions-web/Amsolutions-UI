import NetworksSection from "@/sections/networks";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("@/sections/about"), { ssr: false });

export default function Home() {
  return (
    <>
      <div id="home">
        <NoSSR />
        <NetworksSection />
      </div>
    </>
  );
}
