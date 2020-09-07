import React from 'react';
import { MdSearch } from 'react-icons/md';
import logo from '../../assets/img/logo-white.png';

// import { Container } from './styles';

function MainHeader() {
    return (
        <>
            <div className="logo">
                <img src={logo} alt="ioasys logo" />
            </div>

            <div className="search">
                <MdSearch />
            </div>
        </>
    )
}

export default MainHeader;