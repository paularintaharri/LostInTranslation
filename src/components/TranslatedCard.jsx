
function TranslatedCard(props){
    const { word } = props; //get the input word
    let character = Array.from(word); //add characters to array
    
    return (
        <div className="translated-card">
            <p>{ word }</p>
        </div>
    );
};

export default TranslatedCard;