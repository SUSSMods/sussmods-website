import React from 'react'

export default function Footer() {

    const currYear = new Date().getFullYear()

    return (
        <>
            <section className="footer">
                <p className="text-body">© {currYear} SUSSMODS. All Rights Reserved</p>
            </section>
        </>
    )
}
