import './brands.css'
import hm from "./../../fashion-images/brands/HM.png"
import obey from "./../../fashion-images/brands/Obey.png"
import shopify from "./../../fashion-images/brands/Shopify.png"
import lacoste from "./../../fashion-images/brands/Lacoste.png"
import levis from "./../../fashion-images/brands/Levis.png"
import amazon from "./../../fashion-images/brands/Amazon.png"

const Brands = () => {
    return ( 
        <section className="brands">
            <div className="container">
                <ul className='brands__list'>
                    <li> <a href="#!"><img src={hm} alt="hm" /></a> </li>
                    <li> <a href="#!"><img src={obey} alt="obey" /></a> </li>
                    <li> <a href="#!"><img src={shopify} alt="shopify" /></a> </li>
                    <li> <a href="#!"><img src={lacoste} alt="lacoste" /></a> </li>
                    <li> <a href="#!"><img src={levis} alt="levis" /></a> </li>
                    <li> <a href="#!"><img src={amazon} alt="amazon" /></a> </li>
                </ul>
            </div>
        </section>
     );
}
 
export default Brands;