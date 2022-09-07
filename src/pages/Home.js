
import { AdCarousel, LinkBanner, PictureBanner, TextBanner, WideBanner } from "../components/home";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        let bg = document.querySelector(".WideBanner");
        console.log('ele', bg);
        bg.addEventListener("mouseenter", (event) => {
            event.target.classList.add("on");
            console.log("mouseenter");
          });
          bg.addEventListener("mouseleave", (event) => {
            event.target.classList.remove("on");
            console.log("mouseleave");
          });
    });

    return (
        <>
            <AdCarousel />
            <Container className="Banners">
                <Row>
                    <Col> 
                    <LinkBanner
                    img="https://www.hsd.co.kr/assets/images/main/main_img_01.jpg"
                    title="가격 이상의 가치가 담긴 한솥의 다양한 메뉴들을 확인해 보세요"
                    linktitle="한솥 메뉴"
                    link="/menu" />
                    </Col>
                    <Col>
                    <LinkBanner
                    img="https://www.hsd.co.kr/assets/images/main/main_img_02.jpg"
                    title="갓 지은 한끼가 기다리고 있는 가까운 한솥 매장을 찾아보세요"
                    linktitle="주변점포찾기"
                    link="/store" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={4}>
                    <TextBanner 
                    style={{'backgroundColor': '#f2c000'}}
                    title="가맹점주에게도 든든한 한솥입니다"
                    content="점주님들의 꿈을 실현시켜 드리기 위해 가맹점주와 성공까지 동행하는 한솥! 
                    상담부터 개업까지 모든 희로애락을 함께 합니다."
                    type="none"/>
                    </Col>
                    <Col md sm={6}>
                    <LinkBanner
                    img="https://www.hsd.co.kr/assets/images/main/main_img_03.jpg"
                    title="한솥은 언제나 고객과 점주님들의 이익을 먼저 생각합니다"
                    linktitle="Why 한솥 가맹점"
                    link="#" />
                    </Col>
                    <Col md sm={6}>
                    <LinkBanner
                    img="https://www.hsd.co.kr/assets/images/main/main_img_04.jpg"
                    title="한솥과 함께하는 가맹점주들의 성공 스토리입니다" 
                    linktitle="성공수기"
                    link="#"/>
                    </Col>
                </Row>
            </Container>
            <Row className="WideBannerWrapper">
                    <WideBanner
                    style={{'backgroundColor': 'black', 'color': 'white', 'opacity': '0.8'}}
                    title="든든한 솥밥을 위해 한솥이 지키고, 키워가는 것들"
                    content="한솥은 '따끈한 도시락으로 지역사회에 공헌한다'라는 기업이념 아래,
                    고객 이익을 최우선으로 하며 엄선된 좋은 식재료만들 사용하는 대한민국 외식종합기업 시장을
                    리드하는 글로벌 종합외식기업 입니다." 
                    type="button"
                    linktitle="브랜드 철학"/>
            </Row>
            <PictureBanner
            style={{'backgroundColor': 'lightgray'}}
            title="식재료 앞에서는 한없이 까탈스럽습니다"
            content="맑고 깨끗한 자연 환경속에서 재배된 식재료가 아니면 한솥이 될 수 없습니다.
            모든 식재료는 고객분들이 안심하고 드실 수 있도록 엄격한 기준 아래 선별됩니다."
            type="link" 
            linktitle="식재료 이야기"/>
        </>
    );
}

export default Home;