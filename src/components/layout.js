import React from 'react';
import Header from './header'
import MainContent from './maincontent'


function Layout(props){
    return (
        <React.Fragment>
            <div className="page-loader dark">
                <div className="loader">Loading...</div>
            </div>

        <a href="#main" className="btn skip-to-content">Skip to Content</a>
        
        <div className="page bg-dark light-content" id="top">
            <Header/>
            <MainContent/>
        </div>


        </React.Fragment>
    )
}

export default Layout;