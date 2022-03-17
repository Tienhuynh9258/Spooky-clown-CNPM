import React, { useEffect, useState } from "react";
import { Footer, Header, Home } from "../components";
import store from "../redux/store";
import { loadUser } from "../redux/auth/authSlice";
import Sidebar from "../components/Header/Sidebar";
import Temperature from "../components/Enviroment/Temperature";
import Datepicker from "../components/Date/Datepicker";
function HomePage(props) {
  useEffect(() => store.dispatch(loadUser()), []);
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

export default HomePage;
