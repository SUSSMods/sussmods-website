import React, { useState } from 'react'

export default function FilterOption(props) {

    const [isChecked, setIsChecked] = useState(false);

    function handleOnChange() {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <div className={props.optionClass + " align center"}>
                <input className="form-check-input" 
                        type="checkbox" 
                        value={props.optionName} 
                        id={props.optionName}
                        checked={isChecked}
                        onChange={handleOnChange} />
                <label className="form-check-label text-body" htmlFor="flexCheckDefault">
                    {props.optionName}
                </label>
            </div>
        </>
    )
}
