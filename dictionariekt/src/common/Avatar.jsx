import React from 'react'
import bookworm from '../icons/bookworm.png'

function Avatar() {
    return (
        <div className="avatar">
            <span><img className="avatar-worm" src={bookworm}  /></span>
            <h3>Username</h3>
        </div>
    )
}

export default Avatar
