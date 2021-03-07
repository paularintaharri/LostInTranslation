import ProfileCard from '../components/ProfileCard';
import NavigationBar from '../components/NavigationBar';
import { Redirect } from 'react-router-dom';
import { getUserStorage, cleareUserStorage } from '../utils/userStorage';
import { cleareTranslationStorage, getTranslationStorage } from '../utils/translationStorage';
import { useHistory } from 'react-router-dom';
import { useState, useEffect} from "react";
import { Button, Table } from "react-bootstrap";

function ProfilePage(){
    const user = getUserStorage('ra_session');
    const history = useHistory();  
    const [translationsList, setTranslationsList] = useState([]);

    useEffect(() => {
        setTranslationsList(getTranslationStorage());
    }, [])

    function cleareTranslationHistory(){
        setTranslationsList(cleareTranslationStorage());  
    }

    function cleareUserHistory(){
        cleareUserStorage();
        history.replace("/login");
    }
    
    return (
        <div>
        <NavigationBar />
            <div >
                { !user && <Redirect to="/login" />}
                <h2>Profile page</h2>
                <h3>Search history for user: {user.session.username}</h3>
                <Button className="button-green" variant="info" onClick= {cleareTranslationHistory}>Cleare history</Button>
                <Button className="button-green" variant="info" onClick= {cleareUserHistory}>Log Out</Button>
                <Table>
                    <tbody>
                        <ProfileCard translationsList={translationsList}/>
                    </tbody>
                </Table>
            </div>
        </div> 
    );
};

export default ProfilePage;