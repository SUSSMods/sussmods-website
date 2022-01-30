import { createContext, useState, useEffect } from "react";

export const SavedModulesContext = createContext([]);

const SavedModulesProvider = (props) => {
    const localSavedMods = localStorage.getItem("savedMods");
    const [savedMods, setSavedMods] = useState([]);

    // update savedMods arr
    useEffect(() => {
        if (localSavedMods) {
            setSavedMods(JSON.parse(localSavedMods));
        }
        // eslint-disable-next-line
    }, []);

    // update local storage
    useEffect(() => {
        localStorage.setItem('savedMods', JSON.stringify(savedMods))
        // eslint-disable-next-line
    }, []);

    return (
        <SavedModulesContext.Provider value={{savedMods, setSavedMods}}>
            {props.children}
        </SavedModulesContext.Provider>
    )
}

export default SavedModulesProvider;