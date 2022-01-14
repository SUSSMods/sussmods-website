import React, { useState } from 'react';
import SaveBtn from './SaveBtn';
import { Link } from 'react-router-dom';

export default function ModuleCard(props) {

    const [showSaveMsg, setShowSaveMsg] = useState(false);

    return (
        <>
            <article className="module-card">
                <h3 className="module-title"><Link to={`/module-info/${props.modCode}`}>{props.modName}</Link></h3>
                <div className="module-tag-btn-row">
                    <div className="module-tag-row">
                        <div className="module-tag-container">
                            {props.modCu} CU
                        </div>
                        <div className="module-tag-container">
                            {props.modSem}
                        </div>
                    </div>
                    
                    <SaveBtn 
                    modCode={props.modCode}
                    setShowSaveMsg={setShowSaveMsg}
                    btnSize="small"
                    />
                    
                </div>
                {showSaveMsg &&
                <small className="saved-removed-text">{props.modCode} has been saved. View saved modules <Link to='/saved-modules'>here.</Link></small>
                }
                <p className="module-description text-body">
                    {props.modDesc}
                </p>
            </article>
        </>
    )
}
