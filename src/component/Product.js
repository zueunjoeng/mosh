import React, { useState, useEffect } from 'react';
import "../scss/product.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../scss/mainbanner.scss';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Product() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // 화면 크기를 감지해서 모바일 여부 판단
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // 초기 화면 크기 체크
        handleResize();

        // 윈도우 크기 변경 시 이벤트 리스너 추가
        window.addEventListener('resize', handleResize);

        // 이벤트 리스너 해제
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id='product' className='sectionmargin'>
            <h1 className='d-flex justify-content-md-center'>Product</h1>
            <Link to="/shop" className='shopcls d-flex justify-content-end'>
                <p>전체 상품 보러가기</p>
                <i class="bi bi-arrow-right"></i>
                <span className="visually-hidden">화살표</span> 
            </Link>
            {isMobile ? (
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="productSwiper d-flex flex-column justify-content-center align-items-center"
                    slidesPerView={2}
                    spaceBetween={30}
                    loop={true}
                >
                    <SwiperSlide>
                        <img src='./img/product/lattes.png' alt='라떼시리즈' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='./img/product/milks.png' alt='밀크시리즈' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='./img/product/kitchens.png' alt='키친시리즈' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='./img/product/etcs.png' alt='기타시리즈' />
                    </SwiperSlide>
                </Swiper>
                
            ) : (
                <div className="d-flex justify-content-center productcls">
                    <div className="me-2 position-relative d-flex flex-column align-items-center justify-content-end">
                        <img src='./img/product/pc_latte.png' alt='라떼시리즈' />
                        <Link to="/latte" className='mb-1 position-absolute point'>LATTE SERISE</Link>
                    </div>
                    <div className="me-2 position-relative d-flex flex-column align-items-center justify-content-end">
                        <img src='./img/product/pc_milk.png' alt='밀크시리즈' />
                        <Link to="/milk" className='mb-1 position-absolute point'>MILK SERISE</Link>
                    </div>
                    <div className="me-2 position-relative d-flex flex-column align-items-center justify-content-end">
                        <img src='./img/product/pc_kitchen.png' alt='키친시리즈' />
                        <Link to="/kitchen" className='mb-1 position-absolute point'>KITCHEN SERISE</Link>
                    </div>
                    <div className='position-relative d-flex flex-column align-items-center justify-content-end'>
                        <img src='./img/product/pc_etc.png' alt='기타시리즈' />
                        <Link to="/etc" className='mb-1 position-absolute point'>mosh! ETC SERISE</Link>
                    </div> 
                </div>
            )}
            <div className="pagination d-md-none d-flex justify-content-center mt-3"></div>
        </section>
    );
}

export default Product;