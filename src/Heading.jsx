import React from 'react'

export default function Heading(props) {
    return (
        <>
            <div className="header-title">
                <h1>{props.mainTitle} {props.subTitle}</h1>
            </div>
        </>
    )
}
