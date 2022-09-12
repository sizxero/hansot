import { Navbar, Nav } from "react-bootstrap";
import { useEffect } from "react";

const NavBar = () => {
    useEffect(() => {
        let triggers = document.querySelectorAll("#NavBarNav > ul > li"); 
        let submenus= document.querySelectorAll(".NavBarNav2");
        triggers.forEach((trigger) => {     
            trigger.addEventListener("mouseenter", () => {
                submenus.forEach((submenu) => {
                    submenu.style.display = "block";
                });
            });
            trigger.addEventListener("mouseleave", () => {
                submenus.forEach((submenu) => {
                    submenu.style.display = "none";  
                });
            });
        });
    });

    return (
        <>
            <Navbar bg="light" expand="lg" className="NavBar">
                <Navbar.Brand href="/">
                <img
                src="https://www.hsd.co.kr/assets/images/common/h1_logo.png"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="NavBarNav" />
                <Navbar.Collapse id="NavBarNav">                    
                <ul className="NavBarNav1">
                    <li>
                        <Nav.Link href="#">BRAND</Nav.Link>
                        <ul className="NavBarNav2">
                            <li>브랜드 스토리</li>
                            <li>브랜드 철학</li>
                            <li>브랜드 유산</li>
                        </ul>
                    </li>
                    <li>
                        <Nav.Link href="#">ESG</Nav.Link>
                        <ul className="NavBarNav2">
                            <li>ESG경영이란?</li>
                            <li>환경보호(Environment)</li>
                            <li>사회공헌(Social)</li>
                            <li>윤리경영(Governance)</li>
                            <li>세계 40대 브랜드 선정</li>
                        </ul>
                    </li>
                    <li>
                        <Nav.Link href="#">MENU</Nav.Link>
                        <ul className="NavBarNav2">
                            <li>전체메뉴</li>
                            <li>식재료 이야기</li>
                            <li>페루잔치마요커피</li>
                            <li>단체 주문</li>
                        </ul>
                    </li>
                    <li>
                        <Nav.Link href="#">STORE</Nav.Link>
                        <ul className="NavBarNav2">
                            <li>주변점포찾기</li>
                        </ul>
                    </li>
                    <li>
                        <Nav.Link href="#">EVENT</Nav.Link>
                        <ul className="NavBarNav2">
                            <li>이 달의 이벤트</li>
                            <li>신규점 오픈이벤트</li>
                        </ul>
                    </li>
                    <li>
                        <Nav.Link href="#">FRANCHISE</Nav.Link>
                        <ul className="NavBarNav2">
                            <li>Why 한솥 가맹점</li>
                            <li>성공수기</li>
                            <li>창업개설절차</li>
                            <li>예상 창업 비용</li>
                            <li>창업문의</li>
                            <li>창업설명회 일정·신청</li>
                        </ul>
                    </li>
                    <li>
                        <Nav.Link href="#">HANSOT</Nav.Link>
                        <ul className="NavBarNav2">
                            <li>한솥의 약속</li>
                            <li>한솥의 비전</li>
                            <li>연혁&수상</li>
                            <li>한솥 NEWS</li>
                            <li>오시는 길</li>
                            <li>고객센터</li>
                            <li>인재채용</li>
                        </ul>
                    </li>
                </ul>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavBar;