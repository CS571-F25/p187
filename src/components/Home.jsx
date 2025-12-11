import { useContext, useEffect, useState } from "react"
import FilmContext from "../contexts/FilmContext"
import { Container, Row, Col } from "react-bootstrap";
import PageNavbar from "./PageNavbar";
import CountdownTimer from "./CountDown";
import ImageCarouselLeft from "./ImageCarouselLeft";
import ImageCarouselRight from "./ImageCarouselRight";

export default function Home (props) {

    const filmDetails = useContext(FilmContext)

    return (<div>
        <PageNavbar />
        <Container fluid style={{marginTop: 25, justifyContent: 'space-between'}} >
            <Row>
                <Col sm={3}>
                    <ImageCarouselLeft/>
                </Col>
                <Col sm={6} style={{alignContent: 'center', padding: 30}}>
                    <h1 style={{fontFamily: "Constantina"}}><strong>Wake Up Dead Man: A Knives Out Mystery</strong></h1>
                    <br/>
                    <CountdownTimer/>
                </Col>
                <Col sm={3}>
                    <ImageCarouselRight/>
                </Col>
            </Row>
        </Container>        
    </div> );   
}
