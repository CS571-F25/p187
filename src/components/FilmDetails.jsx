import PageNavbar from "./PageNavbar"
import { Container, Row, Col } from "react-bootstrap"
import { useContext } from "react"
import FilmContext from "../contexts/FilmContext"

export default function FilmDetails (props) {
    const filmDetails = useContext(FilmContext)

    return <div>
        <PageNavbar />
        <Container fluid style={{marginTop: 25}}>
            <Row>
                <Col style={{marginTop: 30}}>
                    <h1 style={{alignContent:"center", fontFamily: "Constantina"}}>{filmDetails.title}</h1>
                    <br/>
                    <h2 style={{fontFamily: "Constantina"}}>Directed by {filmDetails.director}</h2>
                    <h3 style={{fontFamily: "Constantina"}}>Release Date: {filmDetails.releaseDate}</h3>
                    <h4 style={{fontFamily: "Constantina"}}>Rating: PG-13</h4>
                    <br/>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eHM1K1JByBI" title="YouTube video player" allowFullScreen></iframe>
                    <br/>
                    <br/>
                    <p style={{fontFamily: "Constantina"}}>{filmDetails.filmDescription}</p>
                    <br/>
                    
                </Col>
                <Col xs={4} style={{marginTop: 30}}>
                    <img alt="Film Poster" src={filmDetails.posterImg} width="365" height="548" style={{margin: 20}}/>
                </Col>
            </Row>

        <p>I do not own the rights to this film, this is a fictional event that has no assoication to Netflix</p>

        </Container>
    </div>
}