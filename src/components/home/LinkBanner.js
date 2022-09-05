import { Col, Card, Button } from "react-bootstrap";

const LinkBanner = (props) => {
    return (
            <Card className="LinkBanner">
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title><h3>{props.title}</h3></Card.Title>
                    <span className="sc_txt">{props.linktitle}</span>
                </Card.Body>
                <div className="bottomLine"></div>
            </Card>
    );
}

export default LinkBanner;