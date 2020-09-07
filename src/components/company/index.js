import React from 'react';
import './index.scss';

function Company() {
    return (
        <>
            <div className="py-2 col-xs-12 col-md-6 col-lg-12">
                <div className="company d-flex">
                    <div className="image">
                        <img src="https://empresas.ioasys.com.br/uploads/enterprise/photo/1/240.jpeg" alt="" />
                    </div>

                    <div className="data-company">
                        <h2 className="title"><b>Fluoretiq Limited</b></h2>
                        <p className="description">Health</p>
                        <p className="detail">UK</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Company;