import React, { useState } from 'react';
import '../scss/hd.scss'
import {Link} from 'react-router-dom'
import dash from '../svg/line.svg'
import chervon from '../svg/chervon.svg'
import closebtn from '../svg/x.svg'

const Hd = () => {
  const [isOpen, setIsOpen] = useState(false); // 메뉴 상태 관리
  const [isDepth, setIsDepth] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDepth = (link) => {
    // 클릭된 링크가 이미 활성화된 경우 비활성화, 아니면 활성화
    setIsDepth(isDepth === link ? null : link);
  };


  return (
    <header id="hd">
        <div className='position-relative '>
          <div className='d-flex flex-md-column justify-content-md-center px-4 justify-content-between align-items-center'>
            <h1>
              <a href='/'>
                <img className='logocls' src='./img/logo.png' alt='모슈 로고'/>
                </a>
            </h1>
            <div className='d-md-none d-flex'>
              <Link to="/cart" className='me-2'>
                <i className="bi bi-bag"></i>
                <span className="visually-hidden">Cart</span> 
              </Link>
              <button onClick={toggleMenu} className='listcls'>
                <i className="bi bi-list"></i>
                <span className="visually-hidden">List</span> 
              </button>
              {/* 버튼 클릭시 등장 */}
              <div className={`d-flex flex-column side-menu ${isOpen ? 'show' : 'hidden'}`}>

                  <img src={closebtn} className='ms-2 close-btn' alt="toggle icon" onClick={toggleMenu}/>
                  <div className='d-flex flex-column justify-content-center align-items-center pb-2 menucls'>
                    <a href='/' className='my-2 mb-2'>
                      <img className='logocls' src='./img/logo.png' alt='모슈 로고'/>
                    </a>
                    <div className='d-flex fs10'>
                      <Link to="/signup" className='border-end px-4'>회원가입</Link>
                      <Link to="/login" className='border-end px-4'>로그인</Link>   
                      <Link to="/checking" className='border-end px-4'>주문/배송 조회</Link>
                      <Link to="/cart" className='px-4'>장바구니</Link>
                    </div>  
                  </div>

                <div className='d-flex flex-column align-items-center'>
                  <div className='searchcls mt-3 p-2 d-flex align-items-center justify-content-between'>
                      <input type="text" className="inputcls" placeholder="무엇을 찾으시나요?" />
                      <i class="bi bi-search"></i>
                  </div>

                  
                    <ul className='m-0 mt-3 p-0 d-flex flex-column gnb align-items-start'>
                      
                      <li className='fs23 py-2'>
                        <Link to="/about">About</Link>
                      </li>
                      <li className='fs23 py-2'>
                        <Link to="/Product" onClick={() => toggleDepth('Product')}>Product<img src={isDepth === 'Product' ? chervon : dash} className='ms-2' alt="toggle icon" /></Link>
                        {isDepth === 'Product' && (
                           <ul className='fs13'>
                            <li className='py-1'><Link to="/Product/option1">LATTE SERISE</Link></li>
                            <li className='py-1'><Link to="/Product/option2">MILK SERISE</Link></li>
                            <li className='py-1'><Link to="/Product/option3">KITCHEN SERISE</Link></li>
                            <li className='py-1'><Link to="/Product/option4">mosh! ETC SERISE</Link></li>
                         </ul> 
                        )}
                      </li>
                      <li className='fs23 py-2'>
                        <Link to="/mosh!Book" onClick={() => toggleDepth('mosh!Book')}><span className='point'>mosh!</span>Book<img src={isDepth === 'mosh!Book' ? chervon : dash} className='ms-2' alt="toggle icon" /></Link>
                        {isDepth === 'mosh!Book' && (
                          <ul className='fs13'>
                            <li className='py-1'><Link to="/mosh!Book/option1">LOOK BOOK</Link></li>
                            <li className='py-1'><Link to="/mosh!Book/option2">RECIPE</Link></li>
                          </ul>
                        )}
                      </li>
                      <li className='fs23 py-2'>
                        <Link to="/Promotion">Promotion</Link>
                      </li>
                      <li className='fs23 py-2'>
                        <Link to="/Community" onClick={() => toggleDepth('Community')}>Community<img src={isDepth === 'Community' ? chervon : dash} className='ms-2' alt="toggle icon" /></Link>
                        {isDepth === 'Community' && (
                          <ul className='fs13'>
                            <li className='py-1'><Link to="/Community/option1">mosh! Q&A</Link></li>
                            <li className='py-1'><Link to="/Community/option2">mosh! 공지사항</Link></li>
                            <li className='py-1'><Link to="/Community/option3">mosh! 리뷰</Link></li>
                            <li className='py-1'><Link to="/Community/option4">기업문의</Link></li>
                          </ul>
                        )}
                      </li>
                    </ul>
                    {/* etc info */}
                        <div className='p-4 mt-5 border radius'>
                          <div className='text-white mb-3'>
                          <h6 className='mb-2'>CUSTOMER SERVICE</h6>
                          <ul className='m-0 p-0'>            
                              <li>TEL 070-4618-2788</li>
                              <li>MON-FRI 09:00~17:00   ㅣ   LUNCH 12:00~13:30</li>
                              <li>SAT/SUN/HOLIDAY CLOSED</li>
                          </ul>
                      </div> 
                      
                      <div className='text-white mb-3'>
                          <h6 className='mb-2'>FOLLOW US</h6>
                          <ul className='m-0 p-0'>
                            <li>INSTAGRAM</li>
                          </ul>
                      </div>

                      <div className='text-white mb-3'>
                          <h6 className='mb-2'>BANK ACCOUNT</h6>
                          <ul className='m-0 p-0'>
                            
                            <li>기업은행 130-089422-01-019</li>
                            <li>예금주 : 주식회사 아시컴퍼니</li>
                          </ul>  
                      </div>
                       
                      </div> 
                     
                      

                </div>
              </div>
          </div>
          {/* md이상 메뉴 */}
            <nav className='d-none d-md-flex justify-content-center naviul'>
              <div className='gnbwapper justify-content-center d-flex align-items-center'>
                <ul className='m-0 p-0 ms-5 d-flex gnb align-items-center'>
                  <li className='fs22 ms-5 px-lg-4 px-md-4'>
                    <Link to="/about">About</Link>
                  </li>
                  <li className='fs22 px-lg-5 px-md-4 position-relative d-flex flex-wrap justify-content-center'>
                    <Link to="/Product">Product</Link>
                      {/* product소메뉴 */}
                      <ul className='p-0 navili'>
                        <li><Link to="/Product/option1">LATTE SERISE</Link></li>
                        <li><Link to="/Product/option2">MILK SERISE</Link></li>
                        <li><Link to="/Product/option3">KITCHEN SERISE</Link></li>
                        <li><Link to="/Product/option4">mosh! ETC SERISE</Link></li>
                      </ul> 
                  </li>
                  <li className='fs22 px-lg-5 px-md-4 position-relative'>
                    <Link to="/mosh!Book"><span className='point'>mosh!</span>Book</Link>
                      {/* mosh!book소메뉴 */}
                      <ul className='p-0 navili'>
                      <li><Link to="/mosh!Book/option1">LOOK BOOK</Link></li>
                      <li><Link to="/mosh!Book/option2">RECIPE</Link></li>
                    </ul>  
                  </li>
                  <li className='fs22 px-lg-5 px-md-4'>
                    <Link to="/Promotion">Promotion</Link>
                  </li>
                  <li className='fs22 px-lg-5 px-md-4 position-relative'>
                    <Link to="/Community">Community</Link>
                    {/* community소메뉴 */}
                    <ul className='p-0 navili'>
                      <li><Link to="/Community/option1">mosh! Q&A</Link></li>
                      <li><Link to="/Community/option2">mosh! 공지사항</Link></li>
                      <li><Link to="/Community/option3">mosh! 리뷰</Link></li>
                      <li><Link to="/Community/option4">기업문의</Link></li>
                    </ul>
                  </li>
                </ul>
                <div className='d-flex me-lg-3 me-md-2'>
                  <Link to="/login" className='me-lg-3 me-md-2'>
                    <i className="bi bi-person"></i>
                    <span className="visually-hidden">Login</span> 
                  </Link>
                  <Link to="/cart">
                    <i className="bi bi-bag"></i>
                    <span className="visually-hidden">Cart</span> 
                  </Link>
                </div>
              </div>
             
            </nav>
            
        </div>
      </div>
    </header>
  );
}

export default Hd;