"use client";
import CountUp from "react-countup";

export default function Static2() {
  return (
    <>
      <section className='section-static-1 position-relative fix z-0 section-padding'>
        <div className='container'>
          <div className='inner'>
            <div className='row justify-content-between'>
              <div className='col-xl-3 col-lg-4 col-sm-6'>
                <div className='counter-item-cover counter-item'>
                  <div className='content text-center mx-auto'>
                    <h6>
                      Sürekli <br /> reklamlar ile
                    </h6>
                    <span className='h1 count fw-black text-primary my-0'>
                      +<span className='odometer' />
                      <CountUp end={250} enableScrollSpy={true} />
                      <span></span>
                    </span>
                    <p className='fs-5'>Yeni Reklam Filmi</p>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-sm-6'>
                <div className='counter-item-cover counter-item'>
                  <div className='content text-center mx-auto'>
                    <h6>
                      Başarı ile <br /> tamamlanan
                    </h6>
                    <span className='h1 count fw-black text-primary my-0'>
                      +<span className='odometer' />
                      <CountUp end={1000} enableScrollSpy={true} />
                    </span>
                    <p className='fs-5'>Bitirilmiş Proje</p>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-sm-6'>
                <div className='counter-item-cover counter-item'>
                  <div className='content text-center mx-auto'>
                    <h6>
                      Daha fazla <br />
                      görüntülemeyle
                    </h6>
                    <span className='h1 count fw-black text-primary my-0'>
                      +<span className='odometer' />
                      <CountUp end={50} enableScrollSpy={true} /><span>m</span>
                    </span>
                    <p className='fs-5'>Kişiye ulaşın</p>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-sm-6'>
                <div className='counter-item-cover counter-item'>
                  <div className='content text-center mx-auto'>
                    <h6>
                      Marka farkındalığını <br /> arttırın
                    </h6>
                    <span className='h1 count fw-black text-primary my-0'>
                      +<span className='odometer' />
                      <CountUp end={168} enableScrollSpy={true} />
                      <span>k</span>
                    </span>
                    <p className='fs-5'>Paylaşım</p>
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
