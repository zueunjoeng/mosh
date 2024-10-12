
import Hd from './component/Hd'
import Footer from './component/Footer';
import { Routes, Route  } from 'react-router-dom';
import Mainbanner from './component/Mainbanner';
import Product from './component/Product';
import Minibanner from './component/Minibanner';
import Strength from './component/Strength';
import Moshbook from './component/Moshbook';

import './scss/common.scss';

function App() {
  return (
    <>
     <Hd />
     {/* <Routes>
       <Route path="/about" element={<About />} />
       <Route path="*" element={<NotFound />} />
     </Routes> */}
    <Mainbanner />
    <Product />
    <Minibanner />
    <Strength />
    <Moshbook />
     <Footer/>
     </>

  );
}

export default App;
