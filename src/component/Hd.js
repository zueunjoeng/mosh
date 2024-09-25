import React, { useState } from 'react';
import '../scss/hd.scss'
import {Link} from 'react-router-dom'

const Hd = () => {
  const [isOpen, setIsOpen] = useState(false); // 메뉴 상태 관리

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header id="hd">
        <div>
          <div className='d-flex justify-content-md-center px-4 justify-content-between align-items-center'>
            <h1>
              <a href='/'>
                <img className='logocls' src='./img/logo.png' alt='모슈 로고'/>
                </a>
            </h1>
            <div className='d-md-none d-flex'>
              <Link to="/cart" className='me-3'>
                <i className="bi bi-bag"></i>
              </Link>
              <button onClick={toggleMenu}>
                <i className="bi bi-list"></i>
              </button>
              {/* 버튼 클릭시 등장 */}
              <div className={`d-flex flex-column side-menu ${isOpen ? 'show' : 'hidden'}`}>

                  <i className="bi bi-x close-btn" onClick={toggleMenu}></i>
                  <div className='d-flex flex-column justify-content-center align-items-center pb-2 menucls'>
                    <a href='/' className='my-2'>
                      <img className='logocls' src='./img/logo.png' alt='모슈 로고'/>
                    </a>
                    <div className='d-flex flex-row'>
                      <Link to="/signup">회원가입  </Link>ㅣ
                      <Link to="/login">  로그인  </Link>ㅣ   
                      <Link to="/checking">  주문/배송 조회  </Link>ㅣ
                      <Link to="/cart">  장바구니</Link>
                    </div>  
                  </div>
                
                  <div className='searchcls mt-3 p-2 d-flex align-items-center justify-content-between'>
                      <input type="text" className="inputcls" placeholder="무엇을 찾으시나요?" />
                      <i class="bi bi-search"></i>
                  </div>
                  <div>
                    <ul className='m-0 mt-3 p-0 d-flex flex-column gnb align-items-start'>
                      
                      <li className='fs22'>
                        <Link to="/about">About</Link>
                      </li>
                      <li className='fs22'>
                        <Link to="/Product">Product<span></span></Link>
                      </li>
                      <li className='fs22'>
                        <Link to="/mosh!Book"><span className='point'>mosh!</span>Book</Link>
                      </li>
                      <li className='fs22'>
                        <Link to="/Promotion">Promotion</Link>
                      </li>
                      <li className='fs22'>
                        <Link to="/Community">Community</Link>
                      </li>
                    </ul>
                  </div> 
              </div>
            </div>
          </div>
            <nav className='d-none d-md-flex justify-content-center'>
              <div className='gnbwapper justify-content-center d-flex align-items-center position-relative'>
                <ul className='m-0 p-0 ms-5 d-flex gnb align-items-center naviul'>
                  <li className='fs22 ms-5'>
                    <Link to="/about">About</Link>
                  </li>
                  <li className='fs22 position-relative'>
                    <Link to="/Product">Product</Link>
                    {/* product소메뉴 */}
                    <ul className='dropdown-menu position-absolute'>
                      <li><Link to="/Product/option1">LATTE SERISE</Link></li>
                      <li><Link to="/Product/option2">MILK SERISE</Link></li>
                      <li><Link to="/Product/option3">KITCHEN SERISE</Link></li>
                      <li><Link to="/Product/option4">mosh! ETC SERISE</Link></li>
                    </ul> 
                  </li>
                  <li className='fs22 position-relative'>
                    <Link to="/mosh!Book"><span className='point'>mosh!</span>Book</Link>
                      {/* mosh!book소메뉴 */}
                      <ul className='dropdown-menu'>
                      <li><Link to="/mosh!Book/option1">LOOK BOOK</Link></li>
                      <li><Link to="/mosh!Book/option2">RECIPE</Link></li>
                    </ul>  
                  </li>
                  <li className='fs22'>
                    <Link to="/Promotion">Promotion</Link>
                  </li>
                  <li className='fs22 position-relative'>
                    <Link to="/Community">Community</Link>
                    {/* community소메뉴 */}
                    <ul className='dropdown-menu'>
                      <li><Link to="/Community/option1">mosh! Q&A</Link></li>
                      <li><Link to="/Community/option2">mosh! 공지사항</Link></li>
                      <li><Link to="/Community/option3">mosh! 리뷰</Link></li>
                      <li><Link to="/Community/option4">기업문의</Link></li>
                    </ul>
                  </li>
                </ul>
                <div className='d-flex me-3'>
                  <Link to="/login" className='me-3'>
                    <i className="bi bi-person"></i>
                  </Link>
                  <Link to="/cart">
                    <i className="bi bi-bag"></i>
                  </Link>
                </div>
              </div>
             
            </nav>
            
        </div>
    </header>
  );
}

export default Hd;