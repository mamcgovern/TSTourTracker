import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Countdown from 'react-countdown';

import eventsData from './data/events.json';
import surpriseSongData from './data/surpriseSongs.json';

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

function App() {
    const currentDate = new Date().getTime();
    function eventPhoto(category) {
        if (category === "Concert") {
            return (
                <img src={concertPhoto} className="featurette-image img-fluid mx-auto" style={{ width: '500px', height: '500px', objectFit: 'cover' }} alt="Concert" />
            );
        } else if (category === "Ceremony") {
            return (
                <img src={ceremonyPhoto} className="featurette-image img-fluid mx-auto" style={{ width: '500px', height: '500px', objectFit: 'cover' }} alt="Ceremony" />
            );
        } else if (category === "Football") {
            return (
                <img src={footballPhoto} className="featurette-image img-fluid mx-auto" style={{ width: '500px', height: '500px', objectFit: 'cover' }} alt="Football" />
            );
        } else if (category === "Release") {
            return (
                <img src={releasePhoto} className="featurette-image img-fluid mx-auto" style={{ width: '500px', height: '500px', objectFit: 'cover' }} alt="Release" />
            );
        } else if (category === "") {
            return (
                <img src={otherPhoto} className="featurette-image img-fluid mx-auto" style={{ width: '500px', height: '500px', objectFit: 'cover' }} alt="Other" />
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
                        return (<button class="unclickable-button debut"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar"/> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button debut"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano"/> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button debut"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar"/> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button debut"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano"/> {song.title}</button>);
                    }
                }
            } else if (song.album === "Fearless") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button fearless"><img src={guitar_black} alt="black guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button fearless"><img src={piano_black} alt="black piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button fearless"><img src={guitar_black} alt="black guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button fearless"><img src={piano_black} alt="black piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else if (song.album === "Speak Now") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button speaknow"><img src={guitar_black} alt="black guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button speaknow"><img src={piano_black} alt="black piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button speaknow"><img src={guitar_black} alt="black guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button speaknow"><img src={piano_black} alt="black piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else if (song.album === "Red") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button red"><img src={guitar_black} alt="black guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button red"><img src={piano_black} alt="black piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button red"><img src={guitar_black} alt="black guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button red"><img src={piano_black} alt="black piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else if (song.album === "1989") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button TS1989"><img src={guitar_black} alt="black guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button TS1989"><img src={piano_black} alt="black piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button TS1989"><img src={guitar_black} alt="black guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button TS1989"><img src={piano_black} alt="black piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else if (song.album === "reputation") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button reputation"><img src={guitar_white} alt="white guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button reputation"><img src={piano_white} alt="white piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button reputation"><img src={guitar_white} alt="white guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button reputation"><img src={piano_white} alt="white piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else if (song.album === "Lover") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button lover"><img src={guitar_black} alt="black guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button lover"><img src={piano_black} alt="black piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button lover"><img src={guitar_black} alt="black guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button lover"><img src={piano_black} alt="black piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else if (song.album === "folklore") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button folklore"><img src={guitar_black} alt="black guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button folklore"><img src={piano_black} alt="black piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button folklore"><img src={guitar_black} alt="black guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button folklore"><img src={piano_black} alt="black piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else if (song.album === "evermore") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button evermore"><img src={guitar_black} alt="black guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button evermore"><img src={piano_black} alt="black piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button evermore"><img src={guitar_black} alt="black guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button evermore"><img src={piano_black} alt="black piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else if (song.album === "Midnights") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button midnights"><img src={guitar_white} alt="white guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button midnights"><img src={piano_white} alt="white piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button midnights"><img src={guitar_white} alt="white guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button midnights"><img src={piano_white} alt="white piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else if (song.album === "The Tortured Poets Department") {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button ttpd"><img src={guitar_black} alt="black guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button ttpd"><img src={piano_black} alt="black piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button ttpd"><img src={guitar_black} alt="black guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button ttpd"><img src={piano_black} alt="black piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    }
                }
            } else {
                if (song.feature != null) {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button other"><img src={guitar_black} alt="black guitar" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    } else {
                        return (<button class="unclickable-button other"><img src={piano_black} alt="black piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title} <em>(guest: {song.feature})</em></button>);
                    }
                } else {
                    if (song.instrument === "Guitar") {
                        return (<button class="unclickable-button other"><img src={guitar_black} alt="black guitar"  style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
                    } else {
                        return (<button class="unclickable-button other"><img src={piano_black} alt="black piano" style={{ width: '20px', height: '20px', objectFit: 'cover' }} /> {song.title}</button>);
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
                    <img src={releasePhoto} className="featurette-image img-fluid mx-auto" style={{ width: '500px', height: '500px', objectFit: 'cover', margin: '10px' }} alt="Release" />
                </div>
            </div>
        );
    }


    function home() {
        const isSmallScreen = window.innerWidth <= 800;

        return (
            <div>
                {!isSmallScreen && (
                    <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel" data-bs-interval="3000">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={surpriseSongsPhoto} class="d-block w-100" alt="Surprise Song" style={{ objectFit: "cover" }} />
                                <div class="carousel-caption d-none d-md-block text-end">
                                    <h1>Surprise!</h1>
                                    <p>View the surprise songs.</p>
                                    <a class="btn btn-lg btn-primary" href="#/surprisesongs">Surprise Songs</a>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={mainSetPhoto} class="d-block w-100" alt="Surprise Song" style={{ objectFit: "cover" }} />
                                <div class="carousel-caption d-none d-md-block text-start">
                                    <h1>Setlist</h1>
                                    <p>View the setlist.</p>
                                    <a class="btn btn-lg btn-primary" href="#/mainset">Main Set</a>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={outfitsPhoto} class="d-block w-100" alt="outfits" style={{ objectFit: "cover" }} />
                                <div class="carousel-caption d-none d-md-block text-end">
                                    <h1>Outfits</h1>
                                    <p>View the outfit tracker</p>
                                    <a class="btn btn-lg btn-primary" href="#/outfits">Outfits</a>
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
                                <a class="btn btn-secondary" href="#/surprisesongs">Surprise Songs &raquo;</a>
                            </div>
                            <div class="col-lg-4">
                                <h2 class="fw-normal">Discography</h2>
                                <p>The discography tracker lists every song in Taylor's discography and color codes it based on whether or not it has been performed.</p>
                                <a class="btn btn-secondary" href="#/discography">Discography &raquo;</a>
                            </div>
                            <div class="col-lg-4">
                                <h2 class="fw-normal">Main Set</h2>
                                <p>The main set page includes all of the sets and which songs are a part of them.</p>
                                <a class="btn btn-secondary" href="#/mainset">Main Set &raquo;</a>
                            </div>
                        </div>
                        <div class="row" style={{ paddingTop: '100px' }}>
                            <div class="col-lg-4">
                                <h2 class="fw-normal">Outfits</h2>
                                <p>The outfit tracker lists what outfits Taylor wore for each night.</p>
                                <a class="btn btn-secondary" href="#/outfits">Outfits &raquo;</a>
                            </div>
                            <div class="col-lg-4">
                                <h2 class="fw-normal">Events</h2>
                                <p>The events view shows any upcoming events that Taylor might be at.</p>
                                <a class="btn btn-secondary" href="#/events">Events &raquo;</a>
                            </div>
                            <div class="col-lg-4">
                                <h2 class="fw-normal">Links</h2>
                                <p>The links page includes links to different streams, spreadsheets, and Taylor's official websites and social media.</p>
                                <a class="btn btn-secondary" href="#/links">Links &raquo;</a>
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
            </div>
        )
    }

    return home();
}

export default App;