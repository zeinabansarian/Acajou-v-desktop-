import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import productsData from "../producrsData";

const ProductsCats = () => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const circleRef = useRef(null);
  const productListRef = useRef();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [circle, setCircle] = useState({ x: 0, y: 0 });
  const backImg = useRef([]);
  const backImgRefs = (el) => {
    if (el && !backImg.current.includes(el)) {
      backImg.current.push(el);
    }
  };
  const removeActiveImg = () => {
    let thisActiveImg = activeImgIndex
    backImg.current.forEach(element => {
      element.classList.remove("activeImg")
    });
  }
  useEffect(() => {
    backImg.current[0].classList.add("activeImg")
  }, [backImg])
  const handleMouseEnter = (index) => {
    removeActiveImg()
    setActiveImgIndex(index);
    backImg.current[index].classList.add("activeImg")

  };

  const handleMouseMove = (e) => {
    setMouse({ x: e.clientX, y: e.clientY });
    if (circleRef.current) {
      circleRef.current.style.scale = "1";
    }
  };

  const handleMouseOut = () => {
    if (circleRef.current) {
      circleRef.current.style.scale = "0";
    }
  };

  const circleElement = circleRef.current;

  useEffect(() => {

    const productList = productListRef.current;
    productList.addEventListener("mousemove", handleMouseMove);
    productList.addEventListener("mouseout", handleMouseOut);
  }, [productListRef])


  const speed = 0.15;
  useEffect(() => {

    const tick = () => {
      setCircle((prevCircle) => {
        if (prevCircle) {

          const newX = prevCircle.x + (mouse.x - prevCircle.x) * speed;
          const newY = prevCircle.y + (mouse.y - prevCircle.y) * speed;
          if (circleElement) {
            circleElement.style.transform = `translate(${newX}px, ${newY}px)`;
          }
          return { x: newX, y: newY };
        }
      });
      window.requestAnimationFrame(tick);
    };

    tick();
  }, [mouse])


  return (
    <div className="productsCats">
      <div className="circle" ref={circleRef}>
        <img src="/images/Vector.png" alt="cursor" />
      </div>
      <div className="productList" ref={productListRef}>
        <div className="backgroundImg">
          <div className="backImg" ref={backImgRefs}>
            <img src="/images/ac22ad2198fb773587b310bf58267978.png"
              alt="@title"
              title="@title" />
          </div>
          <div className="backImg" ref={backImgRefs}>
            <img src="/images/pict7867332000016432493000013399001.jfif"
              alt="@title"
              title="@title" />
          </div>
        </div>
        <div className="listcat">
          {
            productsData.map(product => (
              <div key={product.id} className="listItem" onMouseEnter={() => handleMouseEnter(0)} >
                  <Link to={`/product/${product.id}`}>
                  <div className="title">
                    <h1>{product.title}</h1>
                    <span></span>

                  </div>
              </Link>
                </div>

            ))
          }
        
        </div>
      </div>
    </div>
  );
};

export default ProductsCats;
