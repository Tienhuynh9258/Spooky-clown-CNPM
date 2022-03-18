import React, { useState } from "react";
import { Footer, Header,Sidebar,Temperature,Datepicker } from "../../components";
function TempPage(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Route */}
            <p className="font-bold py-2">Thời gian bật tắt dữ liệu</p>
            <Datepicker />
            <div className="my-10"></div>
            <Temperature />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default TempPage;