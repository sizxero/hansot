import { Col, Button } from "react-bootstrap";

const TextBanner = (props) => {
    return (
        <Col className="TextBanner" style={props.style}>
            <div className="contentWrapper">
            <h2>{props.title}</h2>
            { props.style.color === 'white' ? 
            <div className="middleLine white"/>
            : <div className="middleLine"/>}
            <p>{props.content}</p>
            { props.type === 'link' ?
            <span className="sc_txt">{props.linktitle}</span> : 
            <></>
            }
            { props.type === 'button' ?
            <a className="custombutton" href="#">{props.linktitle}</a> : 
            <></>
            }
            </div>
        </Col>
    );
}

export default TextBanner;