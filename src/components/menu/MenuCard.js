import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuCard = (props) => {
    const getMenuDetailURL = (menuNo) => `/menudetail?mn=${menuNo}`;
    return (
        <>
        <Link to={getMenuDetailURL(props.no)}>
        <Card className="MenuCard">
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title><h3>{props.title}</h3></Card.Title>
                    <span>{props.price}</span>
                </Card.Body>
            </Card>
        </Link>
        </>
    );
}

export default MenuCard;