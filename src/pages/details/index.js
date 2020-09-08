import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
import './index.scss';

function Details() {
    const [detail, setDetail] = useState();
    const [counter, setCounter] = useState(0);

    const retrieveData = () => {
        let dataRequest = localStorage.getItem('data');
        if (!dataRequest) return
        dataRequest = JSON.parse(dataRequest);
        let id = window.location.href.split("?id=")[1];
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("access-token", dataRequest.token);
        myHeaders.append("client", dataRequest.client);
        myHeaders.append("uid", dataRequest.uid);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch(`https://empresas.ioasys.com.br/api/v1/enterprises/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setDetail(result);
            })
            // .then(() => { setserviceRequest(false) })
            .catch(error => {
                alert('Ocorreu algum problema tente novamente em alguns instantes')
                console.log('error', error)
            });
    };

    useEffect(() => {
        retrieveData();
    }, [counter])

    return (
        <>
            {!localStorage.getItem('data') ? <Redirect to="/login" /> : null}
            <header className="header d-flex justify-content-start pl-5 text-white align-items-center font-weight-bold">
                <Link to="/home" className="text-white"><MdKeyboardBackspace /></Link>
                {detail ?
                    <span className="pl-5">{detail.enterprise.enterprise_name}</span>

                    : null}
            </header >

            {detail ?
                <div className="container">
                    <div className="row">
                        <div className="card-box mt-5">
                            <div className="image-box">
                                <img className="image" src={`https://empresas.ioasys.com.br${detail.enterprise.photo}`} alt="" />
                            </div>

                            <p className="description">
                                {detail.enterprise.description}
                            </p>
                        </div>
                    </div>
                </div>
                : null}
        </>
    );
}

export default Details;