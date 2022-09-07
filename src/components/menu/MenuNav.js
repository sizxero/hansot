import { Accordion } from "react-bootstrap";
import MenuAPI from "../../client/api/MenuAPI";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import * as Action from "../../redux/actions/MenuAction";

const MenuNav = () => {

  let dispatch = useDispatch();
  let state = useSelector((state) => state.menuReducer);
  
  const getCtg = async() => {
    dispatch(Action.dispatchCategories(await MenuAPI.findAllCategories().then(x=> x)));
    dispatch(Action.dispatchMainCategories(await MenuAPI.findMainCategories().then(x=> x)));
  }

  useEffect(() => {
    getCtg();
  }, []);

  return (
        <Accordion>
            <Accordion.Item eventKey="0">
          <Accordion.Header>전체</Accordion.Header>
          </Accordion.Item>
        {
          state.mainCategories !== null ?
          state.mainCategories.map((ctg, idx) => 
          <Accordion.Item eventKey={ctg.C_NO}>
            <Accordion.Header>{ctg.C_TITLE}</Accordion.Header>
            <Accordion.Body> 
            {state.categories.map((subctg, idx) => 
                subctg.S_CATEGORY_NO === ctg.C_NO ?
                <><a>{subctg.S_TITLE}</a><br/></>
                :<></>
            )}
            </Accordion.Body>
          </Accordion.Item>
          )
          :<></>
        }
        </Accordion>
    );
}

export default MenuNav;