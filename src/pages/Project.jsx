import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import Header from '../components/header';
import Footer from '../components/footer';
import { useParams } from 'react-router-dom';
import projectsData from '../ProjectsDate';

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const sectionRef = useRef(null);
  let params = useParams()

  useEffect(() => {
    const handleLoad = () => {
      const txtWrapp = sectionRef.current.querySelector(".txtWrapp");
      if (txtWrapp) {
        txtWrapp.classList.add("loadedData");
        console.log(txtWrapp);
      }

      const loadTop = document.querySelectorAll('.loadTop p');

      loadTop.forEach((element) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 100%",
            end: "center 20%",
            toggleActions: "play none none reverse",
          }
        }).fromTo(
          element,
          { autoAlpha: 0, y: "5vh" },
          { autoAlpha: 1, y: 0, duration: 1.2 }
        );
      });
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  let mainProject = projectsData.find(project => params.projectId == project.id)
  let galleryImages = Object.values(mainProject.galery);

  return (
    <>
      <Header></Header>
      <div className="projectShow2" dir="rtl">
        <div className="section2" ref={sectionRef}>
          <div className="videoWrapper">

            <video src={mainProject.video} autoPlay muted loop></video>
          </div>
          <div className="txtWrapp">

            <h1>{mainProject.title}</h1>


            <ul>
              {
                mainProject.location && (
              <li>
                <h3>موقعیت :</h3>
                <p>
                  {
                    mainProject.location
                  }
                </p>
              </li>

                )
              }
              {mainProject.architect && (
                <li>
                  <h3>آرشیتکت:</h3>
                  <p>{mainProject.architect}</p>
                </li>
              )
              }
            </ul>
          </div>
        </div>

        <div className="section3">
          <h2>Project Gallery</h2>

          <div className="sliderSection">
            <Swiper
              modules={[Navigation]}
              loop={true}
              centeredSlides={true}
              slidesPerView={2}
              spaceBetween={76}
              speed={1500}
              navigation={{
                nextEl: '.nextBtn',
                prevEl: '.prevBtn',
              }}
            >
              {
                galleryImages.map((imgSrc, index) => (
                  <SwiperSlide key={index}>
                    <a data-lightbox="roadtrip" href={imgSrc} title={mainProject.title}>
                      <img src={imgSrc} alt={mainProject.title} title={mainProject.title} />
                    </a>
                  </SwiperSlide>
                ))
              }


              <div className="btns">
                <div className="nextBtn">
                  <svg width="26" height="48" viewBox="0 0 26 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 47L24 24L1 1" stroke="white" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="prevBtn">
                  <svg width="26" height="48" viewBox="0 0 26 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 1L2 24L25 47" stroke="white" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </Swiper>
          </div>
        </div>

        <div className="section4 loadTop">
          <p>THE KITCHEN IS LIKE A CITY:</p>
          <p>
            FUNCTIONAL SITES OF PRODUCTION SIDE-BY-SIDE WITH CREATIVE SPACES
            IN WHICH NEW THINGS THRIVE, CULTURES MELD, AND PERSONAL TASTE HAS ROOM TO
            DEVELOP FREELY.
          </p>
        </div>

      </div>
      <Footer />
    </>

  );
}
