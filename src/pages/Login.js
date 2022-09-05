import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import * as Action from "../redux/actions/MemberAction";
import MemberAPI from "../client/api/MemberAPI";

const Login = () => {
    let dispatch = useDispatch();
    let state = useSelector((state) => state.loginReducer);

    useEffect(() => {
        console.log(state);
    }, [state]);

    return (
        <div className="Login">
            <Container>
                <Row>
                    <Col sm md id="login-section">
                        <h1>로그인</h1>
                        <form action="" method="post" className="loginForm">
                            <div className="loginWrapper">
                                <div className="loginInputArea">
                                    <input type="text" placeholder="ID" onChange={(e) => dispatch(Action.writeIdLogin(e.target.value))}/>
                                    <input type="password" placeholder="PW" onChange={(e) => dispatch(Action.writePwLogin(e.target.value))}/>
                                </div>
                                <input type="button" 
                                className="btn btn-warning" value="로그인"
                                onClick={() => MemberAPI.login(state)} />
                            </div>
                        </form>
                    </Col>
                    <Col sm md={{'span':5, 'offset': 1}} id="signup-banner">
                        <img src="https://www.hsd.co.kr/assets/images/login/join_temp_01.jpg" alt="" />
                        <h2>한솥 회원이 아니신가요?</h2>
                        <a href="/signup" class="btn btn-warning">회원가입</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;