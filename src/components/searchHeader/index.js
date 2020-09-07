import React from 'react';
import { MdClose, MdSearch } from 'react-icons/md';

import './index.scss';

function SearchHeader() {
    return (
        <form className="form-search">
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text"><MdSearch /></div>
                </div>

                <input type="text" className="form-control searchField" id="search" placeholder="Pesquisar" />

                <div className="input-group-append">
                    <div className="input-group-text"><MdClose /></div>
                </div>
            </div>
        </form>
    );
}

export default SearchHeader;