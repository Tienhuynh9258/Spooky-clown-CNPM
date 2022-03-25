import React, { useState } from "react";
import {
  Footer,
  Header,
  Sidebar,
  Temperature,
} from "../../components";
import GaugeChart from "react-gauge-chart";
import DateTimePicker from '@mui/lab/DateTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function createData(
  name,
  value,
) {
  return { name, value};
}
function LightPage(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [valueStart, setValueStart] = useState(new Date());
  const [valueEnd, setValueEnd] = useState(new Date());
  const rows = [
    createData('Max value', 200),
    createData('Min value', 130),
    createData('Average value', 150),
  ];
  
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
            <div className="grid grid-cols-3">
              <div>
              <GaugeChart
                id="gauge-chart1"
                nrOfLevels={3}
                arcWidth={0.2}
                animate={false}
                percent={0.8}
                formatTextValue={(value) => value + "°C"}
                textColor="#000"
              />
              <p className="font-bold py-2" style={{marginLeft:"70px"}}>Biểu đồ Gauge cho giá trị trung bình</p>
              </div>              
              <div style={{paddingLeft:"15px",height:"200px"}}>
                <p className="font-bold py-2" style={{marginBottom:"15px"}}>Thời gian bật tắt dữ liệu</p>
                {/* <Datepicker /> */}
                <div style={{marginBottom:"15px"}}>
                <LocalizationProvider dateAdapter={AdapterDateFns} >
                  <DateTimePicker 
                    renderInput={(props) => <TextField {...props} />}
                    label="DateTime_Start"
                    value={valueStart}
                    onChange={(newValue) => {
                      setValueStart(newValue);
                    }}
                  />
                </LocalizationProvider>
                </div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="DateTime_End"
                    value={valueEnd}
                    onChange={(newValue) => {
                      setValueEnd(newValue);
                    }}
                  />
                </LocalizationProvider>
              </div>
              <div>
              <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell style={{fontWeight:"bold"}}>LIGHT SENSOR</TableCell>
            <TableCell style={{fontWeight:"bold"}} align="right">VALUE</TableCell>
            <TableCell style={{fontWeight:"bold"}} align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
              <TableCell align="right">{}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <p className="font-bold py-2" style={{marginLeft:"70px"}}> Bảng thống kê cho giá trị của sensor</p>
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

export default LightPage;
