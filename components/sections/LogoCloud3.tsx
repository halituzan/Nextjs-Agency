import Marquee from "react-fast-marquee";
export default function LogoCloud3() {
  return (
    <>
      <div className='section-logo-cloud container-fluid pt-110 pb-110 mt-lg-0 border-top border-bottom'>
        <div className='container'>
          <h5 className='text-500 mb-5 text-center'>
            Bize güvenen markalar
          </h5>
          <div className='carouselTicker carouselTicker-right'>
            <ul className='carouselTicker__list pb-4'>
              <Marquee direction='right'>
                <li className='carouselTicker__item bg-white py-3 px-4 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2'>
                  <img
                    className='filter-invert'
                    src='/assets/images/logos/dacia.png'
                    alt='infinia'
                    style={{ height: "70px" }}
                  />
                </li>
                <li className='carouselTicker__item bg-white py-3 px-4 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2'>
                  <img
                    src='/assets/images/logos/beykent.png'
                    alt='infinia'
                    style={{ height: "70px" }}
                  />
                </li>
                <li className='carouselTicker__item bg-white py-3 px-4 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2'>
                  <img
                    src='/assets/images/logos/elidor.png'
                    alt='infinia'
                    style={{ height: "70px" }}
                  />
                </li>
                <li className='carouselTicker__item bg-white py-3 px-4 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2'>
                  <img
                    src='/assets/images/logos/reno.png'
                    alt='infinia'
                    style={{ height: "70px" }}
                  />
                </li>
                <li className='carouselTicker__item bg-white py-3 px-4 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2'>
                  <img
                    src='/assets/images/logos/turk-telekom.png'
                    alt='infinia'
                    style={{ height: "70px" }}
                  />
                </li>
                <li className='carouselTicker__item bg-white py-3 px-4 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2'>
                  <img
                    src='/assets/images/logos/sahibinden.png'
                    alt='infinia'
                    style={{ height: "70px" }}
                  />
                </li>
                <li className='carouselTicker__item bg-white py-3 px-4 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2'>
                  <img
                    src='/assets/images/logos/lc-waikiki.png'
                    alt='infinia'
                    style={{ height: "50px" }}
                  />
                </li>
                <li className='carouselTicker__item bg-white py-3 px-4 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2'>
                  <img
                    src='/assets/images/logos/turkcell.png'
                    alt='infinia'
                    style={{ height: "50px" }}
                  />
                </li>
              </Marquee>
            </ul>
          </div>
          <div className='row'>
            <div className='col-lg-10 mx-lg-auto'>
              <div className='carouselTicker carouselTicker-left'>
                <ul className='carouselTicker__list pb-4'>
                  <Marquee>
                    <li className='carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2'>
                      <img
                        className='filter-invert'
                        src='/assets/imgs/logo-cloud-3/logo-8.svg'
                        alt='infinia'
                      />
                    </li>
                    <li className='carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2'>
                      <img
                        className='filter-invert'
                        src='/assets/imgs/logo-cloud-3/logo-9.svg'
                        alt='infinia'
                      />
                    </li>
                    <li className='carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2'>
                      <img
                        src='/assets/imgs/logo-cloud-3/logo-3.svg'
                        alt='infinia'
                      />
                    </li>
                    <li className='carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2'>
                      <img
                        className='filter-invert'
                        src='/assets/imgs/logo-cloud-3/logo-10.svg'
                        alt='infinia'
                      />
                    </li>
                    <li className='carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2'>
                      <img
                        src='/assets/imgs/logo-cloud-3/logo-11.svg'
                        alt='infinia'
                      />
                    </li>
                    <li className='carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2'>
                      <img
                        className='filter-invert'
                        src='/assets/imgs/logo-cloud-3/logo-12.svg'
                        alt='infinia'
                      />
                    </li>
                  </Marquee>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
