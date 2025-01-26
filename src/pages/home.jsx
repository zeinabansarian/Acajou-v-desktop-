import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { interpolate } from "polymorph-js";
import React, { useEffect, useRef } from "react";
import ProductCats from "../components/productCats";
import Header from "../components/header";
import Footer from "../components/footer";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const loadTopRefs = useRef([]);
  const addToRefs = (el) => {
    loadTopRefs.current.push(el);
  };

  const leftImages = useRef([]);
  const rightImages = useRef([]);
  const addToZoomRefs = (refArray, el) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  useEffect(() => {
    loadTopRefs.current.forEach((element) => {
      gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 100%",
            end: "center 20%",
            ease: "none",
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          element,
          { autoAlpha: 0, y: "10vh" },
          { autoAlpha: 1, y: 0, duration: 1.2 }
        );
    });

    // تعریف مسیرها
    const pathL1 = "M12 0V81.8102L0 93V0H12Z";
    const pathL2 = "M37 0V81.8102L24 93V0H37Z";
    const pathL3 = "M61 0V81.8102L49 93V0H61Z";
    const pathL4 = "M86 0V81.8102L73 93V0H86Z";
  
    const pathN1 =
      "M18 0V18.0622C18 18.3535 17.9745 18.6443 17.9239 18.9311L13.6407 43.2025C13.5475 43.7307 13.5399 44.2705 13.6182 44.8012L17.9465 74.1371C17.9821 74.3787 18 74.6226 18 74.8669V81.8102L5 92.5V74.8669C5 74.6226 4.9821 74.3787 4.94645 74.1371L0.618208 44.8012C0.539913 44.2705 0.547522 43.7307 0.640742 43.2025L4.92392 18.9311C4.97454 18.6443 5 18.3535 5 18.0622V0H18Z";
    const pathN2 =
      "M43 0V17.2793C43 18.0813 42.8071 18.8716 42.4375 19.5834L30.6155 42.3516C29.911 43.7085 29.866 45.3132 30.4934 46.7075L42.5596 73.5214C42.8499 74.1664 43 74.8658 43 75.5732V93H30V75.5732C30 74.8658 29.8499 74.1664 29.5596 73.5214L17.4934 46.7075C16.866 45.3132 16.911 43.7085 17.6155 42.3516L29.4375 19.5834C29.8071 18.8716 30 18.0813 30 17.2793V0H43Z";
    const pathN3 =
      "M67 0V16.7659C67 17.8892 66.6218 18.9797 65.9263 19.8617L48.7741 41.6158C47.421 43.332 47.3392 45.7281 48.5722 47.5325L66.1282 73.2242C66.6962 74.0554 67 75.0385 67 76.0452V92H54V76.0452C54 75.0385 53.6962 74.0554 53.1282 73.2242L35.5722 47.5325C34.3392 45.7281 34.421 43.332 35.7741 41.6158L52.9263 19.8617C53.6218 18.9797 54 17.8892 54 16.7659V0H67Z";
    const pathN4 =
      "M92 0V15.4563C92 16.7662 91.486 18.0237 90.5684 18.9586L68.7614 41.1771C66.9238 43.0493 66.8457 46.0234 68.5825 47.9896L89.4947 71.6638C91.109 73.4914 92 75.8458 92 78.2842V93H79V76.4187C79 75.1835 78.5428 73.992 77.7165 73.0739L55.1734 48.026C53.3944 46.0494 53.4739 43.0261 55.3543 41.1457L77.5355 18.9645C78.4732 18.0268 79 16.755 79 15.4289V0H92Z";
  
    const introStep1 = interpolate([pathL1, pathN1], { addPoints: 900 });
    const introStep2 = interpolate([pathL2, pathN2], { addPoints: 900 });
    const introStep3 = interpolate([pathL3, pathN3], { addPoints: 900 });
    const introStep4 = interpolate([pathL4, pathN4], { addPoints: 900 });
  
    const val = { prop: 0 };
  
    let introLetters = gsap.timeline({
      defaults: { duration: 4, ease: "power1.inOut" },
    });
  
    introLetters.to(val, {
      prop: 1,
      onUpdate: function () {
        document
          .querySelector("#pathL1")
          .setAttribute("d", introStep1(val.prop));
        document
          .querySelector("#pathL2")
          .setAttribute("d", introStep2(val.prop));
        document
          .querySelector("#pathL3")
          .setAttribute("d", introStep3(val.prop));
        document
          .querySelector("#pathL4")
          .setAttribute("d", introStep4(val.prop));
          console.clear();

      },
    });
  
    ScrollTrigger.create({
      trigger: ".section3",
      animation: introLetters,
      scrub: 2,
      start: "top 80%",
      end: "bottom 50%",
    });

    const zoomEffect = (images) => {
      images.forEach((element) => {
        const dist = element.offsetHeight;
        const scaleValue = 1.15;

        gsap.timeline({
          scrollTrigger: {
            trigger: element.parentElement.parentElement,
            scrub: 4,
            start: `top 50%`,
            end: `bottom bottom`,
          },
        }).fromTo(
          element,
          {
            transformOrigin: "top center",
            transform: `translate3d(0, 0, 0) scale(${scaleValue})`,
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          },
          {
            transformOrigin: "top center",
            transform: "translate3d(0, -20px, 0) scale(1.09)",
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
          }
        );
      });
    };
    
    zoomEffect(leftImages.current);
    zoomEffect(rightImages.current);



    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);



  return (
    <div className="home">
      <Header />
      <div className="section2">
        <video
          poster="images/d2865fd2f70066333607421d3cd26071.png"
          loop="loop"
          muted
          autoPlay
        >
          <source src="" />
        </video>
        <div className="txtWrapper">
          <h1>The World Of Modern Kitchens </h1>
        </div>
      </div>

      <div className="section3">
        <div className="dynamicSection">
          <div className="intro-letters">
            <svg
              width="100"
              height="90"
              viewBox="0 0 86 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path id="pathL1" d="M12 0V81.8102L0 93V0H12Z" fill="white" />
              <path id="pathL2" d="M37 0V81.8102L24 93V0H37Z" fill="white" />
              <path
                id="pathL3"
                d="M61 0V81.8102L49 93V0H61Z"
                fill="white"
                fillOpacity="0.2"
              />
              <path id="pathL4" d="M86 0V81.8102L73 93V0H86Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className="vect">
          <svg
            width="18"
            height="323"
            viewBox="0 0 18 323"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 0V295.472L0 323V0H18Z"
              fill="white"
              fillOpacity="0.2"
            />
          </svg>
        </div>
        <div className="txtSection">
          <p>Kitchen and closet planning concepts of timeless elegance</p>
        </div>
      </div>
      <div className="section4">
      <h2>Our Style Collections</h2>
    <ProductCats />
    </div>
      <div className="section5">
        <img
          src="images/4bce508abac3365f3faadb5e1dcb6135.png"
          alt="new world"
          title="new world"
        />
        <div className="overTxt">
          <h4 className="loadTop" ref={addToRefs}>
            A NEW world
          </h4>
          <div className="loadTop newSvg" ref={addToRefs}>
            <svg
              width="252"
              height="6"
              viewBox="0 0 252 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M252 6L13.7611 6L0 0L252 0V6Z" fill="white" />
            </svg>
          </div>
          <div className="loadTop logo" ref={addToRefs}>
            <img src="images/ANSON_logo.png" alt="logo" title="logo" />
            <img src="images/Mask group.png" alt="logo" title="logo" />
          </div>
        </div>
      </div>

      <div className="section6">
      <div className="leftSec">
        {["images/Rectangle 100.jpg", "images/Rectangle 102.jpg", "images/Rectangle 103.jpg"].map(
          (src, index) => (
            <div className="imgContainer" key={`left-${index}`}>
              <img
                className="zoomScroll"
                src={src}
                alt={`image-${index}`}
                title={`image-${index}`}
                ref={(el) => addToZoomRefs(leftImages, el)}
              />
            </div>
          )
        )}
      </div>
      <div className="middleSec">
        <span>SOPHISTICATED INTEGRATION</span>
        <h5>IT IS NOT THE SIZE THAT COUNTS, BUT THE IDEA</h5>
        <p>
          Elegantly combining cooking and enjoying food is not a question of the
          available space. This ensemble of tall, wall, and base cabinets seems
          like a single piece of furniture and meets the highest demands for all
          the technical functions of a kitchen. The minimalist outer aesthetics
          conceal sophisticated ideas, such as handle-free doors and pull-outs
          that open automatically at just a light touch, so that nothing disturbs
          the sophisticated atmosphere.
        </p>
      </div>
      <div className="rightSec">
        {["images/Rectangle 100.jpg", "images/Rectangle 102.jpg", "images/Rectangle 103.jpg"].map(
          (src, index) => (
            <div className="imgContainer" key={`right-${index}`}>
              <img
                className="zoomScroll"
                src={src}
                alt={`image-${index}`}
                title={`image-${index}`}
                ref={(el) => addToZoomRefs(rightImages, el)}
              />
            </div>
          )
        )}
      </div>
    </div>

      <div className="section7">
        <img src="images/Rectangle 98.jpg" alt="@name" title="@name" />
        <div className="txtWrapper loadToTop">
          <p>
            “PERFECTION IS ACHIEVED, NOT WHEN THERE IS NOTHING MORE TO ADD, BUT
            WHEN THERE IS NOTHING LEFT TO TAKE AWAY.”
          </p>
        </div>
      </div>

      <div className="vid section8">
        <video playsInline autoPlay muted loop poster="">
          <source
            src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
            id="sample"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="section9 ">
        <img src="images/Rectangle 92.jpg" alt="@name" title="@name" />
        <div className="txt loadToTop">
          <p>The Freedom To Organize Your Space.</p>
        </div>
      </div>

      <div className="section10">
        <p>
          Would you like to take a look at the style worlds at your leisure and
          discuss them with your family? Then get brochures for free.
        </p>
        <a href="" title="Get your free brochure now">
          Get your free brochure now
        </a>
      </div>

      <Footer />
    </div>
  );
}
