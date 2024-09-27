import React, { useState } from 'react';
import '../scss/ft.scss'
import {Link} from 'react-router-dom'

const Footer= () => {

  return (
    <footer id="ft" className='sectiontop'>
        <div className='d-md-flex px-3 justify-content-between align-items-center'>
            <h2 className='text-center text-md-start'>
                <a href='/'>
                        <img className='logocls' src='./img/logo.png' alt='모슈 로고'/>
                </a>
            </h2>
            <ul className='d-flex m-0 p-0 justify-content-center justify-content-md-end'>
                <li className='border-end'>
                    <Link to="/PRIVACY" className='px-4'> PRIVACY</Link>
                </li>
                <li className='border-end'>
                    <Link to="/HOME" className='px-4'>HOME</Link>
                </li>
                <li className='border-end'>
                    <Link to="/COMPANY" className='px-4'>COMPANY</Link>
                </li>
                <li className='border-end'>
                    <Link to="/AGREEMENT" className='px-4'>AGREEMENT</Link>
                </li>
                <li className='border-end'>
                    <Link to="/GUIDE" className='px-4'>GUIDE</Link>
                </li>
                <li>
                    <Link to="/FOR PARTNERS" className='ps-4'>FOR PARTNERS</Link>
                </li>
            </ul>  
        </div>
        <div className='pb-3 d-flex justify-content-center justify-content-md-between align-items-center px-md-4'>
            <div className='d-none d-md-flex flex-md-column'>
                <div className='text-white'>
                    <h6 className='mb-3'>CUSTOMER SERVICE</h6>
                    <ul className='m-0 p-0'>            
                        <li>TEL 070-4618-2788</li>
                        <li>MON-FRI 09:00~17:00   ㅣ   LUNCH 12:00~13:30</li>
                        <li>SAT/SUN/HOLIDAY CLOSED</li>
                    </ul>
                </div>
                <div className='text-white'>
                    <h6>BANK ACCOUNT</h6>
                    <ul className='m-0 p-0'>
                    
                        <li>기업은행 130-089422-01-019</li>
                        <li>예금주 : 주식회사 아시컴퍼니</li>
                    </ul>  
                </div>
            
            </div>
            <div>
               <div className='text-white d-none d-md-flex flex-md-column text-md-end text-center'>
                <h6>FOLLOW US</h6>
                <ul className='m-0 p-0'>
                    <li>INSTAGRAM</li>
                </ul>
                </div>
                <div className='text-white text-md-end text-center d-flex flex-column align-items-md-end align-items-center'>
                    <h6>COMPANY INFO</h6>
                    <ul className='m-0 p-0'>
                        <li>COMPANY : 주식회사 아시컴퍼니 CEO : 김정권</li>
                        <li>BUSINESS LICENCE : [241-81-01287]</li>
                        <li>ONLINE-LICENCE : 제2021-경기하남-1883</li>
                        <li>[사업자정보확인] CPO : 김정권</li>
                        <li>E-Mail : sales@asicompany.co.kr</li>
                        <li>ADDRESS : 경기도 하남시 광암동 407-2</li>
                    </ul> 
                </div> 
            </div>
        </div> 
         <p className='copyright d-flex justify-content-md-end justify-content-center'>Copyright.mosh! 모슈. All Rights Reserved.</p> 
        
        
        
    </footer>
  );
}

export default Footer;