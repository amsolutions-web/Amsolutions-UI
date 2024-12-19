import React from "react";
import Sidebar from "@/components/layouts/sidebar";

export const SidebarLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default SidebarLayout;
