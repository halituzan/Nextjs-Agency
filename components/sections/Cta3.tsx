import Link from "next/link";

export default function Cta3() {
  return (
    <>
      <section className='section-cta-3 position-relative py-150 section-padding fix'>
        <div className='container'>
          <div className='row'>
            <div className='col-auto ms-auto'>
              <div className='bg-primary rounded-4'>
                <div className='p-7'>
                  <h3 className='text-white'>
                    Reklam hizmetlerinde <br />
                    En iyi deneyime ulaşın
                  </h3>
                  <Link
                    href='/page-contact-1'
                    className='d-flex align-items-center mt-8 mb-9'
                  >
                    <img
                      src='/assets/imgs/cta-3/icon-contact.svg'
                      alt='infinia'
                    />
                    <span className='ms-3'>
                      <span className='text-white mb-0 fs-4'>İletişime Geçin</span>
                      <span className='text-white fs-4 d-block'>
                        +90 (530) 555 44 33
                      </span>
                    </span>
                  </Link>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
