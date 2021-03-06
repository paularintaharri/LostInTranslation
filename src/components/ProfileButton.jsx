import { cleareTranslationStorage } from '../utils/translationStorage';
import { cleareUserStorage } from '../utils/userStorage';
import { useHistory } from 'react-router-dom';

function ProfileButton(){
    const history = useHistory();

    function cleareTranslationHistory(){
        cleareTranslationStorage();
    }

    function cleareUserHistory(){
        cleareUserStorage();
        history.replace("/login");
    }

    return (
        <div className="profile-buttons">
            <button onClick= {cleareTranslationHistory}></button>
            <button onClick= {cleareUserHistory}></button>
        </div>
    );
};

export default ProfileButton;