import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
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
        <div id="contact" className="contact-area ptb-100 jarallax">
			<div className="container">
				<div className="section-title">
					<span>Kontaktiere uns</span>
					<h2>Jetzt mit uns in Kontakt treten</h2>
				</div>

				<div className="contact-form">
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
										placeholder="Schreiben Sie uns eine Nachricht..." 
										className="form-control" 
										value={contact.text}
										onChange={handleChange} 
										required 
									/>
								</div>
							</div>
							<div className="col-lg-12 col-sm-12">
								<button type="submit" className="default-btn btn-two">
									Abschicken
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
    )
}

export default ContactUs;