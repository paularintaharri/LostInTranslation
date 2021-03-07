import { useState, useEffect } from 'react'; 

function TranslatedCard(props){
    const { word } = props;
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        setCharacters([...word])
    }, [word])

    const signCharacters = characters.map((character, index) => 
        <img key={index} className="img-fluid" src={`signs/${character}.png`} alt={character}/>
    );

    return (
        <div className="translated-card">
            <ul>
                {signCharacters}
                <p>{word}</p>
            </ul>
        </div>
    );
};

export default TranslatedCard;