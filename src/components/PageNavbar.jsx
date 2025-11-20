import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

export default function PageNavbar(props){
    return <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect fixed="top"
            style={{position: "fixed", top: 0, width: "100%" }}>
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand as={Link} to="/">Wake Up Dead Man: A Knives Out Mystery</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className="me auto">
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/event">Event Info</Nav.Link>
                    <Nav.Link as={Link} to="/details">Film Details</Nav.Link>
                    <Nav.Link as={Link} to="/bios">Bios</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}