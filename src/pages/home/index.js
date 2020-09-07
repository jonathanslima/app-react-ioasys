import React, { useState } from 'react';
import './index.scss';

import MainHeader from '../../components/mainHeader';
import SearchHeader from '../../components/searchHeader';


function Home() {
    const [viewHeader, setViewHeader] = useState(true);
    return (
        <>
            <header className="header d-flex justify-content-around align-items-center">
                {viewHeader ? <MainHeader /> : <SearchHeader />}
            </header>
        </>
    );
}

export default Home;