import React from 'react';

const Services = () => {
    return (
        <div id="services" className="sass-services-area pt-100 pb-70">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="services-contents">
							<span className="top-title">Dienstleistungen</span>
							<h2>Service der überzeugt</h2>

							<p>Service der überzeugt t labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit, sed do.</p>

							<img src="/images/saas/saas-service1.png" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6">
						<div className="row">
							<div className="col-lg-6 col-sm-6">
								<div className="sass-single-services-box">
									<i className="flaticon-product"></i>
									<h3>Engineering</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore </p>
								</div>
							</div>

							<div className="col-lg-6 col-sm-6">
								<div className="sass-single-services-box">
									<i className="flaticon-license"></i>
									<h3>Lizenzverwaltung</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore </p>
								</div>
							</div>

							<div className="col-lg-6 col-sm-6">
								<div className="sass-single-services-box">
									<i className="flaticon-secure"></i>
									<h3>Sicherheit</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore </p>
								</div>
							</div>

							<div className="col-lg-6 col-sm-6">
								<div className="sass-single-services-box">
									<i className="flaticon-implement"></i>
									<h3>Planung</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Services;