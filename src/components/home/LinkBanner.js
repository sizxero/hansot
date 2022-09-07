import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const LinkBanner = (props) => {
    return (
        <Link to={props.link} className="LinkBanner">
            <Card>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title><h3>{props.title}</h3></Card.Title>
                    <span className="sc_txt">{props.linktitle}</span>
                </Card.Body>
                <div className="bottomLine"></div>
            </Card>
        </Link>
    );
}

export default LinkBanner;