import React from 'react';
import { MdClose, MdSearch } from 'react-icons/md';

import './index.scss';

function SearchHeader(props) {
    return (
        <form className="form-search">
            <div className="input-group">
                <div className="input-group-prepend" onClick={props.search}>
                    <button className="input-group-text"><MdSearch /></button>
                </div>

                <input type="text" className="form-control searchField" id="search" placeholder="Pesquisar" />

                <div className="input-group-append">
                    <div className="input-group-text" onClick={props.changeBar}><MdClose /></div>
                </div>
            </div>
        </form>
    );
}

export default SearchHeader;