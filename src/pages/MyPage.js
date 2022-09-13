import { Container, Row, Col, Table } from 'react-bootstrap';
import MemberAPI from "../client/api/MemberAPI";
import OrderAPI from "../client/api/OrderAPI";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import * as Action from "../redux/actions/MyPageAction";
import * as Action2 from "../redux/actions/OrderAction";
import { getCookie } from "../client/Cookie";

const MyPage = () => {
    let dispatch = useDispatch();
    let state = useSelector((state) => state.myPageReducer);
    let [options, setOptions] = useState([]);
    const getInitData = async() => {
        dispatch(Action.dispatchMember(await MemberAPI.findMemberInfo(getCookie('user')).then(x=>x)));
        dispatch(Action.dispatchMenu(await OrderAPI.findOrderHistory(getCookie('user')).then(x=>{
            var arr = [];
            x.map(xx => OrderAPI.findOrderOption(xx.OR_NO).then(xxx=>arr.push(xxx)));
            setOptions(arr);
            return x;
        })));
    }
    useEffect(() => {
        getInitData();
    }, []);

    return (
        <div className="MyPage">
            <Container>
                <Row>
                    <Col>
                        <h1>마이페이지</h1>
                        { state.memberInfo !== null
                        ?<>
                        <h2>{state.memberInfo.MB_NAME}님, 반갑습니다.</h2>
                        <h4>아이디: {state.memberInfo.MB_ID}</h4>
                        <h4>휴대전화: {state.memberInfo.MB_PHONE}</h4>
                        <h4>이메일: {state.memberInfo.MB_EMAIL}</h4>
                        </>
                        :<></>}
                    </Col>
                </Row>
                <Row>
                <Col>
                    { state.orderHistory !== null
                        ?<>
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>메뉴</th>
                            <th>가격</th>
                            <th>주문일시</th>
                            </tr>
                        </thead>
                        <tbody>
                        {state.orderHistory.map((oh, idx) => 
                        <tr>
                        <td>{idx+1}</td>
                        <td>
                            <td><img src={oh.MN_IMG} width="100px"/></td>
                            <td><strong>{oh.MN_NAME}</strong></td>
                            {console.log(options[idx])}
                            
                        </td>
                        <td>{oh.MN_PRICE}</td>
                        <td>{oh.OR_ORDERTIME}</td>
                        </tr>
                        )}
                        </tbody>
                        </Table>
                        </>
                        :<>주문 내역이 없습니다</>}
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default MyPage;