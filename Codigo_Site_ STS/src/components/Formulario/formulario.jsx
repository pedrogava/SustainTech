import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import '../Formulario/formulario.scss';
import imagem from '../img/car-logo.png';

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      rememberMe: false,
      error: '',
      success: false, // Estado adicionado para rastrear se o login foi bem-sucedido
      showPassword: false, // Estado adicionado para controlar a exibição da senha
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

  toggleShowPassword = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  authenticateUser = (email, password) => {
    return email === "usuario@exemplo.com" && password === "senha123"; // exemplo de lógica fictícia
  };

  handleLogin = () => {
    const { email, password, rememberMe } = this.state;

    if (!email || !this.validateEmail(email)) {
      this.setState({ error: 'Por favor, insira um endereço de e-mail válido.', success: false });
      return;
    }

    if (!password) {
      this.setState({ error: 'Por favor, insira a senha.', success: false });
      return;
    }

    const isAuthenticated = this.authenticateUser(email, password);

    if (isAuthenticated) {
      this.setState({ error: '', success: true });

      if (rememberMe) {
        const formData = { email, password, rememberMe };
        localStorage.setItem('formData', JSON.stringify(formData));
      }

      setTimeout(() => {
        this.props.history.push('/home');
      }, 1000);
    } else {
      this.setState({ error: 'Autenticação falhou. Verifique suas credenciais.', success: false });
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
                  <label htmlFor="password">Senha</label>
                  <div className="input-group">
                    <input
                      type={this.state.showPassword ? "text" : "password"}
                      id="password"
                      className="form-control"
                      placeholder="Senha"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />
                    <div className="input-group-append">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={this.toggleShowPassword}
                      >
                        {this.state.showPassword ? "Ocultar" : "Mostrar"}
                      </button>
                    </div>
                  </div>
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
                      Lembre me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Esqueceu a sua senha?
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
                  {this.state.success && <p className="text-success">Login feito com sucesso!</p>}
                  Não tem uma conta?{' '}
                  <a href="#!" className="link-danger">
                    Cadastre-se
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
