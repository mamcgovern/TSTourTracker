import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import mainSetData from './data/mainSet.json';
import oldMainSetData from './data/mainSetOld.json';

const MainSet = () => {
    const [showOldSet, setShowOldSet] = useState(false);
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
        </div>
    )
}

export default MainSet;