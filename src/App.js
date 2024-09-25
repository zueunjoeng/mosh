
import Hd from './component/Hd'
import Footer from './component/Footer';
import { Routes, Route  } from 'react-router-dom';

import './scss/common.scss';

function App() {
  return (
    <>
     <Hd />
     {/* <Routes>
       <Route path="/about" element={<About />} />
       <Route path="*" element={<NotFound />} />
     </Routes> */}
     <Footer/>
     </>
   
       
  );
}

export default App;
