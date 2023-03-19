
import { useState } from "react";
import SummaryData from "../components/SummaryData";
import SummaryNavbar from "../components/SummaryNavbar";


const Summary = () => {

    const [startDate,setStartDate] = useState(new Date())
    const [endDate,setEndDate] = useState(new Date())
  
    const onSubmitDate = () => {
        console.log("start date : " + startDate + "\tend date : "+endDate);
    }
    return (
    <>
      <SummaryNavbar start={startDate} end={endDate} startfunc={setStartDate} endfunc={setEndDate} submit={onSubmitDate}/>
      <SummaryData />
    </>
)}
export default Summary;