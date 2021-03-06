import { Redirect } from 'react-router-dom';
import { useState, useEffect} from "react";
import { getUserStorage, cleareUserStorage } from '../utils/userStorage';
import { useHistory } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar(){
    const history = useHistory();  
    const [userLoggedIn, setUserLoggedIn] = useState(true);
    const user = getUserStorage('ra_session');

    useEffect(() => {
        if(user){ //check if user is logged in
            setUserLoggedIn(true);
        }
    }, [user])

    function cleareUserHistory(){ //cleare localStore user history and set userLogged in to false
        cleareUserStorage(getUserStorage('ra_session'));
        setUserLoggedIn(false);
        history.replace("/login"); //redirect to login page
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>Lost In Translation</Navbar.Brand>
                { !userLoggedIn ?  //if user is not logged in, redirect to login page
                    <Redirect to="/login" /> : //if user is logged in show navigation
                    <Nav className="navbar-expand justify-content-end">
                        <Nav.Item className="navbar-nav nav-link"><Nav.Link href="/translate">Translate</Nav.Link></Nav.Item>
                        <Nav.Item className="navbar-nav nav-link"><Nav.Link href="/profile">Profile</Nav.Link></Nav.Item>
                        <Nav.Item className="navbar-nav nav-link navbar-brand"><Button variant="outline-light" aria-controls="basic-navbar-nav" onClick= {cleareUserHistory}>Log Out</Button></Nav.Item>
                    </Nav>  }
            </Navbar>
        </div>
    );
};

export default NavigationBar;