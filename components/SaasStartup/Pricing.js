import React, { Component } from 'react'
import Link from 'next/link';

export default class Pricing extends Component {
    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }
    render() {
        return (
            <div id="pricing" className="pricing-area saas-pricing-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title saas-title">
                        <h2>Wählen Sie ein Abo</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="tab">
                        <div className="row">
                            <div className="col-12">
                                <div className="price-tab">
                                    <ul className="tabs">
                                        <li
                                            className="current"
                                            onClick={(e) => this.openTabSection(e, 'tab1')}
                                        >
                                           monatlich
                                        </li>
                                        <li
                                            onClick={(e) => this.openTabSection(e, 'tab2')}
                                        >
                                           jährlich
                                        </li>
                                    </ul>
                                </div>
                            </div>
        
                            <div className="col-12">
                                <div className="tab_content">
                                    <div id="tab1" className="tabs_item">
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="single-pricing">
                                                    <h3>Standard</h3>
                        
                                                    <div className="price">
                                                        <h2>29.--</h2>
                                                        <span>monatlich</span>
                                                    </div>
                        
                                                    <ul>
                                                        <li>Inklusivleistung 1</li>
                                                        <li>Inklusivleistung 2</li>
                                                        <li>Inklusivleistung 3</li>
                                                        <li>Inklusivleistung 4</li>
                                                    </ul>

                                                    <Link href="#">
                                                        <a className="default-btn">
                                                            Mehr erfahren
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                        
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="single-pricing active">
                                                    <h3>Premium</h3>
                        
                                                    <div className="price">
                                                        <h2>49</h2>
                                                        <span>monatlich</span>
                                                    </div>
                        
                                                    <ul>
                                                       <li>Inklusivleistung 1</li>
                                                        <li>Inklusivleistung 2</li>
                                                        <li>Inklusivleistung 3</li>
                                                        <li>Inklusivleistung 4</li>
                                                    </ul>
                        
                                                    <Link href="#">
                                                        <a className="default-btn">
                                                            Mehr erfahren
                                                        </a>
                                                    </Link>
                        
                                                    <p>Topseller</p>
                                                </div>
                                            </div>
                        
                                            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                                                <div className="single-pricing">
                                                    <h3>Platin</h3>
                        
                                                    <div className="price">
                                                        <h2>79</h2>
                                                        <span>monatlich</span>
                                                    </div>
                        
                                                    <ul>
                                                       <li>Inklusivleistung 1</li>
                                                        <li>Inklusivleistung 2</li>
                                                        <li>Inklusivleistung 3</li>
                                                        <li>Inklusivleistung 4</li>
                                                    </ul>
                        
                                                    <Link href="#">
                                                        <a className="default-btn">
                                                            Mehr erfahren
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div id="tab2" className="tabs_item">
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="single-pricing">
                                                    <h3>Standard</h3>
                        
                                                    <div className="price">
                                                        <h2>129.--</h2>
                                                        <span>jährlich</span>
                                                    </div>
                        
                                                    <ul>
                                                        <li>Inklusivleistung 1</li>
                                                        <li>Inklusivleistung 2</li>
                                                        <li>Inklusivleistung 3</li>
                                                        <li>Inklusivleistung 4</li>
                                                    </ul>

                                                    <Link href="#">
                                                        <a className="default-btn">
                                                            Mehr erfahren
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                        
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="single-pricing active">
                                                    <h3>Premium</h3>
                        
                                                    <div className="price">
                                                        <h2>149</h2>
                                                        <span>jährlich</span>
                                                    </div>
                        
                                                    <ul>
                                                       <li>Inklusivleistung 1</li>
                                                        <li>Inklusivleistung 2</li>
                                                        <li>Inklusivleistung 3</li>
                                                        <li>Inklusivleistung 4</li>
                                                    </ul>
                        
                                                    <Link href="#">
                                                        <a className="default-btn">
                                                            Mehr erfahren
                                                        </a>
                                                    </Link>
                        
                                                    <p>Topseller</p>
                                                </div>
                                            </div>
                        
                                            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                                                <div className="single-pricing">
                                                    <h3>Platin</h3>
                        
                                                    <div className="price">
                                                        <h2>179</h2>
                                                        <span>jährlich</span>
                                                    </div>
                        
                                                    <ul>
                                                       <li>Inklusivleistung 1</li>
                                                        <li>Inklusivleistung 2</li>
                                                        <li>Inklusivleistung 3</li>
                                                        <li>Inklusivleistung 4</li>
                                                    </ul>
                        
                                                    <Link href="#">
                                                        <a className="default-btn">
                                                            Mehr erfahren
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
