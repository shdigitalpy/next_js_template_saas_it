import React from 'react';
import Link from 'next/link';

const TeamMember = () => {
    return (
        <div className="team-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span>Unser Team</span>
					<h2>Unsere IT Spezialisten</h2>
				</div>

				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="single-team">
							<img src="/images/agency/agency-team-img1.jpg" alt="Image" />

							<div className="team-content">
								<h3>André</h3>
								<span>Entwickler</span>

								<ul>
									<li>
										<a href="https://twitter.com/" target="_blank">
											<i className="bx bxl-twitter"></i>
										</a>
									</li>
									<li>
										<a href="https://instagram.com/" target="_blank">
											<i className="bx bxl-instagram"></i>
										</a>
									</li>
									<li>
										<a href="https://facebook.com/" target="_blank">
											<i className="bx bxl-facebook"></i>
										</a>
									</li>
									<li>
										<a href="https://linkedin.com/" target="_blank">
											<i className="bx bxl-linkedin"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-team">
							<img src="/images/agency/agency-team-img2.jpg" alt="Image" />

							<div className="team-content">
								<h3>Patrick</h3>
								<span>UX/UI Designer</span>

								<ul>
									<li>
										<a href="https://twitter.com/" target="_blank">
											<i className="bx bxl-twitter"></i>
										</a>
									</li>
									<li>
										<a href="https://instagram.com/" target="_blank">
											<i className="bx bxl-instagram"></i>
										</a>
									</li>
									<li>
										<a href="https://facebook.com/" target="_blank">
											<i className="bx bxl-facebook"></i>
										</a>
									</li>
									<li>
										<a href="https://linkedin.com/" target="_blank">
											<i className="bx bxl-linkedin"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
						<div className="single-team">
							<img src="/images/agency/agency-team-img3.jpg" alt="Image" />

							<div className="team-content">
								<h3>Stefan</h3>
								<span>IT Manager</span>

								<ul>
									<li>
										<a href="https://twitter.com/" target="_blank">
											<i className="bx bxl-twitter"></i>
										</a>
									</li>
									<li>
										<a href="https://instagram.com/" target="_blank">
											<i className="bx bxl-instagram"></i>
										</a>
									</li>
									<li>
										<a href="https://facebook.com/" target="_blank">
											<i className="bx bxl-facebook"></i>
										</a>
									</li>
									<li>
										<a href="https://linkedin.com/" target="_blank">
											<i className="bx bxl-linkedin"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default TeamMember;