import { createContext, useReducer } from "react";
import filterReducer from "./filterReducer";
import filters from './filters'
import { camelCase } from 'lodash';

export const FiltersContext = createContext();

export const defaultFilters = Object.assign(
    {}, ...(filters.map(f => (
        { [camelCase(f.header)]: f.options.map(opt => opt.name.toString().toLowerCase()) }) 
        ))
    )

const FiltersProvider = (props) => {

    const [filters, dispatch] = useReducer(filterReducer, defaultFilters);

    return (
        <FiltersContext.Provider value={{filters, dispatch}}>
            {props.children}
        </FiltersContext.Provider>
    )
}
 
export default FiltersProvider;