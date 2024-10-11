import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../scss/mainbanner.scss';
import { Pagination, Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Mainbanner() {
    useEffect(() => {
        AOS.init({ duration: 2000 }); // AOS 초기화, 애니메이션 지속시간 1초 설정
      }, []);
  return (
    <section>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }} // 자동 전환 3초, 상호작용 후에도 자동 전환 유지
        className="mySwiper"
      >
        <SwiperSlide className='d-none position-relative d-md-flex flex-column justify-content-center align-items-center'>
          <img src='./img/mainbanner01.png' alt='메인배너01' />
          <img
          className='position-absolute'
            src='./img/banner_logo.png'
            alt='배너로고'
            data-aos="fade-up"
          />
        </SwiperSlide>
        {/* md이하 메인베너01 */}
        <SwiperSlide className='d-md-none position-relative d-flex flex-column justify-content-center align-items-center'>
          <img src='./img/m_banner_img01.png' alt='모바일배너01' style={{ width: '100%', height: '100%' }} />
          <img
          className='position-absolute'
            src='./img/m_banner_logo.png'
            alt='배너로고'
            data-aos="fade-up"
          />
        </SwiperSlide>

        <SwiperSlide className='d-none d-md-flex'>
          <img src='./img/mainbanner02.png' alt='메인배너02' />
        </SwiperSlide>
        {/* md이하 메인베너02*/}
        <SwiperSlide className='d-md-none d-flex'>
          <img src='./img/m_banner_img02.png' alt='모바일배너02' style={{ width: '100%', height: '100%' }}/>
        </SwiperSlide>

        <SwiperSlide className='d-none d-md-flex'>
          <img src='./img/mainbanner03.png' alt='메인배너03' />
        </SwiperSlide>
        {/* md이하 메인베너03 */}
        <SwiperSlide className='d-md-none d-flex'>
          <img src='./img/m_banner_img03.png' alt='모바일배너02' style={{ width: '100%', height: '100%' }} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
