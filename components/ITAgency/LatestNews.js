import React from 'react';
import Link from 'next/link';

const LatestNews = () => {
    return (
        <div id="blog" className="blog-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span>Der Blog</span>
					<h2>Aktuelle Beiträge aus dem Blog</h2>
				</div>
				
				<div className="row">
				
					<div className="col-lg-4 col-md-6">
						
						<div className="single-blog-post">
							<div className="blog-img">
								<a href="/blog-details" target="_blank">
									<img src="/images/agency/agency-blog1.jpg" alt="Image" />
								</a>
								<span className="date">29. August 2021</span>
							</div>

							<div className="news-content">
								<div className="admin">
									By: <a href="#">Michael Brunner</a>
								</div>

								<a href="" target="_blank">
									<h3>Technologie hilft Ihnen sich im 2022 abzuheben</h3>
								</a>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  consectetur adipiscing elit.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-blog-post">
							<div className="blog-img">
								<a href="/blog-details" target="_blank">
									<img src="/images/agency/agency-blog2.jpg" alt="Image" />
								</a>
								<span className="date">5. Januar 2021</span>
							</div>

							<div className="news-content">
								<div className="admin">
									By: <a href="#">Oliver Roth</a>
								</div>
 
								<a href="" target="_blank">
									<h3>Haben Sie den richtigen IT-Setup im Unternehmen?</h3>
								</a>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  consectetur adipiscing elit.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
						<div className="single-blog-post">
							<div className="blog-img">
								<a href="" target="_blank">
									<img src="/images/agency/agency-blog3.jpg" alt="Image" />
								</a>
								<span className="date">27. November 2020</span>
							</div>

							<div className="news-content">
								<div className="admin">
									By: <a href="#">Ania Panek</a>
								</div>

								<a href="" target="_blank">
									<h3>Wie man mit der IT die Unternehmenskultur beeinflusst</h3>
								</a>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  consectetur adipiscing elit.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default LatestNews;