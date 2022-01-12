import React from 'react';

const FunFacts = () => {
    return (
        <div className="counter-area saas-counter-area pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<i className="flaticon-increase"></i>

							<h2>
                                15 <span className="target">+</span>
							</h2>
	
							<p>Jahre im Geschäft</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<i className="flaticon-success-1"></i>
	
							<h2>
                                200 <span className="target">+</span>
							</h2>
	
							<p>Projekte abgeschlossen</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<i className="flaticon-customer"></i>
	
							<h2>
                                150 <span className="target">+</span>
							</h2>
	
							<p>Kunden global</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<i className="flaticon-success"></i>
	
							<h2>
                                99 <span className="target">%</span>
							</h2>

							<p>Erfolgreich</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default FunFacts;