import { Col, Card, Button } from "react-bootstrap";

const LinkBanner = (props) => {
    return (
        <Col className="LinkBanner">
            <Card>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.content}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default LinkBanner;