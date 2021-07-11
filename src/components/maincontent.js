import React from 'react';
import Video2 from "../video/headervid.mkv"
import trap1 from "../images/side1.jpg"







function MainContent(props){
    return (
        <React.Fragment>

            <main id="main">
                <section className="page-section bg-dark-alfa-50 light-content relative"  id="home">
                       <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100">
                        
                        <div className="bg-video-wrapper">
                            <video className="bg-video" preload="auto" autoPlay loop muted playsInline data-object-fit="cover">
                                <source src={Video2} type="video/mp4"/>
                                <source src="video/video.webm" type="video/webm"/>                                    
                            </video>
                            <div className="bg-video-overlay bg-dark-alfa-30"></div>
                        </div>
                        <a href="/#" role="button" className="bg-video-button-muted"><i className="fa fa-volume-off"></i></a>
                        
                        <div className="home-content">
                            <h1 className="hs-line-3 mb-40 mb-xs-20 wow fadeInUpShort luckraniheaderneontext" data-wow-delay=".1s"><span id="lucky-word">Lucky</span> <span id="irani-word">Irani</span><span id="circus-word"> Circus</span></h1>
                            <h2 className="hs-line-2 mb-70 mb-xs-40 wow fadeInUpShort" data-wow-delay=".2s">
                                <span className="text-rotate">
                                    Coming to your town,
                                    August 1st,
                                    Lahore,
                                    Buy tickets ASAP
                                </span>
                            </h2>
                            <div className="local-scroll mb-20 wow fadeInUpShort" data-wow-delay=".3s">
                                <a href="#buy-tickets" className="btn btn-mod btn-w btn-large btn-round mx-md-1">Buy Tickets</a>
                            </div>
                        </div>
                        
                        <div className="local-scroll scroll-down-wrap wow fadeInUpShort" data-wow-offset="0">
                            <a href="#about" className="scroll-down"><i className="scroll-down-icon"></i><span className="sr-only">Scroll to the next section</span></a>
                        </div>
                        
                    </div>
                    
                </section>

                <section className="small-section bg-dark light-content ">
                    <div className="container relative">
                        <div className="row wow fadeInUpShort">
                            <div className="col-md-8 offset-md-2 text-center">
                                <h3 className="call-action-1-heading gloss-font" style={{color:"#ffb400"}}>Vision</h3>
                                <div className="call-action-1-decription mb-60 mb-sm-30 vision-text">
                                    Our vision is to spread happiness and inspire our audience to follow their dreams. We know this is a very big challenge to accomplish by performing arts, but we believe it ́s important to set our goals high.
                                    We think the combination of impressive circus skills, humor and the intensive interaction with the audience on stage is a very good toolbox to deliver the message we believe in.
                                </div>                                        
                            
                                
                            </div>
                        </div>
                    </div>
                </section>
                
                <section  id="about">
                    <div className="container relative vision-text">
                        
                        <div className="count-wrapper">
                            <div className="row">
                                <div className="col-md-6 col-lg-3 mb-md-30  vision-boxes"style={{background:"#d44343"}} >
                                    <div className="count-item ">
                                        <div className="count-bg wow scalexIn"></div>
                                        <div className="relative wow fadeIn" data-wow-delay="1s">
                                            <div className="breif-numbers">
                                                3.5
                                            </div>
                                            <div className="count-descr">
                                                <i className="fa fa-briefcase"></i>
                                                <span className="count-title">Million Viewers</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-6 col-lg-3 mb-md-30 vision-boxes" style={{background:"#9068d4"}}>
                                    <div className="count-item">
                                        <div className="count-bg wow scalexIn"></div>
                                        <div className="relative wow fadeIn" data-wow-delay="1.1s">
                                            <div className="breif-numbers">
                                                40K
                                            </div>
                                            <div className="count-descr">
                                                <i className="fa fa-heart"></i>
                                                <span className="count-title">Shows</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-6 col-lg-3 mb-md-30 vision-boxes" style={{background:"#4bb1df"}}>
                                    <div className="count-item">
                                        <div className="count-bg wow scalexIn"></div>
                                        <div className="relative wow fadeIn" data-wow-delay="1.2s">
                                            <div className="breif-numbers">
                                                100
                                            </div>
                                            <div className="count-descr">
                                                <i className="fa fa-coffee"></i>
                                                <span className="count-title">Performers</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-6 col-lg-3 mb-md-30 vision-boxes" style={{background:"#9ed450"}}>
                                    <div className="count-item">
                                        <div className="count-bg wow scalexIn"></div>
                                        <div className="relative wow fadeIn" data-wow-delay="1.3s">
                                            <div className="breif-numbers">
                                                20
                                            </div>
                                            <div className="count-descr">
                                                <i className="fa fa-lightbulb"></i>
                                                <span className="count-title">International Artists</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                        
                                            
                    </div>
                </section>
                
            <hr className="mt-0 mb-0 white" />

            <section className="page-section pb-0" id="portfolio">
            
            <div className="full-wrapper relative">
                
                
                <div className="text-center mb-80 mb-sm-50">
                    <h2 className="section-title gloss-font">BREATHTAKING ACTS</h2>
                    <p className="section-title-descr">
                        Take a look at some of them
                    </p>
                </div>
                
                                    
                <div className="works-filter text-center" role="tablist">
                    <a href="/#" className="filter active" role="tab" aria-selected="true" data-filter="*">Acts</a>
                </div>                       
                <ul className="works-grid work-grid-3 work-grid-gut clearfix hover-white hide-titles" id="work-grid">
                            
                            <li className="work-item mix photography">
                                <a href="/#" className="work-lightbox-link mfp-image">
                                    <div className="work-img">
                                        <div className="work-img-bg wow-p scalexIn"></div>
                                        <img src={trap1} alt="Work Description" className="wow-p fadeIn" data-wow-delay="1s" />
                                    </div>
                                    <div className="work-intro">
                                        <h3 className="work-title">Green Leaf</h3>
                                        <div className="work-descr">
                                            Lightbox 
                                        </div>
                                    </div>
                                </a>
                            </li>
                            
                            <li className="work-item mix branding design">
                                <a href="portfolio-single-1.html" className="work-ext-link">
                                    <div className="work-img">
                                        <div className="work-img-bg wow-p scalexIn"></div>
                                        <img src={trap1} alt="Work Description" className="wow-p fadeIn" data-wow-delay="1s" />
                                    </div>
                                    <div className="work-intro">
                                        <h3 className="work-title">Photo Lighting</h3>
                                        <div className="work-descr">
                                            External Page
                                        </div>
                                    </div>
                                </a>
                            </li>
                         
                            <li className="work-item mix branding">
                                <a href="portfolio-single-1.html" className="work-ext-link">
                                    <div className="work-img">
                                        <div className="work-img-bg wow-p scalexIn"></div>
                                        <img src={trap1} alt="Work Description" className="wow-p fadeIn" data-wow-delay="1s" />
                                    </div>
                                    <div className="work-intro">
                                        <h3 className="work-title">Green Branch</h3>
                                        <div className="work-descr">
                                            External Page
                                        </div>
                                    </div>
                                </a>
                            </li>
                     
                            <li className="work-item mix design photography">
                                <a href="portfolio-single-1.html" className="work-ext-link">
                                    <div className="work-img">
                                        <div className="work-img-bg wow-p scalexIn"></div>
                                        <img src={trap1} alt="Work Description" className="wow-p fadeIn" data-wow-delay="1s" />
                                    </div>
                                    <div className="work-intro">
                                        <h3 className="work-title">White Chair</h3>
                                        <div className="work-descr">
                                            External Page
                                        </div>
                                    </div>
                                </a>
                            </li>
                       
                            <li className="work-item mix design">
                                <a href="portfolio-single-1.html" className="work-ext-link">
                                    <div className="work-img">
                                        <div className="work-img-bg wow-p scalexIn"></div>
                                        <img src={trap1} alt="Work Description" className="wow-p fadeIn" data-wow-delay="1s" />
                                    </div>
                                    <div className="work-intro">
                                        <h3 className="work-title">White Table</h3>
                                        <div className="work-descr">
                                            External Page
                                        </div>
                                    </div>
                                </a>
                            </li>
                            
                            <li className="work-item mix design branding">
                                <a href="images/portfolio/full-project-6.jpg" className="work-lightbox-link mfp-image">
                                    <div className="work-img">
                                        <div className="work-img-bg wow-p scalexIn"></div>
                                        <img src={trap1} alt="Work Description" className="wow-p fadeIn" data-wow-delay="1s" />
                                    </div>
                                    <div className="work-intro">
                                        <h3 className="work-title">The Book</h3>
                                        <div className="work-descr">
                                            Lightbox
                                        </div>
                                    </div>
                                </a>
                            </li>
                            
                    </ul>
               
               
                <section className="small-section bg-dark-lighter light-content " >
                    <div className="container relative ">
                        <div className="row wow fadeInUpShort">
                            <div className="col-lg-5 offset-lg-2">
                                <h3 className="call-action-1-heading">Want to see more works?</h3>
                                <div className="call-action-1-decription mb-0 pb-md-20">
                                    Proin fringilla augue at maximus vestibulum nam pulvinar vitae integer non dapibus diam, ac eleifend lectus.
                                </div>                                        
                            </div>
                            <div className="col-lg-3 pt-10 text-lg-end">
                                <div className="local-scroll">
                                    <a href="portfolio-wide-gutter-3col-dark.html" className="btn btn-mod btn-w btn-large btn-round">View Portfolio</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </section>
        
            <hr className="mt-0 mb-0 white" />

            <section id="aboutevent">
                <div className="container" data-aos="fade-up">
                    <div className="row about-event">
                    <div className="col-lg-6">
                        <h2 className="gloss-font">About The Event</h2>
                        <p>Sed nam ut dolor qui repellendus iusto odit. Possimus inventore eveniet accusamus error amet eius aut
                        accusantium et. </p>
                    </div>
                    <div className="col-lg-3">
                        <h3 className="gloss-font">Where</h3>
                        <p className="about-eventp">DHA, Lahore</p>
                    </div>
                    <div className="col-lg-3">
                        <h3 className="gloss-font">When</h3>
                        <p className="about-eventp">Monday to Wednesday<br/>1-3 August</p>
                    </div>
                    </div>
                </div>
        </section>

            <hr className="mt-0 mb-0 white" />

            <section id="schedule" className="section-with-bg">
                    <div className="container" data-aos="fade-down" data-aos-delay="100">
                        <div className="section-header">
                        <h2 className="gloss-font">Event Schedule</h2>
                        <p>Here is our event schedule</p>
                        </div>

                        <ul className="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay="100">
                        <li className="nav-item">
                            <a className="nav-link active" href="#day-1" role="tab" data-bs-toggle="tab">Day 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#day-2" role="tab" data-bs-toggle="tab">Day 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#day-3" role="tab" data-bs-toggle="tab">Day 3</a>
                        </li>
                        </ul>

                        <h3 className="sub-heading">Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia. Eius
                        necessitatibus voluptatem quis labore perspiciatis quia.</h3>

                        <div className="tab-content row justify-content-center" data-aos="fade-right" data-aos-delay="200">

                        <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">

                            <div className="row schedule-item ">
                            <div className="col-md-2 schedule-bold-text-green " ><time>09:30 AM</time></div>
                            <div className="col-md-10">
                                <h4 className="schedule-bold-text-red">Registration</h4>
                                <p>Fugit voluptas iusto maiores temporibus autem numquam magnam.</p>
                            </div>
                            </div>

                            <div className="row schedule-item">
                            <div className="col-md-2 schedule-bold-text-green"><time>10:00 AM</time></div>
                            <div className="col-md-10">
                                <div className="speaker">
                                <img src={trap1} alt="Brenden Legros"/>
                                </div>
                                <h4 className="schedule-bold-text-red">Trapeze Act <span>Brenden Legros</span></h4>
                                <p>Facere provident incidunt quos voluptas.</p>
                            </div>
                            </div>

                            <div className="row schedule-item">
                            <div className="col-md-2 schedule-bold-text-green"><time>11:00 AM</time></div>
                            <div className="col-md-10">
                                <div className="speaker">
                                <img src={trap1} alt="Hubert Hirthe"/>
                                </div>
                                <h4 className="schedule-bold-text-red">Clown Act <span>Hubert Hirthe</span></h4>
                                <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
                            </div>
                            </div>

                            <div className="row schedule-item">
                            <div className="col-md-2 schedule-bold-text-green"><time>12:00 AM</time></div>
                            <div className="col-md-10">
                                <div className="speaker">
                                <img src={trap1} alt="Cole Emmerich"/>
                                </div>
                                <h4 className="schedule-bold-text-red">Gymnastics<span>Cole Emmerich</span></h4>
                                <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
                            </div>
                            </div>

                        </div>
                        
                        <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-2">

                            <div className="row schedule-item">
                            <div className="col-md-2 schedule-bold-text-green"><time>10:00 AM</time></div>
                            <div className="col-md-10">
                                <div className="speaker">
                                <img src={trap1} alt="Brenden Legros"/>
                                </div>
                                <h4 className="schedule-bold-text-red">Cycle Circus <span>Brenden Legros</span></h4>
                                <p>Facere provident incidunt quos voluptas.</p>
                            </div>
                            </div>

                            <div className="row schedule-item">
                            <div className="col-md-2 schedule-bold-text-green"><time>11:00 AM</time></div>
                            <div className="col-md-10">
                                <div className="speaker">
                                <img src={trap1} alt="Hubert Hirthe"/>
                                </div>
                                <h4 className="schedule-bold-text-red">Ladder Act <span>Hubert Hirthe</span></h4>
                                <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
                            </div>
                            </div>

                        </div>
                        
                        <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-3">

                            <div className="row schedule-item">
                            <div className="col-md-2 schedule-bold-text-green"><time>10:00 AM</time></div>
                            <div className="col-md-10">
                                <div className="speaker">
                                <img src={trap1} alt="Hubert Hirthe"/>
                                </div>
                                <h4 className="schedule-bold-text-red">Hula Hoop<span>Hubert Hirthe</span></h4>
                                <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
                            </div>
                            </div>

                            <div className="row schedule-item">
                            <div className="col-md-2 schedule-bold-text-green"><time>11:00 AM</time></div>
                            <div className="col-md-10">
                                <div className="speaker">
                                <img src={trap1} alt="Cole Emmerich"/>
                                </div>
                                <h4 className="schedule-bold-text-red">Ring Jumping <span>Cole Emmerich</span></h4>
                                <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
                            </div>
                            </div>

                        </div>

                        </div>

                    </div>

                </section>

            <hr className="mt-0 mb-0 white" />

            <section className="page-section">
                <div className="container relative">
                        <div className="home-content wow fadeInUpShort">
                            <h1 className="hs-line-7 mb-60 mb-xs-40 neonText gloss-font">Last Event Highlights</h1>
                            
                        </div>
                    <div className="row">
                        <div className="col-sm-3 mb-xs-40">

                        </div>
                        <div className="col-sm-6 mb-xs-40">
                            
                            <div className="video">
                                <iframe loading="eager"  src="http://www.youtube.com/embed/JuyB7NO0EYY" allowFullScreen></iframe>
                            </div>
                            
                        </div>
                        <div className="col-sm-3 mb-xs-40"></div>

                        
                    </div>
                
                </div>
            </section>
            <section className="home-section service-background" >

                    <div className="container fixed-height-small d-flex align-items-center">
                       
                        <div className="home-content wow fadeInUpShort">
                            <h1 className="hs-line-7 mb-60 mb-xs-40 gloss-font">Services</h1>
                            <div className="local-scroll mb-20">
                                <a href="/#" className="btn btn-mod btn-w btn-medium btn-round mx-md-1">View Services</a>
                            </div>
                        </div>
                        
                    </div>
            </section>

            <section id="buy-tickets" className="section-with-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                    <h2 className="gloss-font" >Buy Tickets</h2>
                    <p>Ticket Prices.... </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Standard Pass</h5>
                                    <h6 className="card-price text-center">Rs 250</h6>
                                    <hr/>
                                    <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Back Seats</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>Refreshments</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>PopCorn</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>One Shirt</li>
                                    </ul>
                                    <hr/>
                                    <div className="text-center">
                                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#buy-ticket-modal" data-ticket-type="standard-access">Buy Now</button>
                                    </div>
                                </div>
                                </div>
                            </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
                    <div className="card mb-5 mb-lg-0" style={{background:"#BBC2CC"}}>
                    <div className="card-body">
                        <h5 className="card-title text-muted text-uppercase text-center">Silver Pass</h5>
                        <h6 className="card-price text-center">Rs 500</h6>
                        <hr/>
                        <ul className="fa-ul">
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Centre Seats</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Refreshments</li>
                        <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>PopCorn</li>
                        <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>One Shirt</li>
                        </ul>
                        <hr/>
                        <div className="text-center">
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#buy-ticket-modal" data-ticket-type="pro-access">Buy Now</button>
                        </div>
                    </div>
                    </div>
                </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="600">
                    <div className="card" style={{background:"#ffb400"}}>
                    <div className="card-body">
                        <h5 className="card-title text-muted text-uppercase text-center">Gold Pass</h5>
                        <h6 className="card-price text-center">Rs 1000</h6>
                        <hr/>
                        <ul className="fa-ul">
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Centre Seats</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Refreshments</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>PopCorn</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>One Shirt</li>
                        </ul>
                        <hr/>
                        <div className="text-center">
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#buy-ticket-modal" data-ticket-type="premium-access">Buy Now</button>
                        </div>

                    </div>
                    </div>
                </div>
                    </div>

                </div>

      <div id="buy-ticket-modal" className="modal fade">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title gloss-font">Buy Tickets</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
          </div>
        </div>
      </div>

    </section>

            <hr className="mt-0 mb-0 white" />

            <section id="venue">

                <div className="container-fluid" data-aos="fade-up">

                    <div className="section-header">
                    <h2 className="gloss-font">Event Venue</h2>
                    <p>Event venue location info and gallery</p>
                    </div>

                    <div className="row g-0">
                        <div className="col-lg-8 venue-map" data-aos="zoom-in-right">
                            
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34474.69668706316!2d74.38623593105953!3d31.466997794630252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391908a610715697%3A0xa58f8e89d5669a0e!2sLUMS%20-%20Lahore%20University%20of%20Management%20Sciences!5e0!3m2!1sen!2sfi!4v1625684913318!5m2!1sen!2sfi">

                        </iframe>
                        </div>

                            <div className="col-lg-4 venue-info" data-aos="zoom-in-left">
                                <div className="row justify-content-center">
                                <div className="col-11 col-lg-8 position-relative">
                                    <h3>DHA,LAHORE</h3>
                                    <p>DETAILS......</p>
                                </div>
                                </div>
                            </div>
                    </div>

                </div>

         
            </section>




            
            <hr className="mt-0 mb-0 white" />

            
          


            <section className="page-section bg-dark bg-dark-alfa-70 bg-scroll light-content" >
                <div className="container relative">
                
                <div className="row">
                    <div className=" col-lg-8 offset-lg-2 wow fadeInUpShort">
                        
                        <div className="text-center mb-50 mb-sm-20">
                            <h2 className="section-title gloss-font">What People Say?</h2>
                        </div>
                        
                        <div className="text-slider">
                            
                            
                            <div>
                                <blockquote className="testimonial">
                                    <p>
                                       It shows us the positive image of Pakistan, by showing exceptional skills that
                                       surprises and gives joy to everyone. 
                                    </p>
                                    <footer className="testimonial-author mt-50 mt-sm-20">
                                        — Fawad Ahmad, Singer/Actor
                                    </footer>
                                </blockquote>
                            </div>
                            
                            <div>
                                <blockquote className="testimonial">
                                    <p>
                                        "Quote"
                                    </p>
                                    <footer className="testimonial-author mt-50 mt-sm-20">
                                        — Shahid Afridi, Cricketer.
                                    </footer>
                                </blockquote>
                            </div>
                            
                            <div>
                                <blockquote className="testimonial">
                                    <p>
                                        "Quote"
                                    </p>
                                    <footer className="testimonial-author mt-50 mt-sm-20">
                                        — Imran Khan,PM.
                                    </footer>
                                </blockquote>
                            </div>
                            
                        </div>                            
                                                
                    </div>
                </div>
                    
                </div>
            </section>

            <hr className="mt-0 mb-0 white" />


            <section className="page-section bg-dark-lighter light-content background-parallex-contact" id="contact">
                <div className="container relative">
                    
                    <div className="text-center mb-80 mb-sm-50">
                        <h2 className="section-title gloss-font">Contact</h2>
                        <p className="section-title-descr">
                            For Inquiries
                        </p>
                    </div>
                    
                    <div className="row mb-60 mb-xs-40">
                        
                        <div className="col-md-10 offset-md-1">
                            <div className="row">
                                
                                
                                <div className="col-sm-6 col-lg-4 pb-20">
                                    <div className="contact-item wow fadeScaleIn" data-wow-delay="0" data-wow-duration="1s">
                                        <div className="ci-icon">
                                            <i className="fa fa-phone-alt"></i>
                                        </div>
                                        <div className="ci-title">
                                            Call Us
                                        </div>
                                        <div className="ci-text">
                                            +92 383 767 284 431
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-sm-6 col-lg-4 pb-20">
                                    <div className="contact-item wow fadeScaleIn" data-wow-delay=".1s" data-wow-duration="1s">
                                        <div className="ci-icon">
                                            <i className="fa fa-map-marker-alt"></i>
                                        </div>
                                        <div className="ci-title">
                                            Address
                                        </div>
                                        <div className="ci-text">
                                            DHA LAHORE
                                        </div>
                                        <div className="ci-link">
                                            <a href="https://goo.gl/maps/CsFrG3Mx11GzemcT8" target="_blank">See on the Map</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-sm-6 col-lg-4 pb-20">
                                    <div className="contact-item wow fadeScaleIn" data-wow-delay=".2s" data-wow-duration="1s">
                                        <div className="ci-icon">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <div className="ci-title">
                                            Email
                                        </div>
                                        <div className="ci-text">
                                            admin@luckyiranicircus.com
                                        </div>
                                        <div className="ci-link">
                                            <a href="mailto:support@bestlooker.pro">Say Hello</a>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </section>
            
            <hr className="mt-0 mb-0 white" />



            <footer className="page-section bg-dark-lighter footer pb-100 pb-sm-50">
                <div className="container">
                    
                    <div className="footer-social-links mb-90 mb-xs-40">
                        <a href="/#" title="Facebook" target="_blank" data-aos="fade-up-right" ><i className="fab fa-facebook-f"></i> <span className="sr-only">Facebook profile</span></a>
                        <a href="/#" title="Twitter" target="_blank" data-aos="fade-up-right" data-aos-duration="200"><i className="fab fa-twitter"></i> <span className="sr-only">Twitter profile</span></a>
                        <a href="/#" title="Twitter" target="_blank" data-aos="fade-down-right"data-aos-duration="400"><i className="fab fa-vimeo-v"></i> <span className="sr-only">Vimeo profile</span></a>
                        <a href="/#" title="Behance" target="_blank"  data-aos="fade-up-left" data-aos-duration="600"><i className="fab fa-behance"></i> <span className="sr-only">Behance profile</span></a>
                        <a href="/#" title="Pinterest" target="_blank" data-aos="fade-up-left" data-aos-duration="800"><i className="fab fa-pinterest"></i> <span className="sr-only">Pinterest profile</span></a>
                    </div>
                    <div className="footer-text">
                        
                        <div className="footer-copy">
                        </div>
                        
                        <div className="footer-made">
                            Ligting Up Cultural Values
                        </div>
                        
                    </div>
                    
                 </div>
                 
                 <div className="local-scroll">
                     <a href="#top" className="link-to-top"><i className="link-to-top-icon"></i></a>
                 </div>
                 
            </footer>
        
        </main>


    </React.Fragment>
    )
}

export default MainContent;