import React from 'react'
import NaviBar from '../common/NaviBar'
import SearchField from './SearchField'
import './WelcomePage.scss'


function WelcomePage() {
    return (
        <div className="welcome">
            <NaviBar/>
            <SearchField/>
        </div>
    )
}

export default WelcomePage
