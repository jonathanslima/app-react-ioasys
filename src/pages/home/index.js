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
    useEffect(() => { }, [companies])

    const doSearch = function (e) {
        e.preventDefault();
        let itemSearched = document.querySelector('#search').value;

        if (itemSearched.length == 0) {
            alert('Você precisa digitar algum valor na busca')
            return
        }
        setserviceRequest(true)

        let dataRequest = localStorage.getItem('data');
        dataRequest = JSON.parse(dataRequest);


        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("access-token", dataRequest.token);
        myHeaders.append("client", dataRequest.client);
        myHeaders.append("uid", dataRequest.uid);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch(`https://empresas.ioasys.com.br/api/v1/enterprises?name=${itemSearched}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.enterprises) {
                    setCompanies(result.enterprises);
                    setHasCompany(true)
                } else {
                    setHasCompany(false)
                }
            })
            .then(() => { setserviceRequest(false) })
            .catch(error => {
                alert('Ocorreu algum problema tente novamente em alguns instantes')
                console.log('error', error)
            });
    };

    return (
        <>
            {serviceRequest ? <Loader /> : null}
            <header className="header d-flex justify-content-around align-items-center">
                {viewHeader ?
                    <MainHeader changeBar={showSearchBar} /> :
                    <SearchHeader changeBar={showSearchBar} search={doSearch} />}
            </header>

            <div className="container">
                {
                    viewHeader && !hasCompany ?
                        <p className="initial-disclaimer">Clique na busca para iniciar.</p>
                        :
                        <div className="row my-5">
                            {hasCompany ?
                                companies.map((item) => {
                                    return (
                                        <Company key={item.id} dataCompany={item} />
                                    )
                                })
                                :
                                <p className="disclaimer">Nenhuma empresa foi encontrada para a busca realizada.</p>}
                        </div>
                }
            </div>
        </>
    );
}

export default Home;