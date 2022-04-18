import React, { useState, useEffect } from "react";
import Info from "../../utils/Infor";
import RealtimeChart from "../../charts/realtimeChart";

// Import utilities
import { tailwindConfig, hexToRGB } from "../../utils/Utils";

export default function Enviroment({ unit }) {
  // IMPORTANT:
  // Code below is for demo purpose only, and it's not covered by support.
  // If you need to replace dummy data with real data,
  // refer to Chart.js documentation: https://www.chartjs.org/docs/latest
  
  // Fake real-time data
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [range, setRange] = useState(35);
  const [data,setData]=useState([])//nhớ sửa chuyển thành redux-toolkit
  const generateData = () => {
    const data = [];
    // res.forEach((ele) => {
    //   data.push(ele.val);
    // });
    return data;
  };
  const generateDates = () => {
    const now = new Date();
    const dates = [];
    // JSON.parse(res).forEach((ele) => {
    //   dates.push(new Date(now - 2000 - ele.time * 2000));
    // });
    return dates;
  };
  useEffect(()=>{
    // console.log(res);
    // setData(generateData())
  },[])
  const [slicedData, setSlicedData] = useState(data.slice(0, range));
  
  const [slicedLabels, setSlicedLabels] = useState(
    generateDates().slice(0, range).reverse()
  );
  // Fake update every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [counter]);

  // Loop through data array and update
  useEffect(() => {
    setIncrement(increment + 1);
    if (increment + range < data.length) {
      setSlicedData(([x, ...slicedData]) => [
        ...slicedData,
        data[increment + range],
      ]);
    } else {
      setIncrement(0);
      setRange(0);
    }
    setSlicedLabels(([x, ...slicedLabels]) => [...slicedLabels, new Date()]);
    return () => setIncrement(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  const chartData = {
    labels: slicedLabels,
    datasets: [
      // Indigo line
      {
        data: slicedData,
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.blue[500]
        )}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <RealtimeChart unit={unit} data={chartData} width={595} height={250} />
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800" style={{margin:"auto"}}>{unit=='%'?'Đồ thị biểu diễn độ ẩm': (unit=='°C'?'Đồ thị biểu diễn nhiệt độ':(unit=='DBA'?'Đồ thị biểu diễn cường độ âm':'Đồ thị biểu diễn cường độ ánh sáng'))}</h2>
      </header>
    </div>
  );
}
