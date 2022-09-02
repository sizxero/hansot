import { Col, Card, Button } from "react-bootstrap";
import { TextBanner } from '.';

const PictureBanner = (props) => {
    return (
        <Col className="PictureBanner">
            <img src={props.img} />
            <TextBanner 
            title={props.title}
            content={props.content}/>
        </Col>
    );
}

export default PictureBanner;