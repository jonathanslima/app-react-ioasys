import React from 'react';
import './index.scss';

function Loader() {
    return (
        <div class="service-requesting">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Loader;