import { Container, Row, Col } from 'react-bootstrap';
const MyPage = () => {
    return (
        <div className="MyPage">
            <Container>
                <Row>
                    <Col>
                        <h1>마이페이지</h1>
                        <form action="" method="post" className="loginForm">
                            <div className="loginWrapper">
                                <div className="loginInputArea">
                                    <input type="text" placeholder="ID"/>
                                    <input type="password" placeholder="PW"/>
                                </div>
                                <input type="button" 
                                className="btn btn-warning" value="로그인"/>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default MyPage;