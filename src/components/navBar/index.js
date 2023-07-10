"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function AppNavBar() {
    return (
        <Navbar expand="lg">
            <Container >
                <Navbar.Brand href="#">thecodingbuzz</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        navbarScroll
                    >
                        <Nav.Link href="#action1">About</Nav.Link>
                        <Nav.Link href="#action2">Service</Nav.Link>
                        <Nav.Link href="#action2">Work</Nav.Link>
                        <Nav.Link href="#action2">Review</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}
export default  AppNavBar;