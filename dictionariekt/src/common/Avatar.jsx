import React from 'react'
import bookworm from '../icons/bookworm.png'
import './Avatar.scss'

function Avatar() {
    return (
        <div className="avatar">
            <img className="avatar-worm" src={bookworm}  />
            <h3>Username</h3>
        </div>
    )
}

export default Avatar
