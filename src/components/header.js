import React from 'react';


function Header(props){
    return (
        <React.Fragment>
            <nav className="main-nav dark transparent stick-fixed wow-menubar">
                <div className="full-wrapper relative clearfix">
                    
                    <div className="nav-logo-wrap local-scroll">
                        <a href="index.html" className="logo">
                            <img src="src/logo-white.png" alt="Company logo" width="188" height="37" />
                        </a>
                    </div>
                    
                   
                    <div className="mobile-nav" role="button" tabIndex="0">
                        <i className="fa fa-bars"></i>
                        <span className="sr-only">Menu</span>
                    </div>
                    
                    
                    <a href="shop-cart-dark.html" className="mobile-cart"><i className="main-nav-icon-cart"></i> (0)</a>
                    
                    
                    <div className="inner-nav desktop-nav">
                        <ul className="clearlist">
                            
                            
                            <li>
                                <a href="#" className="mn-has-sub active">Home <i className="mn-has-sub-icon"></i></a>
                                
                                
                                <ul className="mn-sub mn-has-multi">
                                    
                                    
                                    <li className="mn-sub-multi">
                                        <a className="mn-group-title" href="intro-dark.html#multi-page">Multi Page</a>
                                        
                                        <ul>
                                            <li>
                                                <a href="mp-index-dark.html">Main Demo</a>
                                            </li>
                                            <li>
                                                <a href="#" title="Isn't available in the dark version">Image Parallax 1 🚫</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-02-dark.html">Image Parallax 2</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-03-dark.html">Image Parallax 3</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-04-dark.html">Image Parallax 4</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-06-dark.html">Image Parallax 5</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-12-dark.html">Fullwidth Image</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-05-dark.html">Text Rotator</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-15-dark.html">Typed Text</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-07-dark.html">Slider Fullscreen</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-08-dark.html">Slider Zoom Effect</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-09-dark.html">Slider Fullwidth</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-10-dark.html">Slider Background</a>
                                            </li>
                                        </ul>
                                        
                                    </li>
                                    
                                    
                                    
                                    <li className="mn-sub-multi">
                                        <a className="mn-group-title">&nbsp;</a>
                                        
                                        <ul>
                                            <li>
                                                <a href="mp-index-17-dark.html">Slider Animation 1</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-18-dark.html">Slider Animation 2</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-20-dark.html">Content Slider</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-11-dark.html">With Play Button</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-13-dark.html">BG Video Fullwidth</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-14-dark.html">BG Video Fullscreen</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-19-dark.html">BG HTML5 Video</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-23-dark.html">Floating Image</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-24-dark.html">Floating Images</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-21-dark.html">Wave Edge</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-22-dark.html">Round Edge</a>
                                            </li>
                                            <li>
                                                <a href="mp-index-16-dark.html">Agency Header</a>
                                            </li>
                                            <li>
                                                <a href="intro.html">Light Version <span className="label-new round">Hot</span></a>
                                            </li>
                                        </ul>
                                        
                                    </li>
                                    
                                    
                                    
                                    
                                    <li className="mn-sub-multi">
                                        <a className="mn-group-title" href="intro-dark.html#one-page">One Page</a>
                                        
                                        <ul>
                                            <li>
                                                <a href="index-dark.html">Main Demo</a>
                                            </li>
                                            <li>
                                                <a href="#" title="Isn't available in the dark version">Image Parallax 1 🚫</a>
                                            </li>
                                            <li>
                                                <a href="index-02-dark.html">Image Parallax 2</a>
                                            </li>
                                            <li>
                                                <a href="index-03-dark.html">Image Parallax 3</a>
                                            </li>
                                            <li>
                                                <a href="index-04-dark.html">Image Parallax 4</a>
                                            </li>
                                            <li>
                                                <a href="index-06-dark.html">Image Parallax 5</a>
                                            </li>
                                            <li>
                                                <a href="index-12-dark.html">Fullwidth Image</a>
                                            </li>
                                            <li>
                                                <a href="index-05-dark.html">Text Rotator</a>
                                            </li>
                                            <li>
                                                <a href="index-15-dark.html">Typed Text</a>
                                            </li>
                                            <li>
                                                <a href="index-07-dark.html">Slider Fullscreen</a>
                                            </li>
                                            <li>
                                                <a href="index-08-dark.html">Slider Zoom Effect</a>
                                            </li>
                                            <li>
                                                <a href="index-09-dark.html">Slider Fullwidth</a>
                                            </li>
                                            <li>
                                                <a href="index-10-dark.html">Slider Background</a>
                                            </li>
                                        </ul>
                                        
                                    </li>
                                    
                                    
                                    
                                    <li className="mn-sub-multi">
                                        <a className="mn-group-title">&nbsp;</a>
                                        
                                        <ul>
                                            <li>
                                                <a href="index-17-dark.html">Slider Animation 1</a>
                                            </li>
                                            <li>
                                                <a href="index-18-dark.html">Slider Animation 2</a>
                                            </li>
                                            <li>
                                                <a href="index-20-dark.html">Content Slider</a>
                                            </li>
                                            <li>
                                                <a href="index-11-dark.html">With Play Button</a>
                                            </li>
                                            <li>
                                                <a href="index-13-dark.html">BG Video Fullwidth</a>
                                            </li>
                                            <li>
                                                <a href="index-14-dark.html">BG Video Fullscreen</a>
                                            </li>
                                            <li>
                                                <a href="index-19-dark.html">BG HTML5 Video</a>
                                            </li>
                                            <li>
                                                <a href="index-23-dark.html">Floating Image</a>
                                            </li>
                                            <li>
                                                <a href="index-24-dark.html">Floating Images</a>
                                            </li>
                                            <li>
                                                <a href="index-21-dark.html">Wave Edge</a>
                                            </li>
                                            <li>
                                                <a href="index-22-dark.html">Round Edge</a>
                                            </li>
                                            <li>
                                                <a href="index-16-dark.html">Agency Header</a>
                                            </li>
                                            <li>
                                                <a href="intro.html">Light Version <span className="label-new round">Hot</span></a>
                                            </li>
                                        </ul>
                                        
                                    </li>
                                    
                                    
                                </ul>
                                
                                
                            </li>
                            
                            
                            
                            <li>
                                <a href="#" className="mn-has-sub">Pages <i className="mn-has-sub-icon"></i></a>
                                
                                
                                <ul className="mn-sub mn-has-multi">
                                    
                                    <li className="mn-sub-multi">
                                        <a className="mn-group-title">Group 1</a>
                                        
                                        <ul>
                                            <li>
                                                <a href="pages-about-1-dark.html">About Us 1</a>
                                            </li>
                                            <li>
                                                <a href="pages-about-2-dark.html">About Us 2</a>
                                            </li>
                                            <li>
                                                <a href="pages-about-3-dark.html">About Us 3</a>
                                            </li>
                                            <li>
                                                <a href="pages-services-1-dark.html">Services 1</a>
                                            </li>
                                            <li>
                                                <a href="pages-services-2-dark.html">Services 2</a>
                                            </li>
                                            <li>
                                                <a href="pages-services-3-dark.html">Services 3</a>
                                            </li>
                                            <li>
                                                <a href="pages-clients-dark.html">Clients</a>
                                            </li>
                                            <li>
                                                <a href="pages-landing-dark.html">Landing Page</a>
                                            </li>
                                        </ul>
                                        
                                    </li>
                                    
                                    <li className="mn-sub-multi">
                                        <a className="mn-group-title">Group 2</a>
                                        
                                        <ul>
                                            <li>
                                                <a href="pages-team-1-dark.html">Team 1</a>
                                            </li>
                                            <li>
                                                <a href="pages-team-2-dark.html">Team 2</a>
                                            </li>
                                            <li>
                                                <a href="pages-faq-1-dark.html">FAQ 1</a>
                                            </li>
                                            <li>
                                                <a href="pages-faq-2-dark.html">FAQ 2</a>
                                            </li>
                                            <li>
                                                <a href="pages-pricing-1-dark.html">Pricing 1</a>
                                            </li>
                                            <li>
                                                <a href="pages-pricing-2-dark.html">Pricing 2</a>
                                            </li>
                                            <li>
                                                <a href="pages-contact-1-dark.html">Contact 1</a>
                                            </li>
                                            <li>
                                                <a href="pages-contact-2-dark.html">Contact 2</a>
                                            </li>
                                        </ul>
                                        
                                    </li>
                                    
                                    <li className="mn-sub-multi">
                                        <a className="mn-group-title">Group 3</a>
                                        
                                        <ul>
                                            <li>
                                                <a href="pages-gallery-1col-dark.html">Gallery Col 1</a>
                                            </li>
                                            <li>
                                                <a href="pages-gallery-2col-dark.html">Gallery Col 2</a>
                                            </li>
                                            <li>
                                                <a href="pages-gallery-3col-dark.html">Gallery Col 3</a>
                                            </li>
                                            <li>
                                                <a href="pages-gallery-4col-dark.html">Gallery Col 4</a>
                                            </li>
                                            <li>
                                                <a href="pages-gallery-6col-dark.html">Gallery Col 6</a>
                                            </li>
                                            <li>
                                                <a href="pages-account-dark.html">Login / Register</a>
                                            </li>
                                            <li>
                                                <a href="pages-under-construction-dark.html">Under Construction</a>
                                            </li>
                                            <li>
                                                <a href="pages-404-dark.html">Error 404</a>
                                            </li>
                                        </ul>
                                        
                                    </li>
                                
                                </ul>
                                
                                
                            </li>
                            
                            
                            
                            <li>
                                <a href="#" className="mn-has-sub">Elements <i className="mn-has-sub-icon"></i></a>
                                
                                
                                <ul className="mn-sub mn-has-multi">
                                    
                                    <li className="mn-sub-multi">
                                        
                                        <ul>
                                            <li>
                                                <a href="elements-accordions-dark.html"><i className="fa fa-plus-circle fa-sm"></i> Accordions</a>
                                            </li>
                                            <li>
                                                <a href="elements-animation-dark.html"><i className="fa fa-play fa-sm"></i> Animation</a>
                                            </li>
                                            <li>
                                                <a href="elements-bars-dark.html"><i className="fa fa-tachometer-alt fa-sm"></i> Bars (Progress)</a>
                                            </li>
                                            <li>
                                                <a href="elements-buttons-dark.html"><i className="fa fa-link fa-sm"></i> Buttons</a>
                                            </li>
                                            <li>
                                                <a href="elements-features-dark.html"><i className="fa fa-th-large fa-sm"></i> Features Box</a>
                                            </li>
                                            <li>
                                                <a href="elements-forms-dark.html"><i className="fa fa-align-justify fa-sm"></i> Form Fields</a>
                                            </li>
                                            <li>
                                                <a href="elements-grid-dark.html"><i className="fa fa-th fa-sm"></i> Grid</a>
                                            </li>
                                            <li>
                                                <a href="elements-iconmonstr-dark.html"><i className="far fa-heart fa-sm"></i> Icons Iconmonstr</a>
                                            </li>
                                            <li>
                                                <a href="elements-icons-fa-dark.html"><i className="fa fa-heart fa-sm"></i> Icons Font Awesome</a>
                                            </li>
                                            <li>
                                                <a href="elements-images-lazyload-dark.html"><i className="fa fa-spinner fa-sm"></i> Images Lazyload</a>
                                            </li>
                                            <li>
                                                <a href="elements-lightbox-dark.html"><i className="fa fa-id-card fa-sm"></i> Lightbox</a>
                                            </li>
                                            <li>
                                                <a href="elements-messages-dark.html"><i className="fa fa-comment fa-sm"></i> Messages</a>
                                            </li>
                                        </ul>
                                        
                                    </li>
                                    
                                    <li className="mn-sub-multi">
                                        
                                        <ul>
                                            <li>
                                                <a href="elements-page-titles-dark.html"><i className="fa fa-feather fa-sm"></i> Page Titles</a>
                                            </li>
                                            <li>
                                                <a href="elements-sliders-dark.html"><i className="fa fa-chevron-circle-right fa-sm"></i> Sliders</a>
                                            </li>
                                            <li>
                                                <a href="elements-sliders-lazyload-dark.html"><i className="fa fa-chevron-circle-right fa-sm"></i> Sliders Lazyload</a>
                                            </li>
                                            <li>
                                                <a href="elements-tabs-dark.html"><i className="fa fa-columns fa-sm"></i> Tabs</a>
                                            </li>
                                            <li>
                                                <a href="elements-typography-dark.html"><i className="fa fa-font fa-sm"></i> Typography</a>
                                            </li>
                                            <li>
                                                <a href="elements-video-sound-dark.html"><i className="fab fa-youtube fa-sm"></i> Video / Sound</a>
                                            </li>
                                            <li>
                                                <a href="elements-header-dark-dark.html"><i className="fa fa-h-square fa-sm"></i> Header Dark</a>
                                            </li>
                                            <li>
                                                <a href="elements-header-dark-transparent-dark.html"><i className="fa fa-h-square fa-sm"></i> Header Dark Transp</a>
                                            </li>
                                            <li>
                                                <a href="elements-header-white.html" title="Isn't available in the dark version"><i className="fa fa-h-square fa-sm"></i> H-r White 🚫</a>
                                            </li>
                                            <li>
                                                <a href="elements-header-white-transparent.html" title="Isn't available in the dark version"><i className="fa fa-h-square fa-sm"></i> H-r White Transp 🚫</a>
                                            </li>
                                            <li>
                                                <a href="elements-header-white-after-scroll.html" title="Isn't available in the dark version"><i className="fa fa-h-square fa-sm"></i> H-r Scroll-White 🚫</a>
                                            </li>
                                        </ul>
                                    </li>
                                
                                </ul>
                                
                                
                            </li>
                            
                            
                            
                            <li>
                                <a href="#" className="mn-has-sub">Portfolio <i className="mn-has-sub-icon"></i></a>
                                
                                
                                <ul className="mn-sub">
                                    
                                    <li>
                                        <a href="#" className="mn-has-sub">Boxed <i className="mn-has-sub-icon-right right"></i></a>
                                    
                                        <ul className="mn-sub">
                                            <li>
                                                <a href="portfolio-boxed-2col-dark.html">2 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-boxed-3col-dark.html">3 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-boxed-4col-dark.html">4 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-boxed-5col-dark.html">5 Columns</a>
                                            </li>
                                            <li>
                                                <a href="#" title="Isn't available in the dark version">Black Hovers 🚫</a>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    <li>
                                        <a href="#" className="mn-has-sub">Boxed (Gutter) <i className="mn-has-sub-icon-right right"></i></a>
                                    
                                        <ul className="mn-sub">
                                            <li>
                                                <a href="portfolio-boxed-gutter-2col-dark.html">2 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-boxed-gutter-3col-dark.html">3 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-boxed-gutter-4col-dark.html">4 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-boxed-gutter-5col-dark.html">5 Columns</a>
                                            </li>
                                            <li>
                                                <a href="#" title="Isn't available in the dark version">Black Hovers 🚫</a>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    <li>
                                        <a href="#" className="mn-has-sub">Boxed (Titles) <i className="mn-has-sub-icon-right right"></i></a>
                                    
                                        <ul className="mn-sub">
                                            <li>
                                                <a href="portfolio-boxed-titles-2col-dark.html">2 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-boxed-titles-3col-dark.html">3 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-boxed-titles-4col-dark.html">4 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-boxed-titles-5col-dark.html">5 Columns</a>
                                            </li>
                                            <li>
                                                <a href="#" title="Isn't available in the dark version">Black Hovers 🚫</a>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    <li>
                                        <a href="#" className="mn-has-sub">Wide <i className="mn-has-sub-icon-right right"></i></a>
                                    
                                        <ul className="mn-sub">
                                            <li>
                                                <a href="portfolio-wide-2col-dark.html">2 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-wide-3col-dark.html">3 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-wide-4col-dark.html">4 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-wide-5col-dark.html">5 Columns</a>
                                            </li>
                                            <li>
                                                <a href="#" title="Isn't available in the dark version">Black Hovers 🚫</a>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    <li>
                                        <a href="#" className="mn-has-sub">Wide (Gutter) <i className="mn-has-sub-icon-right right"></i></a>
                                    
                                        <ul className="mn-sub">
                                            <li>
                                                <a href="portfolio-wide-gutter-2col-dark.html">2 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-wide-gutter-3col-dark.html">3 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-wide-gutter-4col-dark.html">4 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-wide-gutter-5col-dark.html">5 Columns</a>
                                            </li>
                                            <li>
                                                <a href="#" title="Isn't available in the dark version">Black Hovers 🚫</a>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    <li>
                                        <a href="#" className="mn-has-sub">Wide (Titles) <i className="mn-has-sub-icon-right right"></i></a>
                                    
                                        <ul className="mn-sub">
                                            <li>
                                                <a href="portfolio-wide-titles-2col-dark.html">2 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-wide-titles-3col-dark.html">3 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-wide-titles-4col-dark.html">4 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-wide-titles-5col-dark.html">5 Columns</a>
                                            </li>
                                            <li>
                                                <a href="#" title="Isn't available in the dark version">Black Hovers 🚫</a>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    <li>
                                        <a href="#" className="mn-has-sub">Masonry <i className="mn-has-sub-icon-right right"></i></a>
                                    
                                        <ul className="mn-sub">
                                            <li>
                                                <a href="portfolio-masonry-2col-dark.html">2 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-masonry-3col-dark.html">3 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-masonry-4col-dark.html">4 Columns</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-masonry-5col-dark.html">5 Columns</a>
                                            </li>
                                            <li>
                                                <a href="#" title="Isn't available in the dark version">Black Hovers 🚫</a>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    <li>
                                        <a href="#" className="mn-has-sub">Single <i className="mn-has-sub-icon-right right"></i></a>
                                    
                                        <ul className="mn-sub">
                                            <li>
                                                <a href="portfolio-single-1-dark.html">Single 1</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-single-2-dark.html">Single 2</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-single-3-dark.html">Single 3</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-single-4-dark.html">Single 4</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-single-5-dark.html">Single 5</a>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    <li>
                                        <a href="portfolio-parallax-dark.html">Parallax</a>
                                    </li>
                                    
                                    <li>
                                        <a href="portfolio-promo-dark.html">Promo</a>
                                    </li>
                                    
                                    <li>
                                        <a href="portfolio-lazyload-dark.html">Lazyload</a>
                                    </li>
                                    
                                </ul>
                                
                                
                            </li>
                            
                            
                            
                        </ul>
                    </div>
                    
                </div>
            </nav>

    </React.Fragment>
    )
}

export default Header;