import { Col, Button } from "react-bootstrap";

const TextBanner = (props) => {
    return (
        <div className="contentWrapper TextBanner" style={props.style}>
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
    );
}

export default TextBanner;