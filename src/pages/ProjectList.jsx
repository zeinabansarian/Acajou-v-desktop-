import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../assets/css/swiper-bundle.min.css';
import Header from '../components/header';
import Footer from '../components/footer';
import projectsData from '../ProjectsDate';
import { data, Link } from 'react-router-dom';


export default function ProjectList() {
    const [datas, setdatas] = useState(projectsData)

    console.log(datas);

    const loadMore = useRef(null)
    const projectItem = useRef([])
    const projectItemRef = (el) => {
        if (el && !projectItem.current.includes(el)) {
            projectItem.current.push(el);
        }
    };
    let currentItems = 6;

    useEffect(() => {
        if (currentItems < projectItem.current.length) {

            loadMore.current.addEventListener("click", function (e) {
                console.log(loadMore.current);
                loadMore.current.classList.add('show-loader');

                for (let i = currentItems; i < currentItems + 6; i++) {
                    setTimeout(() => {
                        e.target.classList.remove('show-loader');
                        if (projectItem.current[i]) {
                            projectItem.current[i].style.display = 'block';
                        }
                    }, 0);
                }
                currentItems += 6;
                if (currentItems >= projectItem.current.length) {
                    loadMore.current.classList.add('loaded');
                }
            })
        } else {
            loadMore.current.classList.add('loaded');
        }
    }, [])
    return (
        <div className="projectList">
            <Header active={true} />
            <div className="section2">
                <div className="sliderContainer">
                    <div className="swiper projectSlider">
                        <Swiper
                            loop={true}
                            centeredSlides={true}
                            slidesPerView={2}
                            spaceBetween={39}
                            speed={1500}
                        >
                            {datas.map((data, index) => (
                                <SwiperSlide key={index}>
                                    <img src={data.image} alt={data.title} title={data.title} />
                                    <div className="txtWrapper">
                                        <h2>{data.title}</h2>
                                        <Link to={`project/${data.id}`}>
                                            show
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>


                    </div>
                </div>
            </div>
            <div className="section3">
                <div className="title">
                    <h1>PROJECTS</h1>
                    <svg width="1164" height="34" viewBox="0 0 1164 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1555.07 0.000652111L47.7662 0L-0.000366211 33.3887L1555.07 33.3887V0.000652111Z" fill="#C2B59B" />
                    </svg>

                </div>
                <div className="projectItemWrapper">

                    <div className="projectItemContainer">

                        {datas.map((data)=>(
                        <div className="projectItem" ref={projectItemRef}>
                            <img src={data.image} alt={data.title} title={data.title} />
                            <h3>{data.title}</h3>
                            <Link to={`project/${data.id}`}>
                            show
                            </Link>
                        </div>

                        ))}
                 
                    </div>
                </div>

                <div className="loadMore" ref={loadMore}>
                    <button>
                        more
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
