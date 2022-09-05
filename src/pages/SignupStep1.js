import { Container, Row, Col } from 'react-bootstrap';

const SignupStep1 = () => {
    return (
        <div className="Signup">
            <Container>
                <Row>
                    <Col sm md id="signup-section">
                        <a href="/signup2" className="btn btn-warning">다음</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SignupStep1;