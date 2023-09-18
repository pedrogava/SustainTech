import React, { Component } from 'react';
import './contato.css';
import imagem from '../img/tel.png';
import imagem2 from '../img/arrow.png';
import imagem3 from '../img/arrow2.png';

export default class Contato extends Component {
  render() {
    return (
      <section className="container">
        <section className="split-page">
          <div className="box-1">
            {/* ajustando titulo */}
          <h1>Hello, Friend!</h1>

          <h3>If you like us, want to improve or have any suggestions.</h3>

          <h2>Please contact us.</h2>

          <button type="button" className="btn btn-sec btn-lg">
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
                    type="username"
                    id="username"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="E-mail"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="Message"
                    id="Message"
                    className="form-control"
                    placeholder="Message..."
                  />
                </div>
                <div className="text-center mt-4">
                  <button type="button" className="btn btn-primary btn-lg">
                    Send <img src={imagem2} alt="arrow" className="arrow-img" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </section>
    );
  }
}