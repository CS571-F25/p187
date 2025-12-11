import { Card, Row, Col } from "react-bootstrap";

export default function BioCards(props){
    return <Card>
        <Row>
            <Col>
                <h2>{props.name}</h2>
                <br/>
                <h3>{props.job}</h3>
                <br/>
                <p>{props.bio}</p>
            </Col>
            <Col sm='auto' md='auto' xl="auto">
                <img src={props.img} alt={"Image of " + props.name} style={{height: 300, width:200, alignContent:"center"}} />
            </Col>
        </Row>
    </Card>
}