import './favourite.css'

import Card from '../card/Card'
import promo01Img from '../../fashion-images/images/promo-01.jpg'
import promo02Img from '../../fashion-images/images/promo-02.jpg'

const Favourite = () => {
	return (
		<section className='favourite'>
			<div className='container'>
				<div className='favourite__header'>
					<h2 className='title-2'>Young’s Favourite</h2>
				</div>
				<div className='favourite__cards'>
					<Card title='Trending on instagram' img={promo01Img} />
					<Card title='All Under $40' img={promo02Img} />
				</div>
			</div>
		</section>
	)
}

export default Favourite
