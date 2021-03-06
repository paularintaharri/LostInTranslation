import './LoginPage.css';
import { Redirect, useHistory } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { setUserStorage, getUserStorage } from '../utils/userStorage';

function LoginPage(){
    const history = useHistory();
    const user = getUserStorage('ra_session');

    function handleLoginComplete(username){ //set user session to localStore and redirect to translate page
        setUserStorage ('ra_session', {
            session: { username }
        });
        history.replace("/translate");
    }

    return (
        <div className="header">
            { user && <Redirect to="/translate" />}
            <h1>Lost in Translation App</h1>
            <LoginForm  onClick={ handleLoginComplete }/>
        </div>
    );
};

export default LoginPage;