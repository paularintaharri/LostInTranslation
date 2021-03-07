import React from 'react'
import TranslatedCard from '../components/TranslatedCard';

class ProfileCard extends React.Component {

    render (){
        if (this.props.translationsList) {
            return (this.props.translationsList.map((entry, index) => (
                <tr key={index}>
                    <td id="translation"><TranslatedCard word={ entry }/></td>
                </tr>
                ))
            ) 
        } return (<p>No translations</p>)
    }      
};

export default ProfileCard;