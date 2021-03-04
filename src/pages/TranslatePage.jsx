import {  } from 'react-router-dom';
import './TranslatePage.css';
import TranslatedCard from '../components/TranslatedCard';
import TranslateForm from '../components/TranslateForm';
import { setTranslationStorage } from '../utils/translationStorage';
import { useState } from "react";

function TranslatePage(){
    const [translateWord, setTranslateWord] = useState("");

    function handleTranslate(word){
        setTranslationStorage(word); //add the translation to localStorage
        setTranslateWord(word);
    }

    return (
        <div>
            <p>translate page</p>
            <TranslateForm onClick={ handleTranslate }/>
            <TranslatedCard word={ translateWord }/>
            
        </div>
    );
};

export default TranslatePage;