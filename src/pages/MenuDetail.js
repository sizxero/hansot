import { Container, Row, Col, Button } from 'react-bootstrap';
import MenuAPI from "../client/api/MenuAPI";
import OrderAPI from "../client/api/OrderAPI";
import queryString from 'query-string';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import * as Action from "../redux/actions/MenuAction";
import * as Action2 from "../redux/actions/OrderAction";
import { Link } from "react-router-dom";
import AllergyInfo from '../components/menu/AllergyInfo';
import OptionInfo from '../components/menu/OptionInfo';
import { getCookie } from "../client/Cookie";

const MenuDetail = () => {
    const query = queryString.parse(window.location.search);
    let dispatch = useDispatch();
    let state = useSelector((state) => state.menuReducer.targetMenu);
    let state2 = useSelector((state) => state.orderReducer);
    const [price, setPrice] = useState(0);
    const [checkItems, setCheckItems] = useState([]);

    const getOrderInfo = () => {
        dispatch(Action2.dispatchMember(getCookie('user')));
    }

    const getMenuInfo = async() => {
        dispatch(Action.dispatchOneMenu(await MenuAPI.findOneMenu(Number(query.mn)).then(x=> {dispatch(Action2.dispatchMenu(x)); return x;})));
    }
    
    const changeHandler = (checked, optprice, id) => {
        if(checked) {
            var newarr = [...checkItems];
            newarr.push(id);
            dispatch(Action2.dispatchOption(newarr));
            setPrice(price + optprice);
            setCheckItems(newarr);
        } else {
            var delarr = checkItems.filter((el) => el !== id);
            dispatch(Action2.dispatchOption(delarr));
            setPrice(price - optprice);
            setCheckItems(delarr);
        }
    }

    const order = async() => {
        let data = {
            member: state2.member, 
            menu: state2.menu, 
            options: state2.options
        }
        await OrderAPI.orderMenu(data);
        if(window.confirm('주문이 완료되었습니다. 마이페이지로 이동하시겠습니까?'))
            window.location.href = '/mypage';
    }

    useEffect(() => {
        getOrderInfo();
        getMenuInfo();
    }, []);

    console.log(state2);


    return (
        <div className="MenuDetail">
            <Container>
                <Row className="MenuDetailWapper">
                    <Col>
                        <Link to="/menu"><h1>← 전체 메뉴</h1></Link>
                        { state !== null ?
                        <>
                        
                        <Row className="MenuDetailInfo">
                            <Col><img src={state.info.MN_IMG} alt="" /></Col>
                            <Col>
                            <h3>{state.info.MN_NAME}</h3>
                            <OptionInfo 
                            info={state.option_info}
                            evt={changeHandler}
                            total={checkItems}/>
                            {state.info.MN_PRICE} (+ {price})
                            <h2>{state.info.MN_PRICE + price}</h2>
                            <Button class="btn btn-warning" onClick={()=>{ 
                                getCookie('user') === null || getCookie('user') === '' || getCookie('user') === undefined ?
                                alert('로그인 후 주문해주세요')
                                :order()}}>주문하기</Button>
                            </Col>
                        </Row>
                        </>
                        : <></>
                    }
                    </Col>
                </Row>
                { state !== null ?
                <>
                <h2>열량: {state.info.MN_CALORIE}Kcal</h2>
                <AllergyInfo info={state.allergy_info}/> 
                </>
                :<></>
                }
            </Container>
        </div>
    );
}

export default MenuDetail;