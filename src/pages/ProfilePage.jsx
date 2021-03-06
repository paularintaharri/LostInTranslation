import ProfileCard from '../components/ProfileCard';
import NavigationBar from '../components/NavigationBar';
import { Redirect } from 'react-router-dom';
import { getUserStorage, cleareUserStorage } from '../utils/userStorage';
import { cleareTranslationStorage, getTranslationStorage } from '../utils/translationStorage';
import { useHistory } from 'react-router-dom';
import { useState, useEffect} from "react";

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
            <div>
                { !user && <Redirect to="/login" />}
                <p>Profile page. Username: {user.session.username}</p>
                <button onClick= {cleareTranslationHistory}>Cleare history</button>
                <button onClick= {cleareUserHistory}>Log Out</button>
                <table>
                    <tbody>
                        <ProfileCard translationsList={translationsList}/>
                    </tbody>
                </table>
            </div>
        </div> 
    );
};

export default ProfilePage;