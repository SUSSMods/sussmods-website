import React, { useState, useContext, useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox';
import { FiltersContext } from './FiltersContext';

export default function FilterOption(props) {

    const { filters, dispatch } = useContext(FiltersContext);
    const [isChecked, setIsChecked] = useState(filters.some(filter => filter.id === props.id));

    function handleCheck() {

        // update context
        const currentFilterItem = {
            id: props.id,
            header: props.filterHeader,
            option: props.optionName
        };
        
        // if already checked then remove and vice-versa
        if (!isChecked) {
            dispatch({type: 'ADD_FILTER', filterItem: currentFilterItem});
        } else {
            dispatch({type: 'REMOVE_FILTER', filterItem: currentFilterItem});
        }

        // update checkbox
        // setIsChecked(!isChecked);

    };

    useEffect(() => {
        setIsChecked(filters.some(filter => filter.id === props.id));
    }, [filters]
    )



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
