import { Container, Row, Col, Button } from 'react-bootstrap';
import MenuAPI from "../client/api/MenuAPI";
import queryString from 'query-string';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import * as Action from "../redux/actions/MenuAction";
import { Link } from "react-router-dom";
import AllergyInfo from '../components/menu/AllergyInfo';
import OptionInfo from '../components/menu/OptionInfo';

const MenuDetail = () => {
    const query = queryString.parse(window.location.search);
    let dispatch = useDispatch();
    let state = useSelector((state) => state.menuReducer.targetMenu);

    const getMenuInfo = async() => {
        dispatch(Action.dispatchOneMenu(await MenuAPI.findOneMenu(Number(query.mn)).then(x=> x)));
    }
    
    useEffect(() => {
        getMenuInfo();
    }, []);

    console.log(state);


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
                            <OptionInfo info={state.option_info}/>
                            {state.info.MN_PRICE}
                            <Button class="btn btn-warning">주문하기</Button>
                            </Col>
                        </Row>
                        </>
                        : <></>
                    }
                    </Col>
                </Row>
                { state !== null ?
                <AllergyInfo info={state.allergy_info}/> 
                :<></>
                }
            </Container>
        </div>
    );
}

export default MenuDetail;