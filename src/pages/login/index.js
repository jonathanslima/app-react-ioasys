import React from 'react';
import { Formik } from 'formik';
import logo from '../../assets/img/logo.png';

// import { Container } from './styles';

function Login() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <main className="main-content">
                        <h1>ioasys</h1>

                        <div className="logo">
                            <img src={logo} alt="ioasys" />
                        </div>

                        <section className="presentation">
                            <h2 className="title text-uppercase">Bem vindo ao <br /> Empresas</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque at voluptatibus debitis quibusdam.</p>
                        </section>

                        <form className="col-md-6 offset-md-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">@</div>
                                </div>
                                <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" />
                            </div>

                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">@</div>
                                </div>
                                <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" />
                            </div>

                            <button type="submit" className="btn btn-primary mb-2">Submit</button>
                        </form>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Login;