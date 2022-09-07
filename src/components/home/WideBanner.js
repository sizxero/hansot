import { Container, Row, Col } from "react-bootstrap";
import { TextBanner } from '.';

const WideBanner = (props) => {
    return (
        <>
        <div className="WideBanner"></div>
        <Container>
            <Row>
                <Col sm={12} md={4}>
                <TextBanner
                    style={props.style}
                    title={props.title}
                    content={props.content}
                    type={props.type} 
                    linktitle={props.linktitle}/>
                </Col>
            </Row>
        </Container>
        </>
        
    );
}

export default WideBanner;