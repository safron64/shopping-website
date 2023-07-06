import Arrivals from './components/arrivals/Arrivals'
import Brands from './components/brands/Brands'
import Discount from './components/discount/Discount'
import Favourite from './components/favourite/Favourite'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Promo from './components/prormo/Promo'
import Subscribe from './components/subscribe/Subscribe'
import Vouchers from './components/vouchers/Vouchers'

function App() {
	return (
		<div className='App'>
			<Header />
			<Promo />
			<Brands />
			<Arrivals />
			<Discount />
			<Favourite />
			<Vouchers />
			<Subscribe />
			<Footer />
		</div>
	)
}

export default App
