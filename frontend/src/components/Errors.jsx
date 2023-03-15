import { useState } from "react";
import ErrorItem from "./ErrorItem";
import "./css/errors.css"
import styled from "styled-components";

const Card = styled.div`
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    background-color: white;
`;


const Errors = (props) => {
    return (
      <section className={"errors"}>
        <Card>
            <ul>
                {
                props.errors.map(err => {
                    return <ErrorItem key={err.id} name={err.name} description={err.description} time={err.time}/>
                    })
                }
            </ul>
        </Card>
    </section> 
    )
}

export default Errors; 