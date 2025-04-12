import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCat from "./productCat";
import Header from "../components/header";
import Footer from "../components/footer";
import productsData from "../producrsData";
import { useParams } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function ProductShow() {
  useEffect(() => {
    const loadTop = document.querySelectorAll(".loadImg img");
    loadTop.forEach((element) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 100%",
            end: "center 20%",
            toggleActions: "play none none none",
          },
        })
        .fromTo(
          element,
          { autoAlpha: 0, opacity: 0 },
          { duration: 3, autoAlpha: 1, opacity: 1 }
        );
    });

    const loadH1 = document.querySelectorAll(".loadImg h1");
    loadH1.forEach((element) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 100%",
            end: "center 20%",
            toggleActions: "play none none none",
          },
        })
        .fromTo(
          element,
          { autoAlpha: 0, y: "5vh", opacity: 0 },
          { duration: 1, autoAlpha: 1, y: 0, opacity: 1 }
        );
    });
  }, []);
  let params = useParams();

  let mainProduct = productsData.find(
    (product) => params.productId == product.id
  );
  let galleryImages = Object.values(mainProduct.galery);
  console.log(galleryImages);

  return (
    <div className="productShow1">
      <Header />
      <div className="section2 loadImg">
        <div className="leftcol">
          <img src="/images/Rectangle 116.jpg" alt="@name" title="@name" />
        </div>
        <div className="rightCol">
          <div className="titleCol">
            <div className="imgContainer">
              <img
                src="/images/e2a16e1fdf8b5827e2b99756e741e7fd.jpg"
                alt="@name"
                title="@name"
              />
            </div>

            <h1>{mainProduct.title}</h1>
          </div>
          <div className="imgCol">
            <img src="/images/Rectangle 115.jpg" alt="@name" title="@name" />
          </div>
        </div>
      </div>

      <div className="section3">
        <p>{mainProduct.description}</p>
      </div>

      <div className="section4">

        <div className="topSec">
          <img src="/images/Rectangle 53.jpg" alt="@name" title="@name" />
        </div>
        <div className="btmSec">
          <div className="imgContain">
            <img src="/images/Rectangle 54.jpg" alt="@name" title="@name" />
          </div>
          <div className="txtContain">
            <h5>
              INTERIOR DESIGN
              <br />
              FOR THE CLOSET
              <br />
              WITH LEATHER
            </h5>
            <p>Special design of closet unit by using ﬁne leather</p>
            <p>on side panels and back panel in carcase</p>
          </div>
        </div>
      </div>

      <div className="section5">
        <div className="proSliderContainer">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".nextBtn",
              prevEl: ".prevBtn",
            }}
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            className="proSlider"
          >
            {
              galleryImages.map(img => (
                <SwiperSlide key={img}>
                  <img src={img} alt="@name" title="@name" />
                </SwiperSlide>

              ))
            }

          </Swiper>

          <div className="btns">
            <div className="nextBtn">
              <svg
                width="26"
                height="48"
                viewBox="0 0 26 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 47L24 24L1 1" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="prevBtn">
              <svg
                width="26"
                height="48"
                viewBox="0 0 26 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M25 1L2 24L25 47" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </div>

      <div className="section6">
        <h2>Related Product</h2>
        <ProductCat />
      </div>

      <Footer />
    </div>
  );
}
