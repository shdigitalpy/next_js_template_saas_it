import React from 'react';
import Link from 'next/link';

const BlogPost = () => {
    return (
        <div id="blog" className="blog-area personal-blog-area pt-100 pb-70">
			<div className="container">
				<div className="section-title personal-title">
					<span>Aktuell</span>
					<h2>Die neusten News</h2>
					<p>Lorem ipsum dolor sit amet, coansectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
				
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="single-blog-post">
							<div className="blog-img">
								<a href="/blog-details" target="_blank">
									<img src="/images/portfolio/portfolio-blog1.jpg" alt="Image" />
								</a>
							</div>

							<div className="news-content">
								<ul className="admin-content">
									<li>
										<i className='bx bxs-user'></i>
										<a href="#" className="admin">Ramona Wessner</a>
									</li>
									<li className="date">
										<i className='bx bx-time'></i>
										<span>27. Mai 2022</span>
									</li>
								</ul>

								<a href="/blog-details" target="_blank">
									<h3>Top 5 Tipps für Ihre Webseite</h3>
								</a>

								<a href="" className="read-more">
									Mehr lesen
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-blog-post">
                            <div className="blog-img">
								<a href="/blog-details" target="_blank">
									<img src="/images/portfolio/portfolio-blog2.jpg" alt="Image" />
								</a>
							</div>

							<div className="news-content">
								<ul className="admin-content">
									<li>
										<i className='bx bxs-user'></i>
										<a href="#" className="admin">Oliver Roth</a>
									</li>
									<li className="date">
										<i className='bx bx-time'></i>
										<span>28. September 2021</span>
									</li>
								</ul>

								<a href="" target="_blank">
									<h3>IT wird kritisch im 2022 für Schweizer KMU</h3>
								</a>

								<a href="" className="read-more">
									Mehr lesen
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
						<div className="single-blog-post">
							<div className="blog-img">
								<a href="/blog-details" target="_blank">
									<img src="/images/portfolio/portfolio-blog3.jpg" alt="Image" />
								</a>
							</div>

							<div className="news-content">
								<ul className="admin-content">
									<li>
										<i className='bx bxs-user'></i>
										<a href="#" className="admin">Franziska Brändle</a>
									</li>
									<li className="date">
										<i className='bx bx-time'></i>
										<span>15. Mai 2020</span>
									</li>
								</ul>

								<a href="" target="_blank">
									<h3>Marketing Techniken für mehr Leads im B2B</h3>
								</a>

								<a href="" className="read-more">
									Mehr lesen
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default BlogPost;