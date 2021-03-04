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

export const getTranslationStorage = () => {
    return JSON.parse(localStorage.getItem("list"));
}

export const cleareTranslationStorage = () => {
    localStorage.clear("list");
}