import { Col, Card, Button } from "react-bootstrap";

const LinkBanner = (props) => {
    return (
        <Col className="LinkBanner">
            <Card>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title><h3>{props.title}</h3></Card.Title>
                    <span className="sc_txt">{props.linktitle}</span>
                </Card.Body>
                <div className="bottomLine"></div>
            </Card>
        </Col>
    );
}

export default LinkBanner;