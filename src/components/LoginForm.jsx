import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function LoginForm(props){
    const [name, setName] = useState("");

    function validateForm() {
        return name.length > 0;
    };

    function onSubmitClicked(e){
        props.onClick(name)
    };

    function onNameChanged(e){
        setName(e.target.value.trim());
    }

    return (
        <Form>
            <div>
                <input autoFocus type="text" placeholder="What's your name?" value={name} onChange={ onNameChanged } />
            </div>
            <div>
                <Button type="button" block size="lg" disabled={ !validateForm() } onClick={ onSubmitClicked }>Submit</Button>
            </div>
        </Form>
    );
};

export default LoginForm;