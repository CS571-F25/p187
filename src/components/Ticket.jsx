import React from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useState } from "react";

export default function Ticket(props){
    const tickets = JSON.parse(localStorage.getItem("numTickets"));

    function handleCancel(){
        localStorage.setItem("loggedIn", JSON.stringify(false))
        localStorage.removeItem("numTickets")
        props.loggedIn(false) 
    }

    return <Card>
        <Card.Img src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flandmarktheatre.org%2Fwp-content%2Fuploads%2F2018%2F12%2Fticket.jpg&f=1&nofb=1&ipt=064915421d90897343ab76d5b8f7ff73ca571d891d2ea3051c91b62186ff0d07"}/>

        {tickets === 1 && (
            <Card.Text>{tickets} ticket reserved</Card.Text>
        )}

        {tickets !== 1 && (
            <Card.Text>{tickets} ticket(s) reserved</Card.Text>
        )}
        
        <Card.Text>Please arrive by 7:30 pm for the screening</Card.Text>

        <Button onClick={handleCancel} variant="secondary">Cancel</Button>

        
    </Card>

}