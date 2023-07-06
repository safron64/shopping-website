import './discount.css'
import promoImg from './../../fashion-images/images/promo-img-PhotoRoom.png-PhotoRoom.png'
import star1 from './../../fashion-images/images/Star 5.svg'
import star2 from './../../fashion-images/images/Star 6.svg'
import star3 from './../../fashion-images/images/Star 7.svg'
import star4 from './../../fashion-images/images/Star 8.svg'


const Discount = () => {
	return (
		<section className='discount'>
			<div className='container'>
				<div className='discount__content'>
					<div className='discount__img'>
						<img src={promoImg} alt='promo'  className='discount__img-item'/>
						<img src={star1} alt='star' className='star-1' />
						<img src={star2} alt='star' className='star-2' />
						<img src={star3} alt='star' className='star-3' />
						<img src={star4} alt='star' className='star-4' />
					</div>
					<div className='discount__text'>
						<h2 className='discount__title'>
							<span className='highlight'>
								<span>PAYDAY</span>
							</span>
							SALE NOW
						</h2>
						<p className='discount__desc'>
							Spend minimal $100 get 30% off voucher code for your
							next purchase
						</p>
						<div className='discount__date'>
							1 June - 10 June 2021
						</div>
						<div className='discount__link'>
							*Terms & Conditions apply
						</div>
						<a className='discount__btn' href='#!'>
							SHOP NOW
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Discount
