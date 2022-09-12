import { Container, Row, Col } from 'react-bootstrap';
import { MenuNav, MenuCards, TotalMenu } from "../components/menu";
import queryString from 'query-string';
import MenuAPI from "../client/api/MenuAPI";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import * as Action from "../redux/actions/MenuAction";

const Menu = () => {
    const query = queryString.parse(window.location.search);
    let dispatch = useDispatch();
    let state = useSelector((state) => state.menuReducer);

    const getCtg = async() => {
        dispatch(Action.dispatchCategories(await MenuAPI.findAllCategories().then(x=> x)));
      }
    
      useEffect(() => {
        getCtg();
      }, [query]);
    return (
        <div className="Menu">
            <Container>
                <Row className="thumb">
                    <h1>한솥 메뉴</h1>
                </Row>
                <Row>
                    <Col md={4}><MenuNav /></Col>
                    <Col md={8}>
                        {query.ctg === '' || query.ctg === null || query.ctg === undefined ? 
                            <>
                                <MenuCards id={1}/>
                                <MenuCards id={2}/>
                                <MenuCards id={3}/>
                                <MenuCards id={4}/>
                                <MenuCards id={5}/>
                                <MenuCards id={6}/>
                                <MenuCards id={7}/>
                                <MenuCards id={8}/>
                                <MenuCards id={9}/>
                            </>
                        :
                        <MenuCards id={query.ctg}/>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Menu;