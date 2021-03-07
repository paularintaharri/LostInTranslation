//set translations to localStorage list
export const setTranslationStorage = (word) => {
    let list = [];
    if (localStorage.getItem("list") != null) {
        list = JSON.parse(localStorage.getItem("list"));
        if(list.length >= 10){
            list.shift();
        }
    }
    list.push(word);
    localStorage.setItem("list", JSON.stringify(list));
}

//get translations from localStorage
export const getTranslationStorage = () => {
    return JSON.parse(localStorage.getItem("list"));
}

//remove all translations from localStorage
export const cleareTranslationStorage = () => {
    localStorage.removeItem("list");
}