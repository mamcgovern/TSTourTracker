import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Select from 'react-select';
import Countdown from 'react-countdown';

import eventsData from './data/events.json';
import surpriseSongData from './data/surpriseSongs.json';
import mainSetData from './data/mainSet.json';
import oldMainSetData from './data/mainSetOld.json';
import discographyData from './data/discography.json'
import linksData from './data/links.json';
import outfitsData from './data/outfits.json';
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
import willowPic from './images/Willow.jpeg';

import loverBodysuit_blueAndGold from './images/outfits/lover-bodysuit/blue-and-gold.png';
import loverBodysuit_orange from './images/outfits/lover-bodysuit/orange.png';
import loverBodysuit_pink from './images/outfits/lover-bodysuit/pink.png';
import loverBodysuit_pinkAndBlue from './images/outfits/lover-bodysuit/pink-and-blue.png';
import loverBodysuit_tassels from './images/outfits/lover-bodysuit/tassels.png';

import loverJacket_black from './images/outfits/lover-jacket/black.png';
import loverJacket_blue from './images/outfits/lover-jacket/blue.jpeg';
import loverJacket_orange from './images/outfits/lover-jacket/orange.png';
import loverJacket_pink from './images/outfits/lover-jacket/pink.png';
import loverJacket_silver from './images/outfits/lover-jacket/silver.png';

import loverGuitar_pink from './images/outfits/lover-guitar/pink.jpeg';
import loverGuitar_blue from './images/outfits/lover-guitar/blue.jpeg';
import loverGuitar_purple from './images/outfits/lover-guitar/purple.png';

import fearless_goldNoodle from './images/outfits/fearless-dress/gold-noodle.png';
import fearless_silverNoodle from './images/outfits/fearless-dress/silver-noodle.webp';
import fearless_goldShort from './images/outfits/fearless-dress/gold-short.png';
import fearless_silverShort from './images/outfits/fearless-dress/silver-and-black.png';

import bottoms1989_blue from './images/outfits/1989-bottom/blue.png';
import bottoms1989_orange from './images/outfits/1989-bottom/orange.png';
import bottoms1989_pink from './images/outfits/1989-bottom/pink.png';
import bottoms1989_purple from './images/outfits/1989-bottom/purple.png';
import bottoms1989_yellow from './images/outfits/1989-bottom/yellow.png';
import bottoms1989_green from './images/outfits/1989-bottom/green.png';

import top1989_blue from './images/outfits/1989-top/blue.jpeg';
import top1989_orange from './images/outfits/1989-top/orange.png';
import top1989_pink from './images/outfits/1989-top/pink.png';
import top1989_purple from './images/outfits/1989-top/purple.png';
import top1989_yellow from './images/outfits/1989-top/yellow.png';
import top1989_green from './images/outfits/1989-top/green.png';

import set1989_orange from './images/outfits/1989-set/orange.png';
import set1989_blue from './images/outfits/1989-set/blue.webp';
import set1989_green from './images/outfits/1989-set/green.webp';
import set1989_pink from './images/outfits/1989-set/pink.png';

import evermore_orange from './images/outfits/evermore-dress/orange.webp';
import evermore_bronze from './images/outfits/evermore-dress/bronze.png';

import folklore_blue from './images/outfits/folklore-dress/blue.png';
import folklore_green from './images/outfits/folklore-dress/green.png';
import folklore_hotPink from './images/outfits/folklore-dress/hot-pink.png';
import folklore_pink from './images/outfits/folklore-dress/pink.png';
import folklore_purple from './images/outfits/folklore-dress/purple.png';
import folklore_white from './images/outfits/folklore-dress/white.png';
import folklore_yellow from './images/outfits/folklore-dress/yellow.png';

import midnightsBodysuit_abs from './images/outfits/midnights-bodysuit/abs.png';
import midnightsBodysuit_lines from './images/outfits/midnights-bodysuit/lines.png';
import midnightsBodysuit_scallops from './images/outfits/midnights-bodysuit/scallops.png';
import midnightsBodysuit_sidepods from './images/outfits/midnights-bodysuit/sidepods.png';

import midnightsJacket_blue from './images/outfits/midnights-jacket/blue.png';
import midnightsJacket_lightPink from './images/outfits/midnights-jacket/light-pink.png';
import midnightsJacket_magenta from './images/outfits/midnights-jacket/magenta.png';
import midnightsJacket_multicolor from './images/outfits/midnights-jacket/multicolor.png';

import midnightsShirt_blue from './images/outfits/midnights-shirt/blue.png';
import midnightsShirt_darkPurple from './images/outfits/midnights-shirt/dark-purple.jpeg';
import midnightsShirt_iridescent from './images/outfits/midnights-shirt/iridescent.png';
import midnightsShirt_pink from './images/outfits/midnights-shirt/pink.png';
import midnightsShirt_purple from './images/outfits/midnights-shirt/purple.png';
import midnightsShirt_silver from './images/outfits/midnights-shirt/silver.png';

import redShirt_aLot from './images/outfits/red-shirt/a-lot.png';
import redShirt_aboutMe from './images/outfits/red-shirt/about-me.png';
import redShirt_ew from './images/outfits/red-shirt/ew.png';
import redShirt_neverEver from './images/outfits/red-shirt/never-ever.png';
import redShirt_notTV from './images/outfits/red-shirt/not-tv.png';
import redShirt_trouble from './images/outfits/red-shirt/trouble.png';

import reputationJumpsuit from './images/outfits/reputation-jumpsuit/red-and-black.webp';

import speakNow_blue from './images/outfits/speak-now-gown/blue.webp';
import speakNow_champagne from './images/outfits/speak-now-gown/champagne.png';
import speakNow_flowers from './images/outfits/speak-now-gown/flowers.webp';
import speakNow_pink from './images/outfits/speak-now-gown/pink.png';
import speakNow_purple from './images/outfits/speak-now-gown/purple.png';
import speakNow_swirls from './images/outfits/speak-now-gown/swirls.png';
import speakNow_white from './images/outfits/speak-now-gown/white.webp';

import surpriseSong_blue from './images/outfits/surprise-song-dress/blue.webp';
import surpriseSong_pink from './images/outfits/surprise-song-dress/pink.png';
import surpriseSong_orange from './images/outfits/surprise-song-dress/orange.webp';

import ttpdDress from './images/outfits/ttpd-dress/white.png';

import ttpdMarchingBandJacket from './images/outfits/ttpd-marching-band-jacket/white.webp';

import ttpdJacket_gold from './images/outfits/ttpd-jacket/gold.png';
import ttpdJacket_silver from './images/outfits/ttpd-jacket/silver.png';
import ttpdJacket_whiteWithBlack from './images/outfits/ttpd-jacket/white-with-black.png';
import ttpdJacket_white from './images/outfits/ttpd-jacket/white.png';

import ttpdTwoPiece_black from './images/outfits/ttpd-two-piece/black.png';
import ttpdTwoPiece_gold from './images/outfits/ttpd-two-piece/gold-and-black.png';
import ttpdTwoPiece_silver from './images/outfits/ttpd-two-piece/silver.png';
import ttpdTwoPiece_white from './images/outfits/ttpd-two-piece/white.png';

import pinkpink from './images/1989outfits/pinkpink.png'
import pinkred from './images/1989outfits/pinkred.png'
import pinkyellow from './images/1989outfits/pinkyellow.png'
import pinkgreen from './images/1989outfits/pinkgreen.png'
import pinkblue from './images/1989outfits/pinkblue.png'
import pinkpurple from './images/1989outfits/pinkpurple.png'

import redpink from './images/1989outfits/redpink.png'
import redred from './images/1989outfits/redred.png'
import redyellow from './images/1989outfits/redyellow.png'
import redgreen from './images/1989outfits/redgreen.png'
import redblue from './images/1989outfits/redblue.png'
import redpurple from './images/1989outfits/redpurple.png'

import yellowpink from './images/1989outfits/yellowpink.png'
import yellowred from './images/1989outfits/yellowred.png'
import yellowyellow from './images/1989outfits/yellowyellow.png'
import yellowgreen from './images/1989outfits/yellowgreen.png'
import yellowblue from './images/1989outfits/yellowblue.png'
import yellowpurple from './images/1989outfits/yellowpurple.png'

import greenpink from './images/1989outfits/greenpink.png'
import greenred from './images/1989outfits/greenred.png'
import greenyellow from './images/1989outfits/greenyellow.png'
import greengreen from './images/1989outfits/greengreen.png'
import greenblue from './images/1989outfits/greenblue.png'
import greenpurple from './images/1989outfits/greenpurple.png'

import bluepink from './images/1989outfits/bluepink.png'
import bluered from './images/1989outfits/bluered.png'
import blueyellow from './images/1989outfits/blueyellow.png'
import bluegreen from './images/1989outfits/bluegreen.png'
import blueblue from './images/1989outfits/blueblue.png'
import bluepurple from './images/1989outfits/bluepurple.png'

import purplepink from './images/1989outfits/purplepink.png'
import purplered from './images/1989outfits/purplered.png'
import purpleyellow from './images/1989outfits/purpleyellow.png'
import purplegreen from './images/1989outfits/purplegreen.png'
import purpleblue from './images/1989outfits/purpleblue.png'
import purplepurple from './images/1989outfits/purplepurple.png'

import SurpriseSongs from "./surpriseSongs.js";
import Events from "./events.js";
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
    const [showOldOutfits, setShowOldOutfits] = useState(false);
    const [showOldSet, setShowOldSet] = useState(false);
    const [showOldDiscography, setShowOldDiscography] = useState(false);
    



    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const clickNavButton = (newView) => {
        toggleNavbar();
        setView(newView);
    }

    const options = [
        { value: 'colors', label: 'Colors' },
        { value: 'photos', label: 'Photos' }
    ];

    const [selectedOption, setSelectedOption] = useState(options[0]);


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

    function viewMainSet() {
        const sets = mainSetData.sets;
        const oldSets = oldMainSetData.sets;

        const makeMenu = () => {
            if (showOldSet) {
                return (
                    <div>
                        <button class="btn btn-outline-secondary" style={{ textAlign: 'center', margin: '10px' }} onClick={() => setShowOldSet(false)}>Current Setlist</button>
                        <button class="btn btn-primary" style={{ textAlign: 'center', margin: '10px' }} onClick={() => setShowOldSet(true)}>Old Setlist</button>
                    </div>
                );
            } else {
                return (
                    <div>
                        <button class="btn btn-primary" style={{ textAlign: 'center', margin: '10px' }} onClick={() => setShowOldSet(false)}>Current Setlist</button>
                        <button class="btn btn-outline-secondary" style={{ textAlign: 'center', margin: '10px' }} onClick={() => setShowOldSet(true)}>Old Setlist</button>
                    </div>
                );
            }
        }

        const albumButton = (album) => {
            if (album === "Taylor Swift") {
                return (<div class="row debut"><p class="row-title">{album}</p></div>);
            } else if (album === "Fearless") {
                return (<div class="row fearless"><p class="row-title">{album}</p></div>);
            } else if (album === "Speak Now") {
                return (<div class="row speaknow"><p class="row-title">{album}</p></div>);
            } else if (album === "Red") {
                return (<div class="row red"><p class="row-title">{album}</p></div>);
            } else if (album === "1989") {
                return (<div class="row TS1989"><p class="row-title">{album}</p></div>);
            } else if (album === "reputation") {
                return (<div class="row reputation"><p class="row-title">{album}</p></div>);
            } else if (album === "Lover") {
                return (<div class="row lover"><p class="row-title">{album}</p></div>);
            } else if (album === "folkmore") {
                return (<div class="row folkmore"><p class="row-title">{album}</p></div>);
            } else if (album === "folklore") {
                return (<div class="row folklore"><p class="row-title">{album}</p></div>);
            } else if (album === "evermore") {
                return (<div class="row evermore"><p class="row-title">{album}</p></div>);
            } else if (album === "Midnights") {
                return (<div class="row midnights"><p class="row-title">{album}</p></div>);
            } else if (album === "The Tortured Poets Department") {
                return (<div class="row ttpd"><p class="row-title">{album}</p></div>);
            } else {
                return (<div class="row other"><p class="row-title">{album}</p></div>);
            }
        }

        const eachSong = (song) => {
            if (song.temporary) {
                if (song.note != null) {
                    return (
                        <div class="row temporary" style={{ paddingBottom: '10px' }}>
                            {song.title} ( {song.note} )
                        </div>
                    );
                } else {
                    return (
                        <div class="row temporary" style={{ paddingBottom: '10px' }}>
                            {song.title}
                        </div>
                    );
                }
            } else {
                if (song.note != null) {
                    return (
                        <div class="row" style={{ paddingBottom: '10px' }}>
                            {song.title} ( {song.note} )
                        </div>
                    );
                } else {
                    return (
                        <div class="row" style={{ paddingBottom: '10px' }}>
                            {song.title}
                        </div>
                    );
                }
            }
        }

        const makeSets = () => {
            if (showOldSet) {
                return (<div>{allOldSets}</div>);
            } else {
                return (<div>{allSets}</div>);
            }
        }

        const allSets = sets.map((el) => (
            <div>
                <div class="row">
                    <div class="col" style={{ textAlign: 'center' }}>
                        {albumButton(el.era)}
                    </div>
                </div>
                {el.songs.map((el) => (
                    eachSong(el)
                ))}
                <hr class="featurette-divider" />
            </div>
        ));

        const allOldSets = oldSets.map((el) => (
            <div>
                <div class="row">
                    <div class="col" style={{ textAlign: 'center' }}>
                        {albumButton(el.era)}
                    </div>
                </div>
                {el.songs.map((el) => (
                    eachSong(el)
                ))}
                <hr class="featurette-divider" />
            </div>
        ));

        return (
            <div>
                {navbar()}
                <div class="container">
                    <h1 class="page-title">Main Set</h1>
                    <hr class="featurette-divider" />
                    <div style={{ textAlign: "center" }}>
                        {makeMenu()}
                    </div>
                    <div style={{ marginLeft: '10px', marginRight: '10px' }}>
                        {makeSets()}
                    </div>
                </div>
                {footer()}
            </div>
        )
    }

    function viewDiscography() {
        const discography2023 = discographyData.discography2023;
        const discography2024 = discographyData.discography2024;

        const albumButton = (album) => {
            if (album === "Taylor Swift") {
                return (<div class="row debut"><p class="row-title">{album}</p></div>);
            } else if (album === "Fearless") {
                return (<div class="row fearless"><p class="row-title">{album}</p></div>);
            } else if (album === "Speak Now") {
                return (<div class="row speaknow"><p class="row-title">{album}</p></div>);
            } else if (album === "Red") {
                return (<div class="row red"><p class="row-title">{album}</p></div>);
            } else if (album === "1989") {
                return (<div class="row TS1989"><p class="row-title">{album}</p></div>);
            } else if (album === "reputation") {
                return (<div class="row reputation"><p class="row-title">{album}</p></div>);
            } else if (album === "Lover") {
                return (<div class="row lover"><p class="row-title">{album}</p></div>);
            } else if (album === "folklore") {
                return (<div class="row folklore"><p class="row-title">{album}</p></div>);
            } else if (album === "evermore") {
                return (<div class="row evermore"><p class="row-title">{album}</p></div>);
            } else if (album === "Midnights") {
                return (<div class="row midnights"><p class="row-title">{album}</p></div>);
            } else if (album === "The Tortured Poets Department") {
                return (<div class="row ttpd"><p class="row-title">{album}</p></div>);
            } else {
                return (<div class="row other"><p class="row-title">{album}</p></div>);
            }
        }

        const eachSong = (song) => {
            if (song.setlist === "true") {
                return (
                    <div class="row setlist" style={{ paddingBottom: '10px' }}>
                        {song.title}
                    </div>
                );
            } else if (song.setlist === "temporary") {
                return (
                    <div class="row setlistTemp" style={{ paddingBottom: '10px' }}>
                        {song.title}
                    </div>
                );
            } else if (song.played) {
                return (
                    <div class="row surpriseSong" style={{ paddingBottom: '10px' }}>
                        {song.title}
                    </div>
                );
            } else {
                return (
                    <div class="row" style={{ paddingBottom: '10px' }}>
                        {song.title}
                    </div>
                );
            }
        }

        const allSets = discography2024.map((el) => (
            <div style={{ marginLeft: '10px', marginRight: '10px' }}>
                <div class="row">
                    <div class="col" style={{ textAlign: 'center' }}>
                        {albumButton(el.album)}
                    </div>
                </div>
                {el.songs.map((el) => (
                    eachSong(el)
                ))}
                <hr class="featurette-divider" />
            </div>
        ));

        const allOldSets = discography2023.map((el) => (
            <div style={{ marginLeft: '10px', marginRight: '10px' }}>
                <div class="row">
                    <div class="col" style={{ textAlign: 'center' }}>
                        {albumButton(el.album)}
                    </div>
                </div>
                {el.songs.map((el) => (
                    eachSong(el)
                ))}
                <hr class="featurette-divider" />
            </div>
        ));

        const makeDiscography = () => {
            if (showOldDiscography) {
                return (
                    <div>
                        {allOldSets}
                    </div>
                );
            } else {
                return (
                    <div>
                        {allSets}
                    </div>
                );
            }
        }

        const makeMenu = () => {
            if (showOldDiscography) {
                return (
                    <div>
                        <button class="btn btn-outline-secondary" style={{ textAlign: 'center', margin: '10px' }} onClick={() => setShowOldDiscography(false)}>Current Discography</button>
                        <button class="btn btn-primary" style={{ textAlign: 'center', margin: '10px' }} onClick={() => setShowOldDiscography(true)}>Old Discography</button>
                    </div>
                );
            } else {
                return (
                    <div>
                        <button class="btn btn-primary" style={{ textAlign: 'center', margin: '10px' }} onClick={() => setShowOldDiscography(false)}>Current Discography</button>
                        <button class="btn btn-outline-secondary" style={{ textAlign: 'center', margin: '10px' }} onClick={() => setShowOldDiscography(true)}>Old Discography</button>
                    </div>
                );
            }
        }

        return (
            <div>
                {navbar()}
                <div class="container">
                    <h1 class="page-title">Discography</h1>
                    <hr class="featurette-divider" />
                    <div style={{ textAlign: "center" }}>
                        {makeMenu()}
                    </div>
                    {makeDiscography()}
                </div>
                {footer()}
            </div>
        )
    }

    function viewOutfits() {
        const shows = outfitsData.shows;
        const oldShows = outfitsData.shows1;

        const createLoverBodysuit = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.loverBodysuit === "Pink & Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#1f2cff", backgroundColor: "#ffbae0" }}>
                            {item.outfits.loverBodysuit}
                        </td>
                    );
                } else if (item.outfits.loverBodysuit === "Blue & Gold") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#f9d040", backgroundColor: "#4689ff" }}>
                            {item.outfits.loverBodysuit}
                        </td>
                    );
                } else if (item.outfits.loverBodysuit === "Tassels") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#5a3286", backgroundColor: "#e6cff2" }}>
                            {item.outfits.loverBodysuit}
                        </td>
                    );
                } else if (item.outfits.loverBodysuit === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#f6c1d6", backgroundColor: "#c91c50" }}>
                            {item.outfits.loverBodysuit}
                        </td>
                    );
                }
                else if (item.outfits.loverBodysuit === "Orange & Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ff0054", backgroundColor: "#FFA647" }}>
                            {item.outfits.loverBodysuit}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.loverBodysuit}
                        </td>
                    );
                }
            } else {
                if (item.outfits.loverBodysuit === "Pink & Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#1f2cff", backgroundColor: "#ffbae0" }}>
                            <img src={loverBodysuit_pinkAndBlue} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.loverBodysuit === "Blue & Gold") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#f9d040", backgroundColor: "#4689ff" }}>
                            <img src={loverBodysuit_blueAndGold} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.loverBodysuit === "Tassels") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#5a3286", backgroundColor: "#e6cff2" }}>
                            <img src={loverBodysuit_tassels} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.loverBodysuit === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#f6c1d6", backgroundColor: "#c91c50" }}>
                            <img src={loverBodysuit_pink} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                }
                else if (item.outfits.loverBodysuit === "Orange & Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ff0054", backgroundColor: "#FFA647" }}>
                            <img src={loverBodysuit_orange} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.loverBodysuit}
                        </td>
                    );
                }
            }
        }
        const createTheManJacket = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.theManJacket === "Silver") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#cccccc" }}>
                            {item.outfits.theManJacket}
                        </td>
                    );
                } else if (item.outfits.theManJacket === "Black") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#e5e5e5", backgroundColor: "#000000" }}>
                            {item.outfits.theManJacket}
                        </td>
                    );
                } else if (item.outfits.theManJacket === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#4c42c7" }}>
                            {item.outfits.theManJacket}
                        </td>
                    );
                } else if (item.outfits.theManJacket === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffc0d5", backgroundColor: "#f13a96" }}>
                            {item.outfits.theManJacket}
                        </td>
                    );
                } else if (item.outfits.theManJacket === "Orange & Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ff0054", backgroundColor: "#FFA647" }}>
                            {item.outfits.theManJacket}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.theManJacket}
                        </td>
                    );
                }
            } else {
                if (item.outfits.theManJacket === "Silver") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#cccccc" }}>
                            <img src={loverJacket_silver} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.theManJacket === "Black") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#e5e5e5", backgroundColor: "#000000" }}>
                            <img src={loverJacket_black} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.theManJacket === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#4c42c7" }}>
                            <img src={loverJacket_blue} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.theManJacket === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffc0d5", backgroundColor: "#f13a96" }}>
                            <img src={loverJacket_pink} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.theManJacket === "Orange & Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ff0054", backgroundColor: "#FFA647" }}>
                            <img src={loverJacket_orange} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.theManJacket}
                        </td>
                    );
                }
            }
        }
        const createLoverGuitar = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.loverGuitar === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#f13a96", backgroundColor: "#fab8dc" }}>
                            {item.outfits.loverGuitar}
                        </td>
                    );
                } else if (item.outfits.loverGuitar === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#4982db", backgroundColor: "#6bd1f7" }}>
                            {item.outfits.loverGuitar}
                        </td>
                    );
                } else if (item.outfits.loverGuitar === "Purple") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#2a0134", backgroundColor: "#CEC0F0" }}>
                            {item.outfits.loverGuitar}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.loverGuitar}
                        </td>
                    );
                }
            } else {
                if (item.outfits.loverGuitar === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#f13a96", backgroundColor: "#fab8dc" }}>
                            <img src={loverGuitar_pink} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.loverGuitar === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#4982db", backgroundColor: "#6bd1f7" }}>
                            <img src={loverGuitar_blue} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.loverGuitar === "Purple") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#2a0134", backgroundColor: "#CEC0F0" }}>
                            <img src={loverGuitar_purple} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.loverGuitar}
                        </td>
                    );
                }
            }
        }
        const createFearlessDress = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.fearlessDress === "Gold Short Fringe") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#fce598" }}>
                            {item.outfits.fearlessDress}
                        </td>
                    )
                } else if (item.outfits.fearlessDress === "Gold Noodle") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#f1c231" }}>
                            {item.outfits.fearlessDress}
                        </td>
                    )
                } else if (item.outfits.fearlessDress === "Silver Noodle") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#e6e6e6", backgroundColor: "#3d3d3d" }}>
                            {item.outfits.fearlessDress}
                        </td>
                    )
                } else if (item.outfits.fearlessDress === "Silver & Black Short Fringe") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#e6e6e6" }}>
                            {item.outfits.fearlessDress}
                        </td>
                    )
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.fearlessDress}
                        </td>
                    )
                }
            } else {
                if (item.outfits.fearlessDress === "Gold Short Fringe") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#fce598" }}>
                            <img src={fearless_goldShort} style={{ maxWidth: '100px' }}></img>
                        </td>
                    )
                } else if (item.outfits.fearlessDress === "Gold Noodle") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#f1c231" }}>
                            <img src={fearless_goldNoodle} style={{ maxWidth: '100px' }}></img>
                        </td>
                    )
                } else if (item.outfits.fearlessDress === "Silver Noodle") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#e6e6e6", backgroundColor: "#3d3d3d" }}>
                            <img src={fearless_silverNoodle} style={{ maxWidth: '100px' }}></img>
                        </td>
                    )
                } else if (item.outfits.fearlessDress === "Silver & Black Short Fringe") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#e6e6e6" }}>
                            <img src={fearless_silverShort} style={{ maxWidth: '100px' }}></img>
                        </td>
                    )
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.fearlessDress}
                        </td>
                    )
                }
            }
        }
        const createRedShirt = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.redShirt === "Never Ever") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#e5e5e5", backgroundColor: "#3d3d3d" }}>
                            {item.outfits.redShirt}
                        </td>
                    );
                } else if (item.outfits.redShirt === "Ew") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ff0000", backgroundColor: "#f0f0f0" }}>
                            {item.outfits.redShirt}
                        </td>
                    );
                } else if (item.outfits.redShirt === "A Lot") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffcfc9", backgroundColor: "#b10202" }}>
                            {item.outfits.redShirt}
                        </td>
                    );
                } else if (item.outfits.redShirt === "Not TV") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#e6e6e6", backgroundColor: "#780000" }}>
                            {item.outfits.redShirt}
                        </td>
                    );
                } else if (item.outfits.redShirt === "About Me") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#780000", backgroundColor: "#e6e6e6" }}>
                            {item.outfits.redShirt}
                        </td>
                    );
                } else if (item.outfits.redShirt === "Trouble") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#780000", backgroundColor: "#bbbbbb" }}>
                            {item.outfits.redShirt}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.redShirt}
                        </td>
                    );
                }
            } else {
                if (item.outfits.redShirt === "Never Ever") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#e5e5e5", backgroundColor: "#3d3d3d" }}>
                            <img src={redShirt_neverEver} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.redShirt === "Ew") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ff0000", backgroundColor: "#f0f0f0" }}>
                            <img src={redShirt_ew} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.redShirt === "A Lot") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffcfc9", backgroundColor: "#b10202" }}>
                            <img src={redShirt_aLot} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.redShirt === "Not TV") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#e6e6e6", backgroundColor: "#780000" }}>
                            <img src={redShirt_notTV} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.redShirt === "About Me") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#780000", backgroundColor: "#e6e6e6" }}>
                            <img src={redShirt_aboutMe} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.redShirt === "Trouble") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#780000", backgroundColor: "#bbbbbb" }}>
                            <img src={redShirt_trouble} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.redShirt}
                        </td>
                    );
                }
            }
        }
        const createSpeakNowGown = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.speakNowDress === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#c82c7b", backgroundColor: "#f9a7d4" }}>
                            {item.outfits.speakNowDress}
                        </td>
                    );
                } else if (item.outfits.speakNowDress === "Champagne (Everything Bagel)") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#c79e1e", backgroundColor: "#fdf1cb" }}>
                            {item.outfits.speakNowDress}
                        </td>
                    );
                } else if (item.outfits.speakNowDress === "Flowers") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#cccccc" }}>
                            {item.outfits.speakNowDress}
                        </td>
                    );
                } else if (item.outfits.speakNowDress === "White/Silver") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#8f7dc4", backgroundColor: "#d9d2e9" }}>
                            {item.outfits.speakNowDress}
                        </td>
                    );
                } else if (item.outfits.speakNowDress === "Purple (Cupcake)") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#f3dfff", backgroundColor: "#c884f2" }}>
                            {item.outfits.speakNowDress}
                        </td>
                    );
                } else if (item.outfits.speakNowDress === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#0a53a8", backgroundColor: "#bfe1f6" }}>
                            {item.outfits.speakNowDress}
                        </td>
                    );
                } else if (item.outfits.speakNowDress === "White Swirls") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#aaaaaa", backgroundColor: "#ffffff" }}>
                            {item.outfits.speakNowDress}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.speakNowDress}
                        </td>
                    );
                }
            }
            else {
                if (item.outfits.speakNowDress === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#c82c7b", backgroundColor: "#f9a7d4" }}>
                            <img src={speakNow_pink} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.speakNowDress === "Champagne (Everything Bagel)") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#c79e1e", backgroundColor: "#fdf1cb" }}>
                            <img src={speakNow_champagne} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.speakNowDress === "Flowers") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#cccccc" }}>
                            <img src={speakNow_flowers} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.speakNowDress === "White/Silver") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#8f7dc4", backgroundColor: "#d9d2e9" }}>
                            <img src={speakNow_white} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.speakNowDress === "Purple (Cupcake)") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#f3dfff", backgroundColor: "#c884f2" }}>
                            <img src={speakNow_purple} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.speakNowDress === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#0a53a8", backgroundColor: "#bfe1f6" }}>
                            <img src={speakNow_blue} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.speakNowDress === "White Swirls") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#aaaaaa", backgroundColor: "#ffffff" }}>
                            <img src={speakNow_swirls} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.speakNowDress}
                        </td>
                    );
                }
            }
        }
        const createReputationJumpsuit = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.reputationJumpsuit === "Red & Black") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ff0000", backgroundColor: "#000000" }}>
                            {item.outfits.reputationJumpsuit}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.reputationJumpsuit}
                        </td>
                    );
                }
            } else {
                if (item.outfits.reputationJumpsuit === "Red & Black") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ff0000", backgroundColor: "#000000" }}>
                            <img src={reputationJumpsuit} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.reputationJumpsuit}
                        </td>
                    );
                }
            }

        }
        const createFolkmoreDress = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.folkmoreDress === "Purple") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#432c7e", backgroundColor: "#d9d2e9" }}>
                            {item.outfits.folkmoreDress}
                        </td>
                    );
                } else if (item.outfits.folkmoreDress === "White/Cream") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#c29408", backgroundColor: "#fef5db" }}>
                            {item.outfits.folkmoreDress}
                        </td>
                    );
                } else if (item.outfits.folkmoreDress === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#a74f7a", backgroundColor: "#f7c1d9" }}>
                            {item.outfits.folkmoreDress}
                        </td>
                    );
                } else if (item.outfits.folkmoreDress === "Green") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#38761d", backgroundColor: "#bae1ae" }}>
                            {item.outfits.folkmoreDress}
                        </td>
                    );
                } else if (item.outfits.folkmoreDress === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#184e7f", backgroundColor: "#60cdff" }}>
                            {item.outfits.folkmoreDress}
                        </td>
                    );
                } else if (item.outfits.folkmoreDress === "Yellow") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#FEF1D7", backgroundColor: "#fcbf49" }}>
                            {item.outfits.folkmoreDress}
                        </td>
                    );
                } else if (item.outfits.folkmoreDress === "Orange/Yellow Flowers") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#8d5301", backgroundColor: "#ffab00" }}>
                            {item.outfits.folkmoreDress}
                        </td>
                    );
                } else if (item.outfits.folkmoreDress === "Bronze") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#700b0a", backgroundColor: "#c8624e" }}>
                            {item.outfits.folkmoreDress}
                        </td>
                    );
                } else if (item.outfits.folkmoreDress === "Hot Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#fbc4e2", backgroundColor: "#ff0a54" }}>
                            {item.outfits.folkmoreDress}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.folkmoreDress}
                        </td>
                    );
                }
            }
            else {
                if (item.outfits.folkmoreDress === "Purple") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#432c7e", backgroundColor: "#d9d2e9" }}>
                            <img src={folklore_purple} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.folkmoreDress === "White/Cream") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#c29408", backgroundColor: "#fef5db" }}>
                            <img src={folklore_white} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.folkmoreDress === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#a74f7a", backgroundColor: "#f7c1d9" }}>
                            <img src={folklore_pink} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.folkmoreDress === "Green") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#38761d", backgroundColor: "#bae1ae" }}>
                            <img src={folklore_green} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.folkmoreDress === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#184e7f", backgroundColor: "#60cdff" }}>
                            <img src={folklore_blue} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.folkmoreDress === "Yellow") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#FEF1D7", backgroundColor: "#fcbf49" }}>
                            <img src={folklore_yellow} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.folkmoreDress === "Hot Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#fbc4e2", backgroundColor: "#ff0a54" }}>
                            <img src={folklore_hotPink} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.folkmoreDress}
                        </td>
                    );
                }
            }
        }
        const createFolkloreDress = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.folkloreDress === "Purple") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#432c7e", backgroundColor: "#d9d2e9" }}>
                            {item.outfits.folkloreDress}
                        </td>
                    );
                } else if (item.outfits.folkloreDress === "White/Cream") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#c29408", backgroundColor: "#fef5db" }}>
                            {item.outfits.folkloreDress}
                        </td>
                    );
                } else if (item.outfits.folkloreDress === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#a74f7a", backgroundColor: "#f7c1d9" }}>
                            {item.outfits.folkloreDress}
                        </td>
                    );
                } else if (item.outfits.folkloreDress === "Green") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#38761d", backgroundColor: "#bae1ae" }}>
                            {item.outfits.folkloreDress}
                        </td>
                    );
                } else if (item.outfits.folkloreDress === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#184e7f", backgroundColor: "#60cdff" }}>
                            {item.outfits.folkloreDress}
                        </td>
                    );
                } else if (item.outfits.folkloreDress === "Yellow") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#FEF1D7", backgroundColor: "#fcbf49" }}>
                            {item.outfits.folkloreDress}
                        </td>
                    );
                } else if (item.outfits.folkloreDress === "Hot Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#fbc4e2", backgroundColor: "#ff0a54" }}>
                            {item.outfits.folkloreDress}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.folkloreDress}
                        </td>
                    );
                }
            }
            else {
                if (item.outfits.folkloreDress === "Purple") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#432c7e", backgroundColor: "#d9d2e9" }}>
                            <img src={folklore_purple} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.folkloreDress === "White/Cream") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#c29408", backgroundColor: "#fef5db" }}>
                            <img src={folklore_white} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.folkloreDress === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#a74f7a", backgroundColor: "#f7c1d9" }}>
                            <img src={folklore_pink} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.folkloreDress === "Green") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#38761d", backgroundColor: "#bae1ae" }}>
                            <img src={folklore_green} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.folkloreDress === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#184e7f", backgroundColor: "#60cdff" }}>
                            <img src={folklore_blue} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.folkloreDress === "Yellow") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#FEF1D7", backgroundColor: "#fcbf49" }}>
                            <img src={folklore_yellow} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.folkloreDress === "Hot Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#fbc4e2", backgroundColor: "#ff0a54" }}>
                            <img src={folklore_hotPink} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.folkloreDress}
                        </td>
                    );
                }
            }
        }
        const createEvermoreDress = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.evermoreDress === "Orange/Yellow Flowers") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#8d5301", backgroundColor: "#ffab00" }}>
                            {item.outfits.evermoreDress}
                        </td>
                    );
                } else if (item.outfits.evermoreDress === "Bronze") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#700b0a", backgroundColor: "#c8624e" }}>
                            {item.outfits.evermoreDress}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.evermoreDress}
                        </td>
                    );
                }
            } else {
                if (item.outfits.evermoreDress === "Orange/Yellow Flowers") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#8d5301", backgroundColor: "#ffab00" }}>
                            <img src={evermore_orange} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.evermoreDress === "Bronze") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#700b0a", backgroundColor: "#c8624e" }}>
                            <img src={evermore_bronze} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.evermoreDress}
                        </td>
                    );
                }
            }

        }
        const create1989Combo = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.combo1989 === "Green") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#cbffb4", backgroundColor: "#5bc42c" }}>
                            {item.outfits.combo1989}
                        </td>
                    );
                } else if (item.outfits.combo1989 === "Yellow/Orange") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#fbfcb0", backgroundColor: "#f89324" }}>
                            {item.outfits.combo1989}
                        </td>
                    );
                } else if (item.outfits.combo1989 === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#fbc4e2", backgroundColor: "#f655a7" }}>
                            {item.outfits.combo1989}
                        </td>
                    );
                } else if (item.outfits.combo1989 === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#d7f3ff", backgroundColor: "#60cdff" }}>
                            {item.outfits.combo1989}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.combo1989}
                        </td>
                    );
                }
            } else {
                if (item.outfits.combo1989 === "Green") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#cbffb4", backgroundColor: "#5bc42c" }}>
                            <img src={set1989_green} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.combo1989 === "Yellow/Orange") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#fbfcb0", backgroundColor: "#f89324" }}>
                            <img src={set1989_orange} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.combo1989 === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#fbc4e2", backgroundColor: "#f655a7" }}>
                            <img src={set1989_pink} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.combo1989 === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#d7f3ff", backgroundColor: "#60cdff" }}>
                            <img src={set1989_blue} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.combo1989}
                        </td>
                    );
                }
            }

        }
        const create1989Top = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.top1989 === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#ff70a6" }}>
                            {item.outfits.top1989}
                        </td>
                    );
                } else if (item.outfits.top1989 === "Red") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#e21837" }}>
                            {item.outfits.top1989}
                        </td>
                    );
                } else if (item.outfits.top1989 === "Yellow") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#FCBE48" }}>
                            {item.outfits.top1989}
                        </td>
                    );
                } else if (item.outfits.top1989 === "Green") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#38761D" }}>
                            {item.outfits.top1989}
                        </td>
                    );
                } else if (item.outfits.top1989 === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#35D2F1" }}>
                            {item.outfits.top1989}
                        </td>
                    );
                } else if (item.outfits.top1989 === "Purple") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#8D68B3" }}>
                            {item.outfits.top1989}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#ffffff" }}>
                            {item.outfits.top1989}
                        </td>
                    );
                }
            } else {
                if (item.outfits.top1989 === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#ff70a6" }}>
                            <img src={top1989_pink} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.top1989 === "Red") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#e21837" }}>
                            <img src={top1989_orange} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.top1989 === "Yellow") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#FCBE48" }}>
                            <img src={top1989_yellow} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.top1989 === "Green") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#38761D" }}>
                            <img src={top1989_green} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.top1989 === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#35D2F1" }}>
                            <img src={top1989_blue} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.top1989 === "Purple") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#8D68B3" }}>
                            <img src={top1989_purple} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#ffffff" }}>
                            {item.outfits.top1989}
                        </td>
                    );
                }
            }

        }
        const create1989Bottoms = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.bottoms1989 === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#ff70a6" }}>
                            {item.outfits.bottoms1989}
                        </td>
                    );
                } else if (item.outfits.bottoms1989 === "Red") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#e21837" }}>
                            {item.outfits.bottoms1989}
                        </td>
                    );
                } else if (item.outfits.bottoms1989 === "Yellow") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#FCBE48" }}>
                            {item.outfits.bottoms1989}
                        </td>
                    );
                } else if (item.outfits.bottoms1989 === "Green") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#38761D" }}>
                            {item.outfits.bottoms1989}
                        </td>
                    );
                } else if (item.outfits.bottoms1989 === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#35D2F1" }}>
                            {item.outfits.bottoms1989}
                        </td>
                    );
                } else if (item.outfits.bottoms1989 === "Purple") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#8D68B3" }}>
                            {item.outfits.bottoms1989}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#ffffff" }}>
                            {item.outfits.bottoms1989}
                        </td>
                    );
                }
            } else {
                if (item.outfits.bottoms1989 === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#ff70a6" }}>
                            <img src={bottoms1989_pink} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.bottoms1989 === "Red") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#e21837" }}>
                            <img src={bottoms1989_orange} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.bottoms1989 === "Yellow") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#FCBE48" }}>
                            <img src={bottoms1989_yellow} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.bottoms1989 === "Green") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#38761D" }}>
                            <img src={bottoms1989_green} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.bottoms1989 === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#35D2F1" }}>
                            <img src={bottoms1989_blue} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.bottoms1989 === "Purple") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#8D68B3" }}>
                            <img src={bottoms1989_purple} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#ffffff" }}>
                            {item.outfits.bottoms1989}
                        </td>
                    );
                }
            }

        }
        const createTTPDDress = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.ttpdDress === "White with Text") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#888888", backgroundColor: "#ffffff" }}>
                            {item.outfits.ttpdDress}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.ttpdDress}
                        </td>
                    );
                }
            } else {
                if (item.outfits.ttpdDress === "White with Text") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#888888", backgroundColor: "#ffffff" }}>
                            <img src={ttpdDress} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.ttpdDress}
                        </td>
                    );
                }
            }

        }
        const createTTPDMarchingBandJacket = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.ttpdMarchingBandJacket === "White") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#888888", backgroundColor: "#ffffff" }}>
                            {item.outfits.ttpdMarchingBandJacket}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.ttpdMarchingBandJacket}
                        </td>
                    );
                }
            } else {
                if (item.outfits.ttpdMarchingBandJacket === "White") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#888888", backgroundColor: "#ffffff" }}>
                            <img src={ttpdMarchingBandJacket} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.ttpdMarchingBandJacket}
                        </td>
                    );
                }
            }

        }
        const createTTPDTwoPiece = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.ttpdTwoPiece === "Black") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#000000" }}>
                            {item.outfits.ttpdTwoPiece}
                        </td>
                    );
                } else if (item.outfits.ttpdTwoPiece === "White") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#888888", backgroundColor: "#ffffff" }}>
                            {item.outfits.ttpdTwoPiece}
                        </td>
                    );
                } else if (item.outfits.ttpdTwoPiece === "Silver") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#CCCCCC" }}>
                            {item.outfits.ttpdTwoPiece}
                        </td>
                    );
                }
                else if (item.outfits.ttpdTwoPiece === "Gold & Black") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#F1CB41" }}>
                            {item.outfits.ttpdTwoPiece}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.ttpdTwoPiece}
                        </td>
                    );
                }
            } else {
                if (item.outfits.ttpdTwoPiece === "Black") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#000000" }}>
                            <img src={ttpdTwoPiece_black} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.ttpdTwoPiece === "White") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#888888", backgroundColor: "#ffffff" }}>
                            <img src={ttpdTwoPiece_white} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.ttpdTwoPiece === "Silver") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#CCCCCC" }}>
                            <img src={ttpdTwoPiece_silver} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                }
                else if (item.outfits.ttpdTwoPiece === "Gold & Black") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#F1CB41" }}>
                            <img src={ttpdTwoPiece_gold} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.ttpdTwoPiece}
                        </td>
                    );
                }
            }

        }
        const createTTPDjacket = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.ttpdJacket === "Gold") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#F1CB41" }}>
                            {item.outfits.ttpdJacket}
                        </td>
                    );
                } else if (item.outfits.ttpdJacket === "White") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#888888", backgroundColor: "#ffffff" }}>
                            {item.outfits.ttpdJacket}
                        </td>
                    );
                } else if (item.outfits.ttpdJacket === "Silver") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#FFFFFF", backgroundColor: "#CCCCCC" }}>
                            {item.outfits.ttpdJacket}
                        </td>
                    );
                } else if (item.outfits.ttpdJacket === "White with Black") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#ffffff" }}>
                            {item.outfits.ttpdJacket}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.ttpdJacket}
                        </td>
                    );
                }
            } else {
                if (item.outfits.ttpdJacket === "Gold") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#F1CB41" }}>
                            <img src={ttpdJacket_gold} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.ttpdJacket === "White") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#888888", backgroundColor: "#ffffff" }}>
                            <img src={ttpdJacket_white} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.ttpdJacket === "Silver") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#FFFFFF", backgroundColor: "#CCCCCC" }}>
                            <img src={ttpdJacket_silver} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.ttpdJacket === "White with Black") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#ffffff" }}>
                            <img src={ttpdJacket_whiteWithBlack} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.ttpdJacket}
                        </td>
                    );
                }
            }

        }
        const createMidnightsShirt = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.midnightsShirt === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#c82c7b", backgroundColor: "#f9a7d4" }}>
                            {item.outfits.midnightsShirt}
                        </td>
                    );
                } else if (item.outfits.midnightsShirt === "Purple") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#e1d5ff", backgroundColor: "#b595ff" }}>
                            {item.outfits.midnightsShirt}
                        </td>
                    );
                } else if (item.outfits.midnightsShirt === "Silver Sequin") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#999999", backgroundColor: "#efefef" }}>
                            {item.outfits.midnightsShirt}
                        </td>
                    );
                } else if (item.outfits.midnightsShirt === "Iridescent") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#72359c", backgroundColor: "#a4c6ff" }}>
                            {item.outfits.midnightsShirt}
                        </td>
                    );
                } else if (item.outfits.midnightsShirt === "Dark Purple") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#d9d2e9", backgroundColor: "#6105a2" }}>
                            {item.outfits.midnightsShirt}
                        </td>
                    );
                } else if (item.outfits.midnightsShirt === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#b1dfff", backgroundColor: "#369df7" }}>
                            {item.outfits.midnightsShirt}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.midnightsShirt}
                        </td>
                    );
                }
            } else {
                if (item.outfits.midnightsShirt === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#c82c7b", backgroundColor: "#f9a7d4" }}>
                            <img src={midnightsShirt_pink} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.midnightsShirt === "Purple") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#e1d5ff", backgroundColor: "#b595ff" }}>
                            <img src={midnightsShirt_purple} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.midnightsShirt === "Silver Sequin") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#999999", backgroundColor: "#efefef" }}>
                            <img src={midnightsShirt_silver} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.midnightsShirt === "Iridescent") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#72359c", backgroundColor: "#a4c6ff" }}>
                            <img src={midnightsShirt_iridescent} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.midnightsShirt === "Dark Purple") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#d9d2e9", backgroundColor: "#6105a2" }}>
                            <img src={midnightsShirt_darkPurple} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.midnightsShirt === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#b1dfff", backgroundColor: "#369df7" }}>
                            <img src={midnightsShirt_blue} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.midnightsShirt}
                        </td>
                    );
                }
            }

        }
        const createMidnightsBodysuit = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.midnightsBodysuit === "Scallops") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#d0e2f3", backgroundColor: "#2a48ef" }}>
                            {item.outfits.midnightsBodysuit}
                        </td>
                    );
                } else if (item.outfits.midnightsBodysuit === "Chevron") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#b7cbed", backgroundColor: "#163f84" }}>
                            {item.outfits.midnightsBodysuit}
                        </td>
                    );
                } else if (item.outfits.midnightsBodysuit === "Abs") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#d0e2f3", backgroundColor: "#655bcf" }}>
                            {item.outfits.midnightsBodysuit}
                        </td>
                    );
                } else if (item.outfits.midnightsBodysuit === "Sidepods") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#655bcf", backgroundColor: "#d0e2f3" }}>
                            {item.outfits.midnightsBodysuit}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.midnightsBodysuit}
                        </td>
                    );
                }
            } else {
                if (item.outfits.midnightsBodysuit === "Scallops") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#d0e2f3", backgroundColor: "#2a48ef" }}>
                            <img src={midnightsBodysuit_scallops} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.midnightsBodysuit === "Chevron") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#b7cbed", backgroundColor: "#163f84" }}>
                            <img src={midnightsBodysuit_lines} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.midnightsBodysuit === "Abs") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#d0e2f3", backgroundColor: "#655bcf" }}>
                            <img src={midnightsBodysuit_abs} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.midnightsBodysuit === "Sidepods") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#655bcf", backgroundColor: "#d0e2f3" }}>
                            <img src={midnightsBodysuit_sidepods} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.midnightsBodysuit}
                        </td>
                    );
                }
            }

        }
        const createMidnightsJacket = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.midnightsJacket === "Light Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#9f1158", backgroundColor: "#f887c3" }}>
                            {item.outfits.midnightsJacket}
                        </td>
                    );
                } else if (item.outfits.midnightsJacket === "Multicolor") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#70b6f7", backgroundColor: "#8644b1" }}>
                            {item.outfits.midnightsJacket}
                        </td>
                    );
                } else if (item.outfits.midnightsJacket === "Magenta") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#f5cbcb", backgroundColor: "#ca1c50" }}>
                            {item.outfits.midnightsJacket}
                        </td>
                    );
                } else if (item.outfits.midnightsJacket === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#c6d8f4", backgroundColor: "#2008ff" }}>
                            {item.outfits.midnightsJacket}
                        </td>
                    );
                } else if (item.outfits.midnightsJacket === "No Jacket") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.midnightsJacket}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.midnightsJacket}
                        </td>
                    );
                }
            } else {
                if (item.outfits.midnightsJacket === "Light Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#9f1158", backgroundColor: "#f887c3" }}>
                            <img src={midnightsJacket_lightPink} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.midnightsJacket === "Multicolor") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#70b6f7", backgroundColor: "#8644b1" }}>
                            <img src={midnightsJacket_multicolor} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.midnightsJacket === "Magenta") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#f5cbcb", backgroundColor: "#ca1c50" }}>
                            <img src={midnightsJacket_magenta} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.midnightsJacket === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#c6d8f4", backgroundColor: "#2008ff" }}>
                            <img src={midnightsJacket_blue} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.midnightsJacket === "No Jacket") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.midnightsJacket}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.midnightsJacket}
                        </td>
                    );
                }
            }

        }
        const createSurpriseSongDress = (item) => {
            if (selectedOption.value == "colors") {
                if (item.outfits.surpriseSongDress === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#E73D95", backgroundColor: "#ffccd5" }}>
                            {item.outfits.surpriseSongDress}
                        </td>
                    );
                } else if (item.outfits.surpriseSongDress === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#bde0fe", backgroundColor: "#57A0CD" }}>
                            {item.outfits.surpriseSongDress}
                        </td>
                    );
                } else if (item.outfits.surpriseSongDress === "Orange") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffd670", backgroundColor: "#fb8500" }}>
                            {item.outfits.surpriseSongDress}
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.surpriseSongDress}
                        </td>
                    );
                }
            } else {
                if (item.outfits.surpriseSongDress === "Pink") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#E73D95", backgroundColor: "#ffccd5" }}>
                            <img src={surpriseSong_pink} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.surpriseSongDress === "Blue") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#bde0fe", backgroundColor: "#57A0CD" }}>
                            <img src={surpriseSong_blue} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else if (item.outfits.surpriseSongDress === "Orange") {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffd670", backgroundColor: "#fb8500" }}>
                            <img src={surpriseSong_orange} style={{ maxWidth: '100px' }}></img>
                        </td>
                    );
                } else {
                    return (
                        <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                            {item.outfits.surpriseSongDress}
                        </td>
                    );
                }
            }

        }

        const createTable = () => {
            if (showOldOutfits) {
                return (
                    <div>
                        <table style={{ border: "2px solid black", padding: "10px" }}>
                            <thead>
                                <tr style={{ backgroundColor: "#E0E0E0", fontWeight: "bold" }}>
                                    <th style={{ paddingLeft: "10px", borderBottom: "1px solid gray" }}>Key</th>
                                    <th style={{ borderBottom: "1px solid gray" }}></th>
                                    <th style={{ border: "1px solid gray" }}>Lover Bodysuit</th>
                                    <th style={{ border: "1px solid gray" }}>The Man Jacket</th>
                                    <th style={{ border: "1px solid gray" }}>Lover Guitar</th>
                                    <th style={{ border: "1px solid gray" }}>Fearless Dress</th>
                                    <th style={{ border: "1px solid gray" }}>evermore Dress</th>
                                    <th style={{ border: "1px solid gray" }}>reputation Jumpsuit</th>
                                    <th style={{ border: "1px solid gray" }}>Speak Now Gown</th>
                                    <th style={{ border: "1px solid gray" }}>Red Shirt</th>
                                    <th style={{ border: "1px solid gray" }}>folklore Dress</th>
                                    <th style={{ border: "1px solid gray" }}>1989 Two-Piece</th>
                                    <th style={{ border: "1px solid gray" }}>Midnights Shirt</th>
                                    <th style={{ border: "1px solid gray" }}>Midnights Bodysuit</th>
                                    <th style={{ border: "1px solid gray" }}>Midnights Jacket</th>
                                </tr>
                            </thead>
                            <tbody>
                                {oldShows.map((item, index) => (
                                    <tr key={index}>
                                        <td style={{ paddingLeft: "10px", borderBottom: "1px solid gray", fontWeight: "bold" }}>
                                            {item.city} N{item.night}
                                        </td>
                                        <td style={{ borderBottom: "1px solid gray", fontStyle: "italic" }}>
                                            {" (" + item.date + ")"}
                                        </td>
                                        {createLoverBodysuit(item)}
                                        {createTheManJacket(item)}
                                        {createLoverGuitar(item)}
                                        {createFearlessDress(item)}
                                        {createEvermoreDress(item)}
                                        {createReputationJumpsuit(item)}
                                        {createSpeakNowGown(item)}
                                        {createRedShirt(item)}
                                        {createFolkloreDress(item)}
                                        {create1989Combo(item)}
                                        {createMidnightsShirt(item)}
                                        {createMidnightsBodysuit(item)}
                                        {createMidnightsJacket(item)}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            } else {
                return (
                    <div>
                        <table style={{ border: "2px solid black", padding: "10px" }}>
                            <thead>
                                <tr style={{ backgroundColor: "#E0E0E0", fontWeight: "bold" }}>
                                    <th style={{ paddingLeft: "10px", borderBottom: "1px solid gray" }}>Key</th>
                                    <th style={{ borderBottom: "1px solid gray" }}></th>
                                    <th style={{ border: "1px solid gray" }}>Lover Bodysuit</th>
                                    <th style={{ border: "1px solid gray" }}>The Man Jacket</th>
                                    <th style={{ border: "1px solid gray" }}>Lover Guitar</th>
                                    <th style={{ border: "1px solid gray" }}>Fearless Dress</th>
                                    <th style={{ border: "1px solid gray" }}>Red Shirt</th>
                                    <th style={{ border: "1px solid gray" }}>Speak Now Gown</th>
                                    <th style={{ border: "1px solid gray" }}>reputation Jumpsuit</th>
                                    <th style={{ border: "1px solid gray" }}>folkmore</th>
                                    <th style={{ border: "1px solid gray" }}>1989 Top</th>
                                    <th style={{ border: "1px solid gray" }}>1989 Bottoms</th>
                                    <th style={{ border: "1px solid gray" }}>TTPD Dress</th>
                                    <th style={{ border: "1px solid gray" }}>TTPD Marching Band Jacket</th>
                                    <th style={{ border: "1px solid gray" }}>TTPD Two-Piece</th>
                                    <th style={{ border: "1px solid gray" }}>TTPD Jacket</th>
                                    <th style={{ border: "1px solid gray" }}>Surprise Song Dress</th>
                                    <th style={{ border: "1px solid gray" }}>Midnights Shirt</th>
                                    <th style={{ border: "1px solid gray" }}>Midnights Bodysuit</th>
                                    <th style={{ border: "1px solid gray" }}>Midnights Jacket</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shows.map((item, index) => (
                                    <tr key={index}>
                                        <td style={{ paddingLeft: "10px", borderBottom: "1px solid gray", fontWeight: "bold" }}>
                                            {item.city} N{item.night}
                                        </td>
                                        <td style={{ borderBottom: "1px solid gray", fontStyle: "italic" }}>
                                            {" (" + item.date + ")"}
                                        </td>
                                        {createLoverBodysuit(item)}
                                        {createTheManJacket(item)}
                                        {createLoverGuitar(item)}
                                        {createFearlessDress(item)}
                                        {createRedShirt(item)}
                                        {createSpeakNowGown(item)}
                                        {createReputationJumpsuit(item)}
                                        {createFolkmoreDress(item)}
                                        {create1989Top(item)}
                                        {create1989Bottoms(item)}
                                        {createTTPDDress(item)}
                                        {createTTPDMarchingBandJacket(item)}
                                        {createTTPDTwoPiece(item)}
                                        {createTTPDjacket(item)}
                                        {createSurpriseSongDress(item)}
                                        {createMidnightsShirt(item)}
                                        {createMidnightsBodysuit(item)}
                                        {createMidnightsJacket(item)}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            }
        }

        const makeMenu = () => {
            if (showOldOutfits) {
                return (
                    <div>
                        <button class="btn btn-outline-secondary" style={{ textAlign: 'center', margin: '10px' }} onClick={() => setShowOldOutfits(false)}>Current Outfits</button>
                        <button class="btn btn-primary" style={{ textAlign: 'center', margin: '10px' }} onClick={() => setShowOldOutfits(true)}>Old Outfits</button>
                    </div>
                );
            } else {
                return (
                    <div>
                        <button class="btn btn-primary" style={{ textAlign: 'center', margin: '10px' }} onClick={() => setShowOldOutfits(false)}>Current Outfits</button>
                        <button class="btn btn-outline-secondary" style={{ textAlign: 'center', margin: '10px' }} onClick={() => setShowOldOutfits(true)}>Old Outfits</button>
                    </div>
                );
            }
        }

        const handleOptionChange = (selected) => {
            setSelectedOption(selected);
        };

        return (
            <div>
                {navbar()}
                <div class="container">
                    <h1 class="page-title">Outfits</h1>
                    <hr class="featurette-divider" />
                    <div style={{ textAlign: 'center' }}>
                        {makeMenu()}
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ width: '25%', float: 'right' }}>
                            <Select
                                options={options}
                                onChange={handleOptionChange}
                                value={selectedOption}
                                isSearchable={false} // Set to false if you don't want the search functionality
                            />
                        </div>
                    </div>
                    <hr className="featurette-divider" />
                    <div style={{ textAlign: 'right' }}>
                        <button class="button-like-text" style={{ color: '#177e89', paddingRight: '50px' }} onClick={() => setView(8)}>View 1989 Combinations</button>
                    </div>
                    <div class="container-container">
                        <div class="scrollable-container">
                            <div class="content" id="outfits">
                                {createTable()}
                            </div>
                        </div>
                    </div>
                </div>
                {footer()}
            </div>
        );
    }

    function viewLinks() {
        const categories = linksData.categories;

        const titleRow = (title) => {
            if (title === "Streams") {
                return (<div class="row primaryColor"><p class="row-title">{title}</p></div>);
            } else if (title === "Spreadsheets & Forms") {
                return (<div class="row tertiaryColor"><p class="row-title">{title}</p></div>);
            } else if (title === "Official") {
                return (<div class="row accentColor"><p class="row-title">{title}</p></div>);
            } else {
                return (<div class="row secondaryColor"><p class="row-title">{title}</p></div>);
            }
        }

        const allCategories = categories.map((el) => (
            <div>
                <div class="row">
                    <div class="col" style={{ textAlign: 'center', paddingBottom: '10px' }}>
                        {titleRow(el.title)}
                    </div>
                </div>
                {el.links.map((el) => (
                    <div class="row" style={{ paddingBottom: '10px' }}>
                        <p>{el.title}: <a href={el.url}>{el.url}</a></p>
                    </div>
                ))}
                <hr class="featurette-divider" />
            </div>
        ));

        return (
            <div>
                {navbar()}
                <div class="container">
                    <h1 class="page-title">Links</h1>
                    <hr class="featurette-divider" />
                    {allCategories}
                </div>
                {footer()}
            </div>
        )
    }

    function viewAbout() {
        const isSmallScreen = window.innerWidth <= 800;

        if (isSmallScreen) {
            return (
                <div>
                    {navbar()}
                    <div class="container">
                        <h1 class="page-title">About</h1>
                        <hr class="featurette-divider" />
                        <div class="row">
                            <div class="col aboutUs">
                                <p class="title"><strong>About TS Tour Tracker</strong></p>
                                <p>TS Tour Tracker is a website designed to track what's happening during Taylor Swift's Eras Tour.
                                    The website was designed to replace my spreadsheet because my family had trouble viewing it on their phones.</p>
                                <p>The website tracks the surprise songs, which songs in Taylor's discography have and have not been played,
                                    what songs are on the main setlist, what outfits Taylor wears, and any events that Taylor might attend.
                                    The events include concerts, song releases, award ceremonies, and football games.
                                    There is also a page with links to other important websites, such as tour streams, other trackers,
                                    and Taylor's official social media and websites.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col aboutWillow">
                                <div class="row">
                                    <p class="title willowTitle"><strong>About Willow</strong></p>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <img src={willowPic} className="featurette-image img-fluid mx-auto" style={{ width: '300px', height: '300px', objectFit: 'cover', margin: '10px' }} alt="A black dog sitting in front of a double rainbow" />
                                    </div>
                                    <div class="col">
                                        <p>This is my puppy Willow! She is a 3 year old black lab and a very silly little lady.
                                            She loves playing with rope toys and tennis balls, going on walks, and causing chaos.
                                            She is very proud to now have two Taylor Swift songs about her,
                                            "willow" and "The Black Dog."  </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {footer()}
                </div >
            );
        } else {
            return (
                <div>
                    {navbar()}
                    <div class="container">
                        <h1 class="page-title">About</h1>
                        <hr class="featurette-divider" />
                        <div class="row">
                            <div class="col aboutUs">
                                <p class="title"><strong>About TS Tour Tracker</strong></p>
                                <p>TS Tour Tracker is a website designed to track what's happening during Taylor Swift's Eras Tour.
                                    The website was designed to replace my spreadsheet because my family had trouble viewing it on their phones.</p>
                                <p>The website tracks the surprise songs, which songs in Taylor's discography have and have not been played,
                                    what songs are on the main setlist, what outfits Taylor wears, and any events that Taylor might attend.
                                    The events include concerts, song releases, award ceremonies, and football games.
                                    There is also a page with links to other important websites, such as tour streams, other trackers,
                                    and Taylor's official social media and websites.</p>
                            </div>
                            <div class="col aboutWillow">
                                <div class="row">
                                    <p class="title willowTitle"><strong>About Willow</strong></p>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <img src={willowPic} className="featurette-image img-fluid mx-auto" style={{ width: '300px', height: '300px', objectFit: 'cover', margin: '10px' }} alt="A black dog sitting in front of a double rainbow" />
                                    </div>
                                    <div class="col">
                                        <p>This is my puppy Willow! She is a 3 year old black lab and a very silly little lady.
                                            She loves playing with rope toys and tennis balls, going on walks, and causing chaos.
                                            She is very proud to now have two Taylor Swift songs about her,
                                            "willow" and "The Black Dog."  </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {footer()}
                </div>
            );
        }
    }

    function view1989() {
        const createTable = () => {
            return (
                <div>
                    <table style={{ border: "2px solid black", padding: "10px", maxWidth: "100%", textAlign: "center", align: "center" }}>
                        <thead>
                            <tr style={{ backgroundColor: "#E0E0E0", fontWeight: "bold" }}>
                                <th style={{ border: "1px solid gray" }}></th>
                                <th style={{ border: "1px solid gray" }}>Pink</th>
                                <th style={{ border: "1px solid gray" }}>Red</th>
                                <th style={{ border: "1px solid gray" }}>Yellow</th>
                                <th style={{ border: "1px solid gray" }}>Green</th>
                                <th style={{ border: "1px solid gray" }}>Blue</th>
                                <th style={{ border: "1px solid gray" }}>Purple</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ backgroundColor: "#E0E0E0", fontWeight: "bold", border: "1px solid gray" }}>Pink</td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={pinkpink} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={redpink} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={yellowpink} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={greenpink} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={bluepink} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={purplepink} ></img>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: "#E0E0E0", fontWeight: "bold", border: "1px solid gray" }}>Red</td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={pinkred} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={redred} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={yellowred} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={greenred} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={bluered} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={purplered} ></img>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: "#E0E0E0", fontWeight: "bold", border: "1px solid gray" }}>Yellow</td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={pinkyellow} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={redyellow} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={yellowyellow} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={greenyellow} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={blueyellow} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={purpleyellow} ></img>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: "#E0E0E0", fontWeight: "bold", border: "1px solid gray" }}>Green</td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={pinkgreen} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={redgreen} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={yellowgreen} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={greengreen} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={bluegreen} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={purplegreen} ></img>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: "#E0E0E0", fontWeight: "bold", border: "1px solid gray" }}>Blue</td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={pinkblue} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={redblue} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={yellowblue} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={greenblue} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={blueblue} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={purpleblue} ></img>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: "#E0E0E0", fontWeight: "bold", border: "1px solid gray" }}>Purple</td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={pinkpurple} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={redpurple} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={yellowpurple} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={greenpurple} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={bluepurple} ></img>
                                </td>
                                <td style={{ border: "1px solid gray" }}>
                                    <img class="tableCell" src={purplepurple} ></img>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
        return (
            <div>
                {navbar()}
                <div class="container">
                    <h1 class="page-title">1989 Combos</h1>
                    <hr class="featurette-divider" />
                    <div class="container-container">
                        <div class="scrollable-container">
                            <div class="content" id="outfits">
                                {createTable()}
                            </div>
                        </div>
                    </div>
                </div>
                {footer()}
            </div>
        );
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
        return viewDiscography();
    } else if (view === 3) {
        return viewMainSet();
    } else if (view === 4) {
        return viewOutfits();
    } else if (view === 5) {
        return (
            <div>
                {navbar()}
                <Events />
                {footer()}
            </div>
        );
    } else if (view === 6) {
        return viewLinks();
    } else if (view === 7) {
        return viewAbout();
    } else if (view === 8) {
        return view1989();
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