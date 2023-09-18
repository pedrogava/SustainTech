import React, { Component } from 'react'
import './projetos.css';
import Logo from "../img/logo-nav.png"
import Logo2 from "../img/trafficlight.png"
import Logo3 from "../img/plant.png"

export default class projetos extends Component {
    render() {
        return (
            <section>

                <div className='tittle'>
                    <img src={Logo} alt="logo-nav" title="imgtitle-nav" className='img-title'/>
                    <h1>PROJETOS</h1>
                </div>
            
                <h1>Semaforo inteligente</h1>
                <div className='box-traffic'>
                    <div className='img1'>
                        <img src={Logo2} alt="trafficlight" title="trafficligth" className='trafficlight'/>
                    </div>
                    <div >

                     
                            <div className='box-traffic2'>
                                    <h1>Funcionalidade</h1>
                                    <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. 
                                    </p>
                            </div>

                            <div className='box-traffic2'>
                                    <h1>Vantagens</h1>
                                    <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. 
                                    </p>
                            </div>

                            <div className='box-traffic2'>
                                    <h1>Desafio</h1>
                                    <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. 
                                    </p>
                            </div>

                      
                       
    
                    </div>

                </div>




                <h1>Controlador agrícola</h1>
                <div className='box-agro'>
                    <div className='img2'>
                        <img src={Logo3} alt="Agro" title="Agro" className='agro'/>
                </div>
                <div>

                        <div className='box-agro2'>
                                <h1>Funcionalidade</h1>
                                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. 
                                </p>
                        </div>

                        <div className='box-agro2'>
                                <h1>Vantagens</h1>
                                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. 
                                </p>
                        </div>

                        <div className='box-agro2'>
                                <h1>Desafio</h1>
                                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. 
                                </p>
                        </div>
              
                </div>
                    
                </div>

                
            </section>
            
   
        )
    }
}
