import './vouchers.css'
import voucherImg from '../../fashion-images/images/vouchers-img.png'
import appStoreImg from '../../fashion-images/icons/app-store.png'
import googlePlayImg from '../../fashion-images/icons/google-play.png'

const Vouchers = () => {
	return (
		<section className='vouchers'>
			<div className='container'>
				<div className='vouchers__content'>
					<div className='vouchers__text'>
						<h3 className='vouchers__title'>
							DOWNLOAD APP & GET THE VOUCHER!
						</h3>
						<p className='vouchers__desc'>
							Get 30% off for first transaction using Rondovision
							mobile app for now.
						</p>
                        <div className="voucher__donwload">
							<a href="#!"><img src={appStoreImg} alt="app store" /> </a>
                            <a href="#!"> <img src={googlePlayImg} alt="google play" /></a>
            
                        </div>
					</div>
					<div className='vouchers__img'>
                        <img src={voucherImg} alt="voucher" />
                    </div>
				</div>
			</div>
		</section>
	)
}

export default Vouchers
