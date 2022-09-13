import { Form } from 'react-bootstrap';

const OptionInfo = (props) => {
    return (
        <>
        <Form>
            {props.info.map((option) => 
                <Form.Check 
                    type="checkbox"
                    id={`option-${option.OP_MENU_NO}-${option.OP_NO}`}
                    label={`${option.OP_TITLE} (+${option.OP_PRICE})`}
                    onChange={(e) => props.evt(e.currentTarget.checked, option.OP_PRICE)}
                />
            )}
        </Form>
        </>
    );
}

export default OptionInfo;