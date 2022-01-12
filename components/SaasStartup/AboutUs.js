import React from 'react';

const AboutUs = () => {
    return (
        <div id="about-us" className="new-services-area ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="new-services-img">
							<img src="/images/saas/saas-services-img.png" alt="Image" />

							<div className="new-services-shape">
								<img src="/images/saas/saas-shape.png" alt="Image" />
							</div>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="new-services-content">
							<h2>Unsere Lösung erfüllt Kundenbedürfnisse</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus commodo viverra consectetur adipiscing elit, sed do eiusmod.</p>

							<p>maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit, sed do.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default AboutUs;