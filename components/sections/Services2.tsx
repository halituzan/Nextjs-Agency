import Link from "next/link";
import ArrowRigt from "../icons/ArrowRigt";
import ArrowRigtUp from "../icons/ArrowRigtUp";
import Contact from "../icons/Contact";

export default function Services2() {
  return (
    <>
      <section className='section-team-1 position-relative fix section-padding'>
        <div className='container position-relative z-2'>
          <div className='text-center'>
            <div
              className='d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2'
              data-aos='zoom-in'
              data-aos-delay={100}
            >
              <img src='/assets/imgs/features-1/dots.png' alt='infinia' />
              <span className='tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase'>
                What we offers
              </span>
            </div>
            <h3 className='ds-3 my-3 fw-regular'>
              Reklam Hizmeti Verdiğimiz
              <span className=' fw-bold'> Sektörler</span>
            </h3>
          </div>
          <div className='row mt-6 position-relative'>
            {/* prettier-ignore */}
            {categories.map((category) => (
              <div key={category.id} className='col-lg-4 col-md-6'>
                <div className='p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4'>
                  <div className='card-service bg-white p-6 px-2 border rounded-4 text-center'>
                    <div className='bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5'>
                      <div className='icon'>
                        <img src={category.icon} alt='infinia' />
                      </div>
                    </div>
                    <h5 className='my-3'>{category.title}</h5>
                    <p className='mb-6'>{category.description}</p>
                    <Link
                      href={category.link}
                      className='text-primary fs-7 fw-bold'
                    >
                      Daha fazla
                      <ArrowRigt />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <svg
              className='position-absolute top-50 start-50 translate-middle z-0'
              xmlns='http://www.w3.org/2000/svg'
              width={828}
              height={699}
              viewBox='0 0 828 699'
              fill='none'
            >
              <path
                className='fill-primary-soft'
                d='M0 130.481C0 110.236 15.1267 93.1822 35.2276 90.7667L783.228 0.880261C807.04 -1.98124 828 16.611 828 40.5945V533.155C828 552.691 813.888 569.369 794.622 572.603L46.6224 698.173C22.2271 702.269 0 683.462 0 658.725V130.481Z'
                fill='#F5EEFF'
              />
            </svg>
          </div>
          <div className='text-center mt-6 d-flex flex-wrap justify-content-center align-items-center gap-3'>
            <Link href='/page-services-1' className='btn btn-gradient'>
              İncele
              <ArrowRigtUp />
            </Link>
            <Link
              href='/page-contact-1'
              className='btn btn-outline-secondary hover-up'
            >
              <Contact />
              İletişime Geçin
            </Link>
          </div>
        </div>
        <div className='position-absolute top-0 start-50 translate-middle-x z-0'>
          <img src='/assets/imgs/service-2/bg-line.png' alt='infinia' />
        </div>
        <div className='rotate-center ellipse-rotate-success position-absolute z-1' />
        <div className='rotate-center-rev ellipse-rotate-primary position-absolute z-1' />
      </section>
    </>
  );
}

const categories = [
  {
    id: "1",
    title: "Kamu Reklamları",
    description: "Kamu kurumlarına yönelik reklam hizmetleri sunmaktayız.",
    icon: "/assets/imgs/service-2/icon-1.svg",
    link: "#",
  },
  {
    id: "2",
    title: "Marka Reklamları",
    description:
      "Markaların bilinirliğini artırmak için etkili reklam çözümleri sunuyoruz.",
    icon: "/assets/imgs/service-2/icon-2.svg",
    link: "#",
  },
  {
    id: "3",
    title: "Hizmet Reklamları",
    description:
      "Hizmetlerinizi doğru hedef kitleye ulaştıracak reklam kampanyaları tasarlıyoruz.",
    icon: "/assets/imgs/service-2/icon-3.svg",
    link: "#",
  },
  {
    id: "4",
    title: "Sosyal Sorumluluk Reklamları",
    description:
      "Toplumsal farkındalık yaratmak için yaratıcı reklam içerikleri hazırlıyoruz.",
    icon: "/assets/imgs/service-2/icon-4.svg",
    link: "#",
  },
  {
    id: "5",
    title: "Ürün Reklamları",
    description:
      "Ürünlerinizin dikkat çekmesi için özel reklam stratejileri sunuyoruz.",
    icon: "/assets/imgs/service-2/icon-5.svg",
    link: "#",
  },
];
