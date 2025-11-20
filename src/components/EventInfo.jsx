import PageNavbar from "./PageNavbar"
import CountdownTimer from "./CountDown"
import { Row, Col,Card } from "react-bootstrap"

export default function EventInfo (props) {
    return <div>
        <PageNavbar />
        <Card>
            <CountdownTimer />
        </Card>
        <Row>
            <Col xs={12} lg={4} xl={6}>
                <h1>Event Info</h1>
            </Col>
            <Col xs={12} lg={4} xl={6}>
                <h1>More details</h1>
            </Col>
        </Row>
    </div>
}