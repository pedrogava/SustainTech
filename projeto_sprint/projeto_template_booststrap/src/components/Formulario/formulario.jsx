import React, { Component } from 'react';
import './formulario.css';
import imagem from '../img/car-logo.png'




export default class Formulario extends Component {
  render() {
    return (
      <section className="container">
        <section className="split-page">
          <div className="left-half">
            
          </div>
          <div className="right-half">
            <form>
              <div className="form-container">
              <img src={imagem} alt="Car-logo-imagem" className="img-logo" />
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="E-mail"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                <div className="form-group d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center mt-4">
                  <button type="button" className="btn btn-primary btn-lg">
                    Login
                  </button>
                </div>

                <div className="text-center mt-3">
                  Don't have an account?{' '}
                  <a href="#!" className="link-danger">
                    Register
                  </a>
                </div>
              </div>
            </form>
          </div>
        </section>
      </section>
    );
  }
}
