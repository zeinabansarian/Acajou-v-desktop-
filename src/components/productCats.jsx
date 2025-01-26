import React, { useEffect, useRef, useState } from "react";

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
  useEffect(()=>{
    backImg.current[0].classList.add("activeImg")
},[backImg])
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
  
  useEffect(()=>{

    const productList = productListRef.current;
  productList.addEventListener("mousemove", handleMouseMove);
  productList.addEventListener("mouseout", handleMouseOut);
  },[productListRef])


  const speed = 0.15;
useEffect(()=>{

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
},[mouse])


  return (
    <div className="productsCats">
      <div className="circle" ref={circleRef}>
        <img src="images/Vector.png" alt="cursor" />
      </div>
      <div className="productList" ref={productListRef}>
        <div className="backgroundImg">
          <div className="backImg" ref={backImgRefs}>
            <img src="images/ac22ad2198fb773587b310bf58267978.png"
              alt="@title"
              title="@title" />
          </div>
          <div className="backImg" ref={backImgRefs}>
            <img src="images/7fb45c7016a5b6db496ffb4fdbb14502 12.png"
              alt="@title"
              title="@title" />
          </div>
        </div>
        <div className="listcat">
          <div className="listItem" onMouseEnter={() => handleMouseEnter(0)} >
            <div className="title">
              <h1>Wardrobe and closet</h1>
              <span></span>

            </div>
          </div>
          <div className="listItem" onMouseEnter={() => handleMouseEnter(1)}>
            <div className="title">
              <h1>Kitchen system</h1>
              <span></span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCats;
