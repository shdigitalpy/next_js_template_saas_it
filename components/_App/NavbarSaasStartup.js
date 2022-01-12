import React, { Component } from 'react';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SidebarDemosModal1 from './SidebarDemosModal1';

class NavbarSaasStartup extends Component {
    state = {
        collapsed: true,
        sidebarModal: false
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    // Sidebar Modal
    toggleModal = () => {
        this.setState({
            sidebarModal: !this.state.sidebarModal
        });
    }

    componentDidMount() {
        this._isMounted = true;
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });

        this.menuActiveClass()
    }

    menuActiveClass = () => {
        let mainNavLinks = document.querySelectorAll(".navbar-nav li a");
        window.addEventListener("scroll", () => {
            let fromTop = window.scrollY;
            mainNavLinks.forEach(link => {
                if (link.hash){
                    let section = document.querySelector(link.hash);
            
                    if (
                        section.offsetTop <= fromTop &&
                        section.offsetTop + section.offsetHeight > fromTop
                    ) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                }
            });
        });
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'navbar-collapse collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <>
                <nav id="navbar" className="navbar navbar-expand-md saas-navbar">
                    <div className="container-fluid">
                        <Link href="/">
                            <a className="navbar-brand">
                                <img src="/images/saas/saas-logo.png" alt="logo" />
                            </a>
                        </Link>

                        <button 
                            onClick={this.toggleNavbar}
                            className={classTwo} 
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <AnchorLink 
                                        onClick={this.toggleNavbar} 
                                        offset={() => 100} 
                                        className="nav-link active" 
                                        href="#home"
                                    >
                                        Startseite
                                    </AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink 
                                        onClick={this.toggleNavbar} 
                                        offset={() => -1} 
                                        className="nav-link" 
                                        href="#about-us"
                                    >
                                        Über uns
                                    </AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink 
                                        onClick={this.toggleNavbar} 
                                        offset={() => -1} 
                                        className="nav-link" 
                                        href="#services"
                                    >
                                        Dienstleistungen
                                    </AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink 
                                        onClick={this.toggleNavbar} 
                                        offset={() => -1} 
                                        className="nav-link" 
                                        href="#our-works"
                                    >
                                       Referenzen
                                    </AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink 
                                        onClick={this.toggleNavbar} 
                                        offset={() => -1} 
                                        className="nav-link" 
                                        href="#pricing"
                                    >
                                        Preise
                                    </AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink 
                                        onClick={this.toggleNavbar} 
                                        offset={() => -1} 
                                        className="nav-link" 
                                        href="#blog"
                                    >
                                        Blog
                                    </AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink 
                                        onClick={this.toggleNavbar} 
                                        offset={() => -1} 
                                        className="nav-link" 
                                        href="#contact"
                                    >
                                        Kontakt
                                    </AnchorLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Sidebar Demos Modal */}
                <div className="demo-side-icon">
                    <button type="button" className="modal-btn" 
                       onClick={this.toggleModal}
                    >
                        <span>LOGIN</span>
                    </button>
                </div>

                <SidebarDemosModal1 onClick={this.toggleModal} active={this.state.sidebarModal ? 'show' : ''} />
            </>
        );
    }
}

export default NavbarSaasStartup;
