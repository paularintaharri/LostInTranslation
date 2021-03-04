import { getTranslationStorage } from '../utils/translationStorage';

function ProfileCard(){

    const inputword = getTranslationStorage();

    return (
        <div className="profile-card">
            <p>profile card</p>
            {inputword}
        </div>
    );
};

export default ProfileCard;