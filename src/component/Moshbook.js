import React from 'react'
import '../scss/moshbook.scss';
import { Link } from 'react-router-dom';

function Moshbook() {
    return (
        <section id='moshboook' className='sectionmargin'>
            <h1 className='fs_pre03 d-flex justify-content-md-center'><span className='point'>mosh!</span>Book</h1>
            <div className='d-flex justify-content-center'>
                <div className='position-relative d-flex justify-content-center align-items-center'>
                  <img src='/img/moshbook/Lookbook.png' alt='룩북' /> 
                  <div className='position-absolute d-flex flex-column align-items-center'>
                        <p className='fs45'>Lookbook</p>
                        <span className='mbcls01'></span>
                        <Link to="/Lookbook"className='mt-2 mbcls02 fs13'>
                            <p>View</p>
                        </Link>
                  </div>
                  
                </div>
                <div className='position-relative d-flex justify-content-center align-items-center'>
                  <img src='/img/moshbook/Recipe.png' alt='레시피' /> 
                  <div className='position-absolute d-flex flex-column align-items-center'>
                        <p className='fs45'>Recipe</p>
                        <span className='mbcls01'></span>
                        <Link to="/Lookbook"className='mt-2 mbcls02 fs13'>
                            <p>View</p>
                        </Link>
                  </div>
                  
                </div>
               
                
            </div>
         </section>
    )
}

export default Moshbook
