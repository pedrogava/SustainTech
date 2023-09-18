import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import './formulario.css';
import imagem from '../img/car-logo.png';

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      rememberMe: false,
      error: '', // Adicionamos um campo de erro para exibir mensagens de erro
    };
  }

  componentDidMount() {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const { email, password, rememberMe } = JSON.parse(storedData);
      this.setState({ email, password, rememberMe });
    }
  }

  handleInputChange = (event) => {
    const { id, value, type, checked } = event.target;
    this.setState({ [id]: type === 'checkbox' ? checked : value });
  };

  handleLogin = () => {
    const { email, password } = this.state;

    if (!email) {
      this.setState({ error: 'Por favor, insira um endereço de e-mail válido.' });
      return;
    }

    if (!password) {
      this.setState({ error: 'Por favor, insira a senha.' });
      return;
    }


    const isAuthenticated = true;

    if (isAuthenticated) {
  
      this.setState({ error: '' });


      if (this.state.rememberMe) {
        const formData = { email, password, rememberMe: true };
        localStorage.setItem('formData', JSON.stringify(formData));
      }

  
      this.props.history.push('/home'); 
    } else {
  
      this.setState({ error: 'Autenticação falhou. Verifique suas credenciais.' });
    }
  };

  render() {
    return (
      <section className="container">
        <section className="split-page">
          <div className="left-half"></div>
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
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rememberMe"
                      checked={this.state.rememberMe}
                      onChange={this.handleInputChange}
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
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={this.handleLogin}
                  >
                    Login
                  </button>
                </div>

                <div className="text-center mt-3">
                  {this.state.error && <p className="text-danger">{this.state.error}</p>}
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

export default withRouter(Formulario);
