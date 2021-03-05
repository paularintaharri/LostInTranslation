import React from 'react'
import { getTranslationStorage } from '../utils/translationStorage';
import TranslatedCard from '../components/TranslatedCard';

class ProfileCard extends React.Component {

    state = {
        inputWords: getTranslationStorage()
    }
    
    render (){
        if (this.state.inputWords) {
            return (this.state.inputWords.map((entry, index) => (
                <tr key={index}>
                    <td id="wordToTranslate">{entry}</td>
                    <td id="translation"><TranslatedCard word={ entry }/></td>
                </tr>
                ))
            ) 
        } return (<p>No traslations on the list</p>)
    }      
};

export default ProfileCard;