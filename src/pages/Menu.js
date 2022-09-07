import { Container, Row, Col } from 'react-bootstrap';
import { MenuNav } from "../components/menu";

const Menu = () => {
    return (
        <div className="Menu">
            <Container>
                <Row className="thumb">
                    <h1>한솥 메뉴</h1>
                </Row>
                <Row>
                    <Col md={4}><MenuNav /></Col>
                    <Col md={8}>음식</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Menu;