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
            <div>
                <input data-tip={toolTipText} autoFocus type="text" placeholder="What you want to translate?" value={word} onChange={ onWordChanged } />
            </div>
            <div>
                <Button  type="button" block size="lg" disabled={ !validateForm() } onClick={ onSubmitClicked }>Submit</Button>
            </div>
        </Form>
    );
};

export default TranslateForm;