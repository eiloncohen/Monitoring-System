import { get_summary } from "../apiCalls"
import { useState,useEffect } from "react"
import { DataGrid } from '@mui/x-data-grid';
import "../components/css/section.css"



const SummaryData = props => {
  const [data,setData] = useState([])

  useEffect(()=>{
    const getErrors = async()=>{
        const res = await get_summary()
        console.log(res);
        let temp =[];
      await res.forEach(element => {
        temp.push({
          id: element.id,
          name: element.name,
          description: element.description,
          status: element.status,
          detect: msToTime(element.detect_time_end - element.detect_time_start),
          work: msToTime(element.work_time_end - element.work_time_start)
        })
      });
      console.log(temp);
      setData(temp)
      }
    getErrors();
  },[])

  const msToTime = (milli) => {
    var seconds = Math.floor((milli / 1000) % 60);
    var minutes = Math.floor((milli / (60 * 1000)) % 60);
    var hours = Math.floor((milli / (1000 * 60 * 60)) % 24)
    return formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds); 
  }

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
    },
    { field: "description", headerName: "Description", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "detect",
      headerName: "Time in Detect",
      width: 180,
    },
    {
      field: "work",
      headerName: "Time in Treatment",
      width: 200,
    },
  ];
  return (
    <>
        <div className="errList">
            <DataGrid
                rows={data}
                autoHeight={true}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
         </div>
    </>
)
}
export default SummaryData;