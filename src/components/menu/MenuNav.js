import { Accordion } from "react-bootstrap";
import MenuAPI from "../../client/api/MenuAPI";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import * as Action from "../../redux/actions/MenuAction";
import { Link } from "react-router-dom";

const MenuNav = () => {

  let dispatch = useDispatch();
  let state = useSelector((state) => state.menuReducer);
  
  const getInitData = async() => {
    dispatch(Action.dispatchCategories(await MenuAPI.findAllCategories().then(x=> x)));
    dispatch(Action.dispatchMainCategories(await MenuAPI.findMainCategories().then(x=> x)));
    dispatch(Action.dispatchAllMenu(await MenuAPI.findAllMenu().then(x=> x)));
  }

  const getSubCtgLink = (sno) => `/menu?ctg=${sno}`;

  useEffect(() => {
    getInitData();
  }, []);

  return (
        <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header><Link to={getSubCtgLink('')}>전체</Link></Accordion.Header>
            </Accordion.Item>
        {
          state.mainCategories !== null ?
          state.mainCategories.map((ctg, idx) => 
          <Accordion.Item eventKey={ctg.C_NO}>
            <Accordion.Header>{ctg.C_TITLE}</Accordion.Header>
            <Accordion.Body> 
            {state.categories.map((subctg, idx) => 
                subctg.S_CATEGORY_NO === ctg.C_NO ?
                <><Link to={getSubCtgLink(subctg.S_NO)}>{subctg.S_TITLE}</Link><br/></>
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