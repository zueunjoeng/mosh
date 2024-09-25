import React, { useState } from 'react';
import '../scss/ft.scss'
import {Link} from 'react-router-dom'

const Footer= () => {

  return (
    <footer id="ft">
        <div className='d-flex justify-content-between align-items-center'>
          <h1>
              <a href='/'>
                <img className='logocls' src='./img/logo.png' alt='모슈 로고'/>
                </a>
            </h1>
        <ul className='d-flex ulcls m-0 p-0'>
            <li>
                <Link to="/PRIVACY"> PRIVACY  </Link>|
            </li>
            <li>
                <Link to="/HOME">  HOME  </Link>|
            </li>
            <li>
                <Link to="/COMPANY">  COMPANY  </Link>|
            </li>
            <li>
                <Link to="/AGREEMENT">  AGREEMENT  </Link>|
            </li>
            <li>
                <Link to="/GUIDE">  GUIDE  </Link>|
            </li>
            <li>
                <Link to="/FOR PARTNERS">  FOR PARTNERS</Link>
            </li>

        </ul>  
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <div>
           <ul>
            <h6>CUSTOMER SERVICE</h6>
            <li>TEL 070-4618-2788</li>
            <li>MON-FRI 09:00~17:00   ㅣ   LUNCH 12:00~13:30</li>
            <li>SAT/SUN/HOLIDAY CLOSED</li>
         </ul>
         <ul>
         <h6>BANK ACCOUNT</h6>
            <li>기업은행 130-089422-01-019</li>
            <li>예금주 : 주식회사 아시컴퍼니</li>
         </ul>  
        </div>
        <div className='righttext'>
           <ul>
            <h6>FOLLOW US</h6>
            <li>INSTAGRAM</li>
         </ul>
         <ul>
         <h6>COMPANY INFO</h6>
            <li>COMPANY : 주식회사 아시컴퍼니 CEO : 김정권</li>
            <li>BUSINESS LICENCE : [241-81-01287]</li>
            <li>ONLINE-LICENCE : 제2021-경기하남-1883</li>
            <li>[사업자정보확인] CPO : 김정권</li>
            <li>E-Mail : sales@asicompany.co.kr</li>
            <li>ADDRESS : 경기도 하남시 광암동 407-2</li>
         </ul> 
         <p className='copyright'>Copyright.mosh! 모슈. All Rights Reserved.</p> 
        </div>  
        </div>
        
        
    </footer>
  );
}

export default Footer;