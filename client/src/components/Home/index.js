import React, { useState } from "react";
import "../../styles/Home.css";
const devices = [
  { id: 1, name: "Máy bơm", state: "active" },
  { id: 2, name: "Máy phun sương", state: "active" },
  { id: 3, name: "Máy quạt ", state: "active" },
  { id: 4, name: "Bóng đèn", state: "active" },
];
function Home(props) {
  const [auto, setAuto] = useState(false);
  const [state, setState] = useState(true);
  return (
    <div className="">
      <h1 className="font-bold text-xl text-violet-600">Mức cho phép</h1>
      <div className="grid grid-cols-4 gap-4 mt-6">
        <div className="w-44 h-32 flex">
          <p className="h-32 flex-1" style={{ backgroundColor: "#5048E5" }}>
            <img
              className="mx-auto"
              style={{ marginTop: "50%" }}
              src="https://img.icons8.com/doodle/48/000000/soil.png"
            />
          </p>
          <p className="h-32 flex-1 border-2 border-black text-center">
            <span className="block py-6">ẨM ĐẤT</span>
            <span className="font-bold">36%</span>
          </p>
        </div>
        <div className="w-44 h-32 flex">
          <p className="h-32 flex-1" style={{ backgroundColor: "#18BE0A" }}>
            <img
              className="mx-auto"
              style={{ marginTop: "50%" }}
              src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sound-filmmaking-flaticons-flat-flat-icons.png"
            />
          </p>
          <p className="h-32 flex-1 border-2 border-black text-center">
            <span className="block py-6">ÂM LƯỢNG</span>
            <span className="font-bold">36%</span>
          </p>
        </div>
        <div className="w-44 h-32 flex">
          <p className="h-32 flex-1" style={{ backgroundColor: "#FF6F06" }}>
            <img
              className="mx-auto"
              style={{ marginTop: "50%" }}
              src="https://img.icons8.com/external-kosonicon-flat-kosonicon/64/000000/external-high-temperatures-temperature-kosonicon-flat-kosonicon-2.png"
            />
          </p>
          <p className="h-32 flex-1 border-2 border-black text-center">
            <span className="block py-6">Nhiệt Độ</span>
            <span className="font-bold">36%</span>
          </p>
        </div>
        <div className="w-44 h-32 flex">
          <p className="h-32 flex-1" style={{ backgroundColor: "#AF09BD" }}>
            <img
              className="mx-auto"
              style={{ marginTop: "50%" }}
              src="https://img.icons8.com/doodle/48/000000/sun--v1.png"
            />
          </p>
          <p className="h-32 flex-1 border-2 border-black text-center">
            <span className="block py-6">Ánh Sáng</span>
            <span className="font-bold">36%</span>
          </p>
        </div>
      </div>
      <h1 className="font-bold text-xl text-violet-600 mt-11 mb-7">Chế độ</h1>
      <div onClick={() => setAuto(!auto)}>
        {auto === true ? (
          <button
            className="hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            style={{ backgroundColor: "#5FD855" }}
          >
            THỦ CÔNG
          </button>
        ) : (
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Tự động
          </button>
        )}
      </div>
      <h1 className="font-bold text-xl text-violet-600 my-8">Các thiết bị</h1>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Số thứ tự
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Tên thiết bị
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Trạng thái
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Bật/Tắt thiết bị
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {devices.map((item, index) => (
                    <tr class="border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.id}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.name}
                      </td>
                      <td class="text-sm text-green-500 font-light px-6 py-4 whitespace-nowrap">
                        {item.state === "active" ? (
                          "Đang bật"
                        ) : (
                          <p class="text-red-500">Đang tắt</p>
                        )}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {auto === false ? (
                          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            Tự động
                          </button>
                        ) : (
                          <div className="">
                            <label htmlFor="toggle-switch">
                              <input
                                type="checkbox"
                                id="toggle-switch"
                                className="cursor-pointer h-10 w-20 rounded-full appearance-none bg-red-500 bg-opacity-4 border-2 border-gray-500 checked:bg-neon transiton duration-200 relative"
                                onClick={() => {
                                  if (item.state === "active") {
                                    item.state = "disabled";
                                  } else {
                                    item.state = "active";
                                  }

                                  setState(!state);
                                }}
                              />
                            </label>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
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
