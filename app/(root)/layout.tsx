import React, { ReactNode } from "react";
import layout from "../layout";
import Navbar from "@/components/navigation/navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
