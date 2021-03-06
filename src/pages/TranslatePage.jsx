import { Redirect } from 'react-router-dom';
import './TranslatePage.css';
import TranslatedCard from '../components/TranslatedCard';
import TranslateForm from '../components/TranslateForm';
import NavigationBar from '../components/NavigationBar';
import { setTranslationStorage } from '../utils/translationStorage';
import { getUserStorage } from '../utils/userStorage';
import { useState } from "react";

function TranslatePage(){
    const user = getUserStorage('ra_session');
    const [translateWord, setTranslateWord] = useState("");

    function handleTranslate(word){ 
        setTranslationStorage(word); //add the translation to localStorage
        setTranslateWord(word); //add the translation to translatetWord state
    }

    return (
        <div>
            <NavigationBar />
            <div>
                { !user && <Redirect to="/login" />}
                <h2>Translate word and sentences</h2>
                <TranslateForm onClick={ handleTranslate }/>
                <TranslatedCard word={ translateWord }/>
            </div>
        </div>  
    );
};

export default TranslatePage;