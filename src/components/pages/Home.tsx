import Navbar from '../layout/Navbar';
import ProductsList from './ProductsList';
import Footer from './../layout/Footer';

function Home() {
     
  return (
    <div className='home'>
        <Navbar/>
        <ProductsList/>
        <Footer/>
    </div>
  )
}

export default Home
