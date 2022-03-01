import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Topbar />
      <div className="container">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
