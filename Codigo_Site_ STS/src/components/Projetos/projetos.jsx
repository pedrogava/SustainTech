import React, { Component } from 'react'
import '../Projetos/projetos.scss';
import Logo from "../img/logo-nav.png"
import Logo2 from "../img/trafficlight.png"
import Logo3 from "../img/plant.png"

export default class projetos extends Component {
    render() {
        return (
            <section>

                <div className='tittle'>
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
                                    <p>O projeto dos Semáforos Inteligentes propõe uma transformação na gestão do tráfego urbano, utilizando sensores e tecnologia de dados para ajustar dinamicamente os tempos de semáforo, respondendo em tempo real às condições de tráfego. Esta abordagem reduz congestionamentos, prioriza veículos de emergência e melhora a segurança e eficiência das vias urbanas, contribuindo significativamente para uma mobilidade urbana mais sustentável e uma melhor qualidade de vida nas cidades.</p>
                            </div>

                            <div className='box-traffic2'>
                                    <h1>Vantagens</h1>
                                    <p>Os Semáforos Inteligentes trazem benefícios notáveis para as cidades, aliviando congestionamentos, aumentando a segurança no trânsito, e promovendo economia de tempo e custos. Contribui para um ambiente mais limpo, reduzindo emissões de poluentes, e melhora a gestão de tráfego com dados precisos. A capacidade de priorizar emergências e adaptar-se a diferentes situações torna as áreas urbanas mais eficientes e habitáveis, marcando um avanço significativo para cidades inteligentes e sustentáveis.</p>
                            </div>

                            <div className='box-traffic2'>
                                    <h1>Desafio</h1>
                                    <p> A instalação de semáforos inteligentes implica desafios financeiros, técnicos e sociais. Os altos custos iniciais e a manutenção contínua são preocupações significativas. A integração técnica com infraestruturas antigas e a segurança cibernética dos dados coletados são complexas e exigem atenção especial. Além disso, a resistência do público à mudança e a necessidade de coordenação interagencial complicam a implementação, requerendo esforços concertados para educação pública e colaboração institucional. 
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
                                <p>A criação de uma plataforma de software que permite um monitoramento e o gerenciamento eficiente do armazenamento de produtos agrícolas, garantindo a qualidade e a redução de perdas pós-colheita. Além de fornecer recursos para auxiliar os agricultores e operadores de armazéns a tomarem decisões informadas sobre o manejo dos produtos agrícolas, melhorando a eficiência e a rentabilidade. 
                                </p>
                        </div>

                        <div className='box-agro2'>
                                <h1>Vantagens</h1>
                                <p>Este projeto revoluciona o armazenamento agrícola ao elevar a qualidade dos produtos, minimizando perdas pós-colheita. Ele permite decisões mais acertadas no gerenciamento de armazéns, aumenta a eficiência e reduz custos, afastando-se das práticas agrícolas tradicionais destrutivas. Contribui diretamente para combater a fome global, alinhando-se com os objetivos da ONU e reforçando a segurança alimentar, especialmente em regiões remotas e inacessíveis. 
                                </p>
                        </div>

                        <div className='box-agro2'>
                                <h1>Desafio</h1>
                                <p>
                                O projeto agrícola enfrentou desafios significativos, incluindo resistência dos agricultores à adoção de tecnologias inovadoras e os altos custos associados à infraestrutura e equipamentos modernos. Assegurar a qualidade constante dos produtos armazenados provou ser complexo devido a variáveis incontroláveis, como o clima. Além disso, cumprir os padrões de sustentabilidade exigidos pelos objetivos globais demandou uma extensa pesquisa e comprometimento com práticas ecológicas. Apesar dessas barreiras, o projeto persiste como um marco crucial para avançar na segurança alimentar e na sustentabilidade agrícola. </p>
                        </div>
              
                </div>
                    
                </div>

                
            </section>
            
   
        )
    }
}
