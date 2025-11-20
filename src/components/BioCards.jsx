import { Card, Row, Col } from "react-bootstrap";

export default function BioCards(props){
    return <Card>
        <Row>
            <Col xs={12} lg={4} xl={6}>
                <h2>{props.name}</h2>
                <br/>
                <h3>{props.job}</h3>
                <br/>
                <p>{props.bio}</p>
            </Col>
            <Col xs={12} lg={4} xl={6}>
                <img src={props.img} alt={"Image of " + props.name} style={{height: 300, width:200, alignContent:"center"}} />
            </Col>
        </Row>
    </Card>
}