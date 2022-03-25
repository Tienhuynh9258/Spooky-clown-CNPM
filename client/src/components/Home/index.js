import React, { useState,useEffect } from "react";
import "../../styles/Home.css";
import axios from 'axios';
function Home(props) {
  const [data_soil,set_Soil]=useState("");
  const [data_temp,set_Temp]=useState("");
  const [data_sound,set_Sound]=useState("");
  const [data_light,set_Light]=useState("");
  useEffect(()=>axios
  .post('http://127.0.0.1:5000/api/device', {name:"soil_sensor"}, {headers: {'Content-Type': 'application/json',},})
  .then((res) => {
    set_Soil(res.data[0]);
    set_Temp(res.data[1]);
    set_Sound(res.data[2]);
    set_Light(res.data[3]);
  })
  .catch((err) => {
    alert(err);
  }),[])
  
  return (
    <div className="">
      <h1 className="font-bold text-xl text-violet-600" style={{ marginTop: "10px",color:"#875AB2" }}>Mức cho phép</h1>
      <div className="grid grid-cols-4 gap-4 mt-6">
        <div className="w-44 h-32 flex">
          <p className="h-32 flex-1" style={{ backgroundColor: "#5048E5" }}>
            <img
              className="mx-auto"
              style={{ marginTop: "50%" }}
              src="https://img.icons8.com/ios-filled/344/ffffff/moisture.png" width="50px"
            />
          </p>
          <p className="h-32 flex-1 border-2  text-center">
            <span className="block py-6">ẨM ĐẤT</span>
            <span className="font-bold">
              {/* <input value={data_soil.level}></input> */}
              {data_soil.level}
            %</span>
          </p>
        </div>
        <div className="w-44 h-32 flex">
          <p className="h-32 flex-1" style={{ backgroundColor: "#FF6F06" }}>
            <img
              className="mx-auto"
              style={{ marginTop: "50%" }}
              src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/344/ffffff/external-temperature-summer-flatart-icons-solid-flatarticons.png" width="50px"
            />
          </p>
          <p className="h-32 flex-1 border-2 text-center">
            <span className="block py-6">NHIỆT ĐỘ</span>
            <span className="font-bold">{data_temp.level}°C</span>
          </p>
        </div>
        <div className="w-44 h-32 flex">
          <p className="h-32 flex-1" style={{ backgroundColor: "#18BE0A" }}>
            <img
              className="mx-auto"
              style={{ marginTop: "50%" }}
              src="https://img.icons8.com/glyph-neue/344/ffffff/room-sound.png" width="50px"
            />
          </p>
          <p className="h-32 flex-1 border-2 text-center">
            <span className="block py-6">ÂM LƯỢNG</span>
            <span className="font-bold">{data_sound.level}DBA</span>
          </p>
        </div>
        <div className="w-44 h-32 flex">
          <p className="h-32 flex-1" style={{ backgroundColor: "#AF09BD" }}>
            <img
              className="mx-auto"
              style={{ marginTop: "50%" }}
              src="https://img.icons8.com/pastel-glyph/344/ffffff/sun--v2.png" width="50px"
            />
          </p>
          <p className="h-32 flex-1 border-2 text-center">
            <span className="block py-6">ÁNH SÁNG</span>
            <span className="font-bold">{data_light.level}Lux</span>
          </p>
        </div>
      </div>
      <h1 className="font-bold text-xl text-violet-600 mt-11 mb-6" style={{ color:"#875AB2" }}>Chế độ</h1>
      <div>
        <button
          className="hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          style={{ backgroundColor: "#5FD855" }}
        >
          THỦ CÔNG
        </button>
      </div>
      <h1 className="font-bold text-xl text-violet-600 my-8" style={{marginBottom:"0px",color:"#875AB2"}}>Các thiết bị</h1>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-semibold text-gray-900 px-6 py-4 text-left"
                    >
                      Số thứ tự
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-semibold text-gray-900 px-6 py-4 text-left"
                    >
                      Tên thiết bị
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-semibold text-gray-900 px-6 py-4 text-left"
                    >
                      Trạng thái
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-semibold text-gray-900 px-6 py-4 text-left"
                    >
                      Bật/Tắt thiết bị
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      1
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Máy bơm
                    </td>
                    {data_soil.status=="on"?
                     <td class="text-sm text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      Đang bật
                      </td>:
                      <td class="text-sm text-red-500 font-light px-6 py-4 whitespace-nowrap">
                      Đang tắt
                      </td>
                    }
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <label
                        for="check"
                        class="bg-gray-100 cursor-pointer relative w-20 h-10 rounded-full"
                      >
                        <input
                          type="checkbox"
                          id="check"
                          class="sr-only peer"
                        />
                        <span
                          class="w-2/5 h-4/5 bg-red-500 absolute rounded-full left-1 top-1 peer-checked:bg-green-300 peer-checked:left-11
                        transition-all duration-500"
                        ></span>
                      </label>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      2
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Máy phun sương
                    </td>
                    {data_temp.status=="on"?
                     <td class="text-sm text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      Đang bật
                      </td>:
                      <td class="text-sm text-red-500 font-light px-6 py-4 whitespace-nowrap">
                      Đang tắt
                      </td>
                    }
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <label
                        for="check"
                        class="bg-gray-100 cursor-pointer relative w-20 h-10 rounded-full"
                      >
                        <input
                          type="checkbox"
                          id="check"
                          class="sr-only peer"
                        />
                        <span
                          class="w-2/5 h-4/5 bg-red-500 absolute rounded-full left-1 top-1 peer-checked:bg-green-300 peer-checked:left-11
                        transition-all duration-500"
                        ></span>
                      </label>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      3
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Máy quạt
                    </td>
                    {data_sound.status=="on"?
                     <td class="text-sm text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      Đang bật
                      </td>:
                      <td class="text-sm text-red-500 font-light px-6 py-4 whitespace-nowrap">
                      Đang tắt
                      </td>
                    }
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <label
                        for="check"
                        class="bg-gray-100 cursor-pointer relative w-20 h-10 rounded-full"
                      >
                        <input
                          type="checkbox"
                          id="check"
                          class="sr-only peer"
                        />
                        <span
                          class="w-2/5 h-4/5 bg-red-500 absolute rounded-full left-1 top-1 peer-checked:bg-green-300 peer-checked:left-11
                        transition-all duration-500"
                        ></span>
                      </label>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      4
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Bóng đèn
                    </td>
                    {data_light.status=="on"?
                     <td class="text-sm text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      Đang bật
                      </td>:
                      <td class="text-sm text-red-500 font-light px-6 py-4 whitespace-nowrap">
                      Đang tắt
                      </td>
                    }
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <label
                        for="check"
                        class="bg-gray-100 cursor-pointer relative w-20 h-10 rounded-full"
                      >
                        <input
                          type="checkbox"
                          id="check"
                          class="sr-only peer"
                        />
                        <span
                          class="w-2/5 h-4/5 bg-red-500 absolute rounded-full left-1 top-1 peer-checked:bg-green-300 peer-checked:left-11
                        transition-all duration-500"
                        ></span>
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
