import React from 'react';
import Link from 'next/link';

const LatestNews = ({ posts }) => {
    return (
        <div id="blog" className="blog-area saas-blog-area pt-100 pb-70">
			<div className="container">
				<div className="section-title sass-title">
					<h2>Aktuelle Beiträge</h2>
					<p>Lorem ipsum dolor sit amet, coansectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
				
				<div className="row">
					

				<div className="col-lg-4">

						
					<div className="single-blog-post">
						{posts.map(({ title, slug, date, author, featuredImage }) => (

						<div key={title} >
							

							<div className="blog-img">
								<a href={`/blog/${slug}`}>
									<img src={ featuredImage.node.sourceUrl ? featuredImage.node.sourceUrl : ' ' } alt="Image" />
								</a>
							</div>

							 
							<div className="news-content">
							
								<p className="product">
									Kategorie
								</p>

								<a href={`/blog/${slug}`}>
									<h3>{title}</h3>
								</a>

								<ul className="admin-content">
									<li>

										<img src="" alt="Image" />
										
											<a href="#" className="admin">{author.node.firstName} {author.node.lastName}</a>
										
									</li>
									<li className="date">
										<span> {date}</span>
									</li>
								</ul>
								
							</div>

						
						
							
						</div>

							))}

						</div>

					</div>
				</div>
			</div>
		</div>
    )
}

export default LatestNews;