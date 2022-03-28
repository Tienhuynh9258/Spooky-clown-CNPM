import React, { useState,useEffect,useRef } from "react";
import "../../styles/Home.css";
import axios from 'axios';
function changeLevel(name,level){
  setTimeout(() => {
    axios
    .post('http://127.0.0.1:5000/api/device/setLevel', {name:name,level:level}, {headers: {'Content-Type': 'application/json',},})
    .then((res) => {
      console.log("Success change")
    })
    .catch((err) => {
      alert(err);
    })
  }, 1000)
}


function Home(props) {
  const [data_soil,set_Soil]=useState("");
  const [data_temp,set_Temp]=useState("");
  const [data_sound,set_Sound]=useState("");
  const [data_light,set_Light]=useState("");
  const editSoil=useRef()
  const editTemp=useRef()
  const editSound=useRef()
  const edtiLight=useRef()
  const [auto, setAuto] = useState(false);
  
  // const [state, setState] = useState(true);
  const controlhandle = async () => {
    await axios.post('http://127.0.0.1:5000/api/handle/set', {status:!auto}, {headers: {'Content-Type': 'application/json',},})
    .then((res) => {
      if(res.data == 1 || res.data == 0)
        setAuto(res.data)
    })
    .catch((err) => {
      alert(err);
    }) 
  }

  useEffect(()=>{axios
  .post('http://127.0.0.1:5000/api/device', {name:"soil_sensor"}, {headers: {'Content-Type': 'application/json',},})
  .then((res) => {
    set_Soil(res.data[0]);
    set_Temp(res.data[1]);
    set_Sound(res.data[2]);
    set_Light(res.data[3]);
  })
  .catch((err) => {
    alert(err);
  });
  axios
  .post('http://127.0.0.1:5000/api/handle', {}, {headers: {'Content-Type': 'application/json',},})
  .then((res) => {
    if (res.data[0].status==0) setAuto(false)
    else setAuto(true)
  })
  .catch((err) => {
    alert(err);
  })  
 },[])
  const devices = [
    { id: 1, name: "Máy bơm", state: data_soil.status },
    { id: 2, name: "Máy phun sương", state: data_temp.status },
    { id: 3, name: "Máy quạt ", state: data_sound.status },
    { id: 4, name: "Bóng đèn", state: data_light.status },
  ];
  return (
    <div className="">
      <h1 className="font-bold text-xl text-violet-600" style={{ marginTop: "10px",color:"#875AB2" }}>Mức cho phép</h1>
      <div className="grid grid-cols-4 gap-4 mt-6" style={{marginLeft:"50px"}}>
        <div className="w-44 h-32 flex" >
          <p className="h-32 flex-1" style={{ backgroundColor: "#5048E5"}}>
            <img
              className="mx-auto"
              style={{ marginTop: "50%" }}
              src="https://img.icons8.com/ios-filled/344/ffffff/moisture.png" width="50px"
            />
          </p>
          <p className="h-32 flex-1 border-2  text-center">
            <span className="block py-6">ẨM ĐẤT</span>
            <span className="font-bold">
              <input ref={editSoil} className="font-bold"  type="text" value={data_soil.level}  style={{width:"25px"}} onChange={()=>{changeLevel("soil_sensor",editSoil.current.value);set_Soil(editSoil.current.value)}}/>
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
            <span className="font-bold">
            <input ref={editTemp} className="font-bold"  type="text" value={data_temp.level}  style={{width:"18px"}} onChange={()=>{changeLevel("temp_sensor",editTemp.current.value);set_Temp(editTemp.current.value)}}/>
            °C</span>
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
            <span className="font-bold">
            <input ref={editSound} className="font-bold"  type="text" value={data_sound.level}  style={{width:"18px"}} onChange={()=>{changeLevel("sound_sensor",editSound.current.value);set_Sound(editSound.current.value)}}/>
            DBA</span>
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
            <span className="font-bold">
            <input ref={edtiLight} className="font-bold"  type="text" value={data_light.level}  style={{width:"25px"}} onChange={()=>{changeLevel("light_sensor",edtiLight.current.value);set_Light(edtiLight.current.value)}}/>
            Lux</span>
          </p>
        </div>
      </div>

      <h1 className="font-bold text-xl text-violet-600 mt-11 mb-7" style={{ color:"#875AB2" }}>Chế độ</h1>
      <div onClick={controlhandle}>
        {auto === true ? (
          <button
            className="hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            style={{ backgroundColor: "#5FD855" }}
          >
            THỦ CÔNG
          </button>
        ) : (
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            TỰ ĐỘNG
          </button>
        )}

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
                  {devices.map((item, index) => (
                    <tr class="border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.id}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.name}
                      </td>
                      <td class="text-sm text-green-500 font-light px-6 py-4 whitespace-nowrap">
                        {item.state === "on" ? (
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
                                style={{backgroundColor:item.state==="on"?"#00f451":"red"}}
                                onClick={(e) => {
                                  if (item.state === "on") {
                                    item.state = "off";
                                    e.target.style.backgroundColor="red"
                                    axios
                                  .post('http://127.0.0.1:5000/api/device/setStatus', {name:item.id==1?"soil-moisture-sensor.bbc-button":item.id==2?"temp-sensor.bbc-button":item.id==3?"sound-sensor.bbc-button":"light-sensor.bbc-button",value:item.id==1?"0":item.id==2?"2":item.id==3?"4":"6"}, {headers: {'Content-Type': 'application/json',},})
                                  .then((res) => {
                                    console.log(res)
                                    // setAuto(!auto)
                                  })
                                  .catch((err) => {
                                    alert(err);
                                  })
                                  } else {
                                    item.state = "on";
                                    e.target.style.backgroundColor="#00f451"
                                    axios
                                    .post('http://127.0.0.1:5000/api/device/setStatus', {name:item.id==1?"soil-moisture-sensor.bbc-button":item.id==2?"temp-sensor.bbc-button":item.id==3?"sound-sensor.bbc-button":"light-sensor.bbc-button",value:item.id==1?"1":item.id==2?"3":item.id==3?"5":"7"}, {headers: {'Content-Type': 'application/json',},})
                                    .then((res) => {
                                      // console.log(res.data[0].status)
                                      // setAuto(!auto)
                                    })
                                    .catch((err) => {
                                      alert(err);
                                    })
                                  }

                                  // setState(!state);
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
