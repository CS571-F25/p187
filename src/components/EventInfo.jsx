import PageNavbar from "./PageNavbar"
import CountdownTimer from "./CountDown"
import { Row, Col,Card, Container, Form, Button } from "react-bootstrap"
import { useState, useRef } from "react"

export default function EventInfo (props) {

    const emailRef = useRef();
    const passwordRef = useRef();
    const numTicketsRef = useRef();

    function handleRegister(){
        alert("I will submit one day")
    }

    return <div>
        <PageNavbar />
        <Container fluid style={{marginTop: 25}}>
            <Row>
                <Col >
                    <h1>Event Info</h1>
                    <br/>
                    <h2>Event Start: 7:00 pm</h2>
                    <br/>
                    <h3>Location: [TODO]</h3>
                    <br/>
                    <p>Further Details... [TODO]</p>
                
                </Col>
                <Col xs={5} md={5} lg={5} xl={5}>
                    <Card style={{height: 400, width: 400}}>
                        <Form>
                            <h1>Reserve Tickets</h1>
                            <Form.Label htmlFor="emailInput">Email</Form.Label>
                            <Form.Control id="emailInput" ref={emailRef}></Form.Control>

                            <Form.Label htmlFor="passwordInput">Password</Form.Label>
                            <Form.Control id="passwordInput" type="password" ref={passwordRef}></Form.Control>

                            <Form.Label htmlFor="ticketInput">Number of Tickets</Form.Label>
                            <Form.Control id="ticketInput" type="numeric" ref={numTicketsRef}></Form.Control>

                            <br/>

                            <Button type="submit" onClick={handleRegister}>Reserve</Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
}