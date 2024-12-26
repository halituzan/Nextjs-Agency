"use client";
import Link from "next/link";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features7() {
  const swiperOptions = {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
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
      <section className='section-features-7 bg-neutral-100 section-padding'>
        <div className='container'>
          <div className='row mb-8 mb-lg-6'>
            <div className='col-lg-6'>
              <div
                className='d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2'
                data-aos='zoom-in'
                data-aos-delay={100}
              >
                <img src='/assets/imgs/features-1/dots.png' alt='infinia' />
                <span className='tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase'>
                  Why us ?
                </span>
              </div>
              <h3 className='ds-3 mt-3 mb-3'>
                Yayınlanmış <br /> reklam örneklerimiz
              </h3>
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
              <div className='swiper-wrapper'>
                {/* prettier-ignore */}
                {instaPosts.map((post) => (
                  <SwiperSlide key={post.id} className='swiper-slide'>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
								<blockquote class="instagram-media" data-instgrm-version="14" style="margin: auto;">
									<a href="https://www.instagram.com/p/${post.link}/">Instagram Post</a>
								</blockquote>
								<script async src="//www.instagram.com/embed.js"></script>
							`,
                      }}
                    />
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
    link: "CtWM7ADAyJx",
  },
  {
    id: 2,
    link: "CwznmNFoHD5",
  },
  {
    id: 3,
    link: "C2Zg8C9Iu6A",
  },
  {
    id: 4,
    link: "BVcqn3HFRS0",
  },
  {
    id: 5,
    link: "Beq-azrnxHm",
  },
  {
    id: 6,
    link: "BgHD5dLAC0d",
  },
  {
    id: 7,
    link: "BifKGhmBoXP",
  },
  {
    id: 8,
    link: "BjgxFuZB3ur",
  },
  {
    id: 9,
    link: "Bl7VpWCFE1L",
  },
  {
    id: 10,
    link: "Bm-2fkyBA8G",
  },
  {
    id: 11,
    link: "Bru7flchiR2",
  },
  {
    id: 12,
    link: "BuKFAtsg8xK",
  },
  {
    id: 13,
    link: "BwCu6VAAO_q",
  },
  {
    id: 14,
    link: "BwFffFKlZpe",
  },
  {
    id: 16,
    link: "BwHMQhXlgmQ",
  },
  {
    id: 17,
    link: "BwcxupsgdeW",
  },
  {
    id: 18,
    link: "BxIk0HCA1Mr",
  },
  {
    id: 19,
    link: "Bxu_OBigJg3",
  },
  {
    id: 20,
    link: "BzRIc5rgWCR",
  },
  {
    id: 21,
    link: "BzbP6LAgzu3",
  },
  {
    id: 22,
    link: "B0CCi7ogNFi",
  },
  {
    id: 23,
    link: "B0G5Hxrgszg",
  },
];
