import { Card, Row, Col } from "react-bootstrap";

export default function BioCards(props){
    return <Card>
        <Row>
            <Col xs={12} lg={4} xl={6}>
                <h2>Person Name</h2>
                <h3>Role in Film</h3>
                <p>General Info About Them</p>
            </Col>
            <Col xs={12} lg={4} xl={6}>
                <Card>An Image Should Go Here</Card>
            </Col>
        </Row>
    </Card>
}