import './footer.css'
import fbImg from '../../fashion-images/socials/fb.svg'
import inImg from '../../fashion-images/socials/in.svg'
import igImg from '../../fashion-images/socials/inst.svg'
import twImg from '../../fashion-images/socials/tw.svg'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__row'>
					<div className='footer__info'>
						<div className='footer__logo'>FASHION</div>
						<div className='footer__info-text'>
							Complete your style with awesome clothes from us.
						</div>
						<div className='footer__socials'>
							<a href='#!'>
								<img src={fbImg} alt='fb' />
							</a>
							<a href='#!'>
								<img src={inImg} alt='in' />
							</a>
							<a href='#!'>
								<img src={igImg} alt='ig' />
							</a>
							<a href='#!'>
								<img src={twImg} alt='tw' />
							</a>
						</div>
					</div>
					<div className='footer__nav'>
						<div className='footer__nav-block'>
							<h3 className='footer__nav-block-title'>Company</h3>
							<ul>
								<li>
									<a href='#!'>About</a>
								</li>
								<li>
									<a href='#!'>Contact us</a>
								</li>
								<li>
									<a href='#!'>Support</a>
								</li>
								<li>
									<a href='#!'>Careers</a>
								</li>
							</ul>
						</div>
						<div className='footer__nav-block'>
							<h3 className='footer__nav-block-title'>
								Quick Link
							</h3>
							<ul>
								<li>
									<a href='#!'>Share Location</a>
								</li>
								<li>
									<a href='#!'>Orders Tracking</a>
								</li>
								<li>
									<a href='#!'>Size Guide</a>
								</li>
								<li>
									<a href='#!'>FAQs</a>
								</li>
							</ul>
						</div>
						<div className='footer__nav-block'>
							<h3 className='footer__nav-block-title'>Legal</h3>
							<ul>
								<li>
									<a href='#!'>Terms & conditions</a>
								</li>
								<li>
									<a href='#!'>Privacy Policy</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
