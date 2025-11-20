import { useContext, useEffect, useState } from "react"
import FilmContext from "../contexts/FilmContext"
import { Container, Row, Col } from "react-bootstrap";
import PageNavbar from "./PageNavbar";

export default function Home (props) {

    const filmDetails = useContext(FilmContext)

    return (<div>
        <PageNavbar />
        <Container fluid>
            <h2 style={{alignContent:"center"}}>{filmDetails.title}</h2>
            <Row>
                <Col>
                    <h3>Blurb about film</h3>
                </Col>
                <Col>
                    <img alt="Film Poster" src={filmDetails.posterImg} width="365" height="548"/>
                </Col>
            </Row>
        </Container>        
    </div> );   
}
