import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function TranslateForm(props){
    const [word, setWord] = useState("");

    function validateForm() {
        return word.length > 0 || word.length < 40;
    };

    function onSubmitClicked(e){
        props.onClick(word)
    };

    function onWordChanged(e){
        setWord(e.target.value);
    }

    return (
        <Form>
            <div>
                <input autoFocus type="text" placeholder="What you want to translate?" value={word} onChange={ onWordChanged } />
            </div>
            <div>
                <Button type="button" block size="lg" disabled={ !validateForm() } onClick={ onSubmitClicked }>Submit</Button>
            </div>
        </Form>
    );
};

export default TranslateForm;