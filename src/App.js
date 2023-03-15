import React, {useState} from "react";
import Detect from "./components/Layout/Detect";
import Header from "./components/Layout/Header";
// import { DUMMY_ERRORS } from "./components/Errors/AvilableErrors";
function App() 
{
  const [DUMMY_ERRORS, setDUMMYERRORS] = useState([
    {
      id: 'm1',
      name: 'CH1_RAFTOR_56',
      description: 'Ping Down',
      time: 5,
    },
    {
      id: 'm2',
      name: 'CH1_RAFTOR_78',
      description: 'link not in dispatch',
      time: 5,
    },
    {
      id: 'm3',
      name: 'CH1_RAFTOR_34',
      description: 'Link GPS Out Of Sync',
      time: 5,
    },
    {
      id: 'm4',
      name: 'CH2_RAFTOR_34',
      description: 'NLM Link Is Down',
      time: 5,
    },
   ]);
  const [errorListInTreatment, setErrorsList] = useState([]);
  const [errorListInFinish, setErrorsFinishedList] = useState([]);
 

const addToDetectedListErrorHandler = (errorName, errorDescription, errorTime) => {
  setDUMMYERRORS((prevUsersList) => {
    return [...prevUsersList, {name: errorName, description: errorDescription, time: errorTime ,id: Math.random().toString()}];
  })
  console.log(DUMMY_ERRORS)
}

const deleteFromDectedErrorHandler = errorId => {
  setDUMMYERRORS(DUMMY_ERRORS.filter(element => element.id !== errorId));
  console.log(DUMMY_ERRORS)
};


const addToTreatmentListErrorHandler = (errorName, errorDescription, errorTime, errorid) => {
  console.log(errorListInTreatment)
    setErrorsList((prevUsersList) => {
      return [...prevUsersList, {name: errorName, description: errorDescription, time: errorTime ,id: errorid}];
    })
}

const deleteFromTreatmentErrorHandler = errorId => {
  setErrorsList(errorListInTreatment.filter(element => element.id !== errorId));
  console.log(errorListInTreatment)
};

const addErrorFinishHandler = (errorName, errorDescription, errorTime, id) => {
  setErrorsFinishedList((prevUsersList) => {
      return [...prevUsersList, {name: errorName, description: errorDescription, time: errorTime ,errorid: id}];
    })
}

const deleteFromFinishErrorHandler = errorId => {
  setErrorsFinishedList(errorListInFinish.filter(element => element.id !== errorId));
  console.log(errorListInFinish)
};


  return (
    <>
    <Header color={'#A459D1'}/>
    <Detect color={'#E9A178'} id={1} errorListInTreatment={errorListInTreatment} errorList={DUMMY_ERRORS} errorFinishedList={errorListInFinish}  
    addErrorHandler={addToTreatmentListErrorHandler} addErrorFinishHandler={addErrorFinishHandler} addDetectedError={addToDetectedListErrorHandler}
    deleteError={deleteFromDectedErrorHandler} deleteFromTreatmentListError={deleteFromTreatmentErrorHandler} deleteFromFinishListError={deleteFromFinishErrorHandler}/>
    <Detect color={'#F7C04A'} id={2} errorListInTreatment={errorListInTreatment} errorList={DUMMY_ERRORS} errorFinishedList={errorListInFinish} 
    addErrorHandler={addToTreatmentListErrorHandler} addErrorFinishHandler={addErrorFinishHandler} addDetectedError={addToDetectedListErrorHandler}
    deleteError={deleteFromDectedErrorHandler} deleteFromTreatmentListError={deleteFromTreatmentErrorHandler} deleteFromFinishListError={deleteFromFinishErrorHandler}/>
    <Detect color={'#609966'} id={3} errorListInTreatment={errorListInTreatment} errorList={DUMMY_ERRORS} errorFinishedList={errorListInFinish} 
    addErrorHandler={addToTreatmentListErrorHandler} addErrorFinishHandler={addErrorFinishHandler} addDetectedError={addToDetectedListErrorHandler}
    deleteError={deleteFromDectedErrorHandler} deleteFromTreatmentListError={deleteFromTreatmentErrorHandler} deleteFromFinishListError={deleteFromFinishErrorHandler}/>
    </>
  );
}

export default App;
