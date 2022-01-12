import React, { Component } from 'react'

export default class SidebarDemosModal1 extends Component {
    state = {
        modal: false
    };
 
    closeModal = () => {
        this.props.onClick(this.state.modal);
    }

    render() {
        return (
            <>
                <div className={`demos-side-content ${this.props.active}`}>
                    <div className="modal-header">
                        <h2>Login</h2>
                        <button type="button" className="close" onClick={this.closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div className="modal-body">

                   <div className="contact-form">
                           
                            <form>
                                <div className="row">
                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="email" 
                                                placeholder="Email" 
                                                className="form-control" 
                                                required 
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="password" 
                                                placeholder="Password" 
                                                className="form-control" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    
                                   
                                    <div className="col-lg-12 col-sm-12">
                                        <button type="submit" className="default-btn saas-btn">
                                            Login
                                        </button>

                                       
                                    </div>
                                </div>
                            </form>
                        </div>
                        <br></br><br></br><br></br>

                        <div className="modal-header">
                        <h2>DEMOSEITEN</h2>
                        <button type="button" className="close" onClick={this.closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                         <ul>
                            <li>
                                <div className="demo-item">
                                    <a href="/it-agentur">
                                        <span>IT Firma</span>
                                        <img src="/images/demos/it-agency.jpg" alt="Demos" />
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="demo-item">
                                    <a href="/">
                                        <span>SaaS Firma</span>
                                        <img src="/images/demos/saas-startup.jpg" alt="Demos" />
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="demo-item">
                                    <a href="/personal-portfolio">
                                        <span>Portfolio</span>
                                        <img src="/images/demos/consulting.jpg" alt="Demos" />
                                    </a>
                                </div>
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            </>
        )
    }
}
