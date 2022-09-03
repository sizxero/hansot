import { Container, Row, Col } from 'react-bootstrap';
import { Footer } from '../components/common';

const Login = () => {
    return (
        <div className="Login">
            <Container>
                <Row>
                    <Col sm={6} id="login-section">
                        <h1>로그인</h1>
                        <input type="text" /><input type="text" /><input type="button" className="btn btn-warning" value="로그인" />
                    </Col>
                    <Col md={{'span':5, 'offset': 1}} id="signup-banner">
                        <img src="https://www.hsd.co.kr/assets/images/login/join_temp_01.jpg" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;