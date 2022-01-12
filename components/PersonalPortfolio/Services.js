import React from 'react';

const Services = () => {
    return (
        <div id="services" className="personal-services-area pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="services-content">
							<span>Unser Service</span>
							<h2>Grafik Design</h2>
							<h3>Spreche mit unseren Experten.</h3>
							<a href="tel:+41559995566">055 599 55 66</a>
							<ul>
								<li>Montag bis Freitag</li>
								<li>8:00 Uhr bis 18:00 Uhr</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-8">
						<div className="row">
							<div className="col-lg-6 col-sm-6">
								<div className="single-personal-services">
									<i className="flaticon-product-design"></i>
									<h3>Produktdesign</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sit amet, consectetur adipiscing ipsum dolor sit amet</p>
								</div>
							</div>

							<div className="col-lg-6 col-sm-6">
								<div className="single-personal-services">
									<i className="flaticon-web"></i>
									<h3>Print</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sit amet, consectetur adipiscing ipsum dolor sit amet</p>
								</div>
							</div>

							<div className="col-lg-6 col-sm-6">
								<div className="single-personal-services">
									<i className="flaticon-printer"></i>
									<h3>Web</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sit amet, consectetur adipiscing ipsum dolor sit amet</p>
								</div>
							</div>

							<div className="col-lg-6 col-sm-6">
								<div className="single-personal-services">
									<i className="flaticon-smartphone"></i>
									<h3>App</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sit amet, consectetur adipiscing ipsum dolor sit amet</p>
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