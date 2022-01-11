import React from 'react'
import Heading from './Heading'
import SearchBar from './SearchBar'
import modules from './data'

export default function Header() {

    const mods = modules

    return (
        <>
            <section className="header">
                <Heading 
                mainTitle="All Modules"
                subTitle=""
                />

                <SearchBar data={mods}/>
            </section>
        </>
    )
}
