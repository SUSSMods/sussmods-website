import React from 'react';

function ModuleSideInfo(props) {
    return (
        <div className="module-info-container">
            <div className="module-tag-row">
                <div className="module-tag-container">
                    {props.modCu} CU
                </div>
                <div className="module-tag-container">
                    {props.modSem.toUpperCase()}
                </div>
            </div>
            <h4>Level: <span className="text-body">{props.modLevel}</span></h4>
            <h4>Prerequisites: <span className="text-body">{props.modPrereqs}</span></h4>
            <h4>Language: <span className="text-body">{props.modLang}</span></h4>
            <h4>Presentation Pattern: <span className="text-body">Every {props.modSem}</span></h4>
            <h4>Timetable: <span className="text-body">{props.modTimeTable}</span></h4>
        </div>
    )
}

export default ModuleSideInfo;
