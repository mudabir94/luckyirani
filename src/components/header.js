import React from 'react';
import logo from "../images/logo.gif"

function Header(props){
    return (
        <React.Fragment>
            <nav className="main-nav dark transparent stick-fixed wow-menubar">
                <div className="full-wrapper relative clearfix">
                    
                    <div className="nav-logo-wrap local-scroll">
                        <a href="index.html" className="logo">
                            <img src={logo} alt="Company logo" width="188" height="37" />
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
                                <a href="/#" className="mn-has-sub active">Home <i className="mn-has-sub-icon"></i></a>
                                
                                
                              
                            </li>
                            
                            
                            
                            <li>
                                <a href="/#" className="mn-has-sub">About <i className="mn-has-sub-icon"></i></a>
                                
                             
                            </li>
                            
                            
                            
                            <li>
                                <a href="/#" className="mn-has-sub">Services <i className="mn-has-sub-icon"></i></a>
                                
                                
                               
                                
                            </li>
                            
                            
                            
                            <li>
                                <a href="/#" className="mn-has-sub">Acts <i className="mn-has-sub-icon"></i></a>
                                
                                
                              
                            </li>
                            
                            
                            
                        </ul>
                    </div>
                    
                </div>
            </nav>

    </React.Fragment>
    )
}

export default Header;