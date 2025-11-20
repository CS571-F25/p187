import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import BioCards from "./BioCards"
import PageNavbar from "./PageNavbar"

export default function Bios (props) {
    const [bios, setBios] = useState([])

    useEffect(() => {
        fetch("https://cs571api.cs.wisc.edu/rest/f25/bucket/bios", {
            method: "GET",
            headers: {
                "X-CS571-ID": CS571.getBadgerId(),
            }
        }).then(res => res.json())
        .then(data => {
            setBios(data.results["d259c04f-b439-4409-a0fb-ec6ca8c67a3a"])
        })
    },[])

    return <div>
        <PageNavbar />
        <Container fluid style={{marginTop: 25}}>
            <h1>Bios</h1>
            <Row xs={1} md={1} lg={1} xl={1}>
                {
                    bios.map(item => {
                        return <Col key={item.name}>
                            <BioCards {...item}/>
                        </Col>
                    })
                }

            </Row>
            <p>Info pulled from sources including IMDB and Wikipedia</p>
        </Container>
        
    </div>
}