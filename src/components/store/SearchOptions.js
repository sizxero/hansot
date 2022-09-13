import StoreAPI from "../../client/api/StoreAPI";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import * as Action from "../../redux/actions/StoreAction";

const SearchOptions = () => {
    let dispatch = useDispatch();
    let state = useSelector((state) => state.storeReducer);
    let [sido, setSido] = useState(1);
    const getInitData = async() => {
        dispatch(Action.dispatchAllSido(await StoreAPI.findAllSido().then(x=> x)));
        dispatch(Action.dispatchGugun(await StoreAPI.findGugun(sido).then(x=> x)));
    }

    useEffect(() => {
        getInitData();
    }, [sido]);
    
    return (
        <div className="SearchOptions">
            <select onChange={(e) => setSido(Number(e.target.value))}>
                <option value="">시/도 선택</option>
                {state.allSido !== null ?
                    state.allSido.map((sido) => 
                    <option value={sido.R_NO}>{sido.R_NAME}</option>)
                :<></>}
            </select>
            <select>
                <option value="">구/군 선택</option>
                {state.gugun !== null ?
                    state.gugun.map((gg) => 
                    <option value={gg.SR_NO}>{gg.SR_NAME}</option>)
                :<></>}
            </select>
            <input type="text" placeholder="검색어 입력"/>
            <button>검색</button>
        </div>
    );
}

export default SearchOptions;