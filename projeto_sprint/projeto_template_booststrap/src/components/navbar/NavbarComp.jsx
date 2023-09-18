import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../home/Home";
import Projetos from "../Projetos/projetos";
import Sobre from "../Sobre/sobre";
import Formulario from "../Formulario/formulario";
import Contato from "../Contato/contato";
import './Navbar.css';
import Logo from "../img/logo-nav.png"
            


export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>

            <Navbar expand="lg" className="navbar-custom">
              
            <img src={Logo} alt="logo-nav" title="imgtitle-nav"/>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
              
                <Nav.Link style={{color:'white'}} href="/home">Home</Nav.Link>
                <Nav.Link style={{color:'white'}} href="/projetos">Projetos</Nav.Link>
                <Nav.Link style={{color:'white'}} href="/sobre">Sobre</Nav.Link>
                <Nav.Link style={{color:'white'}} href="/Formulario">Login</Nav.Link>
                <Nav.Link style={{color:'white'}} href="/contato">Contato</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
            <Switch>

            <Route exact path="/Sobre">
                <Sobre />
              </Route>     

              <Route exact path="/Projetos">
                <Projetos />
              </Route>

              <Route exact path="/formulario">
                <Formulario/>
              </Route>

               <Route exact path="/Contato">
                <Contato />
               </Route>     
              
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </div>
      </Router>
    );
  }
}
