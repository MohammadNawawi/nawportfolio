import React from "react";
import Sidebar from "./layout/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-row bg-slate-500 text-white">
      <Sidebar />
      <main className="main -ml-48 flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0">
        {children}
      </main>
    </div>
  );
};

export default Layout;
