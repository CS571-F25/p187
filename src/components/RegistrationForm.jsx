import { useState} from "react";
import { Card, Form, Button } from "react-bootstrap";

export default function RegistrationForm(props){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [numTickets, setNumTickets] = useState(0);

    function handleRegister(e){
        e?.preventDefault();

        if(name === "" || email === ""){
            alert("You must fill all fields to submit!");
            return;
        }

        if(numTickets === 0){
            alert("You have not reserved any tickets.")
            return;
        }

        localStorage.setItem("loggedIn", JSON.stringify(true))
        props.loggedIn(true)

        localStorage.setItem("numTickets", JSON.stringify(numTickets))
    }

    return <Card style={{height: 400, width: 350}}>
        <Form>
            <h2 style={{fontFamily: "Constantina"}}>Register</h2>
                <Form.Label htmlFor="nameInput">Name</Form.Label>
                <Form.Control id="nameInput" type="name" name="name" value={name}
                    onChange={(e) => setName(e.target.value)}></Form.Control>

                <Form.Label htmlFor="emailInput">Email</Form.Label>
                <Form.Control id="emailInput" type="email" name="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}></Form.Control>

                <Form.Label>Maximum Number of Tickets: 4</Form.Label>

                <Form.Label htmlFor="ticketInput">Number of Tickets</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => setNumTickets(e.target.value)}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </Form.Select>
               <br/>

                <Button type="submit" onClick={handleRegister}>Reserve</Button>
            </Form>
        </Card>

}