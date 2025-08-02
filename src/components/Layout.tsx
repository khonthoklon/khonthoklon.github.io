import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center px-4 sm:px-6 lg:px-8 pb-6">
        <div className="w-full max-w-7xl mx-auto">{children}</div>
      </main>
      <footer
        role="contentinfo"
        className="bg-white border-t py-4 text-center text-gray-500 text-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          © 2025 Khonthoklon Lab, NIT Manipur. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
