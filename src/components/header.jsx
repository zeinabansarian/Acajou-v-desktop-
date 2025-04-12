import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Header({active}) {
    const [activeIndex, setActiveIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollTop = useRef(0);

  const whiteLogo = "//images/whiteLogoDesktop.svg";
  const blackLogo = "//images/blackLogoDesktop.svg";
  const [logoSrc, setLogoSrc] = useState(whiteLogo);

  const lists = useRef([]);
  const listsRefs = (el) => {
    if (el && !lists.current.includes(el)) {
      lists.current.push(el);
    }
  };
  const images = useRef([]);
  const imagesRefs = (el) => {
    if (el && !images.current.includes(el)) {
      images.current.push(el);
    }
  };

  const addBlur= ()=>{
    lists.current.forEach(element => {
        element.classList.add("blur")
    })
  }
  const removeBlur= ()=>{
    lists.current.forEach(element => {
        element.classList.remove("blur")
    })
  }
//   lists.current.forEach((element,i) => {
//       element.addEventListener("mouseover" , function(params) {
//         addBlur()
        
//         element.classList.remove("blur")   
//         let src = images.current[i]?.getAttribute("src")        
//         console.log(src);
//         setActiveIndex(src);
        
//     })
//     element.addEventListener("mouseout" , function (params) {
//         setActiveIndex(null);

//         removeBlur()
        
//     })
//   });

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };


  useEffect(() => {
    const handleMouseOver = (index) => {
      addBlur();
      lists.current[index].classList.remove('blur');
      const src = images.current[index]?.getAttribute('src');
      setActiveIndex(src);      
    };

    const handleMouseOut = () => {
      setActiveIndex(null);
      removeBlur();
    };

    // Add event listeners
    lists.current.forEach((element, index) => {
      element.addEventListener('mouseover', () => handleMouseOver(index));
      element.addEventListener('mouseout', handleMouseOut);
    });

    // Cleanup event listeners
    return () => {
      lists.current.forEach((element, index) => {
        element.removeEventListener('mouseover', () => handleMouseOver(index));
        element.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);



  useEffect(() => {
    
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(currentScroll > 50);

      if (currentScroll > lastScrollTop.current) {
        setScrollDirection("down");
      } else if (currentScroll < lastScrollTop.current) {
        setScrollDirection("up");
      }
      lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
        <header className={`header ${isScrolled ? "activeHeader" : ""} ${scrollDirection === "down" ? "goDown" : "goTop"} ${active ? "activeHeader" : ""}` }>
            <div className="logo">
            <Link to="/">
                    <img src="/images/ANSON_logo_ 1.png" alt="logo" title="logo" />
                </Link>
            </div>
            <div className={`bars ${menuOpen ? "openBars" : ""}`} onClick={handleMenuToggle}>
            <span></span><span></span><span></span>
            </div>
            <div className={`Menu ${menuOpen ? "open" : ""}`}>
                <div className="overlay"></div>
                <div className="openMenu">
                <div className={`imgSection ${activeIndex !== null ? "addImg" : "removeImg"}`}>
                <div className="img_box">


                <img src={activeIndex !== null ? activeIndex : ""} alt="Main" />
                </div>
                    </div>
                    <svg style={{ width: 0, height: 0 }}>
                        <filter id="filter1" >
                            <feTurbulence baseFrequency="10" numOctaves="1">
                                <animate attributeName="baseFrequency" repeatCount="indefinite" dur="10s" values="0.005;0.002;0.005" />
                            </feTurbulence>
                            <feDisplacementMap scale="40" in="SourceGraphic" />
                        </filter>
                    </svg>
                    <div className="list">
                        <ul>
                            <li ref={listsRefs}><Link to="/">HOME</Link>

                                <img ref={imagesRefs} src="/images/Rectangle 10.jpg" alt="" />
                            </li>
                            <li ref={listsRefs}><Link to="/productCat">PRODOUT</Link>
                                <img ref={imagesRefs} src="/images/Rectangle 1.jpg" alt="" />
                            </li>
                            <li ref={listsRefs}><Link to="/projectList">PROJECT</Link>
                                <img ref={imagesRefs} src="/images/Rectangle 16.jpg" alt="" />
                            </li>
                            <li ref={listsRefs}><Link to="/aboutUs">ABOUT US</Link></li>
                            <li ref={listsRefs}><Link to="/contactUs">CONTACT</Link>
                                <img ref={imagesRefs} src="/images/Rectangle 10.jpg" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
