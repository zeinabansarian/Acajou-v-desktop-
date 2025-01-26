import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className="footerContainer">

                <div className="logo">
                    <Link to="/">
                        <img src="images/ANSON_logo_ 3.png" alt="logo" title="logo" />
                    </Link>
                </div>
                <div className="footerItem">
                    <h3>Menu</h3>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/">PRODOUT</Link></li>
                        <li><Link to="/projectList">PROJECT</Link></li>
                        <li><Link to="/aboutUs">ABOUT US</Link></li>
                        <li><Link to="/contactUs">CONTACT</Link></li>
                    </ul>
                </div>
                <div className="footerItem">
                    <h3>Social</h3>
                    <ul>
                        <li>
                            Instagram: Anson.kitchen
                        </li>
                        <li>info@ansonkitchen.com</li>
                        <li>www.ansonkitchen.com</li>
                    </ul>
                </div>
                <div className="footerItem">
                    <h3>Contact us</h3>

                    <ul>
                        <li>
                            <h6>address:</h6>
                            <p>Andarzgou Blv , Alavi Str , Acajou Buil</p>
                        </li>
                        <li>
                            <h6>telephone: </h6>
                            <p>( +98 ) 21 222 10 491 -3 </p>
                        </li>
                        <li>
                            <h6>whatsapp: </h6>
                            <p>( +935 ) 5166183</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyRight">
                <img src="images/namasite.png" alt="namasite" title="namasite" />
                <a href="namasite.ir">

                    <p>طراحی سایت و بهینه سازی سایت</p>
                </a>
            </div>
        </footer>
    )
}
