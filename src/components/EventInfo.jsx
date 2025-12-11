import PageNavbar from "./PageNavbar"
import CountdownTimer from "./CountDown"
import { Row, Col,Card, Container, Form, Button } from "react-bootstrap"
import { useState, useRef, useContext } from "react"
import RegistrationForm from "./RegistrationForm"
import FilmContext from "../contexts/FilmContext"
import Ticket from "./Ticket"

export default function EventInfo (props) {

    const filmDetails = useContext(FilmContext)

    const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem("loggedIn") ? true : false));

    return <div>
        <PageNavbar />
        <Container fluid style={{marginTop: 25, justifyContent: "space-evenly"}}>
            <h1 style={{fontFamily: "Constantina"}}>Release Party</h1>
            <br/>
            <Row>
                <Col style={{columnGap: 10}} sm={4}>
                    <Card style={{backgroundColor:"black"}}>
                        <Card>  
                            <h2 style={{fontFamily: "Constantina"}}><strong>Schedule Of Events:</strong></h2>
                            <br/>
                            <ul style={{fontFamily: "Constantina"}}>
                                <li style={{textAlign: 'left'}}>7:00 pm - Cocktail Hour Begins</li>
                                <li style={{textAlign: 'left'}}>7:45 pm - Opening Remarks</li>
                                <li style={{textAlign: 'left'}}>8:00 pm - Film Starts</li>
                                <li style={{textAlign: 'left'}}>10:30 pm - Q&A with Cast and Crew</li>
                                <li style={{textAlign: 'left'}}>11:00 pm - End of Event</li>
                            </ul>
                        </Card>
                    </Card>
                </Col>               
               
                <Col>
                    <Card style={{backgroundColor:"black"}}>
                        <Card>
                            <Card.Text style={{fontFamily: "Constantina"}}>Location:</Card.Text>
                            <Card.Text style={{fontFamily: "Constantina"}}><strong>Music Box Theater</strong></Card.Text>
                            <Card.Img alt="Venue Img" src={filmDetails.musicBoxImg} width="300" height="200"/>
                            <Card.Text style={{fontFamily: "Constantina"}}>3733 N Southport Ave, Chicago, IL,  60613</Card.Text>
                        </Card>
                    </Card>
                </Col>

                <Col>
                    <Card style={{backgroundColor:"black"}}>  
                        { loggedIn  === false && (
                            <RegistrationForm loggedIn={setLoggedIn}/>
                        )}

                        { loggedIn && (
                            <Ticket loggedIn={setLoggedIn}/>
                        )}
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
}