import React, { useState } from 'react';

import $ from 'jquery';
import Isotope from 'isotope-layout';


// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
// import 'lightbox2/dist/css/lightbox.css';
// import 'lightbox2';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel';


// Style files
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import './vendor/bootstrap/js/bootstrap.min.js';
import './vendor/jquery/jquery.min.js';
import './assets/js/isotope.min.js';
import './assets/js/owl-carousel.js';
import './assets/js/lightbox.js';
import './assets/js/tabs.js';
import './assets/js/video.js';
import './assets/js/slick-slider.js';
import './assets/js/custom.js';

import './vendor/bootstrap/css/bootstrap.min.css';
import './assets/css/fontawesome.css';
import './assets/css/templatemo-grad-school.css';
import './assets/css/owl.css';
import './assets/css/lightbox.css';


function Landing() {
    useEffect(() => {
        // according to loftblog tut
        $('.nav li:first').addClass('active');
    
        const showSection = (section, isAnimate) => {
          const direction = section.replace(/#/, '');
          const reqSection = $('.section').filter(`[data-section="${direction}"]`);
          const reqSectionPos = reqSection.offset().top - 0;
    
          if (isAnimate) {
            $('body, html').animate({
              scrollTop: reqSectionPos
            }, 800);
          } else {
            $('body, html').scrollTop(reqSectionPos);
          }
        };
    
        const checkSection = () => {
          $('.section').each(function () {
            const $this = $(this);
            const topEdge = $this.offset().top - 80;
            const bottomEdge = topEdge + $this.height();
            const wScroll = $(window).scrollTop();
            if (topEdge < wScroll && bottomEdge > wScroll) {
              const currentId = $this.data('section');
              const reqLink = $('a').filter(`[href*="#${currentId}"]`);
              reqLink.closest('li').addClass('active').siblings().removeClass('active');
            }
          });
        };
    
        $('.main-menu, .scroll-to-section').on('click', 'a', function (e) {
          if ($(e.target).hasClass('external')) {
            return;
          }
          e.preventDefault();
          $('#menu').removeClass('active');
          showSection($(this).attr('href'), true);
        });
    
        $(window).scroll(function () {
          checkSection();
        });
    
        // Initialize Isotope
        const iso = new Isotope('.grid', {
          itemSelector: '.grid-item',
          layoutMode: 'fitRows'
        });
    
        // Initialize Owl Carousel
        $('.owl-carousel').owlCarousel();
    
        // Initialize Lightbox
        lightbox.option({
          'resizeDuration': 200,
          'wrapAround': true
        });
    
        // Initialize Slick Slider
        $('.slick-slider').slick();
    
      }, []);
    
    return (
        <div>
        <h1>This is my Page</h1>
              {/* <!--header--> */}
  <header className="main-header clearfix" role="header">
    <div className="logo">
      <a href="#"><em>Grad</em> School</a>
    </div>
    <a href="#menu" className="menu-link"><i className="fa fa-bars"></i></a>
    <nav id="menu" className="main-nav" role="navigation">
      <ul className="main-menu">
        <li><a href="#section1">Home</a></li>
        <li className="has-submenu"><a href="#section2">About Us</a>
          <ul className="sub-menu">
            <li><a href="#section2">Who we are?</a></li>
            <li><a href="#section3">What we do?</a></li>
            <li><a href="#section3">How it works?</a></li>
            <li><a href="https://templatemo.com/about" rel="sponsored" className="external">External URL</a></li>
          </ul>
        </li>
        <li><a href="#section4">Courses</a></li>
        {/* <!-- <li><a href="#section5">Video</a></li> --> */}
        <li><a href="#section6">Contact</a></li>
        <li><a href="https://templatemo.com" className="external">External</a></li>
      </ul>
    </nav>
  </header>

  {/* <!-- ***** Main Banner Area Start ***** --> */}
  <section className="section main-banner" id="top" data-section="section1">
      <video autoplay muted loop id="bg-video">
          <source src="assets/images/course-video.mp4" type="video/mp4" />
      </video>

      <div className="video-overlay header-text">
          <div className="caption">
              <h6>Graduate School of Management</h6>
              <h2><em>Your</em> ClassNameclassNameroom</h2>
              <div className="main-button">
                  <div className="scroll-to-section"><a href="#section2">Discover more</a></div>
              </div>
          </div>
      </div>
  </section>
  {/* <!-- ***** Main Banner Area End ***** --> */}


  <section className="features">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-12">
          <div className="features-post">
            <div className="features-content">
              <div className="content-show">
                <h4><i className="fa fa-pencil"></i>All Courses</h4>
              </div>
              <div className="content-hide">
                <p>Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.</p>
                <p className="hidden-sm">Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.</p>
                <div className="scroll-to-section"><a href="#section2">More Info.</a></div>
            </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="features-post second-features">
            <div className="features-content">
              <div className="content-show">
                <h4><i className="fa fa-graduation-cap"></i>Virtual ClassNameclassName</h4>
              </div>
              <div className="content-hide">
                <p>Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.</p>
                <p className="hidden-sm">Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.</p>
                <div className="scroll-to-section"><a href="#section3">Details</a></div>
            </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="features-post third-features">
            <div className="features-content">
              <div className="content-show">
                <h4><i className="fa fa-book"></i>Real Meeting</h4>
              </div>
              <div className="content-hide">
                <p>Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.</p>
                <p className="hidden-sm">Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.</p>
                <div className="scroll-to-section"><a href="#section4">Read More</a></div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="section why-us" data-section="section2">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Why choose Grad School?</h2>
          </div>
        </div>
        <div className="col-md-12">
          <div id='tabs'>
            <ul>
              <li><a href='#tabs-1'>Best Education</a></li>
              <li><a href='#tabs-2'>Top Management</a></li>
              <li><a href='#tabs-3'>Quality Meeting</a></li>
            </ul>
            <section className='tabs-content'>
              <article id='tabs-1'>
                <div className="row">
                  <div className="col-md-6">
                    <img src="assets/images/choose-us-image-01.png" alt="" />
                  </div>
                  <div className="col-md-6">
                    <h4>Best Education</h4>
                    <p>Grad School is free educational HTML template with Bootstrap 4.5.2 CSS layout. Feel free to use it for educational or commercial purposes. You may want to make <a href="https://paypal.me/templatemo" target="_parent" rel="sponsored">a little donation</a> to TemplateMo. Please tell your friends about us. Thank you.</p>
                  </div>
                </div>
              </article>
              <article id='tabs-2'>
                <div className="row">
                  <div className="col-md-6">
                    <img src="assets/images/choose-us-image-02.png" alt="" />
                  </div>
                  <div className="col-md-6">
                    <h4>Top Level</h4>
                    <p>You can modify this HTML layout by editing contents and adding more pages as you needed. Since this template has options to add dropdown menus, you can put many HTML pages.</p> 
                    <p>Suspendisse tincidunt, magna ut finibus rutrum, libero dolor euismod odio, nec interdum quam felis non ante.</p>
                  </div>
                </div>
              </article>
              <article id='tabs-3'>
                <div className="row">
                  <div className="col-md-6">
                    <img src="assets/images/choose-us-image-03.png" alt="" />
                  </div>
                  <div className="col-md-6">
                    <h4>Quality Meeting</h4>
                    <p>You are NOT allowed to redistribute this template ZIP file on any template collection website. However, you can use this template to convert into a specific theme for any kind of CMS platform such as WordPress. For more information, you shall <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">contact TemplateMo</a> now.</p>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="section coming-soon" data-section="section3">
    <div className="container">
      <div className="row">
        <div className="col-md-7 col-xs-12">
          <div className="continer centerIt">
            <div>
              <h4>Take <em>any online course</em> and win $326 for your next className</h4>
              <div className="counter">

                <div className="days">
                  <div className="value">00</div>
                  <span>Days</span>
                </div>

                <div className="hours">
                  <div className="value">00</div>
                  <span>Hours</span>
                </div>

                <div className="minutes">
                  <div className="value">00</div>
                  <span>Minutes</span>
                </div>

                <div className="seconds">
                  <div className="value">00</div>
                  <span>Seconds</span>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="right-content">
            <div className="top-content">
              <h6>Register your free account and <em>get immediate</em> access to online courses</h6>
            </div>
            <form id="contact" action="" method="get">
              <div className="row">
                <div className="col-md-12">
                  <fieldset>
                    <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required="" />
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <input name="email" type="text" className="form-control" id="email" placeholder="Your Email" required="" />
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <input name="phone-number" type="text" className="form-control" id="phone-number" placeholder="Your Phone Number" required="" />
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="button">Get it now</button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="section courses" data-section="section4">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Choose Your Course</h2>
          </div>
        </div>
        <div className="owl-carousel owl-theme">
          <div className="item">
            <img src="assets/images/courses-01.jpg" alt="Course #1" />
            <div className="down-content">
              <h4>Digital Marketing</h4>
              <p>You can get free images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.</p>
              <div className="author-image">
                <img src="assets/images/author-01.png" alt="Author 1" />
              </div>
              <div className="text-button-pay">
                <a href="#">Pay <i className="fa fa-angle-double-right"></i></a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="assets/images/courses-02.jpg" alt="Course #2" />
            <div className="down-content">
              <h4>Business World</h4>
              <p>Quisque cursus augue ut velit dictum, quis volutpat enim blandit. Maecenas a lectus ac ipsum porta.</p>
              <div className="author-image">
                <img src="assets/images/author-02.png" alt="Author 2" />
              </div>
              <div className="text-button-free">
                <a href="#">Free <i className="fa fa-angle-double-right"></i></a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="assets/images/courses-03.jpg" alt="Course #3" />
            <div className="down-content">
              <h4>Media Technology</h4>
              <p>Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.</p>
              <div className="author-image">
                <img src="assets/images/author-03.png" alt="Author 3" />
              </div>
              <div className="text-button-pay">
                <a href="#">Pay <i className="fa fa-angle-double-right"></i></a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="assets/images/courses-04.jpg" alt="Course #4" />
            <div className="down-content">
              <h4>Communications</h4>
              <p>Download free images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.</p>
              <div className="author-image">
                <img src="assets/images/author-04.png" alt="Author 4" />
              </div>
              <div className="text-button-free">
                <a href="#">Free <i className="fa fa-angle-double-right"></i></a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="assets/images/courses-05.jpg" alt="" />
            <div className="down-content">
              <h4>Business Ethics</h4>
              <p>Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.</p>
              <div className="author-image">
                <img src="assets/images/author-05.png" alt="" />
              </div>
              <div className="text-button-pay">
                <a href="#">Pay <i className="fa fa-angle-double-right"></i></a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="assets/images/courses-01.jpg" alt="" />
            <div className="down-content">
              <h4>Photography</h4>
              <p>Quisque cursus augue ut velit dictum, quis volutpat enim blandit. Maecenas a lectus ac ipsum porta.</p>
              <div className="author-image">
                <img src="assets/images/author-01.png" alt="" />
              </div>
              <div className="text-button-free">
                <a href="#">Free <i className="fa fa-angle-double-right"></i></a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="assets/images/courses-02.jpg" alt="" />
            <div className="down-content">
              <h4>Web Development</h4>
              <p>Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.</p>
              <div className="author-image">
                <img src="assets/images/author-02.png" alt="" />
              </div>
              <div className="text-button-free">
                <a href="#">Free <i className="fa fa-angle-double-right"></i></a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="assets/images/courses-03.jpg" alt="" />
            <div className="down-content">
              <h4>Learn HTML CSS</h4>
              <p>You can get free images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.</p>
              <div className="author-image">
                <img src="assets/images/author-03.png" alt="" />
              </div>
              <div className="text-button-pay">
                <a href="#">Pay <i className="fa fa-angle-double-right"></i></a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="assets/images/courses-04.jpg" alt="" />
            <div className="down-content">
              <h4>Social Media</h4>
              <p>Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.</p>
              <div className="author-image">
                <img src="assets/images/author-04.png" alt="" />
              </div>
              <div className="text-button-pay">
                <a href="#">Pay <i className="fa fa-angle-double-right"></i></a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="assets/images/courses-05.jpg" alt="" />
            <div className="down-content">
              <h4>Digital Arts</h4>
              <p>Quisque cursus augue ut velit dictum, quis volutpat enim blandit. Maecenas a lectus ac ipsum porta.</p>
              <div className="author-image">
                <img src="assets/images/author-05.png" alt="" />
              </div>
              <div className="text-button-free">
                <a href="#">Free <i className="fa fa-angle-double-right"></i></a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="assets/images/courses-01.jpg" alt="" />
            <div className="down-content">
              <h4>Media Streaming</h4>
              <p>Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.</p>
              <div className="author-image">
                <img src="assets/images/author-01.png" alt="" />
              </div>
              <div className="text-button-pay">
                <a href="#">Pay <i className="fa fa-angle-double-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  

  <section className="section video" data-section="section5">
    <div className="container">
      <div className="row">
        <div className="col-md-6 align-self-center">
          <div className="left-content">
            <span>our presentation is for you</span>
            <h4>Watch the video to learn more <em>about Grad School</em></h4>
            <p>You are NOT allowed to redistribute this template ZIP file on any template collection website. However, you can use this template to convert into a specific theme for any kind of CMS platform such as WordPress. You may 
                <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">contact TemplateMo</a> for details.
            <br /><br />Suspendisse tincidunt, magna ut finibus rutrum, libero dolor euismod odio, nec interdum quam felis non ante.</p>
            <div className="main-button"><a rel="nofollow" href="https://fb.com/templatemo" target="_parent">External URL</a></div>
          </div>
        </div>
        <div className="col-md-6">
          <article className="video-item">
            <div className="video-caption">
              <h4>Power HTML Template</h4>
            </div>
            <figure>
              <a href="https://www.youtube.com/watch?v=r9LtOG6pNUw" className="play"><img src="assets/images/main-thumb.png" /></a>
            </figure>
          </article>
        </div>
      </div>
    </div>
  </section>

  <section className="section contact" data-section="section6">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Let’s Keep In Touch</h2>
          </div>
        </div>
        <div className="col-md-6">
        
        {/* <!-- Do you need a working HTML contact-form script?
                	
                    Please visit https://templatemo.com/contact page --> */}
                    
          <form id="contact" action="" method="post">
            <div className="row">
              <div className="col-md-6">
                  <fieldset>
                    <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required="" />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input name="email" type="text" className="form-control" id="email" placeholder="Your Email" required="" />
                  </fieldset>
                </div>
              <div className="col-md-12">
                <fieldset>
                  <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your message..." required=""></textarea>
                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <button type="submit" id="form-submit" className="button">Send Message Now</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div id="map">
            <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="422px" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p><i className="fa fa-copyright"></i> Copyright 2020 by Grad School  
          
           | Design: <a href="https://templatemo.com" rel="sponsored" target="_parent">TemplateMo</a><br />
           Distributed By: <a href="https://themewagon.com" rel="sponsored" target="_blank">ThemeWagon</a>
          
          </p>
        </div>
      </div>
    </div>
  </footer>
        </div>
    );
}

export default Landing;