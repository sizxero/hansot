import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import * as Action from "../redux/actions/MemberAction";
import MemberAPI from "../client/api/MemberAPI";


const SignupStep2 = () => {
    let dispatch = useDispatch();
    let state = useSelector((state) => state.signupReducer);
    let [chk, setChk] = useState(false);

    const samePwChk = () => {
        if(chk)
            alert('일치');
        else
            alert('불일치');
    }

    useEffect(() => {
        if(state.pw === state.pwre)
            setChk(true);
        else
            setChk(false);
        console.log(state);
    }, [state.id, state.pw, state.pwre]);

    return (
        <div className="Signup">
            <Container>
                <Row>
                    <Col sm md id="signup-section">
                        <h1>회원가입</h1>
                        <table>
                            <tr>
                                <th>아이디</th>
                                <td><input type="text" id="id" name="id" onChange={(e) => dispatch(Action.writeId(e.target.value))}/></td>
                                <td><input type="button" class="btn btn-warning" value="중복 확인" onClick={() => MemberAPI.duplId(state.id)} /></td>
                            </tr>
                            <tr>
                                <th>비밀번호</th>
                                <td><input type="password" id="pw" name="pw" onChange={(e) => dispatch(Action.writePw(e.target.value))}/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>비밀번호 재입력</th>
                                <td><input type="password" id="pw_re" name="pw_re" onChange={(e) => dispatch(Action.writePwRe(e.target.value))}/></td>
                                <td><input type="button" class="btn btn-warning" value="일치 확인" onClick={(e) => samePwChk()}/></td>
                            </tr>
                            <tr>
                                <th>이름</th>
                                <td><input type="text" id="name" name="name" onChange={(e) => dispatch(Action.writeName(e.target.value))}/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>휴대전화</th>
                                <td><input type="text" id="phone" name="phone" placeholder="010-XXXX-XXXX" onChange={(e) => dispatch(Action.writePhone(e.target.value))}/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>이메일</th>
                                <td><input type="text" id="email" name="email" placeholder="example@dot.com" onChange={(e) => dispatch(Action.writeEmail(e.target.value))}/></td>
                                <td></td>
                            </tr>
                           </table>
                           <input type="button" 
                           class="btn btn-outline-warning" 
                           value="SIGN UP"
                           onClick={()=> MemberAPI.signup(state)}></input>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SignupStep2;