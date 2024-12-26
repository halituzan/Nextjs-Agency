"use client";
import Link from "next/link";
import React from "react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features8({
  text,
}: {
  text?: string | React.ReactNode;
}) {
  const swiperOptions = {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };

  return (
    <>
      <section className='section-features-8 bg-4 section-padding'>
        <div className='container'>
          <div className='row mb-8 mb-lg-6'>
            <div className='col-lg-6'>
              <div
                className='d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2'
                data-aos='zoom-in'
                data-aos-delay={100}
              >
                <img src='/assets/imgs/features-1/dots.png' alt='infinia' />
              </div>
              <h3 className='ds-6 mt-3 mb-3'>{text}</h3>
            </div>
            <div className='col-lg-2 col-md-3 col-5 ms-auto align-self-end mb-lg-7'>
              <div className='position-relative z-0'>
                <div className='swiper-button-prev bg-white ms-lg-7'>
                  <i className='bi bi-arrow-left' />
                </div>
                <div className='swiper-button-next bg-white'>
                  <i className='bi bi-arrow-right' />
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <Swiper
              {...swiperOptions}
              className='swiper slider-1 pb-3'
              modules={[Keyboard, Autoplay, Pagination, Navigation]}
            >
              <div className='swiper-wrapper gap-5'>
                {/* prettier-ignore */}
                {instaPosts.map((post) => (
                  <SwiperSlide key={post.id} className='swiper-slide'>
                    <iframe
                      width='560'
                      height='315'
                      src={`https://www.youtube.com/embed/${post.link}`}
                      title='YouTube video player'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
const instaPosts = [
  {
    id: 1,
    link: "mmxcMda0kuU",
  },
  // {
  //   id: 2,
  //   link: "a3gz5PvgGrY",
  // },
  {
    id: 3,
    link: "Dz9oCj-Q3Ek",
  },
];
