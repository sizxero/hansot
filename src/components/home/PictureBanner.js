import { Container, Row, Col } from "react-bootstrap";
import { TextBanner } from '.';

const PictureBanner = (props) => {
    return (
        <>
        <Container className="PBContainer">
            <Row className="PictureBanner">
            <Col md={{ span: 4, offset: 8 }}>
                <TextBanner 
                style={props.style}
                title={props.title}
                content={props.content}
                type={props.type} 
                linktitle={props.linktitle}/>
            </Col>
            <div className="bottomLine"></div>
            </Row>
        </Container>
        </>
    );
}

export default PictureBanner;