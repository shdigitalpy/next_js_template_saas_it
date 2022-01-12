import React from 'react';
import Link from 'next/link';

const FooterITAgency = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="footer-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <Link href="/it-agency">
                                    <a>
                                        <img src="/images/agency/agency-logo.png" alt="Image" />
                                    </a>
                                </Link>
                                <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tetur adipiscing elit.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Kontakt</h3>
                                
                                <ul className="address">
                                    <li>
                                        Bahnhofstrasse 1, 8000 Zürich, Schweiz
                                    </li>
                                    <li>
                                        <a href="mailto:agentur@sh-digital.ch">info@swiss-saas.ch</a>
                                    </li>
                                    <li>
                                        <a href="tel:+41(44)5556655">+41 44 555 66 55</a>
                                        
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Twitter</h3>
                                <p className="twitter-text">Lorem ipsum dolor sittem amet ngcing elit sed eiusmoad <a href="#">www.swiss-saas.ch</a> </p>

                                <div className="twitter">
                                    <i className="flaticon-twitter"></i>
                                    <span>Twitter</span>
                                    <span>5 Tage her</span>
                                </div>
                            </div>
                        </div>

                         <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Registrieren</h3>
                                <p>Registrieren Sie sich für unseren Newsletter.</p>

                                <form className="newsletter-form" data-toggle="validator">
                                    <input type="email" className="form-control" placeholder="E-Mail Adresse" name="EMAIL" required />
        
                                    <button className="send-btn" type="submit">
                                        <i className="bx bx-chevron-right"></i>
                                    </button>
                                </form> 

                                <div className="social-area">
                                    <ul>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://instagram.com/" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://linkedin.com/" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             <div className="copy-right">
                <div className="container">
                    <p>Copyright &copy; {currentYear} Swiss Saas. Designed by <a href="https://www.sh-digital.ch/web-design-agentur" target="_blank">SH Digital</a></p>
                </div>
            </div>
        </>
    );
}

export default FooterITAgency;