import { Navbar, Nav } from "react-bootstrap";
const NavBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" className="NavBar">
                <Navbar.Brand href="/">
                <img
                src="https://www.hsd.co.kr/assets/images/common/h1_logo.png"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="NavBarNav" />
                <Navbar.Collapse id="NavBarNav">                    
                <Nav className="NavBarNav1">
                    <Nav.Link href="#">
                        BRAND
                        <Nav className="NavBarNav2" style={{"display": "none"}}>
                            <Nav.Link href="">asdf</Nav.Link>
                            <Nav.Link href="">asdf</Nav.Link>
                            <Nav.Link href="">asdf</Nav.Link>
                            <Nav.Link href="">asdf</Nav.Link>
                        </Nav>
                    </Nav.Link>
                    <Nav.Link href="#home">ESG</Nav.Link>
                    <Nav.Link href="#home">MENU</Nav.Link>
                    <Nav.Link href="#home">STORE</Nav.Link>
                    <Nav.Link href="#home">EVENT</Nav.Link>
                    <Nav.Link href="#home">FRANCHISE</Nav.Link>
                    <Nav.Link href="#home">HANSOT</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavBar;