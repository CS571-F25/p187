import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import BioCards from "./BioCards"
import PageNavbar from "./PageNavbar"
import { Carousel } from "react-bootstrap"
import AnimatedList from "./AnimatedList"

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

    const cards = bios.map(item => {
        return <BioCards {...item}/>
    })

    return <div>
        <PageNavbar />
        <Container fluid style={{marginTop: 40}}>
            <AnimatedList
                items={cards}
                showGradients={true}
                enableArrowNavigation={true}
                displayScrollbar={true}/>

            <p>Info pulled from sources including IMDB and Wikipedia</p>
        </Container>
        
    </div>
}