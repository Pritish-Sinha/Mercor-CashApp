import './App.css';
import Hero from './pages/banner'
import Payments from './pages/payment'
import Banking from './pages/bank'
import Boost from './pages/card'
import Investing from './pages/invest'
import FooterMobile from './pages/footer'

function App() {

  return (
    <>
      <div className='snap-y snap-mandatory h-[100vh] overflow-y-scroll m-0 smlap:hidden'>
        <Hero/>
        <Payments/>
        <Banking/>
        <Boost/>
        <Investing/>
      </div>
      <div className='snap-y snap-mandatory h-[100vh] overflow-y-scroll m-0 revsmlap:hidden'>
        <Hero/>
        <Payments/>
        <Banking/>
        <Boost/>
        <Investing/>
        <FooterMobile/>
      </div>
    </>
  );
}

export default App;
