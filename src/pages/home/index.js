import React, { useState, useCallback, useEffect } from 'react';
import './index.scss';

import MainHeader from '../../components/mainHeader';
import SearchHeader from '../../components/searchHeader';
import Company from '../../components/company';
import Loader from '../../components/loader'

function Home() {
    const [viewHeader, setViewHeader] = useState(true);
    const [hasCompany, setHasCompany] = useState(false);
    const [serviceRequest, setserviceRequest] = useState(false);
    const [companies, setCompanies] = useState([]);

    const showSearchBar = function () { setViewHeader(!viewHeader) };

    return (
        <>
            {serviceRequest ? <Loader /> : null}
            <header className="header d-flex justify-content-around align-items-center">
                {viewHeader ?
                    <MainHeader changeBar={showSearchBar} /> :
                    <SearchHeader changeBar={showSearchBar} />}
            </header>

            <div className="container">
                {
                    viewHeader && !hasCompany ?
                        <p className="initial-disclaimer">Clique na busca para iniciar.</p>
                        :
                        <div className="row my-5">
                            {hasCompany ?
                                <Company />

                                :
                                <p className="disclaimer">Nenhuma empresa foi encontrada para a busca realizada.</p>}
                        </div>
                }
            </div>
        </>
    );
}

export default Home;