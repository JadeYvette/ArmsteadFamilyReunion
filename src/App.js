import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div className="App">
       <header id="header" className="header-scrolled">
    <div className="container">

      <div id="logo" className="float-left">
        <h2><a href="#intro">Armstead<span>Fishfry</span></a></h2>
      </div>

  <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li className="menu-active"><a href="index.html">Home</a></li>
          <li><a  className= "anchor" href="#schedule">Schedule</a></li>
          <li><a className= "anchor" href="#hotels">Accomodations</a></li>
         {/*<li><a href="#supporters">Dontate</a></li>*/}
          {/*<li><a href="#gallery">Gallery</a></li>*/}
          <li><a className= "anchor" href="#contact">Contact</a></li>
          {/*<li><a href="#contact">Directory</a></li>*/}
        </ul>
      </nav>
    </div>
  </header>
  <section id="intro">
    <div className="intro-container fadeIn">
      <h2 className="mb-4 pb-0">The 2020<br/><span>Armstead Family </span> Fish Fry</h2>
      <p className="mb-4 pb-0">3-5 July, Charlottesville, VA</p>
      <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-8" style={{margin: "auto"}}>
            <p className="mb-4 pb-0" style={{fontSize:'18px'}}>Greeting Family and Friends,Please join us for The Annual Armstead Family Fish Fry, July 3th thru July 5th in Charlottesville, VA.  We've planned a special weekend of Fun, Food and Fellowship.  We’re so excited and can hardly wait to see you.   </p>
          </div>
        </div>
      </div>
    </section>
      <a href="#schedu" className="about-btn scrollto">Fish Fry Information</a>
    </div>
  </section>

  <main id="main">
    <section id="schedule" className="section-with-bg">
      <div className="container fadeInUp" style={{paddingTop:"30px"}}>
        <div className="section-header">
          <h2> Weekend Agenda</h2>
        </div>


        <div className="tab-content row justify-content-center">

       
          <div role="tabpanel" className="col-lg-9 tab-pane fade show active" >

            <div className="row schedule-item">
              <div className="col-md-2"><time>July 3rd</time></div>
              <div className="col-md-10">
              <div className="speaker">
                </div>
                <h4>Meet and Greet</h4>
                <p> 6 p.m. – Sleep Inn & Suites Monticello</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>July 4th</time></div>
              <div className="col-md-10">
                <div className="speaker">
                </div>
                <h4>Family Fish Fry</h4>
                <p>3 p.m. until sunset – 1107 Dry Bridge Rd, Charlottesville VA 22903 </p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>July 5th</time></div>
              <div className="col-md-10">
                <div className="speaker">
                </div>
                <h4>Church Services </h4>
                <p>11 a.m. @ Mount Calvary Baptist, Ivy Virginia.</p>
              </div>
            </div>
          </div>
       
          <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-2">
            <div className="row schedule-item">
              <div className="col-md-2"><time>10:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
             
                </div>
                <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
                <p>Facere provident incidunt quos voluptas.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>11:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="assets/img/speakers/2.jpg" alt="Hubert Hirthe"/>
                </div>
                <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>12:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="assets/img/speakers/3.jpg" alt="Cole Emmerich"/>
                </div>
                <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>02:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="assets/img/speakers/4.jpg" alt="Jack Christiansen"/>
                </div>
                <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>03:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="assets/img/speakers/5.jpg" alt="Alejandrin Littel"/>
                </div>
                <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>04:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="assets/img/speakers/6.jpg" alt="Willow Trantow"/>
                </div>
                <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
              </div>
            </div>

          </div>
          <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-3">

            <div className="row schedule-item">
              <div className="col-md-2"><time>10:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="assets/img/speakers/2.jpg" alt="Hubert Hirthe"/>
                </div>
                <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>11:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="assets/img/speakers/3.jpg" alt="Cole Emmerich"/>
                </div>
                <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>12:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="assets/img/speakers/1.jpg" alt="Brenden Legros"/>
                </div>
                <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
                <p>Facere provident incidunt quos voluptas.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>02:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="assets/img/speakers/4.jpg" alt="Jack Christiansen"/>
                </div>
                <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>03:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="assets/img/speakers/5.jpg" alt="Alejandrin Littel"/>
                </div>
                <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>04:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="assets/img/speakers/6.jpg" alt="Willow Trantow"/>
                </div>
                <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
              </div>
            </div>

          </div>
    

        </div>

      </div>
    </section>

    {/*<section id="venue" className="fadeInUp">

      <div className="container-fluid">

        <div className="section-header">
          <h2>Event Venue</h2>
          <p>Event venue location info and gallery</p>
        </div>

        <div className="row no-gutters">
          <div className="col-lg-6 venue-map">
            <iframe title="iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" style={{border:0, allowfullscreen:true}}></iframe>
          </div>

          <div className="col-lg-6 venue-info">
            <div className="row justify-content-center">
              <div className="col-11 col-lg-8">
                <h3>Downtown Conference Center, New York</h3>
                <p>Iste nobis eum sapiente sunt enim dolores labore accusantium autem. Cumque beatae ipsam. Est quae sit qui voluptatem corporis velit. Qui maxime accusamus possimus. Consequatur sequi et ea suscipit enim nesciunt quia velit.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="container-fluid venue-gallery-container">
        <div className="row no-gutters">

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="assets/img/venue-gallery/1.jpg" className="venobox" data-gall="venue-gallery">
                <img src="assets/img/venue-gallery/1.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="assets/img/venue-gallery/2.jpg" className="venobox" data-gall="venue-gallery">
                <img src="assets/img/venue-gallery/2.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="assets/img/venue-gallery/3.jpg" className="venobox" data-gall="venue-gallery">
                <img src="assets/img/venue-gallery/3.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="assets/img/venue-gallery/4.jpg" className="venobox" data-gall="venue-gallery">
                <img src="assets/img/venue-gallery/4.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="assets/img/venue-gallery/5.jpg" className="venobox" data-gall="venue-gallery">
                <img src="assets/img/venue-gallery/5.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="assets/img/venue-gallery/6.jpg" className="venobox" data-gall="venue-gallery">
                <img src="assets/img/venue-gallery/6.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="assets/img/venue-gallery/7.jpg" className="venobox" data-gall="venue-gallery">
                <img src="assets/img/venue-gallery/7.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="assets/img/venue-gallery/8.jpg" className="venobox" data-gall="venue-gallery">
                <img src="assets/img/venue-gallery/8.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

        </div>
      </div>

  </section>*/}

    <section id="hotels" className="section-with-bg fadeInUp">

      <div className="container"  style={{paddingTop:"30px"}}>
        <div className="section-header">
          <h2>Accommodations</h2>
        </div>

        <div className="row">

          <div className="col-lg-6 col-md-6">
            <div className="hotel">
              <div className="hotel-img">
                <img src="https://static.travelweekly.com/i/sized/780/437/media.iceportal.com/101562/photos/61785696_XL.jpg" alt="Hotel 1" className="img-fluid"/>
              </div>
              <h3><a href="#">Sleep Inn & Suites Monticello</a></h3>
              <p>1185 5th St. SW, Charlottesville VA, 434-244-9969</p>
              <ul style={{textAlign:'left'}}>
                <li>$125.00 plus applicable tax presently @13.3% with reservation by credit only</li>
                <li>Arrival Date:  7/3/2020 with checkout:  07/05/2020</li>
                <li>Cut-off date (Reserve by date):  06/03/2020</li>
                <li>Link for booking online:  https://www.choicehotels.com/reservations/groups/AJ61G1</li>
                <li>Cancellation Policy:  2 days</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="hotel">
              <div className="hotel-img">
                <img src="https://media.radissonhotels.net/image/Country-Inn-Suites-by-Radisson-Charlottesville-UVA-VA/Exteriorview/16256-114670-f63625598_3XL.jpg?impolicy=CustomCrop&cwidth=670&cheight=603" alt="Hotel 2" className="img-fluid"/>
              </div>
              <h3><a href="#">Country Inn & Suites</a></h3>
              <p>located at 1600 Emmet Street North, Charlottesville VA, 434-293-4600</p>
              <ul style={{textAlign:'left'}}>
                <li>$139.00 plus tax of 13.3%</li>
                <li>Arrival Date:  7/3/2020 with checkout:  07/05/2020</li>
                <li> Cut-off-date (Reserve by date):  06/01/2020</li>
                <li> To Book :  Call 434-293-4600 and request rate for Armstead/Reunion</li>
                <li> Cancellation Policy:  72 hours prior to arrival</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>


    {/*<section id="gallery" className="fadeInUp">

      <div className="container">
        <div className="section-header">
          <h2>Gallery</h2>
          <p>Check our gallery from the recent events</p>
        </div>
      </div>

      <div className="owl-carousel gallery-carousel">
        <a href="assets/img/gallery/1.jpg" className="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/1.jpg" alt=""/></a>
        <a href="assets/img/gallery/2.jpg" className="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/2.jpg" alt=""/></a>
        <a href="assets/img/gallery/3.jpg" className="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/3.jpg" alt=""/></a>
        <a href="assets/img/gallery/4.jpg" className="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/4.jpg" alt=""/></a>
        <a href="assets/img/gallery/5.jpg" className="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/5.jpg" alt=""/></a>
        <a href="assets/img/gallery/6.jpg" className="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/6.jpg" alt=""/></a>
        <a href="assets/img/gallery/7.jpg" className="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/7.jpg" alt=""/></a>
        <a href="assets/img/gallery/8.jpg" className="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/8.jpg" alt=""/></a>
      </div>

</section>*/}
    <section id="contact" className="section-bg fadeInUp">

      <div className="container">

        <div className="section-header">
          <h2>Contact</h2>
        </div>

        <div className="row contact-info">

          <div className="col-md-3">
            <div className="contact-address">
              <i className="ion-ios-location-outline"></i>
              <h3>Yvonne Wilkins</h3>
              <p><a href="tel:+13016461339">301-646-1339</a></p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="contact-phone">
              <i className="ion-ios-telephone-outline"></i>
              <h3>Henry Waller Jr</h3>
              <p><a href="tel:+17036804023">703-680-4023</a></p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="contact-email">
              <i className="ion-ios-email-outline"></i>
              <h3>Francina Fleming</h3>
              <p><a href="tel:+14076178902">407-617-8902</a></p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="contact-phone">
              <i className="ion-ios-email-outline"></i>
              <h3>Jeannette Armstead</h3>
              <p><a href="tel:+4347601508">434-760-1508</a></p>
            </div>
          </div>

        </div>
      </div>
    </section>

  </main>

  <footer id="footer">
    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong>JadeYvette</strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>

  <a href="#" className="back-to-top"><i className="fa fa-angle-up"></i></a>

    </div>
  );
}

export default App;
