import React from 'react'
import FilterOption from './FilterOption'

export default function FilterItem(props) {

    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id={props.filterIdLabel}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target={"#" + props.filterTarget} aria-expanded="true"
                        aria-controls={props.filterTarget}>
                        <h4>{props.filterHeader}</h4>
                    </button>
                </h2>

                <div id="sem-offered-options" className="accordion-collapse collapse show"
                    aria-labelledby={props.filterIdLabel}>

                    {props.filterOptions.map((option) => (
                        <FilterOption
                            key={option.id}
                            optionName={option.name}
                            optionClass={option.class}
                        />
                    ))}

                </div>
            </div>
        </>
    )
}