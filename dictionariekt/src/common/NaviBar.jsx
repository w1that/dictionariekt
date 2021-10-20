import React from 'react';
import Avatar from './Avatar';
import LogoText from './LogoText';
import './NaviBar.scss';

function NaviBar() {
    return (
        <div className="navibar">
        <LogoText/>
        <Avatar/>
        </div>
    )
}

export default NaviBar
