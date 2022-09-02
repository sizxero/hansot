import { Container, Col, Card, Button } from "react-bootstrap";
import { TextBanner } from '.';

const WideBanner = (props) => {
    return (
        <div className="WideBanner">
            <Container>
                <Col sm={4}>
                    <TextBanner 
                    title={props.title}
                    content={props.content}/>
                </Col> 
            </Container>
        </div>
    );
}

export default WideBanner;