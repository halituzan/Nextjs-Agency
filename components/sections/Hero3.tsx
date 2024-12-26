import Marquee from "react-fast-marquee";
import Link from "next/link";
import ArrowRigtUp from "../icons/ArrowRigtUp";

export default function Hero3() {
  return (
    <>
      <section className='section-hero-3 position-relative fix section-padding'>
        <div className='container'>
          <div className='row align-items-center position-relative'>
            <div className='col-lg-7 position-relative z-1 mb-lg-0 pb-10 mb-'>
              <div className='text-start mb-lg-0 mb-5'>
                {/* <div className='border-linear-1 rounded-pill d-inline-block mb-3'>
                  <div className='text-primary bg-white px-4 py-2 rounded-pill fw-medium position-relative z-2'>
                    🚀 Free Lifetime Update
                  </div>
                </div> */}
                <div className='d-flex align-items-center'>
                  <h1 className='ds-1 my-3 me-4 lh-1'>Markanızı X ile </h1>
                </div>
                <h2 className='ds-1 lh-1 m-0'>Yükseltin</h2>
                <p className='fs-5 text-900 my-6'>
                  Markanız için en üst düzey reklamlar ile <br />
                  tüketiciye erişin.
                </p>
                <Link href='#' className='btn btn-gradient'>
                  Ücretsiz Teklif Alın
                  <ArrowRigtUp />
                </Link>
                <div className='mt-6 pt-4 max-w-300px'>
                  <p className='text-uppercase mb-2'>Ortaklarımız</p>
                  <div className='carouselTicker carouselTicker-right'>
                    <ul className='carouselTicker__list'>
                      <Marquee direction='right'>
                        <li className='carouselTicker__item mx-2'>
                          <img
                            className='filter-invert rounded-4'
                            src='/assets/images/companies/blab.jpg'
                            alt='infinia'
                            style={{ height: "50px", width: "50px" }}
                          />
                        </li>
                        <li className='carouselTicker__item mx-2'>
                          <img
                            className='rounded-4'
                            src='/assets/images/companies/filmpark.png'
                            alt='infinia'
                            style={{
                              height: "50px",
                              width: "150px",
                            }}
                          />
                        </li>
                        <li className='carouselTicker__item mx-2'>
                          <img
                            className='rounded-4'
                            src='/assets/images/companies/haciyatmaz.svg'
                            alt='infinia'
                            style={{ height: "50px", width: "50px" }}
                          />
                        </li>
                      </Marquee>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-7 position-xl-absolute mb-lg-10 top-50 end-0 translate-middle-lg-y z-0'>
              <div className='row'>
                <div className='col-lg-6 col-12 align-self-end'>
                  <div
                    className='border-5 border-white border rounded-4'
                    style={{ height: "350px", width: "350px" }}
                  >
                    <img
                      className='rounded-4'
                      src='/assets/images/elidor.jpg'
                      alt='infinia'
                      style={{
                        height: "350px",
                        width: "350px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                <div className='col-lg-6 col-12 align-self-end'>
                  <div
                    className='border-5 border-white border rounded-4 mb-4'
                    style={{ height: "350px", width: "350px" }}
                  >
                    <img
                      className='rounded-4'
                      src='/assets/images/sahibinden.jpg'
                      alt='infinia'
                      style={{
                        height: "350px",
                        width: "350px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div
                    className='border-5 border-white border rounded-4'
                    style={{ height: "350px", width: "350px" }}
                  >
                    <img
                      className='rounded-4'
                      src='/assets/images/turk-telekom.jpg'
                      alt='infinia'
                      style={{
                        height: "350px",
                        width: "350px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
