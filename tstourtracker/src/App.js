import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Countdown from 'react-countdown';

import eventsData from './data/events.json';
import surpriseSongData from './data/surpriseSongs.json';

import header1989combos from './images/1989combos.png';

import brokenRobot from './images/broken-robot.png';
import surpriseSongsPhoto from './images/surpriseSongs.png';
import mainSetPhoto from './images/mainSet.png';
import outfitsPhoto from './images/outfits.png';
import footballPhoto from './images/football.jpeg';
import ceremonyPhoto from './images/grammys.jpeg';
import concertPhoto from './images/tour.jpg';
import releasePhoto from './images/announcement.png';
import otherPhoto from './images/other.jpg';
import guitar_black from './images/guitar_black.png';
import guitar_white from './images/guitar_white.png';
import piano_black from './images/piano_black.png';
import piano_white from './images/piano_white.png';




import SurpriseSongs from "./surpriseSongs.js";
import Events from "./events.js";
import Links from "./links.js";
import About from "./about.js";
import Combo1989 from "./combo1989.js";
import MainSet from "./mainSet.js";
import Outfits from "./outfits.js";
import Discography from "./discography.js";

function App() {
    /*
     * 0: Home
     * 1: Surprise Songs
     * 2: Discography
     * 3: Main Set
     * 4: Outfits
     * 5: Events
     * 6: Links
     * 7: About
     * 8: 1989 combos
     */
    const [view, setView] = useState(0);
    const [showNavbar, setShowNavbar] = useState(false);
    const currentDate = new Date().getTime();

    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const clickNavButton = (newView) => {
        toggleNavbar();
        setView(newView);
    }

    

    /*
     * This creates the navbar for each view so it doesn't have to be retyped.
     */
    function navbar() {
        return (
            <div>
                <header data-bs-theme="dark">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary" aria-label="Navbar">
                        <div className="container-fluid">
                            {/* Brand */}
                            <button className="button-like-text navbar-brand col-lg-3 me-0" onClick={() => clickNavButton(0)}>TS Tour Tracker</button>
                            {/* Navbar toggler */}
                            <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-expanded={showNavbar ? "true" : "false"} aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            {/* Navbar content */}
                            <div className={"collapse navbar-collapse" + (showNavbar ? " show" : "")} id="navbarsExample11">
                                <ul className="navbar-nav justify-content-lg-center">
                                    <li className="nav-item" style={{ margin: '5px' }}>
                                        <button className="btn btn-outline-light p3 lh-1" onClick={() => clickNavButton(0)}>Home</button>
                                    </li>
                                    <li className="nav-item" style={{ margin: '5px' }}>
                                        <button className="btn btn-outline-light p3 lh-1" onClick={() => clickNavButton(1)}>Surprise Songs</button>
                                    </li>
                                    <li className="nav-item" style={{ margin: '5px' }}>
                                        <button className="btn btn-outline-light p3 lh-1" onClick={() => clickNavButton(2)}>Discography</button>
                                    </li>
                                    <li className="nav-item" style={{ margin: '5px' }}>
                                        <button className="btn btn-outline-light p3 lh-1" onClick={() => clickNavButton(3)}>Main Set</button>
                                    </li>
                                    <li className="nav-item" style={{ margin: '5px' }}>
                                        <button className="btn btn-outline-light p3 lh-1" onClick={() => clickNavButton(4)}>Outfits</button>
                                    </li>
                                    <li className="nav-item" style={{ margin: '5px' }}>
                                        <button className="btn btn-outline-light p3 lh-1" onClick={() => clickNavButton(5)}>Events</button>
                                    </li>
                                    <li className="nav-item" style={{ margin: '5px' }}>
                                        <button className="btn btn-outline-light p3 lh-1" onClick={() => clickNavButton(6)}>Links</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }

    /*
     * This creates the footer for each view so it doesn't have to be retyped.
     */
    function footer() {
        return (
            <div style={{ paddingTop: '100px' }}>
                <footer class="container">
                    <p class="float-end"><a href="#">Back to top</a></p>
                    <p class="col-md-4 mb-0 text-body-secondary"><button class="nav-link px-2 text-body-secondary" onClick={() => setView(7)}>&copy; 2024 TS Tour Tracker</button></p>
                </footer>
            </div>
        );
    }

    function eventPhoto(category) {
        if (category === "Concert") {
            return (
                <img src={concertPhoto} className="featurette-image img-fluid mx-auto" style={{ width: '500px', height: '500px', objectFit: 'cover' }} alt="Concert Photo" />
            );
        } else if (category === "Ceremony") {
            return (
                <img src={ceremonyPhoto} className="featurette-image img-fluid mx-auto" style={{ width: '500px', height: '500px', objectFit: 'cover' }} alt="Ceremony Photo" />
            );
        } else if (category === "Football") {
            return (
                <img src={footballPhoto} className="featurette-image img-fluid mx-auto" style={{ width: '500px', height: '500px', objectFit: 'cover' }} alt="Football Photo" />
            );
        } else if (category === "Release") {
            return (
                <img src={releasePhoto} className="featurette-image img-fluid mx-auto" style={{ width: '500px', height: '500px', objectFit: 'cover' }} alt="Release Photo" />
            );
        } else if (category === "") {
            return (
                <img src={otherPhoto} className="featurette-image img-fluid mx-auto" style={{ width: '500px', height: '500px', objectFit: 'cover' }} alt="Other Photo" />
            );
        }
    }

    function countdownComponent() {
        // Parse events data
        const events = eventsData.events;

        // Find the next event date
        let nextEventDate = null;
        let nextEvent = null;
        for (let event of events) {
            const eventDate = new Date(`${event.date} ${event.time}`).getTime();
            if (eventDate > currentDate) {
                nextEventDate = eventDate;
                nextEvent = event;
                break;
            }
        }

        if (!nextEventDate) {
            // If there are no future events, display a message
            return <div>No upcoming events</div>;
        }

        // Renderer function to format the countdown display
        const renderer = ({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
                // Render when the countdown is complete
                return <span>Countdown is over!</span>;
            } else {
                // Render while the countdown is in progress
                return (
                    <span>
                        {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
                    </span>
                );
            }
        };

        return (
            <div class="row featurette">
                <div class="col-md-7" style={{ textAlign: 'center' }}>
                    <h2 class="featurette-heading fw-normal lh-1">{nextEvent.category}:<span class="text-body-secondary"> {nextEvent.title}</span></h2>
                    <p class="lead"><Countdown date={nextEventDate} renderer={renderer} /></p>
                </div>
                <div class="col-md-5">
                    {eventPhoto(nextEvent.category)}
                </div>
            </div>
        );
    }


    function surpriseSongComponent() {
        // Parse song data
        const surpriseSongs = surpriseSongData.songs;

        const lastEvent = surpriseSongs[surpriseSongs.length - 1];

        const songPart = (song) => {
            if (song.album === "Taylor Swift") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button debut"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button debut"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button debut"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button debut"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else if (song.album === "Fearless") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button fearless"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button fearless"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button fearless"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button fearless"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else if (song.album === "Speak Now") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button speaknow"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button speaknow"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button speaknow"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button speaknow"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else if (song.album === "Red") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button red"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button red"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button red"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button red"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else if (song.album === "1989") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button TS1989"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button TS1989"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button TS1989"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button TS1989"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else if (song.album === "reputation") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button reputation"><img src={guitar_white} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button reputation"><img src={piano_white} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button reputation"><img src={guitar_white} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button reputation"><img src={piano_white} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else if (song.album === "Lover") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button lover"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button lover"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button lover"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button lover"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else if (song.album === "folklore") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button folklore"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button folklore"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button folklore"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button folklore"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else if (song.album === "evermore") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button evermore"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button evermore"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button evermore"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button evermore"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else if (song.album === "Midnights") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button midnights"><img src={guitar_white} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button midnights"><img src={piano_white} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button midnights"><img src={guitar_white} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button midnights"><img src={piano_white} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else if (song.album === "The Tortured Poets Department") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button ttpd"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button ttpd"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button ttpd"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button ttpd"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button other"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button other"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button other"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button other"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            }

        }

        const allSongs = lastEvent.songs.map((el) => (
            <div>
                <p class="lead"></p>
                {songPart(el)}
            </div>
        ));

        return (
            <div class="row featurette">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading fw-normal lh-1">{lastEvent.city} N{lastEvent.night}:<span class="text-body-secondary"> {lastEvent.date}</span></h2>
                    {allSongs}
                </div>
                <div class="col-md-5 order-md-1">
                    <img src={releasePhoto} className="featurette-image img-fluid mx-auto" style={{ width: '500px', height: '500px', objectFit: 'cover', margin: '10px' }} alt="Release Photo" />
                </div>
            </div>
        );
    }


    function home() {
        const isSmallScreen = window.innerWidth <= 800;

        return (
            <div>
                {navbar()}
                {!isSmallScreen && (
                    <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel" data-bs-interval="3000">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={surpriseSongsPhoto} class="d-block w-100" alt="Surprise Song" style={{ objectFit: "cover" }} />
                                <div class="carousel-caption d-none d-md-block text-end">
                                    <h1>Surprise!</h1>
                                    <p>View the surprise songs.</p>
                                    <button class="btn btn-lg btn-primary" onClick={() => setView(1)}>Surprise Songs</button>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={mainSetPhoto} class="d-block w-100" alt="Surprise Song" style={{ objectFit: "cover" }} />
                                <div class="carousel-caption d-none d-md-block text-start">
                                    <h1>Setlist</h1>
                                    <p>View the setlist.</p>
                                    <button class="btn btn-lg btn-primary" onClick={() => setView(3)}>Main Set</button>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={outfitsPhoto} class="d-block w-100" alt="outfits" style={{ objectFit: "cover" }} />
                                <div class="carousel-caption d-none d-md-block text-end">
                                    <h1>Outfits</h1>
                                    <p>View the outfit tracker</p>
                                    <button class="btn btn-lg btn-primary" onClick={() => setView(4)}>Outfits</button>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={header1989combos} class="d-block w-100" alt="5 different 1989 outfits" style={{ objectFit: "cover" }} />
                                <div class="carousel-caption d-none d-md-block text-end">
                                    <h1>1989 Combos</h1>
                                    <p>View all possible 1989 outfit combos!</p>
                                    <button class="btn btn-lg btn-primary" onClick={() => setView(8)}>1989 Combos</button>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                )}
                {isSmallScreen && (
                    <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel" data-bs-interval="3000">
                        <div class="carousel-inner">
                            <div class="carousel-item active carousel-item-small">
                                <img src={surpriseSongsPhoto} class="d-block w-100" alt="Surprise Song" style={{ objectFit: "cover" }} />
                            </div>
                            <div class="carousel-item carousel-item-small">
                                <img src={mainSetPhoto} class="d-block w-100" alt="Surprise Song" style={{ objectFit: "cover" }} />
                            </div>
                            <div class="carousel-item carousel-item-small">
                                <img src={outfitsPhoto} class="d-block w-100" alt="Surprise Song" style={{ objectFit: "cover" }} />
                            </div>
                        </div>

                    </div>
                )}
                <div>
                    {/* <!-- Marketing messaging and featurettes
                    <!-- Wrap the rest of the page in another container to center all the content. --> */}

                    <div class="container marketing">

                        {/* <!-- Three columns of text below the carousel --> */}
                        <div class="row">
                            <div class="col-lg-4">
                                <h2 class="fw-normal">Surprise Songs</h2>
                                <p>The surprise song tracker lists what surprise songs were performed at each night!</p>
                                <button class="btn btn-secondary" onClick={() => setView(1)}>Surprise Songs &raquo;</button>
                            </div>
                            <div class="col-lg-4">
                                <h2 class="fw-normal">Discography</h2>
                                <p>The discography tracker lists every song in Taylor's discography and color codes it based on whether or not it has been performed.</p>
                                <button class="btn btn-secondary" onClick={() => setView(2)}>Discography &raquo;</button>
                            </div>
                            <div class="col-lg-4">
                                <h2 class="fw-normal">Main Set</h2>
                                <p>The main set page includes all of the sets and which songs are a part of them.</p>
                                <button class="btn btn-secondary" onClick={() => setView(3)}>Main Set &raquo;</button>
                            </div>
                        </div>
                        <div class="row" style={{ paddingTop: '100px' }}>
                            <div class="col-lg-4">
                                <h2 class="fw-normal">Outfits</h2>
                                <p>The outfit tracker lists what outfits Taylor wore for each night.</p>
                                <button class="btn btn-secondary" onClick={() => setView(4)}>Outfits &raquo;</button>
                            </div>
                            <div class="col-lg-4">
                                <h2 class="fw-normal">Events</h2>
                                <p>The events view shows any upcoming events that Taylor might be at.</p>
                                <button class="btn btn-secondary" onClick={() => setView(5)}>Events &raquo;</button>
                            </div>
                            <div class="col-lg-4">
                                <h2 class="fw-normal">Links</h2>
                                <p>The links page includes links to different streams, spreadsheets, and Taylor's official websites and social media.</p>
                                <button class="btn btn-secondary" onClick={() => setView(6)}>Links &raquo;</button>
                            </div>
                        </div>


                        {/* <!-- START THE FEATURETTES --> */}
                        <hr class="featurette-divider" />
                        <div>
                            {surpriseSongComponent()}
                        </div>
                        <hr class="featurette-divider" />
                        <div>
                            {countdownComponent()}
                        </div>
                    </div>
                </div>
                {footer()}
            </div>
        )
    }

    /*
     * This if/else statement sets the view.
     */
    if (view === 0) {
        return home();
    } else if (view === 1) {
        return (
            <div>
                {navbar()}
                <SurpriseSongs />
                {footer()}
            </div>
        );
    } else if (view === 2) {
        return (
            <div>
                {navbar()}
                <Discography />
                {footer()}
            </div>
        );
    } else if (view === 3) {
        return (
            <div>
                {navbar()}
                <MainSet />
                {footer()}
            </div>
        );
    } else if (view === 4) {
        return (
            <div>
                {navbar()}
                <Outfits />
                {footer()}
            </div>
        );
    } else if (view === 5) {
        return (
            <div>
                {navbar()}
                <Events />
                {footer()}
            </div>
        );
    } else if (view === 6) {
        return (
            <div>
                {navbar()}
                <Links />
                {footer()}
            </div>
        );
    } else if (view === 7) {
        return (
            <div>
                {navbar()}
                <About />
                {footer()}
            </div>
        );
    } else if (view === 8) {
        return (
            <div>
                {navbar()}
                <Combo1989 />
                {footer()}
            </div>
        );
    } else {
        return (
            <div>
                {navbar()}
                <div>
                    <div >
                        <div class="page-title">
                            <h1>Uh oh...</h1>
                        </div>
                        <div>
                            <div style={{ textAlign: 'center' }}>
                                <img class="tableCell" src={brokenRobot} alt="Broken Robot" style={{ width: '100px' }} />
                                <p class="title">Error 404: Page Not Found</p>
                                <p>The page you are looking for may have been moved, deleted, or possibly never existed.</p>
                                <p>Click <button class="button-like-text" style={{ color: '#177e89' }} onClick={() => setView(0)}>here</button> to go back home.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;