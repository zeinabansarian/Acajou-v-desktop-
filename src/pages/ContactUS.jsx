import React from 'react'
import Header from '../components/header'

export default function ContactUS() {
    return (
        <div className="contactUs">
            <Header active={true} />
            <div className="contactContainer">

                <div className="leftCol">
                    <h1>Contact Us</h1>
                    <div className="items">

                        <ul>
                            <li>
                                <h2>

                                    TELEPHONE :
                                </h2>
                                <h4> ( +98 ) 21 222 10 491 -3</h4>
                            </li>
                            <li>
                                <h2>

                                    WHATSAPP :
                                </h2>
                                <h4> ( +98 ) 21 222 10 491 -3</h4>
                            </li>
                            <li>
                                <h2>

                                    EMAIL :
                                </h2>
                                <h5> ( +98 ) 21 222 10 491 -3</h5>
                            </li>

                        </ul>
                        <ul>
                            <li>
                                <h2>

                                    WEBSITE :
                                </h2>
                                <a href="" title="WEBSITE">WWW.ANSONKITCHEN.COM</a>
                            </li>
                            <li>
                                <h2>

                                    INSTAGRAM :
                                </h2>
                                <h5>ANSON.KITCHEN</h5>
                            </li>
                            <li>
                                <h2>

                                    EMAIL :
                                </h2>
                                <h5> ( +98 ) 21 222 10 491 -3</h5>
                            </li>

                        </ul>
                        <ul>
                            <li>
                                <h2>

                                    Opening hours :
                                </h2>
                                <h4>09:00AM - 07:00 PM</h4>
                            </li>


                        </ul>
                    </div>

                </div>
                <div className="rightCol">
                    <img src="images/Rectangle 56.jpg" alt="contactUs" title="contactUs" />
                </div>
            </div>

        </div>
    )
}
