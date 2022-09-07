import { Col, Card, Button } from "react-bootstrap";

const MenuCard = (props) => {
    return (
        <>
        <Card className="MenuCard">
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title><h3>{props.title}</h3></Card.Title>
                    <span>{props.price}</span>
                </Card.Body>
            </Card>
        </>
    );
}

export default MenuCard;