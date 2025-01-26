import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../assets/css/swiper-bundle.min.css';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import Header from '../components/header';
import Footer from '../components/footer';

gsap.registerPlugin(ScrollTrigger);
SwiperCore.use([Autoplay]);

export default function AboutUs() {
    const videoR = useRef([]);
    const videoRefs = (el) => {
        if (el && !videoR.current.includes(el)) {
            videoR.current.push(el);
        }
    };
    useEffect(() => {
        videoR.current.forEach(element => {
            ScrollTrigger.create({
                trigger: element,
                start: 'top 80%',
                end: 'top -70%',
                onEnter: () => element?.play(),
                onEnterBack: () => element?.play(),
                onLeave: () => element?.pause(),
                onLeaveBack: () => element?.pause(),
            });
        });

        let parallaxLeft = gsap.timeline();
        parallaxLeft.to('.rightScroll', {
            x: "0"
        })
        ScrollTrigger.create({
            animation: parallaxLeft,
            trigger: ".section2",
            start: "top 30%",
            end: "bottom 100%",
            scrub: 1,

        })

        let parallaxRight = gsap.timeline();
        parallaxRight.to('.leftScroll', {

            x: "0"
        })
        ScrollTrigger.create({
            animation: parallaxRight,
            trigger: ".section2",
            start: "top 30%",
            end: "bottom 100%",
            scrub: 1,

        })


    }, [])
    return (
        <div className="aboutUs">
            <Header />
            <div className="section1">
                <img src="images/44866c282fba2ef27b62f3fbe466ca7c.jpg" alt="about us" title="about us" />
                <div className="title">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="section2">
                <div className="leftCol">
                    <img className="leftScroll" src="images/Rectangle 1.jpg" alt="@name" title="@name" />
                </div>
                <div className="rightCol">
                    <h2>درباره ی ما</h2>
                    <p>
                        برند Anson محصول لوکس و ارتقا یافته آشپزخانه های مدرن شرکت آکاژو می باشد که با بیش از بیست سال سابقه درخشان در طراحی و تولید کابینت های خاص آشپزخانه و کلوزت همچنین کسب دانش و تجربیات مضاعف در
                        طراحی و فروش کابینت های شرکت SieMatic آلمان،اینک مفتخر است تولیدات انحصاری خود را که تلفیقی از دانش صنعتی آلمان و طراحی به روز دنیا می باشد را به مشتریان و عالقه مندان به کابینت و کلوزت های لوکس
                        در صنعت ساختمان ها عرضه نماید.
                    </p>
                    <img className="rightScroll" src="images/Rectangle 38.jpg" alt="@name" title="@name" />
                </div>
            </div>
            <div className="section3">
                <h3>Anson</h3>
                <svg width="892" height="34" viewBox="0 0 892 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1555.12 0.610882L47.818 0.610229L0.0513916 33.999L1555.12 33.999V0.610882Z" fill="#C2B59B" />
                </svg>

            </div>
            <div className="section4 vid">
                <video ref={videoRefs} playsInline autoPlay muted loop poster="">
                    <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" id="sample" type="video/mp4" />
                </video>
            </div>
            <div className="section5">
                <h3>Our brands</h3>
                <svg width="1282" height="34" viewBox="0 0 1282 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1555.12 0.611004L47.818 0.610352L0.0513916 33.9991L1555.12 33.9991V0.611004Z" fill="#C2B59B" />
                </svg>


            </div>
            <div className="section6">
                <div className="sliderSection">
                    <div className="swiper logoSlider">
                        <Swiper
                            loop={true}
                            slidesPerView={4}
                            spaceBetween={20}
                            speed={2000}
                            autoplay={{
                                delay: 2000,
                            }}
                        >
                            <SwiperSlide><img src="images/7fb45c7016a5b6db496ffb4fdbb14502 1.png" alt="@name" title="@name" /></SwiperSlide>
                            <SwiperSlide><img src="images/7fb45c7016a5b6db496ffb4fdbb14502 11.png" alt="@name" title="@name" /></SwiperSlide>
                            <SwiperSlide><img src="images/7fb45c7016a5b6db496ffb4fdbb14502 12.png" alt="@name" title="@name" /></SwiperSlide>
                            <SwiperSlide><img src="images/7fb45c7016a5b6db496ffb4fdbb14502 13.png" alt="@name" title="@name" /></SwiperSlide>
                            <SwiperSlide><img src="images/7fb45c7016a5b6db496ffb4fdbb14502 1.png" alt="@name" title="@name" /></SwiperSlide>
                            <SwiperSlide><img src="images/7fb45c7016a5b6db496ffb4fdbb14502 11.png" alt="@name" title="@name" /></SwiperSlide>
                            <SwiperSlide><img src="images/7fb45c7016a5b6db496ffb4fdbb14502 12.png" alt="@name" title="@name" /></SwiperSlide>
                            <SwiperSlide><img src="images/7fb45c7016a5b6db496ffb4fdbb14502 13.png" alt="@name" title="@name" /></SwiperSlide>

                        </Swiper>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
