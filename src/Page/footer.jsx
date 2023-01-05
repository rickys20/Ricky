import React from "react";
import "../css/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faVoicemail } from "@fortawesome/free-solid-svg-icons";


function Footer(){
    return <>
        <footer className="footer" style={{backgroundColor:'white'}}> 
            <div className="icon-position d-flex justify-content-center">
                <a href="https://www.facebook.com/ricky.supriyanto.902"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.linkedin.com/in/rickysupriyanto/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="mailto:rickysupriyanto807@gmail.com?subject=Pertanyaan&body=Halo, Ricky"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="https://www.instagram.com/ricky.s20_/"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://github.com/rickys20"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.youtube.com/@rickysupriyanto732"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="https://wa.me/+6282323995527"><FontAwesomeIcon icon={faWhatsapp} /></a>
            </div>
            
            {/* <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Footer Content</h5>
                    <p>Here you can use rows and columns to organize your footer content.</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0"/>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!">Link 1</a></li>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!">Link 1</a></li>
                    </ul>
                </div>
            </div> */}
        </footer>
    </>
}
export default Footer