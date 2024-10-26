import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import surpriseSongData from '../data/surpriseSongs.json';

import guitar_black from '../images/guitar_black.png';
import guitar_white from '../images/guitar_white.png';
import piano_black from '../images/piano_black.png';
import piano_white from '../images/piano_white.png';

const SurpriseSongs = () => {
    var surpriseSongs = surpriseSongData.songs.slice(); // Create a copy to avoid mutating original data
    const [showNewFirst, setShowNewFirst] = useState(true);

    // Sort songs based on showNewFirst state
    if (showNewFirst) {
        surpriseSongs.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort in descending order
    } else {
        surpriseSongs.sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort in ascending order
    }

    const songPart = (song) => {
        if (song.album === "Taylor Swift") {
            if (song.feature != null) {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button debut"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar icon" /> {song.title} <em>(guest: {song.feature})</em></button>);
                } else {
                    return (<button class="unclickable-button debut"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano icon"/> {song.title} <em>(guest: {song.feature})</em></button>);
                }
            } else {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button debut"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar icon" /> {song.title}</button>);
                } else {
                    return (<button class="unclickable-button debut"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano icon"/> {song.title}</button>);
                }
            }
        } else if (song.album === "Fearless") {
            if (song.feature != null) {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button fearless"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar icon" /> {song.title} <em>(guest: {song.feature})</em></button>);
                } else {
                    return (<button class="unclickable-button fearless"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano icon"/> {song.title} <em>(guest: {song.feature})</em></button>);
                }
            } else {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button fearless"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar icon" /> {song.title}</button>);
                } else {
                    return (<button class="unclickable-button fearless"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano icon"/> {song.title}</button>);
                }
            }
        } else if (song.album === "Speak Now") {
            if (song.feature != null) {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button speaknow"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar icon" /> {song.title} <em>(guest: {song.feature})</em></button>);
                } else {
                    return (<button class="unclickable-button speaknow"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano icon"/> {song.title} <em>(guest: {song.feature})</em></button>);
                }
            } else {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button speaknow"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar icon" /> {song.title}</button>);
                } else {
                    return (<button class="unclickable-button speaknow"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano icon"/> {song.title}</button>);
                }
            }
        } else if (song.album === "Red") {
            if (song.feature != null) {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button red"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar icon" /> {song.title} <em>(guest: {song.feature})</em></button>);
                } else {
                    return (<button class="unclickable-button red"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano icon"/> {song.title} <em>(guest: {song.feature})</em></button>);
                }
            } else {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button red"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar icon" /> {song.title}</button>);
                } else {
                    return (<button class="unclickable-button red"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano icon"/> {song.title}</button>);
                }
            }
        } else if (song.album === "1989") {
            if (song.feature != null) {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button TS1989"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar icon" /> {song.title} <em>(guest: {song.feature})</em></button>);
                } else {
                    return (<button class="unclickable-button TS1989"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano icon"/> {song.title} <em>(guest: {song.feature})</em></button>);
                }
            } else {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button TS1989"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar icon" /> {song.title}</button>);
                } else {
                    return (<button class="unclickable-button TS1989"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano icon"/> {song.title}</button>);
                }
            }
        } else if (song.album === "reputation") {
            if (song.feature != null) {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button reputation"><img src={guitar_white} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="white guitar icon"/> {song.title} <em>(guest: {song.feature})</em></button>);
                } else {
                    return (<button class="unclickable-button reputation"><img src={piano_white} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="white piano icon"/> {song.title} <em>(guest: {song.feature})</em></button>);
                }
            } else {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button reputation"><img src={guitar_white} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="white guitar icon"/> {song.title}</button>);
                } else {
                    return (<button class="unclickable-button reputation"><img src={piano_white} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="white piano icon"/> {song.title}</button>);
                }
            }
        } else if (song.album === "Lover") {
            if (song.feature != null) {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button lover"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar icon" /> {song.title} <em>(guest: {song.feature})</em></button>);
                } else {
                    return (<button class="unclickable-button lover"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano icon"/> {song.title} <em>(guest: {song.feature})</em></button>);
                }
            } else {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button lover"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar icon" /> {song.title}</button>);
                } else {
                    return (<button class="unclickable-button lover"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano icon"/> {song.title}</button>);
                }
            }
        } else if (song.album === "folklore") {
            if (song.feature != null) {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button folklore"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar icon" /> {song.title} <em>(guest: {song.feature})</em></button>);
                } else {
                    return (<button class="unclickable-button folklore"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano icon"/> {song.title} <em>(guest: {song.feature})</em></button>);
                }
            } else {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button folklore"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar icon" /> {song.title}</button>);
                } else {
                    return (<button class="unclickable-button folklore"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano icon"/> {song.title}</button>);
                }
            }
        } else if (song.album === "evermore") {
            if (song.feature != null) {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button evermore"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar icon" /> {song.title} <em>(guest: {song.feature})</em></button>);
                } else {
                    return (<button class="unclickable-button evermore"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano icon"/> {song.title} <em>(guest: {song.feature})</em></button>);
                }
            } else {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button evermore"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar icon" /> {song.title}</button>);
                } else {
                    return (<button class="unclickable-button evermore"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano icon"/> {song.title}</button>);
                }
            }
        } else if (song.album === "Midnights") {
            if (song.feature != null) {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button midnights"><img src={guitar_white} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="white guitar icon"/> {song.title} <em>(guest: {song.feature})</em></button>);
                } else {
                    return (<button class="unclickable-button midnights"><img src={piano_white} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="white piano icon"/> {song.title} <em>(guest: {song.feature})</em></button>);
                }
            } else {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button midnights"><img src={guitar_white} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="white guitar icon"/> {song.title}</button>);
                } else {
                    return (<button class="unclickable-button midnights"><img src={piano_white} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="white piano icon"/> {song.title}</button>);
                }
            }
        } else if (song.album === "The Tortured Poets Department") {
            if (song.feature != null) {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button ttpd"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar icon" /> {song.title} <em>(guest: {song.feature})</em></button>);
                } else {
                    return (<button class="unclickable-button ttpd"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano icon"/> {song.title} <em>(guest: {song.feature})</em></button>);
                }
            } else {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button ttpd"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar icon" /> {song.title}</button>);
                } else {
                    return (<button class="unclickable-button ttpd"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano icon"/> {song.title}</button>);
                }
            }
        } else {
            if (song.feature != null) {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button other"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar icon" /> {song.title} <em>(guest: {song.feature})</em></button>);
                } else {
                    return (<button class="unclickable-button other"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano icon"/> {song.title} <em>(guest: {song.feature})</em></button>);
                }
            } else {
                if (song.instrument === "Guitar") {
                    return (<button class="unclickable-button other"><img src={guitar_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black guitar icon" /> {song.title}</button>);
                } else {
                    return (<button class="unclickable-button other"><img src={piano_black} style={{ width: '20px', height: '20px', objectFit: 'cover' }} alt="black piano icon"/> {song.title}</button>);
                }
            }
        }
    }

    const allEvents = surpriseSongs.map((el) => (
        <div>
            <div className="row">
                <div className="col" style={{ textAlign: 'right' }}>
                    <p className="lead title">{el.city} N{el.night}</p>
                    <p>{el.date}</p>
                </div>
                <div className="col">
                    {el.songs.map((el) => (
                        <div style={{ paddingBottom: '5px' }}>
                            {songPart(el)}
                        </div>
                    ))}
                </div>
            </div>
            <hr className="featurette-divider" />
        </div>
    ));

    const makeMenu = () => {
        if (showNewFirst) {
            return (
                <div>
                    <button className="btn btn-outline-secondary" style={{ textAlign: 'center', margin: '10px' }} onClick={() => setShowNewFirst(false)}>Ascending</button>
                    <button className="btn btn-primary" style={{ textAlign: 'center', margin: '10px' }} onClick={() => setShowNewFirst(true)}>Descending</button>
                </div>
            );
        } else {
            return (
                <div>
                    <button className="btn btn-primary" style={{ textAlign: 'center', margin: '10px' }} onClick={() => setShowNewFirst(false)}>Ascending</button>
                    <button className="btn btn-outline-secondary" style={{ textAlign: 'center', margin: '10px' }} onClick={() => setShowNewFirst(true)}>Descending</button>
                </div>
            );
        }
    }

    return (
        <div>
            <div className="container">
                <h1 className="page-title">Surprise Songs</h1>
                <hr className="featurette-divider" />
                <div style={{ textAlign: "center" }}>
                    {makeMenu()}
                </div>
                <hr className="featurette-divider" />
                {allEvents}
            </div>
        </div>
    );
}

export default SurpriseSongs;