import { Carousel } from 'react-bootstrap';

const AdCarousel = () => {
    return (
        <>
        <Carousel className="AdCarousel">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.hsd.co.kr/images/66a047876ecd454ab1d7c4bb1bd6a2b820220831042003.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.hsd.co.kr/images/fdb6af1f62914f1c8ba4aed49feacfe120220430112830.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.hsd.co.kr/images/5b67113ecf6f4b1cb0331ff162469b8720220630051804.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.hsd.co.kr/images/f8a3c65ac30c4bc9b0d104a22b881f0020220729023249.jpg"
                alt="Fourth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.hsd.co.kr/images/28fb6de20d694d249ad3648c1a12f9a320220608063440.jpg"
                alt="Fifth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.hsd.co.kr/images/0ed8386796f440bf87d5ee3b136514b620220831041926.jpg"
                alt="Sixth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.hsd.co.kr/images/ba22f59399ea4af7b4decf532551003720220831042145.jpg"
                alt="Seventh slide"
                />
            </Carousel.Item>
        </Carousel>
        </>
    );
}

export default AdCarousel;