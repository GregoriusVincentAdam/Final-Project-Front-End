import React, { useState, useEffect } from 'react';
import "../assets/css/templatemo-style.css";
import Contact from './Contact';
import About from './About';
import axios from "axios";
import Top from './Top';

const Homepage = () => {

    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        axios
        .get("http://localhost:3004/menu")
        .then((res) => setMenu (res.data));
    },[]);

    return(
        <div className="container">
            <Top />
            <main>
                <header className="row tm-welcome-section">
                <h2 className="col-12 text-center tm-section-title">Marijo Makang Disini Kawan</h2>
                <p className="col-12 text-center">Budayakan malas memasa, karena memasa torang pe kerja. Singgah jo, nanti om deng tanta yang ator ngoni pe makang. Mar jang lupa bayar neh, nda mahal-mahal skali kwa eh.</p>
                </header>
                <div className="tm-paging-links">
                    <h1 className="col-12 text-center tm-section-title">Menu Makanan</h1>
                </div>

                {/* Menu */}
                <div className="row tm-gallery">
                {/* gallery page 1 */}
                <div id="tm-gallery-page-pizza" className="tm-gallery-page">
                               
                {
                     menu.map(item => {
                        return(
                             <article className="col-lg-3 col-md-4 col-sm-6 col-20 tm-gallery-item">
                                    <figure>
                                        <img src="img/gallery/01.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                                        <figcaption>
                                        <h4 className="tm-gallery-title">{item.judul}</h4>
                                        <p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                                        <p className="tm-gallery-price">{item.harga}</p>
                                        </figcaption>
                                    </figure>
                                </article>
                            
                        )
                     })
                }
                </div> 
                </div>
               
               
               
               
               
               
                <div className="tm-section tm-container-inner">
                <div className="row">
                    <div className="col-md-6">
                    <figure className="tm-description-figure">
                        <img src="img/img-01.jpg" alt="Image" className="img-fluid" />
                    </figure>
                    </div>
                    <div className="col-md-6">
                    <div className="tm-description-box"> 
                        <h4 className="tm-gallery-title">Maecenas nulla neque</h4>
                        <p className="tm-mb-45">Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to <a rel="nofollow" href="https://templatemo.com/contact">talk to us</a> for additional permissions about our templates. Thank you.</p>
                        <a href="about.html" className="tm-btn tm-btn-default tm-right">Read More</a>
                    </div>
                    </div>
                </div>
                </div>
                <About />
                <Contact />
            </main>
        </div>

        

    )
};

export default Homepage;