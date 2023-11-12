import React, { useState } from 'react';
import '../Sobre/sobre.scss';
import { Dropdown } from 'react-bootstrap';
import Logo2 from  "../img/logo2.png";
import Logo3 from "../img/semaforo-pic.png";
import Logo4 from "../img/red.png";
import Logo5 from "../img/yellow.png";
import Logo6 from "../img/green.png";

const Sobre = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    return (
        <section>
            <div className='tittle'>
                <h1>SOBRE</h1>
            </div>

            <div className='main'>
                <div className='box-main'>
                    <div>
                        <div className='box-main-prim'>
                            <img src={Logo2} alt="logo2" title="logo2-img" className='logo2'/>
                        </div>

                        <div className='box-main-sec'>
                            <p>Contribuímos para um futuro mais tecnológico e sustentável através da criação de semáforos inteligentes</p>
                            <p2>Quer saber mais sobre nós? Fale Conosco </p2> 
                        </div>
                    </div>

                    <div>
                        <div className='box-semaforo'>
                            <div className='box-semaforo2'>
                                <div className='box-semaforo3'>
                                    <img src={Logo4} alt="red" title="red-img" className='traffic-light'/>
                                    <h1>Trânsito</h1>
                                </div>

                                <div className='box-semaforo3'>
                                    <img src={Logo5} alt="yellow" title="yellow-img" className='traffic-light'/>
                                    <h1>Projeto</h1>
                                </div>

                                <div className='box-semaforo3'>
                                    <img src={Logo6} alt="green" title="green-img" className='traffic-light'/>
                                    <h1>Funcionalidade</h1>
                                </div>
                            </div>
                            
                            <img src={Logo3} alt="semaforo" title="semaforo-img" className='semaforo-img'/>
                        </div>
                    </div>
                </div>

                <div className='box-main2'>
                    <div className='box-main2-prim'>
                        <h1 onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                            NOSSO TIME
                        </h1>
                        {showDropdown && (
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Maior segurança para motoristas e pedestres.</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Fluxo de tráfego melhorado com menos congestionamentos.</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Diminuição da poluição devido a menos emissões veiculares.</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        )}
                    </div>

                    <div className='box-main2-sec'>
                        <h1>MAIS</h1>
                    </div>

                    <div className='box-main2-sec'>
                        <h1>VANTAGENS</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sobre;
