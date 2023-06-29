import React from 'react'
import Introduction from './Introduction'
import './Home.css'
import Jobs from './Jobs'
import Overview from './Overview'
import Find from './Find'



export default function HomePage() {
    return (
        <>
            <Introduction />
            <Find/>
            <Overview/>
            <Jobs/>
           

        </>
    )
}
