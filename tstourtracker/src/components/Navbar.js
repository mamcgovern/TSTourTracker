import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <div>
            <header data-bs-theme="dark">
                <nav className="navbar navbar-expand-lg bg-body-tertiary" aria-label="Navbar">
                    <div className="container-fluid">
                        {/* Brand */}
                        <a className="button-like-text navbar-brand col-lg-3 me-0" href="#/">TS Tour Tracker</a>
                        {/* Navbar toggler */}
                        <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-expanded={showNavbar ? "true" : "false"} aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* Navbar content */}
                        <div className={"collapse navbar-collapse" + (showNavbar ? " show" : "")} id="navbarsExample11">
                            <ul className="navbar-nav justify-content-lg-center">
                                <li className="nav-item" style={{ margin: '5px' }}>
                                    <a className="btn btn-outline-light p3 lh-1" href="#/">Home</a>
                                </li>
                                <li className="nav-item" style={{ margin: '5px' }}>
                                    <a className="btn btn-outline-light p3 lh-1" href="#/surprisesongs">Surprise Songs</a>
                                </li>
                                <li className="nav-item" style={{ margin: '5px' }}>
                                    <a className="btn btn-outline-light p3 lh-1" href="#/discography">Discography</a>
                                </li>
                                <li className="nav-item" style={{ margin: '5px' }}>
                                    <a className="btn btn-outline-light p3 lh-1" href="#/mainset">Main Set</a>
                                </li>
                                <li className="nav-item" style={{ margin: '5px' }}>
                                    <a className="btn btn-outline-light p3 lh-1" href="#/outfits">Outfits</a>
                                </li>
                                <li className="nav-item" style={{ margin: '5px' }}>
                                    <a className="btn btn-outline-light p3 lh-1" href="#/events">Events</a>
                                </li>
                                <li className="nav-item" style={{ margin: '5px' }}>
                                    <a className="btn btn-outline-light p3 lh-1" href="#/links">Links</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;