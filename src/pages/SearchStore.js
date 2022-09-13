/* global kakao */
import { Container, Row, Col } from 'react-bootstrap';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { SearchOptions } from '../components/store';
import StoreAPI from "../client/api/StoreAPI";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import * as Action from "../redux/actions/StoreAction";

const SearchStore = () => {
    let dispatch = useDispatch();
    let state = useSelector((state) => state.storeReducer);
    let [markers, setMarkers] = useState([]);
    const getInitData = async() => {
        dispatch(Action.dispatchAllStore(await StoreAPI.findAllStore().then(x=> {
            var arr = [];
            x.map(xx => addressToCoord(xx.ST_ADDR).then(xxx=> arr.push(xxx)));
            setMarkers(arr);
        })));
    }
    
    const addressToCoord = async (addr) => {
        var geocoder = new kakao.maps.services.Geocoder();
        return new Promise(resolve => {
            geocoder.addressSearch(addr, function (result, status) {
                // 정상적으로 검색이 완료됐으면 
                 if (status === kakao.maps.services.Status.OK) {
                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    resolve(coords);
                }
            });
        })
    }
    
    useEffect(() => {
        getInitData();
    }, []);
    
    return (
        <div className="SearchStore">
            <Container>
                <Row>
                    <Col sm md id="search-section">
                        <h1>주변점포찾기</h1>
                        <SearchOptions />
                        <Map
                        level={13}
                        center={{ lat: 35.85133, lng: 127.734086 }}
                        style={{ width: "100%", height: "500px" }}>
                            {markers.map(m => <MapMarker position={{lat: m.Ma, lng: m.La}}/>)}
                        </Map>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SearchStore;