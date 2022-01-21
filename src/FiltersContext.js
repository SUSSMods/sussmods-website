import { createContext, useReducer } from "react";
import filterReducer from "./filterReducer";

export const FiltersContext = createContext();

const FiltersProvider = (props) => {

    const [filters, dispatch] = useReducer(filterReducer, []);

    return (
        <FiltersContext.Provider value={{filters, dispatch}}>
            {props.children}
        </FiltersContext.Provider>
    )
}
 
export default FiltersProvider;