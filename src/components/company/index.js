import React from 'react';
import './index.scss';

function Company(props) {
    return (
        <>
            <div data-id={props.dataCompany.id} className="py-2 col-xs-12 col-md-6 col-lg-12">
                <div className="company d-flex">
                    <div className="image">
                        <img src={`https://empresas.ioasys.com.br${props.dataCompany.photo}`} alt="" />
                    </div>

                    <div className="data-company">
                        <h2 className="title"><b>{props.dataCompany.enterprise_name}</b></h2>
                        <p className="description">{props.dataCompany.enterprise_type.enterprise_type_name}</p>
                        <p className="detail">{props.dataCompany.country}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Company;