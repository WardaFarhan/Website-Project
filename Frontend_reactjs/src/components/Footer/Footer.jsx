import React from 'react';
import "./Footer.css"
import { BsFacebook } from "react-icons/bs"
import { AiFillGooglePlusCircle, AiFillTwitterCircle } from "react-icons/ai"


function Footer(props) {
    return (
        <>
            <div className="row">
                <div className="col-md-12 footerCont">

                    <div className="footer-info">
                        <div className="footer-logo">
                        <h3>Our Address</h3>
                    <address>
		              Saegemuhlenweg 3, 73230<br />
		              Kirchheim Unter Teck<br />
		              Germany<br />
		              <i className="fa fa-phone fa-lg"></i>: +49 152 57451511<br />
		              <i className="fa fa-fax fa-lg"></i>: +91 9319773523<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:brs@books.net">
                         brs@books.net</a>
                    </address>
                        </div>
                        <div className="links-icons">
                            <h3>Follow links</h3>
                            <div className="social-icons">
                                <BsFacebook />
                                <AiFillTwitterCircle />
                                <AiFillGooglePlusCircle />
                            </div>
                        </div>
                    </div>

                    <div className="useful-links">
                        <div className="mainheading">
                            <h3>Usefull Links</h3>
                        </div>
                        <div className="links-data">
                            <div className="left-links">
                                <a href="/">Home</a>
                                <a href="/">About</a>
                                <a href="/">Log in</a>
                            </div>
                            <div className="right-links">
                                <a href="/">Home</a>
                                <a href="/">About</a>
                                <a href="/">Log in</a>
                            </div>
                        </div>
                    </div>
                    <div className="subscribe">
                        <h3>Subscribe for more</h3>
                        <p>This platform will help you find books of your choice in less than a minute. So give it a try!!</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div class="footer-copyright">
                        <div class="footer-copyright-wrapper">
                            <p class="footer-copyright-text">
                                <a class="footer-copyright-link" href="/" target="_self"> ©2023. | Designed By: Warda Farhan. | All copyrights reserved. </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;