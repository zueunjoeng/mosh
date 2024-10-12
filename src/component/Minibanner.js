import React from 'react'
import '../scss/minibanner.scss'
import { Link } from 'react-router-dom';

function Minibanner() {
    return (
        <section id='minib'>
            <div className='mt-4 justify-content-center align-items-center d-none d-md-flex'>
               <div>
                    <Link to="/refurbished">
                        <img src='/img/minibanner/minibanner01.png' alt='리퍼제품'/>
                    </Link> 
                </div>
                <div>
                    <Link to="/signupevenet">
                        <img src='/img/minibanner/minibanner02.png' alt='회원가입'/>
                    </Link>
                </div>  
            </div>
            <div className='d-flex flex-column d-md-none'>
               <div>
                    <Link to="/refurbished">
                            <img className='mobmini' src='/img/minibanner/mob_minibanner01.png' alt='리퍼제품'/>
                    </Link>   
                </div>
                <div>
                    <Link to="/signupevenet">
                        <img className='mt-1 mobmini' src='/img/minibanner/mob_minibanner02.png' alt='회원가입'/>
                    </Link>
                </div>  
            </div>
        </section>
    )
}

export default Minibanner
