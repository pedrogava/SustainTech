import React, { Component } from 'react'
import './rodape.css';
import Logo from "../img/Group.png"
import Logo2 from "../img/facebook.png"
import Logo3 from "../img/linkedin.png"
import Logo4 from "../img/instagram.png"
import Logo5 from "../img/youtube.png"
import Logo6 from "../img/ibm.png"


export default class rodape extends Component {
  
    render() {
      return (
        <>
        <footer>
           
              <div>
                <img src={Logo} alt="fiap" title="fiap-img" className="icons-img"/>
              </div>

              <div>
                <ul>
                    <img src={Logo2} alt="facebook" title="facebook-img" className="icons-img2"/>
                    <img src={Logo3} alt="linkedin" title="linkedin-img" className="icons-img2"/>
                    <img src={Logo4} alt="instagram" title="instagram-img" className="icons-img2"/>
                    <img src={Logo5} alt="youtuber" title="youtube-img" className="icons-img2"/>
                </ul>
              </div>

              <div>
                <img src={Logo6} alt="ibm" title="ibm-img" className="icons-img"/>
              </div>

        </footer>
      </>


      )
    }
      


}
