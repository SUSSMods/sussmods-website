import React, { useState, useContext, useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox';
import { FiltersContext } from './FiltersContext';

export default function FilterOption(props) {

    const { filters, dispatch } = useContext(FiltersContext);
    const [isChecked, setIsChecked] = useState(false);  

    function handleCheck() {

        // update context
        const currentFilterItem = {
            // cast items to list to use avoid list methods errs
            id: [props.id],
            header: props.filterHeader,
            option: [props.optionName]
        };
        
        // if already checked then remove and vice-versa
        if (!isChecked) {
            dispatch({type: 'ADD_FILTER', filterItem: currentFilterItem});
        } else {
            dispatch({type: 'REMOVE_FILTER', filterItem: currentFilterItem});
        }

    };

    useEffect(() => {
        // update checkbox
        setIsChecked(filters.some(filter => filter.id.includes(props.id)))

    }, [filters, props.id]);

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
