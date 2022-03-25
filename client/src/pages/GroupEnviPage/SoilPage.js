import React, { useState } from "react";
import {
  Footer,
  Header,
  Sidebar,
  Temperature,
  Datepicker,
} from "../../components";
import GaugeChart from "react-gauge-chart";

function SoilPage(props) {
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
            <div className="grid grid-cols-4">
              <GaugeChart
                id="gauge-chart1"
                nrOfLevels={3}
                arcWidth={0.2}
                animate={false}
                percent={0.38}
                formatTextValue={(value) => value + "°C"}
                textColor="#000"
              />
              <div></div>
              <div></div>
              <div className="mx-auto my-auto">
                <p className="font-bold py-2">Thời gian bật tắt dữ liệu</p>
                <Datepicker />
              </div>
            </div>
            <div className="my-10"></div>
            <Temperature />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default SoilPage;
