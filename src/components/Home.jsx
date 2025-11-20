import { useContext, useEffect, useState } from "react"
import FilmContext from "../contexts/FilmContext"
import { Container, Row, Col } from "react-bootstrap";
import PageNavbar from "./PageNavbar";
import CountdownTimer from "./CountDown";

export default function Home (props) {

    const filmDetails = useContext(FilmContext)

    return (<div>
        <PageNavbar />
        <Container fluid style={{marginTop: 25}}>
            <Row>
                <Col>
                    <h2 style={{alignContent:"center"}}>{filmDetails.title}</h2>
                    <br/>
                    <h3>Directed by {filmDetails.director}</h3>
                    <br/>
                    <h4>Release Date: {filmDetails.releaseDate}</h4>
                    <br/>
                    <p>{filmDetails.filmDescription}</p>
                    <br/>
                    <CountdownTimer/>
                </Col>
                <Col xs={4}>
                    <img alt="Film Poster" src={filmDetails.posterImg} width="365" height="548" style={{margin: 20}}/>
                </Col>
            </Row>
            <p>I do not own the rights to this film, this is a fictional event that has no assoication to Netflix</p>
        </Container>        
    </div> );   
}
