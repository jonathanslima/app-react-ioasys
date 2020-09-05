import React, { useState } from 'react';
import { Formik } from 'formik';
import logo from '../../assets/img/logo.png';
import { MdMailOutline, MdLockOpen, MdInfo, MdVisibility, MdVisibilityOff, LockOpenVariantOutline } from 'react-icons/md';
import './index.scss';
import Loader from '../../components/loader'

// import { Container } from './styles';

function Login() {
    const [serviceRequest, setserviceRequest] = useState(false);

    return (
        <>
            {serviceRequest ? <Loader /> : null}
            <div className="container">
                <div className="row">
                    <main className="main-content col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                        <h1>ioasys</h1>

                        <div className="logo">
                            <img src={logo} alt="ioasys" />
                        </div>

                        <section className="presentation">
                            <h2 className="title text-uppercase">Bem vindo ao <br /> Empresas</h2>
                            <p>Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.</p>
                        </section>

                        <form className="login-form">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><MdMailOutline /></div>
                                </div>
                                <input type="text" className="form-control" autoComplete="off" id="email" placeholder="E-mail" />
                                <div className="input-group-append">
                                    <div className="input-group-text error d-none"><MdInfo /></div>
                                </div>
                            </div>

                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><MdLockOpen /></div>
                                </div>
                                <input type="password" className="form-control" id="password" placeholder="Senha" />
                                <div className="input-group-append">
                                    <div className="input-group-text error d-none"><MdInfo /></div>
                                    <div className="input-group-text d-none"><MdVisibility /></div>
                                </div>
                            </div>

                            <p className="error error-text text-center"><small className="font-weight-bold">Credenciais informadas são inválidas, tente novamente.</small></p>

                            <button type="submit" className="btn btn-main text-white text-uppercase">Entrar</button>
                        </form>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Login;