import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCookie, removeCookie } from "../../client/Cookie";

const SubNavBar = () => {
    const logout = () => {
        removeCookie('user');
        window.location.href = '/';
    }

    return (
        <Container className="subnavWrapper">
            <ul>
                { getCookie('user') === null || getCookie('user') === '' || getCookie('user') === undefined ?
                <>
                <li><Link to="/login">로그인</Link></li>|
                <li><Link to="/signup">회원가입</Link></li>
                </>
                :
                <>
                <li><a href="#" onClick={() => logout()}>로그아웃</a></li>|
                <li><Link to="/mypage">마이페이지</Link></li>| 
                </>
                }
                <li className="snsInsta">
                    <a href="https://www.instagram.com/hansot_official/" target="_blank" title="새 창 열림"><span class="blind">instagram</span></a>
                </li>
                <li className="snsFace">
                    <a href="https://www.facebook.com/hansotOfficial/?ref=ts&amp;fref=ts" target="_blank" title="새 창 열림"><span class="blind">facebook</span></a>
                </li>
            </ul>
        </Container>
    );
}

export default SubNavBar;