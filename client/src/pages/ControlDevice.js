import React, { useState } from "react";
import { Footer, Header,Sidebar,Home } from "../components";
function ControlDevice(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main style={{paddingLeft:"10px"}}>
          <Home/>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default ControlDevice;