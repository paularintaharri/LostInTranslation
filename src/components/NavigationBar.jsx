import { Redirect } from 'react-router-dom';
import { useState, useEffect} from "react";
import { getUserStorage, cleareUserStorage } from '../utils/userStorage';
import { useHistory } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

function NavigationBar(){
    const history = useHistory();  
    const [userLoggedIn, setUserLoggedIn] = useState(true);
    const user = getUserStorage('ra_session');

    useEffect(() => {
        if(user){
            setUserLoggedIn(true);
        }
    }, [user])

    function cleareUserHistory(){
        cleareUserStorage(getUserStorage('ra_session'));
        setUserLoggedIn(false);
        history.replace("/login");
    }

    return (
        <Navbar expand="lg">
            <Navbar.Brand>Lost In Translation</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
            { !userLoggedIn ? 
                <Redirect to="/login" />
                :
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/translate">Translate</Nav.Link></Nav.Item> 
                    <Nav.Item><Nav.Link href="/profile">Profile</Nav.Link></Nav.Item>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick= {cleareUserHistory}>Log Out</Navbar.Toggle>
                </Nav>  }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;