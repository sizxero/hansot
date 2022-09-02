import { Col, Card } from "react-bootstrap";

const TextBanner = (props) => {
    return (
        <Col className="TextBanner">
            <Card>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.content}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default TextBanner;