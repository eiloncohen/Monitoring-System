import "./css/section.css"
import ErrorItem from "./ErrorItem"
import styled from "styled-components";


const Card = styled.div`
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    background-color: white;
`;

// class timer {
//     constructor() {
//         this.seconds = 0
//         this.remainingSeconds = 0
//         this.minutes = 0
//         this.hours = 0
//         this.isActive = false
//         this.time = "00:00:00"
//     }
//     start() {
//         this.isActive = true
//         let interval = setInterval(() => {
//             this.seconds += 1
//         },1000)
//         if (this.isActive == false){
//             clearInterval(interval)
//         }
//         this.hours = Math.floor(this.seconds / 3600);
//         this.minutes = Math.floor((this.seconds - this.hours * 3600) / 60);
//         this.remainingSeconds = this.seconds - this.hours * 3600 - this.minutes * 60;
//     }
//     stop(){
//         this.isActive = false
//     }
// }

const Section = props => {
    return (
        <div className={props.class}>
            <section className={"errors"}>
                <Card>
                    <ul>
                        {
                        props.errors.map(err => {     
                                return <ErrorItem fatherclass={props.class} key={err.id} name={err.name} description={err.description} time={err.time} id={err.id}/>
                            })
                        }
                    </ul> 
                </Card>
            </section> 
        </div>
)}
export default Section;