import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 1,
    loop: true,
    margin: 60,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-right-arrow'></i>",
    ],
};

const OurWorks = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div id="our-works" className="our-work-area saas-our-work-area pt-100">
			<div className="container">
				<div className="section-title saas-title">
					<h2>Unsere Arbeit</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
				
                {display ? <OwlCarousel 
                    className="our-work-slider owl-carousel owl-theme"
                    {...options}
                >
					<div className="work-item">
						<a href="#" target="_blank">
							<img src="/images/saas/saas-work-img-1.jpg" alt="Image" />
						</a>
					</div>
					<div className="work-item">
						<a href="#" target="_blank">
							<img src="/images/saas/saas-work-img-2.jpg" alt="Image" />
						</a>
					</div>
                </OwlCarousel> : ''}
			</div>
		</div>
    )
}

export default OurWorks;