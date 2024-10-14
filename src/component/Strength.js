import React from 'react'
import '../scss/strength.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../scss/mainbanner.scss';
import { Pagination } from 'swiper/modules';

function Strength() {
    return (
        <section className='sectionmargin'>
            <div className='div1 d-flex flex-column align-items-center pb-5'>
                <img className='div1img' src="img/strength/color_logo.png" alt='모슈' />
                <p className='point'>Discover the New Kitchenware</p>
                <p className='text-center fs30'>
                    함께하는 새로운 경험 <br/>
                    당신의 눈, 입, 손을 사로잡다
                </p>
            </div>
            <div className='pt-5 mt-5'>
                <div className='div2 d-flex flex-column align-items-center position-relative justify-content-end'>
                <img src='/img/strength/backimg.png' alt='물결이미지' />
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="position-absolute strSwiper d-flex justify-content-center align-items-center"
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                >
                    <SwiperSlide className='mb-4 d-flex flex-column align-items-center justify-content-center'>
                        <img src='./img/strength/under.png' alt='라떼시리즈' />
                        <p className='text-center fs30 m-0 mt-3'>
                        실리콘 보호 탈부착 코스 <br/>
                        조용하게, 그리고 미끄럼 없이
                        </p>
                    </SwiperSlide>
                    <SwiperSlide className='mb-4 d-flex flex-column align-items-center justify-content-center'>
                        <img src='./img/strength/kitchenpro.png' alt='키친시리즈' />
                        
                        <p className='text-center fs30 m-0 mt-3'>
                            평범한 디자인이 아닌<br />
                            감각적인 디자인으로 키친웨어를 탄생시키다
                        </p>
                    </SwiperSlide>
                    <SwiperSlide className='mb-4 d-flex flex-column align-items-center justify-content-center'>
                        <img src='./img/strength/thumb.png' alt='밀크시리즈' />
                        <p className='text-center fs30 m-0 mt-3'>
                            이중 진공처리로 <br/>
                            뛰어난 보온.보냉까지
                        </p>
                    </SwiperSlide>
                    <div className="st_page d-flex justify-content-center "></div>
                </Swiper>
                
                </div>
            </div>

        </section>
    )
}

export default Strength
