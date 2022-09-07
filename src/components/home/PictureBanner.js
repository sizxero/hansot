import { Container, Row, Col } from "react-bootstrap";
import { TextBanner } from '.';
import { Link } from "react-router-dom";

const PictureBanner = (props) => {
    return (
        <>
        <Container >
        <Link to='#' className="PBContainer">
            <Row>
            <Col className="PictureBanner" md={8} sm={12}></Col>    
            <Col md={4} sm={12}>
                <TextBanner 
                style={props.style}
                title={props.title}
                content={props.content}
                type={props.type} 
                linktitle={props.linktitle}/>
            </Col>
            <div className="bottomLine"></div>
            </Row>
        </Link>
        </Container>
        </>
    );
}

export default PictureBanner;