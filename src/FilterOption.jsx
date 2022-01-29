import React, { useState, useContext, useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox';
import { FiltersContext } from './FiltersContext';
import { camelCase } from 'lodash';

export default function FilterOption(props) {

    const { filters, dispatch } = useContext(FiltersContext);
    const [isChecked, setIsChecked] = useState(true);  

    const filterHeader = camelCase(props.filterHeader);
    const optionName = props.optionName.toString().toLowerCase();

    function handleCheck() {

        // update context
        const currentFilterItem = {
            header: filterHeader,
            option: optionName
        } 

        // if already checked then remove and vice-versa
        if (!isChecked) {
            dispatch({type: 'ADD_FILTER', filterItem: currentFilterItem});
        } else {
            dispatch({type: 'REMOVE_FILTER', filterItem: currentFilterItem});
        }
    }

    useEffect(() => {
        // update checkbox
        setIsChecked(filters[filterHeader].includes(optionName))
    }, [filters]);

    return (
        <div className={props.optionClass}>
            <Checkbox
                className="form-check-input"
                checked={isChecked}
                onChange={handleCheck}
            />
            <label className="form-check-label text-body" htmlFor="flexCheckDefault">
                {props.optionName}
            </label>
        </div>
    )
}
