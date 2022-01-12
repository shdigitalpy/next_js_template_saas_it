import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div id="home" className="saas-banner-area">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="saas-banner-content">
							<h1><span>Software</span> Lösung für die Medizin</h1>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dignissimos distinctio non incidunt dolorum qui aspernatur, repellat mollitia maiores</p>

                            <Link href="#">
                                <a className="default-btn saas-btn scroll-btn">
                                    Jetzt kennenlernen
                                </a>
                            </Link>
						</div>

						<div className="saas-banner-img">
							<img src="/images/saas/saas-banner-img.png" alt="Image" />

							<div className="banner-shape-1">
								<img src="/images/saas/saas-shape.png" alt="Image" />
							</div>
							<div className="banner-shape-2">
								<img src="/images/saas/saas-shape.png" alt="Image" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default MainBanner;