import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'
import Faqs from './Faqs';

const alertContent = () => {
    MySwal.fire({
        title: 'Glückwunsch!',
        text: 'Die Nachricht wurde gesendet',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactUs = () => {
	const [contact, setContact] = useState(INITIAL_STATE);
    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            const response = await axios.post(url, payload);
            console.log(response);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div id="contact" className="contact-area saas-contact-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="contact-form">
							<h2>Anfrage starten</h2>
							<form onSubmit={handleSubmit}>
								<div className="row">
									<div className="col-lg-6 col-sm-6">
										<div className="form-group">
											<input 
												type="text" 
												name="name" 
												placeholder="Name" 
												className="form-control" 
												value={contact.name}
												onChange={handleChange} 
												required 
											/>
										</div>
									</div>
									<div className="col-lg-6 col-sm-6">
										<div className="form-group">
											<input 
												type="text" 
												name="email" 
												placeholder="E-Mail" 
												className="form-control" 
												value={contact.email}
												onChange={handleChange} 
												required 
											/>
										</div>
									</div>
									<div className="col-lg-6 col-sm-6">
										<div className="form-group">
											<input 
												type="text" 
												name="number" 
												placeholder="Telefon" 
												className="form-control" 
												value={contact.number}
												onChange={handleChange} 
												required 
											/>
										</div>
									</div>
									<div className="col-lg-6 col-sm-6">
										<div className="form-group">
											<input 
												type="text" 
												name="subject" 
												placeholder="Betreff" 
												className="form-control" 
												value={contact.subject}
												onChange={handleChange} 
												required 
											/>
										</div>
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="form-group">
											<textarea 
												name="text" 
												cols="30" 
												rows="6" 
												placeholder="Schreiben Sie eine Nachricht..." 
												className="form-control" 
												value={contact.text}
												onChange={handleChange} 
												required 
											/>
										</div>
									</div>
									<div className="col-lg-12 col-sm-12">
										<button type="submit" className="default-btn saas-btn">
											Nachricht senden
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>

					<div className="col-lg-6">
						<Faqs />
					</div>
				</div>
			</div>
		</div>
    )
}

export default ContactUs;