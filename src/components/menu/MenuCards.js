import { Container, Row, Col } from "react-bootstrap";
import { MenuCard } from ".";
import { useSelector } from "react-redux";

const MenuCards = (props) => {
    const id = props.id;
    let state = useSelector((state) => state.menuReducer);

    return (
        <Container>
            <Row className="MenuCardsInfo">
                { state.categories != null ?
                    <>
                    <h4>{state.categories[id-1].C_TITLE}</h4>
                    <h2>{state.categories[id-1].S_TITLE}</h2>
                    </>
                    : <></>
                }
            </Row>
            <Row className="MenuCard">
                    { state.allMenu !== null ?
                    <>
                    {state.allMenu.map((menu, idx) => 
                        menu.MN_SUBCATEGORY_NO === Number(id) ?
                        <>
                    <Col md={4} sm={6}>
                            <MenuCard
                            no={menu.MN_NO}
                            img={menu.MN_IMG}
                            title={menu.MN_NAME}
                            price={menu.MN_PRICE}
                            />
                    </Col>
                        </>
                        : <></>
                        )}
                    </>
                    : <></>
                    }
            </Row>
        </Container>
    );
}

export default MenuCards;