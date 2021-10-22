import React, { useState } from 'react'
import { auth } from '../firebase'
import bookworm from '../icons/bookworm.png'
import './NaviBar.scss'

function Avatar() {
    const user = auth.currentUser;
    const [dropdown, setDropdown] = useState(false)
    const toggleMenu = ()=>{
        setDropdown(!dropdown)
    }
    return (
        <div>
            <div onClick={toggleMenu} className="avatar">
            <span><img className="avatar-worm" src={bookworm}  /></span>
            <h3>{user.displayName}</h3>
            {dropdown?<div style={{display:"inline-block"}}><div><button>logout</button></div><div><button>logout</button></div><div><button>logout</button></div></div>:<h1>kapalı</h1>}
        </div>
        
        </div>
    )
}

export default Avatar
