import { Container, Row, Col } from 'react-bootstrap';

const Signup = () => {
    return (
        <div className="Signup">
            <Container>
                <Row>
                    <Col sm md id="signup-section">
                        <h1>회원가입</h1>
                        <form action="" method="post" className="signupForm">
                        <table>
                            <tr>
                                <th>아이디</th>
                                <td><input type="text" id="id" name="id" /></td>
                                <td><input type="button" class="btn btn-warning" value="중복 확인" onclick="duplIdCheck()" /></td>
                            </tr>
                            <tr>
                                <th>비밀번호</th>
                                <td><input type="password" id="pw" name="pw"/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>비밀번호 재입력</th>
                                <td><input type="password" id="pw_re" name="pw_re"/></td>
                                <td><input type="button" class="btn btn-warning" value="일치 확인" onclick="samePwCheck()"/></td>
                            </tr>
                            <tr>
                                <th>이름</th>
                                <td><input type="text" id="name" name="name"/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>닉네임</th>
                                <td><input type="text" id="nick" name="nick"/></td>
                                <td><input type="button" class="btn btn-warning" value="중복 확인" onclick="duplNickCheck()"/></td>
                            </tr>
                            <tr>
                                <th>휴대전화</th>
                                <td><input type="text" id="phone" name="phone" placeholder="010-XXXX-XXXX"/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>이메일</th>
                                <td><input type="text" id="email" name="email" placeholder="example@dot.com"/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>우편번호</th>
                                <td><input type="text" id="zipcode" name="zipcode" /></td>
                                <td><input type="button" class="btn btn-warning" value="주소 찾기" onclick="sample6_execDaumPostcode()" /></td>
                            </tr>
                            <tr>
                                <th>상세 주소 1</th>
                                <td><input type="text" id="city" name="city" /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>상세 주소 2</th>
                                <td><input type="text" id="street" name="street" /></td>
                                <td></td>
                            </tr>
                           </table>
                           <input type="submit" class="btn btn-outline-warning" value="SIGN UP"></input>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Signup;