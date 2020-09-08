import React from 'react';
import './index.scss';

function Loader() {
    return (
        <div className="service-requesting">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Loader;