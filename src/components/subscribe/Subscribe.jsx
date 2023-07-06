import './subscribe.css'
const Subscribe = () => {
	return (
		<section className='subscribe'>
			<div className='container'>
				<h3 className='subscribe__title'>
					JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
				</h3>
				<p className='subscribe__desc'>
					Type your email down below and be young wild generation
				</p>

				<form action='#!' className='subscribe__form'>
					<input
						type='email'
						className='subscribe__input'
						placeholder='Add your email here'
						id='#subscribe-input'
					/>
					<button className='subscribe__button'>SEND</button>
				</form>
			</div>
		</section>
	)
}

export default Subscribe
