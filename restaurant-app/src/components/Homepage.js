import React from 'react';
import "../assets/css/templatemo-style.css";
import Contact from './Contact';
import About from './About';
import Top from './Top';



const Homepage = () => {
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
                {/* Gallery */}
                <div className="row tm-gallery">
                {/* gallery page 1 */}
                <div id="tm-gallery-page-pizza" className="tm-gallery-page">
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="img/gallery/01.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                        <figcaption>
                        <h4 className="tm-gallery-title">Fusce dictum finibus</h4>
                        <p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                        <p className="tm-gallery-price">$45 / $55</p>
                        </figcaption>
                    </figure>
                    </article>
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="img/gallery/02.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                        <figcaption>
                        <h4 className="tm-gallery-title">Aliquam sagittis</h4>
                        <p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                        <p className="tm-gallery-price">$65 / $70</p>
                        </figcaption>
                    </figure>
                    </article>
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="img/gallery/03.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                        <figcaption>
                        <h4 className="tm-gallery-title">Sed varius turpis</h4>
                        <p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                        <p className="tm-gallery-price">$30.50</p>
                        </figcaption>
                    </figure>
                    </article>
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="img/gallery/04.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                        <figcaption>
                        <h4 className="tm-gallery-title">Aliquam sagittis</h4>
                        <p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                        <p className="tm-gallery-price">$25.50</p>
                        </figcaption>
                    </figure>
                    </article>
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="img/gallery/05.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                        <figcaption>
                        <h4 className="tm-gallery-title">Maecenas eget justo</h4>
                        <p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                        <p className="tm-gallery-price">$80.25</p>
                        </figcaption>
                    </figure>
                    </article>
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="img/gallery/06.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                        <figcaption>
                        <h4 className="tm-gallery-title">Quisque et felis eros</h4>
                        <p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                        <p className="tm-gallery-price">$20 / $40 / $60</p>
                        </figcaption>
                    </figure>
                    </article>
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="img/gallery/07.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                        <figcaption>
                        <h4 className="tm-gallery-title">Sed ultricies dui</h4>
                        <p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                        <p className="tm-gallery-price">$94</p>
                        </figcaption>
                    </figure>
                    </article>
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="img/gallery/08.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                        <figcaption>
                        <h4 className="tm-gallery-title">Donec porta consequat</h4>
                        <p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                        <p className="tm-gallery-price">$15</p>
                        </figcaption>
                    </figure>
                    </article>
                </div> {/* gallery page 1 */}
                {/* gallery page 2 */}
                <div id="tm-gallery-page-salad" className="tm-gallery-page hidden">
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="img/gallery/04.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                        <figcaption>
                        <h4 className="tm-gallery-title">Salad Menu One</h4>
                        <p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
                        <p className="tm-gallery-price">$25</p>
                        </figcaption>
                    </figure>
                    </article>
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="img/gallery/03.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                        <figcaption>
                        <h4 className="tm-gallery-title">Second Title Salad</h4>
                        <p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
                        <p className="tm-gallery-price">$30</p>
                        </figcaption>
                    </figure>
                    </article>
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="img/gallery/05.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                        <figcaption>
                        <h4 className="tm-gallery-title">Third Salad Item</h4>
                        <p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
                        <p className="tm-gallery-price">$45</p>
                        </figcaption>
                    </figure>
                    </article>
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="img/gallery/01.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                        <figcaption>
                        <h4 className="tm-gallery-title">Superior Salad</h4>
                        <p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
                        <p className="tm-gallery-price">$50</p>
                        </figcaption>
                    </figure>
                    </article>
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="img/gallery/08.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                        <figcaption>
                        <h4 className="tm-gallery-title">Sed ultricies dui</h4>
                        <p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
                        <p className="tm-gallery-price">$55 / $60</p>
                        </figcaption>
                    </figure>
                    </article>
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="img/gallery/07.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                        <figcaption>
                        <h4 className="tm-gallery-title">Maecenas eget justo</h4>
                        <p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
                        <p className="tm-gallery-price">$75</p>
                        </figcaption>
                    </figure>
                    </article>
                </div> {/* gallery page 2 */}
                {/* gallery page 3 */}
                <div id="tm-gallery-page-noodle" className="tm-gallery-page hidden">
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="img/gallery/08.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                        <figcaption>
                        <h4 className="tm-gallery-title">Noodle One</h4>
                        <p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <p className="tm-gallery-price">$12.50</p>
                        </figcaption>
                    </figure>
                    </article>
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="img/gallery/07.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                        <figcaption>
                        <h4 className="tm-gallery-title">Noodle Second</h4>
                        <p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <p className="tm-gallery-price">$15.50</p>
                        </figcaption>
                    </figure>
                    </article>
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="img/gallery/06.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                        <figcaption>
                        <h4 className="tm-gallery-title">Third Soft Noodle</h4>
                        <p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <p className="tm-gallery-price">$20.50</p>
                        </figcaption>
                    </figure>
                    </article>
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="img/gallery/05.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                        <figcaption>
                        <h4 className="tm-gallery-title">Aliquam sagittis</h4>
                        <p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <p className="tm-gallery-price">$30.25</p>
                        </figcaption>
                    </figure>
                    </article>
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="img/gallery/04.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                        <figcaption>
                        <h4 className="tm-gallery-title">Maecenas eget justo</h4>
                        <p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <p className="tm-gallery-price">$35.50</p>
                        </figcaption>
                    </figure>
                    </article>
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <figure>
                        <img src="img/gallery/03.jpg" alt="Image" className="img-fluid tm-gallery-img" />
                        <figcaption>
                        <h4 className="tm-gallery-title">Quisque et felis eros</h4>
                        <p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <p className="tm-gallery-price">$40.50</p>
                        </figcaption>
                    </figure>
                    </article>
                </div> {/* gallery page 3 */}
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