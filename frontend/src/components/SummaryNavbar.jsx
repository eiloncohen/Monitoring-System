
import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./css/summaryNavbar.css"
import { useState,useEffect } from "react";



const Container = styled.div`
  background-color: black;
  padding: 10px;
  text-align: center;
  height: 120px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  align-content: space-between;
  flex-direction: row;
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`;

const Left = styled.div`
  flex: 1
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  display: flex;
  padding: 0px 10px;
  
  width: 200px;
  height: 50px;
  object-fit: cover;
`;

const Center = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex: 3;
  text-align: center;
  padding:10%;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: white;
 
`;
const Right = styled.div`
  flex:1;
  display: flex;
  margin-right: 10%;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  
`;


const Button = styled.button`
  color: #fff;
  box-shadow: 0 0 40px 40px black inset, 0 0 0 0 black;
  transition: all 150ms ease-in-out;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid;
  border-color: #1d958d;
  border-radius: 0.6em;
  color: white;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-weight: 700;
`

const SummaryNavbar = (props) => {
 
  return (
    <Container>
        <Center>
            <DateWrapper>
            <div style={{"color":"white","display":"inline-block","whiteSpace":"nowrap","margin":"15px"}}><b>From Date : </b></div>
            <ReactDatePicker selected={props.start} onChange={(date)=>props.startfunc(date)} dateFormat="dd/MM/yyyy" ></ReactDatePicker>
            </DateWrapper>
            <DateWrapper>
            <div style={{"color":"white","display":"inline-block","whiteSpace":"nowrap","margin":"15px"}}><b>To Date : </b></div>
            <ReactDatePicker selected={props.end} onChange={(date)=>props.endfunc(date)} dateFormat="dd/MM/yyyy" ></ReactDatePicker>
            </DateWrapper>
        </Center>
        <Right>
        <Button onClick={props.submit} style={{"alignSelf":"inherit"}}>Submit</Button>
        </Right>
        
    </Container>
  );
};

export default SummaryNavbar;