import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ReactTooltip from 'react-tooltip';

function TranslateForm(props){
    const [word, setWord] = useState("");
    const toolTipText = "Word length must be 1-40 characters and it must not include spesial characters";
    
    function validateForm() {
        let formIsValid = true;
        if (word.length > 0 && word.length < 40 && word.match(/^[A-Za-z ]+$/)){
            formIsValid = true;
        } else {
            formIsValid = false;
        }
        return formIsValid;
    };

    function onSubmitClicked(e){
        props.onClick(word.toLocaleLowerCase())
        setWord("");
    };

    function onWordChanged(e){
        setWord(e.target.value);
    }

    return (
        <Form>
            <ReactTooltip />
            <Form.Group>
                <Form.Label className="label-text">Write the word</Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Control className="translate-form" autoFocus data-tip={toolTipText} type="text" placeholder="What you want to translate?" value={word} onChange={ onWordChanged }/>
            </Form.Group>
            <Button className="button-green" variant="info" type="button" disabled={ !validateForm() } onClick={ onSubmitClicked }>Translate</Button>
        </Form>
    );
};

export default TranslateForm;