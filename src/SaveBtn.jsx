import React, { useState, useEffect, useContext } from 'react'
import { SavedModulesContext } from './SavedModulesContext';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export default function SaveBtn(props) {

    const baseBtnClass = "btn add-rm-mod-btn"

    const saveBtn = {
        btnClass: `${baseBtnClass} ${props.btnSize === "wide"? "btn-lg-icon" : "btn-sm-icon"} primary-btn`,
        btnText: "Save",
        btnIcon: <AddIcon />
    }

    const removeBtn = {
        btnClass: `${baseBtnClass} ${props.btnSize === "wide"? "btn-lg-icon" : "btn-sm-icon"} secondary-btn`,
        btnText: "Remove",
        btnIcon: <DeleteIcon />
    }

    const { savedMods, setSavedMods } = useContext(SavedModulesContext);
    const [btnType, setBtnType] = useState(savedMods.includes(props.modCode)? removeBtn : saveBtn);

    const toggleIsSaved = () => {
        // update context
        setSavedMods(prevSavedMods => {
            if (prevSavedMods.includes(props.modCode)) {
                return prevSavedMods.filter(mod => mod !== props.modCode)
            } else {
                return [props.modCode, ...prevSavedMods];
            }
        });

        // update btn
        setBtnType((prevBtnType) => {
            const newBtnType = (prevBtnType.btnText.toLowerCase() === "save")? removeBtn : saveBtn;
            return newBtnType;
        });

        // update showMsg
        props.setShowSaveMsg((prevShowSaveMsg) => {
            return !prevShowSaveMsg
        })
    };

    useEffect(() => {
        props.setShowSaveMsg(prevShowSaveMsg => {
            return prevShowSaveMsg &&
            savedMods.includes(props.modCode) &&
            btnType.btnText.toLowerCase() === "remove"
        })}, [props, savedMods, btnType.btnText]
    );

    return (
        <>
            <button 
            className={btnType.btnClass}
            onClick={toggleIsSaved}
            >
                {btnType.btnIcon}
                <span>{btnType.btnText}</span>
            </button>
        </>
    )
}