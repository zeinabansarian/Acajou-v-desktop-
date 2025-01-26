import React from 'react'

export default function Project() {
  return (
    <div class="projectShow2">
    <div class="section2">
        <div class="videoWrapper">
            <video src="" poster="images/44866c282fba2ef27b62f3fbe466ca7c.jpg" autoplay muted loop="loop"></video>
        </div>
        <div class="txtWrapp">
            <h1>Zomorodi Project</h1>
            <ul>
                <li>
                    <h3>موقعیت :</h3>
                    <p>شهرک باستی،لواسان</p>
                </li>
                <li>
                    <h3>ارشیتکت :</h3>
                    <p>آقای مهندس غلامپور</p>
                </li>
            </ul>
        </div>
    </div>
    <div class="section3">
        <h2>Project Gallery</h2>

        <div class="sliderSection">
            <div class="swiper sliderProject2">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a data-lightbox="roadtrip" href="images/44866c282fba2ef27b62f3fbe466ca7c.jpg" title="@name">
                            <img src="images/44866c282fba2ef27b62f3fbe466ca7c.jpg" alt="@name" title="@name" />
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a data-lightbox="roadtrip" href="images/Rectangle 16.jpg" title="@name">
                            <img src="images/Rectangle 16.jpg" alt="@name" title="@name" />
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a data-lightbox="roadtrip" href="images/Rectangle 16.jpg" title="@name">
                            <img src="images/Rectangle 16.jpg" alt="@name" title="@name" />
                        </a>
                    </div>
                </div>

                <div class="btns">
                    <div class="nextBtn">
                        <svg width="26" height="48" viewBox="0 0 26 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 47L24 24L1 1" stroke="white" stroke-width="1.5" />
                        </svg>
                    </div>
                    <div class="prevBtn">
                        <svg width="26" height="48" viewBox="0 0 26 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 1L2 24L25 47" stroke="white" stroke-width="1.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section4 loadTop">
        <p>
            THE KITCHEN IS LIKE A CITY:
        </p>
        <p>
             FUNCTIONAL SITES OF PRODUCTION SIDE-BY-SIDE WITH CREATIVE SPACES 
             IN WHICH NEW THINGS THRIVE, CULTURES MELD, AND PERSONAL TASTE HAS ROOM TO 
             DEVELOP FREELY.</p>
    </div>
   
</div>
  )
}
