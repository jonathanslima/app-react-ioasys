import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import logo from '../../assets/img/logo.png';
import { MdMailOutline, MdLockOpen, MdInfo, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import './index.scss';
import Loader from '../../components/loader'
import { Redirect } from 'react-router-dom';

function Login() {
    const [serviceRequest, setserviceRequest] = useState(false);
    const [errorField, setErrorField] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    const seePass = function (class1, class2, type) {
        document.querySelector(class1).classList.add('d-none')
        document.querySelector(class2).classList.remove('d-none')
        document.querySelector('#password').setAttribute('type', type)
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            email: yup.string()
                .required('É necessário preencher um email')
                .email('É necessário preencher o email corretamente'),

            password: yup.string()
                .required('É necessário preencher uma senha')
                .min(6, 'A senha deve ter no mínimo 6 caracteres')
        }),
        onSubmit: values => {
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify({ "email": values.email, "password": values.password })
            };

            let obj;

            fetch("https://empresas.ioasys.com.br/api/v1/users/auth/sign_in", requestOptions)
                .then(response => {
                    setErrorField(false)
                    setserviceRequest(true)
                    document.querySelector('#error-login').classList.add('d-none');

                    try {
                        obj = {
                            token: response.headers.get('access-token'),
                            uid: response.headers.get('uid'),
                            client: response.headers.get('client'),
                        };
                        return response.json();

                    } catch {
                        setserviceRequest(false)
                        setErrorField(true)
                        document.querySelector('#error-login').classList.remove('d-none');
                    }

                })
                .then(res => {
                    if (res.success) {
                        setserviceRequest(false);
                        obj = { ...res, ...obj };
                        setIsLogged(true);
                        return obj

                    } else {
                        setserviceRequest(false)
                        setErrorField(true)
                        document.querySelector('#error-login').classList.remove('d-none');
                    }

                })
                .then(() => localStorage.setItem('data', JSON.stringify(obj)))
                .catch(error => {
                    setserviceRequest(false);
                    setErrorField(true)
                    document.querySelector('#error-login').classList.remove('d-none')
                });
        }
    })

    return (
        <>
            {isLogged === true ? <Redirect to="/home" /> : null}
            {serviceRequest ? <Loader /> : null}
            {errorField ?
                [...document.querySelectorAll('.md-info')].map(function (item) { item.classList.remove('d-none') })
                :
                [...document.querySelectorAll('.md-info')].map(function (item) { item.classList.add('d-none') })
            }
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

                        <form onSubmit={formik.handleSubmit} className="login-form">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><MdMailOutline /></div>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    placeholder="E-mail"
                                    {...formik.getFieldProps('email')}
                                    onBlur={() => {
                                        setErrorField(false)
                                        document.querySelector('#error-login').classList.add('d-none')
                                    }} />

                                <div className="input-group-append">
                                    <div className="input-group-text error md-info d-none"><MdInfo /></div>
                                </div>
                            </div>

                            {formik.touched.email ?
                                <p className="error error-text text-center"><small className="font-weight-bold">{formik.errors.email}</small></p>
                                :
                                null
                            }

                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><MdLockOpen /></div>
                                </div>

                                <input
                                    type="password"
                                    className="form-control"
                                    {...formik.getFieldProps('password')}
                                    id="password"
                                    placeholder="Senha"
                                    onFocus={() => {
                                        document.querySelector('.md-info').classList.add('d-none')
                                    }}
                                />
                                <div className="input-group-append">
                                    <div
                                        className="input-group-text md-view-off"
                                        onClick={() => { seePass('.md-view-off', '.md-view', 'text') }}
                                    >
                                        <MdVisibilityOff />
                                    </div>

                                    <div
                                        className="input-group-text md-view d-none"
                                        onClick={() => { seePass('.md-view', '.md-view-off', 'password') }}
                                    >
                                        <MdVisibility />
                                    </div>

                                    <div className="input-group-text error md-info d-none"><MdInfo /></div>
                                </div>
                            </div>

                            {formik.touched.password ?
                                <p className="error error-text text-center"><small className="font-weight-bold">{formik.errors.password}</small></p>
                                : null}

                            <p id="error-login" className="d-none error error-text text-center"><small className="font-weight-bold">Credenciais informadas são inválidas, tente novamente.</small></p>

                            <button disabled={!formik.isValid} type="submit" className="btn btn-main text-white text-uppercase">Entrar</button>
                        </form>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Login;