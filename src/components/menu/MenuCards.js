import { Container, Row, Col, Collapse } from "react-bootstrap";
import { MenuCard } from ".";
import MenuAPI from "../../client/api/MenuAPI";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import * as Action from "../../redux/actions/MenuAction";

const MenuCards = (props) => {
    const id = props.id;
    let dispatch = useDispatch();
    let state = useSelector((state) => state.menuReducer);

    const getMenu = async() => {
        if(id === null || id === '' || id === undefined)
            dispatch(Action.dispatchCtgMenu(null));
        else
            dispatch(Action.dispatchCtgMenu(await MenuAPI.findCtgMenu(id).then(x=> x)));
    }
    
      useEffect(() => {
        getMenu();
      }, [state.ctgMenu]);

    return (
        <Container>
        <Row className="MenuCard">
            { state.ctgMenu !== null ?
            <>
            {state.ctgMenu.map((menu, idx) => 
                <Col md={4} sm={6}>
                <MenuCard
                img={menu.MN_IMG}
                title={menu.MN_NAME}
                price={menu.MN_PRICE}
                />
                </Col>
            )}
            </>
            : <></>
            }
        </Row>
        </Container>
    );
}

export default MenuCards;