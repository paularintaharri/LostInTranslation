import ProfileCard from '../components/ProfileCard';
import ProfileButton from '../components/ProfileButton';
import { Redirect } from 'react-router-dom';
import { getUserStorage } from '../utils/userStorage';

function ProfilePage(){
    const user = getUserStorage('ra_session');
    
    return (
        <div>
            { !user && <Redirect to="/login" />}
            <p>Profile page</p>
            <ProfileButton />
            <ProfileCard />
        </div>
    );
};

export default ProfilePage;