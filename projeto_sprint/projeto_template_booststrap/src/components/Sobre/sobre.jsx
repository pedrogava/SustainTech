import React, { Component } from 'react'
import './sobre.css';
import Logo from "../img/logo-nav.png"
import Logo2 from  "../img/logo2.png"
import Logo3 from "../img/semaforo-pic.png"
import Logo4 from "../img/red.png"
import Logo5 from "../img/yellow.png"
import Logo6 from "../img/green.png"


export default class sobre extends Component {
    render() {
        return (
            <section>
            
                <div className='tittle'>
                    <img src={Logo} alt="logo-nav" title="imgtitle-nav" className='img-title'/>
                    <h1>SOBRE</h1>
                </div>


                <div className='main'>


                

                <div className='box-main'>
                    <div>
                        <div className='box-main-prim'>
                            <img src={Logo2} alt="logo2" title="logo2-img" className='logo2'/>
                        </div>
                        
                        <div className='box-main-sec'>

                            <p>We contribute to a more technological and sustainable future by creating intelligent traffic lights</p>

                            <p2>Want to know more about us? Contact US ---</p2> 
                        
                        </div>
                  
                    </div>

                    <div>
                        <div className='box-semaforo'>
                            <div className='box-semaforo2'>
                                <div className='box-semaforo3'>
                                    <img src={Logo4} alt="red" title="red-img" className='traffic-light'/>
                                    <h1>Protect</h1>
                                </div>

                                <div className='box-semaforo3'>
                                    <img src={Logo5} alt="yellow" title="yellow-img" className='traffic-light'/>
                                    <h1>our team</h1>
                                </div>

                                <div className='box-semaforo3'>
                                    <img src={Logo6} alt="green" title="green-img" className='traffic-light'/>
                                    <h1>login</h1>
                                </div>
                            </div>
                            
                            <img src={Logo3} alt="semaforo" title="semaforo-img" className='semaforo-img'/>
                        </div>
                    </div>
                </div>

                <div className='box-main2'>
                
           
                    <div className='box-main2-prim'>
                        <h1>
                        OUR MISSION
                        </h1>
                    </div>

                    <div  className='box-main2-sec'>
                        <h1>
                        MORE
                        </h1>

                    </div>

                    <div  className='box-main2-sec'>
                        <h1>
                        LIFE 
                        </h1>
                    </div>
               

                </div>
        

              </div>
                

                
            </section>
            
   
        )
    }
}
