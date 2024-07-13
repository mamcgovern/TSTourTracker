import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import discographyData from '../data/discography.json'

const Discography = () => {
    const discography2023 = discographyData.discography2023;
    const discography2024 = discographyData.discography2024;
    const [showOldDiscography, setShowOldDiscography] = useState(false);

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
            <div class="container">
                <h1 class="page-title">Discography</h1>
                <hr class="featurette-divider" />
                <div style={{ textAlign: "center" }}>
                    {makeMenu()}
                </div>
                {makeDiscography()}
            </div>
        </div>
    )
}

export default Discography;