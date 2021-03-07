//set user to localStorage
export const setUserStorage = ( key, value ) => {
    const json = JSON.stringify( value );
    const encrypted = btoa( json );
    localStorage.setItem( key, encrypted );
}

//get user from localStorage
export const getUserStorage = ( key ) => {
    const storedValue = localStorage.getItem( key );
    if (!storedValue){
        return false;
    }
    return JSON.parse(atob( storedValue ));
}

//cleare user data from localStorage
export const cleareUserStorage = ( ) => {
    localStorage.clear();
}