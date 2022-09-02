import { Navbar, Nav } from "react-bootstrap";
const NavBar = () => {
    return (
        <>
            <Navbar bg="primary" expand="lg" className="NavBar">
                <Navbar.Brand href="#home">한솥</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">                    
                <Nav className="me-auto">
                    <Nav.Link href="#home">BRAND</Nav.Link>
                    <Nav.Link href="#link">ESG</Nav.Link>
                    <Nav.Link href="#home">MENU</Nav.Link>
                    <Nav.Link href="#link">STORE</Nav.Link>
                    <Nav.Link href="#home">EVENT</Nav.Link>
                    <Nav.Link href="#link">FRANCHISE</Nav.Link>
                    <Nav.Link href="#link">HANSOT</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavBar;