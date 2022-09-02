import { NavBar, SubNavBar } from '.';
import { Container } from 'react-bootstrap';
const Header = () => {
    return (
        <Container className="Header">
            <SubNavBar />
            <NavBar />
        </Container>
    );
}

export default Header;