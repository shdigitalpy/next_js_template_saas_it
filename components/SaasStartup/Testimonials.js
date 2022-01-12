import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items:1,
    loop:true,
	nav: true,
	mouseDrag: false,
    touchDrag: false,
	dots: false,
	autoplay: true,
	smartSpeed:1500,
	autoplayHoverPause: true,
	navText: [
		"<i class='bx bx-chevron-left'></i>",
		"<i class='bx bx-chevron-right'></i>",
	],
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="saas-testimonial-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="testimonial-title">
							<span>Referenzen</span>
							<h2>Was unsere Kunden sagen</h2>
						</div>

                        {display ? <OwlCarousel 
                            className="saas-testimonial-slider owl-carousel owl-theme"
                            {...options}
                        >
							<div className="testimonial-content">
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repellendus alias libero dolor aspernatur incidunt omnis veritatis ipsa fuga labore excepturi iste illum quos, consequatur sed aliquam, quasi delectus magnam ipsum dolor sit amet consectetur adipisicing elit. Culpa repellendus alias libero dolor.</p>
	
								<h3>Stefan Meier</h3>
								<span>CEO</span>

								<i className="flaticon-quotation quotes-icon"></i>
							</div>

							<div className="testimonial-content">
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repellendus alias libero dolor aspernatur incidunt omnis veritatis ipsa fuga labore excepturi iste illum quos, consequatur sed aliquam, quasi delectus magnam ipsum dolor sit amet consectetur adipisicing elit. Culpa repellendus alias libero dolor.</p>
	
								<h3>Andreas Müller</h3>
								<span>Marketing</span>
								<i className="flaticon-quotation quotes-icon"></i>
							</div>

							<div className="testimonial-content">
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repellendus alias libero dolor aspernatur incidunt omnis veritatis ipsa fuga labore excepturi iste illum quos, consequatur sed aliquam, quasi delectus magnam ipsum dolor sit amet consectetur adipisicing elit. Culpa repellendus alias libero dolor.</p>
	
								<h3>Tim Kunz</h3>
								<span>Geschäftsleiter</span>

								<i className="flaticon-quotation quotes-icon"></i>
							</div>

							<div className="testimonial-content">
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repellendus alias libero dolor aspernatur incidunt omnis veritatis ipsa fuga labore excepturi iste illum quos, consequatur sed aliquam, quasi delectus magnam ipsum dolor sit amet consectetur adipisicing elit. Culpa repellendus alias libero dolor.</p>
	
								<h3>Anna Leuthard</h3>
								<span>Inhaber</span>

								<i className="flaticon-quotation quotes-icon"></i>
							</div>

							
                        </OwlCarousel> : ''}
					</div>
	 
					<div className="col-lg-6">
						<div className="saas-client-images">
							<ul>
								<li>
									<img src="/images/saas/client1.jpg" alt="Image" />
								</li>
								<li>
									<img src="/images/saas/client2.jpg" alt="Image" />
								</li>
								<li>
									<img src="/images/saas/client3.jpg" alt="Image" />
								</li>
								<li>
									<img src="/images/saas/client4.jpg" alt="Image" />
								</li>
								<li>
									<img src="/images/saas/client5.jpg" alt="Image" />
								</li>
								<li>
									<img src="/images/saas/client6.jpg" alt="Image" />
								</li>
							</ul>
						</div>
					</div>
				 
				</div>
			</div>

			<div className="testimonial-bg">
				<img src="/images/saas/saas-testimonial-bg.png" alt="Image" />
			</div>
		</div>
    )
}

export default Testimonials;