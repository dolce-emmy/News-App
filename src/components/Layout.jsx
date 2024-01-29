import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
    return (

        <>
        <div>
            <header>
                {/* <h1> LOGO </h1> */}

                    <img className="header-logo" src="./team-photos/logo.jpeg" alt="" />
                <div className='header-nav'>
                    <Link to='about' className='header-link'>
                        About
                    </Link>

                    <Link to='team' className='header-link'>
                        Team
                    </Link>

                    {/* <Link to='' className='header-link'>
                        Contact
                    </Link> */}
                </div>
            </header>
            <nav className='navigation'>
                <Link to='/' className='navigation-link'>
                    Home
                </Link>
                <Link to='entertainment' className='navigation-link'>
                    Entertainment
                </Link>
                <Link to='technology' className='navigation-link'>
                    Technology
                </Link>
                <Link to='sport' className='navigation-link'>
                    Sport
                </Link>
            </nav>

            <Outlet />
        </div>
        {/* <Footer /> */}
        </>
    );
};

export default Layout;
