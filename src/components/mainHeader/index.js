import React from 'react';
import { MdSearch } from 'react-icons/md';
import logo from '../../assets/img/logo-white.png';

import { showSearch } from '../searchHeader';

function MainHeader(props) {
    return (
        <>
            <div className="logo">
                <img src={logo} alt="ioasys logo" />
            </div>

            <div className="search" onClick={props.changeBar}>
                <MdSearch />
            </div>
        </>
    )
}

export default MainHeader;