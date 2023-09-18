import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './contato.css';
import imagem from '../img/tel.png';
import imagem2 from '../img/arrow.png';
import imagem3 from '../img/arrow2.png';

class Contato extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      message: '',
      error: '', // Adicione um campo de erro para exibir mensagens de erro
    };
  }

  handleInputChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSend = () => {
    const { username, email, message } = this.state;

    // Adicione a lógica de validação aqui
    if (!username) {
      this.setState({ error: 'Por favor, insira um nome de usuário válido.' });
      return;
    }

    if (!email || !this.isValidEmail(email)) {
      this.setState({ error: 'Por favor, insira um endereço de e-mail válido.' });
      return;
    }

    if (!message) {
      this.setState({ error: 'Por favor, insira uma mensagem.' });
      return;
    }

    // Se todos os campos estiverem preenchidos corretamente, limpe qualquer erro anterior
    this.setState({ error: '' });

    // Aqui você pode adicionar a lógica de envio do formulário, se necessário

    // Redirecione o usuário para a página inicial (Home)
    this.props.history.push('/home'); // O "history" é fornecido pelo withRouter
  };

  isValidEmail = (email) => {
    // Lógica simples de validação de email
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  render() {
    return (
      <section className="container">
        <section className="split-page">
          <div className="box-1">
            <h1>Hello, Friend!</h1>
            <h3>If you like us, want to improve or have any suggestions.</h3>
            <h2>Please contact us.</h2>
            <button
              type="button"
              className="btn btn-sec btn-lg"
              onClick={this.handleSend}
            >
              Contact us<img src={imagem3} alt="arrow" className="arrow-img" />
            </button>
          </div>

          <div className="box-2">
            <form>
              <div className="form-container">
                <div className="form-container2">
                  <img src={imagem} alt="tel-imagem" className="tel-img" />
                  <h1>CONTACT US</h1>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
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
                  <textarea
                    id="message"
                    className="form-control"
                    placeholder="Message..."
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="text-center mt-4">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={this.handleSend}
                  >
                    Send <img src={imagem2} alt="arrow" className="arrow-img" />
                  </button>
                </div>
                <div className="text-center mt-3">
                  {this.state.error && (
                    <p className="text-danger">{this.state.error}</p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </section>
      </section>
    );
  }
}

export default withRouter(Contato);
