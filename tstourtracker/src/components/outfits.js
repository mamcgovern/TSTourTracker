import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Select from 'react-select';

import outfitsData from '../data/outfits.json';

import loverBodysuit_blueAndGold from '../images/outfits/lover-bodysuit/blue-and-gold.png';
import loverBodysuit_orange from '../images/outfits/lover-bodysuit/orange.png';
import loverBodysuit_pink from '../images/outfits/lover-bodysuit/pink.png';
import loverBodysuit_pinkAndBlue from '../images/outfits/lover-bodysuit/pink-and-blue.png';
import loverBodysuit_tassels from '../images/outfits/lover-bodysuit/tassels.png';

import loverJacket_black from '../images/outfits/lover-jacket/black.png';
import loverJacket_blue from '../images/outfits/lover-jacket/blue.jpeg';
import loverJacket_orange from '../images/outfits/lover-jacket/orange.png';
import loverJacket_pink from '../images/outfits/lover-jacket/pink.png';
import loverJacket_silver from '../images/outfits/lover-jacket/silver.png';

import loverGuitar_pink from '../images/outfits/lover-guitar/pink.jpeg';
import loverGuitar_blue from '../images/outfits/lover-guitar/blue.jpeg';
import loverGuitar_purple from '../images/outfits/lover-guitar/purple.png';

import fearless_goldNoodle from '../images/outfits/fearless-dress/gold-noodle.png';
import fearless_blue from '../images/outfits/fearless-dress/blue.jpeg';
import fearless_silverNoodle from '../images/outfits/fearless-dress/silver-noodle.webp';
import fearless_goldShort from '../images/outfits/fearless-dress/gold-short.png';
import fearless_silverShort from '../images/outfits/fearless-dress/silver-and-black.png';
import fearless_tiger from '../images/outfits/fearless-dress/tiger.jpeg';

import bottoms1989_blue from '../images/outfits/1989-bottom/blue.png';
import bottoms1989_orange from '../images/outfits/1989-bottom/orange.png';
import bottoms1989_pink from '../images/outfits/1989-bottom/pink.png';
import bottoms1989_purple from '../images/outfits/1989-bottom/purple.png';
import bottoms1989_yellow from '../images/outfits/1989-bottom/yellow.png';
import bottoms1989_green from '../images/outfits/1989-bottom/green.png';

import top1989_blue from '../images/outfits/1989-top/blue.jpeg';
import top1989_orange from '../images/outfits/1989-top/orange.png';
import top1989_pink from '../images/outfits/1989-top/pink.png';
import top1989_purple from '../images/outfits/1989-top/purple.png';
import top1989_yellow from '../images/outfits/1989-top/yellow.png';
import top1989_green from '../images/outfits/1989-top/green.png';

import set1989_orange from '../images/outfits/1989-set/orange.png';
import set1989_blue from '../images/outfits/1989-set/blue.webp';
import set1989_green from '../images/outfits/1989-set/green.webp';
import set1989_pink from '../images/outfits/1989-set/pink.png';

import evermore_orange from '../images/outfits/evermore-dress/orange.webp';
import evermore_bronze from '../images/outfits/evermore-dress/bronze.png';

import folklore_blue from '../images/outfits/folklore-dress/blue.png';
import folklore_green from '../images/outfits/folklore-dress/green.png';
import folklore_hotPink from '../images/outfits/folklore-dress/hot-pink.png';
import folklore_pink from '../images/outfits/folklore-dress/pink.png';
import folklore_purple from '../images/outfits/folklore-dress/purple.png';
import folklore_white from '../images/outfits/folklore-dress/white.png';
import folklore_yellow from '../images/outfits/folklore-dress/yellow.png';

import midnightsBodysuit_abs from '../images/outfits/midnights-bodysuit/abs.png';
import midnightsBodysuit_lines from '../images/outfits/midnights-bodysuit/lines.png';
import midnightsBodysuit_scallops from '../images/outfits/midnights-bodysuit/scallops.png';
import midnightsBodysuit_sidepods from '../images/outfits/midnights-bodysuit/sidepods.png';
import midnightsBodysuit_moonstone from '../images/outfits/midnights-bodysuit/moonstone.jpeg'

import midnightsJacket_blue from '../images/outfits/midnights-jacket/blue.png';
import midnightsJacket_lightPink from '../images/outfits/midnights-jacket/light-pink.png';
import midnightsJacket_magenta from '../images/outfits/midnights-jacket/magenta.png';
import midnightsJacket_multicolor from '../images/outfits/midnights-jacket/multicolor.png';

import midnightsShirt_blue from '../images/outfits/midnights-shirt/blue.png';
import midnightsShirt_darkPurple from '../images/outfits/midnights-shirt/dark-purple.jpeg';
import midnightsShirt_iridescent from '../images/outfits/midnights-shirt/iridescent.png';
import midnightsShirt_pink from '../images/outfits/midnights-shirt/pink.png';
import midnightsShirt_purple from '../images/outfits/midnights-shirt/purple.png';
import midnightsShirt_silver from '../images/outfits/midnights-shirt/silver.png';
import midnightsShirt_purplesequin from '../images/outfits/midnights-shirt/purplesequin.png';
import midnightsShirt_icysilver from '../images/outfits/midnights-shirt/IcySilver.jpeg';

import redShirt_aLot from '../images/outfits/red-shirt/a-lot.png';
import redShirt_aboutMe from '../images/outfits/red-shirt/about-me.png';
import redShirt_ew from '../images/outfits/red-shirt/ew.png';
import redShirt_neverEver from '../images/outfits/red-shirt/never-ever.png';
import redShirt_notTV from '../images/outfits/red-shirt/not-tv.png';
import redShirt_trouble from '../images/outfits/red-shirt/trouble.png';

import reputationJumpsuit from '../images/outfits/reputation-jumpsuit/red-and-black.webp';
import reputationJumpsuit_gold from '../images/outfits/reputation-jumpsuit/gold.jpeg';

import speakNow_blue from '../images/outfits/speak-now-gown/blue.webp';
import speakNow_champagne from '../images/outfits/speak-now-gown/champagne.png';
import speakNow_flowers from '../images/outfits/speak-now-gown/flowers.webp';
import speakNow_pink from '../images/outfits/speak-now-gown/pink.png';
import speakNow_purple from '../images/outfits/speak-now-gown/purple.png';
import speakNow_swirls from '../images/outfits/speak-now-gown/swirls.png';
import speakNow_white from '../images/outfits/speak-now-gown/white.webp';
import speakNow_purpleWaves from '../images/outfits/speak-now-gown/purpleWaves.jpeg';
import speakNow_elsa from '../images/outfits/speak-now-gown/Elsa.jpeg';

import surpriseSong_blue from '../images/outfits/surprise-song-dress/blue.webp';
import surpriseSong_pink from '../images/outfits/surprise-song-dress/pink.png';
import surpriseSong_orange from '../images/outfits/surprise-song-dress/orange.webp';
import surpriseSong_redblue from '../images/outfits/surprise-song-dress/redblue.png';
import surpriseSong_supernova from '../images/outfits/surprise-song-dress/Supernova.jpeg';
import surpriseSong_sunrise from '../images/outfits/surprise-song-dress/sunrise.jpeg';

import ttpdDress_ruining from '../images/outfits/ttpd-dress/Ruiningmylife.png';
import ttpdDress_shouldbe from '../images/outfits/ttpd-dress/Youshouldbe.jpeg';

import ttpdMarchingBandJacket from '../images/outfits/ttpd-marching-band-jacket/white.webp';

import ttpdJacket_gold from '../images/outfits/ttpd-jacket/gold.png';
import ttpdJacket_silver from '../images/outfits/ttpd-jacket/silver.png';
import ttpdJacket_whiteWithBlack from '../images/outfits/ttpd-jacket/white-with-black.png';
import ttpdJacket_white from '../images/outfits/ttpd-jacket/white.png';

import ttpdTwoPiece_black from '../images/outfits/ttpd-two-piece/black.png';
import ttpdTwoPiece_gold from '../images/outfits/ttpd-two-piece/gold-and-black.png';
import ttpdTwoPiece_silver from '../images/outfits/ttpd-two-piece/silver.png';
import ttpdTwoPiece_white from '../images/outfits/ttpd-two-piece/white.png';

const Outfits = () => {
    const shows = outfitsData.shows;
    const oldShows = outfitsData.shows1;
    const [showOldOutfits, setShowOldOutfits] = useState(false);
    const options = [
        { value: 'colors', label: 'Colors' },
        { value: 'photos', label: 'Photos' }
    ];
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const createLoverBodysuit = (item) => {
        if (selectedOption.value === "colors") {
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
                        <img src={loverBodysuit_pinkAndBlue} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her pink and blue lover bodysuit."></img>
                    </td>
                );
            } else if (item.outfits.loverBodysuit === "Blue & Gold") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#f9d040", backgroundColor: "#4689ff" }}>
                        <img src={loverBodysuit_blueAndGold} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her blue and gold lover bodysuit."></img>
                    </td>
                );
            } else if (item.outfits.loverBodysuit === "Tassels") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#5a3286", backgroundColor: "#e6cff2" }}>
                        <img src={loverBodysuit_tassels} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her purple lover bodysuit with tassels."></img>
                    </td>
                );
            } else if (item.outfits.loverBodysuit === "Pink") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#f6c1d6", backgroundColor: "#c91c50" }}>
                        <img src={loverBodysuit_pink} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her pink lover bodysuit."></img>
                    </td>
                );
            }
            else if (item.outfits.loverBodysuit === "Orange & Pink") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ff0054", backgroundColor: "#FFA647" }}>
                        <img src={loverBodysuit_orange} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her orange and pink lover bodysuit."></img>
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
        if (selectedOption.value === "colors") {
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
                        <img src={loverJacket_silver} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her silver jacket."></img>
                    </td>
                );
            } else if (item.outfits.theManJacket === "Black") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#e5e5e5", backgroundColor: "#000000" }}>
                        <img src={loverJacket_black} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her black jacket"></img>
                    </td>
                );
            } else if (item.outfits.theManJacket === "Blue") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#4c42c7" }}>
                        <img src={loverJacket_blue} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her dark blue jacket"></img>
                    </td>
                );
            } else if (item.outfits.theManJacket === "Pink") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffc0d5", backgroundColor: "#f13a96" }}>
                        <img src={loverJacket_pink} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her pink jacket"></img>
                    </td>
                );
            } else if (item.outfits.theManJacket === "Orange & Pink") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ff0054", backgroundColor: "#FFA647" }}>
                        <img src={loverJacket_orange} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her orange and pink jacket"></img>
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
        if (selectedOption.value === "colors") {
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
                        <img src={loverGuitar_pink} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage playing her pink guitar."></img>
                    </td>
                );
            } else if (item.outfits.loverGuitar === "Blue") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#4982db", backgroundColor: "#6bd1f7" }}>
                        <img src={loverGuitar_blue} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage playing her blue guitar."></img>
                    </td>
                );
            } else if (item.outfits.loverGuitar === "Purple") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#2a0134", backgroundColor: "#CEC0F0" }}>
                        <img src={loverGuitar_purple} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage playing her purple guitar."></img>
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
        if (selectedOption.value === "colors") {
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
            } else if (item.outfits.fearlessDress === "Tiger") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#fce598", backgroundColor: "#000000" }}>
                        {item.outfits.fearlessDress}
                    </td>
                )
            } else if (item.outfits.fearlessDress === "Blue") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#5E7CAA", backgroundColor: "#EEF7FF" }}>
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
                        <img src={fearless_goldShort} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her gold short fearless dress."></img>
                    </td>
                )
            } else if (item.outfits.fearlessDress === "Gold Noodle") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#f1c231" }}>
                        <img src={fearless_goldNoodle} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her long gold fearless dress."></img>
                    </td>
                )
            } else if (item.outfits.fearlessDress === "Silver Noodle") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#e6e6e6", backgroundColor: "#3d3d3d" }}>
                        <img src={fearless_silverNoodle} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her long silver fearless dress."></img>
                    </td>
                )
            } else if (item.outfits.fearlessDress === "Silver & Black Short Fringe") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#e6e6e6" }}>
                        <img src={fearless_silverShort} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her short silver and black fearless dress."></img>
                    </td>
                )
            } else if (item.outfits.fearlessDress === "Tiger") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#fce598", backgroundColor: "#000000" }}>
                        <img src={fearless_tiger} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her short gold and black tiger stripe fearless dress."></img>
                    </td>
                )
            } else if (item.outfits.fearlessDress === "Blue") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#5E7CAA", backgroundColor: "#EEF7FF" }}>
                        <img src={fearless_blue} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her icy blue fearless dress."></img>
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
        if (selectedOption.value === "colors") {
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
                        <img src={redShirt_neverEver} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her T-shirt for the Red Era. This is a white T-shirt with the words WE ARE NEVER EVER GETTING BACK TOGETHER in all black text, except the words NEVER and EVER are in red."></img>
                    </td>
                );
            } else if (item.outfits.redShirt === "Ew") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ff0000", backgroundColor: "#f0f0f0" }}>
                        <img src={redShirt_ew} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her T-shirt for the Red Era. This is a white T-shirt with the words WHO'S TAYLOR SWIFT ANYWAY EW in all black text, except the word EW is in red."></img>
                    </td>
                );
            } else if (item.outfits.redShirt === "A Lot") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffcfc9", backgroundColor: "#b10202" }}>
                        <img src={redShirt_aLot} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her T-shirt for the Red Era. This is a white T-shirt with the words A LOT GOING ON AT THE MOMENT in all black text, except the words A LOT are in red."></img>
                    </td>
                );
            } else if (item.outfits.redShirt === "Not TV") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#e6e6e6", backgroundColor: "#780000" }}>
                        <img src={redShirt_notTV} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her T-shirt for the Red Era. This is a white T-shirt with the words THIS IS NOT TAYLOR'S VERSION in all black text, except the words IS NOT are in red."></img>
                    </td>
                );
            } else if (item.outfits.redShirt === "About Me") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#780000", backgroundColor: "#e6e6e6" }}>
                        <img src={redShirt_aboutMe} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her T-shirt for the Red Era. This is a white T-shirt with the words I BET YOU THINK ABOUT ME in all black text, except the word ME is in red."></img>
                    </td>
                );
            } else if (item.outfits.redShirt === "Trouble") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#780000", backgroundColor: "#bbbbbb" }}>
                        <img src={redShirt_trouble} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her T-shirt for the Red Era. This is a white T-shirt with the words I KNEW YOU WERE TROUBLE in all black text, except the word TROUBLE is in red."></img>
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
        if (selectedOption.value === "colors") {
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
            }
            else if (item.outfits.speakNowDress === "Purple Waves") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#c884f2", backgroundColor: "#f9f1fe" }}>
                        {item.outfits.speakNowDress}
                    </td>
                );
            } else if (item.outfits.speakNowDress === "Elsa") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#65AAC6" }}>
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
                        <img src={speakNow_pink} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her pink gown for the Speak Now Era."></img>
                    </td>
                );
            } else if (item.outfits.speakNowDress === "Champagne (Everything Bagel)") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#c79e1e", backgroundColor: "#fdf1cb" }}>
                        <img src={speakNow_champagne} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her champagne gown for the Speak Now Era."></img>
                    </td>
                );
            } else if (item.outfits.speakNowDress === "Flowers") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#cccccc" }}>
                        <img src={speakNow_flowers} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her COLOR gown for the Speak Now Era."></img>
                    </td>
                );
            } else if (item.outfits.speakNowDress === "White/Silver") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#8f7dc4", backgroundColor: "#d9d2e9" }}>
                        <img src={speakNow_white} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her white and silver gown for the Speak Now Era."></img>
                    </td>
                );
            } else if (item.outfits.speakNowDress === "Purple (Cupcake)") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#f3dfff", backgroundColor: "#c884f2" }}>
                        <img src={speakNow_purple} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her purple tri-layered cupcake gown for the Speak Now Era."></img>
                    </td>
                );
            } else if (item.outfits.speakNowDress === "Blue") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#0a53a8", backgroundColor: "#bfe1f6" }}>
                        <img src={speakNow_blue} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her light blue halter-top sparkly gown for the Speak Now Era."></img>
                    </td>
                );
            } else if (item.outfits.speakNowDress === "White Swirls") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#aaaaaa", backgroundColor: "#ffffff" }}>
                        <img src={speakNow_swirls} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her white gown with sparkly swirl designs for the Speak Now Era."></img>
                    </td>
                );
            } else if (item.outfits.speakNowDress === "Purple Waves") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#c884f2", backgroundColor: "#f9f1fe" }}>
                        <img src={speakNow_purpleWaves} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her purple gown with sparkly wave designs for the Speak Now Era."></img>
                    </td>
                );
            } else if (item.outfits.speakNowDress === "Elsa") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#65AAC6" }}>
                        <img src={speakNow_elsa} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her blue sparkly gown for the Speak Now Era."></img>
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
        if (selectedOption.value === "colors") {
            if (item.outfits.reputationJumpsuit === "Red & Black") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ff0000", backgroundColor: "#000000" }}>
                        {item.outfits.reputationJumpsuit}
                    </td>
                );
            } else if (item.outfits.reputationJumpsuit === "Gold") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#CEA986", backgroundColor: "#000000" }}>
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
                        <img src={reputationJumpsuit} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her black bodysuit with red snakes for the Reputation Era."></img>
                    </td>
                );
            } else if (item.outfits.reputationJumpsuit === "Gold") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#CEA986", backgroundColor: "#000000" }}>
                        <img src={reputationJumpsuit_gold} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her black bodysuit with gold snakes for the Reputation Era."></img>
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
        if (selectedOption.value === "colors") {
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
                        <img src={folklore_purple} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her purple flowy dress the Folkmore Era."></img>
                    </td>
                );
            } else if (item.outfits.folkmoreDress === "White/Cream") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#c29408", backgroundColor: "#fef5db" }}>
                        <img src={folklore_white} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her white flowy dress the Folkmore Era."></img>
                    </td>
                );
            } else if (item.outfits.folkmoreDress === "Pink") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#a74f7a", backgroundColor: "#f7c1d9" }}>
                        <img src={folklore_pink} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her light pink flowy dress the Folkmore Era."></img>
                    </td>
                );
            } else if (item.outfits.folkmoreDress === "Green") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#38761d", backgroundColor: "#bae1ae" }}>
                        <img src={folklore_green} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her green flowy dress the Folkmore Era."></img>
                    </td>
                );
            } else if (item.outfits.folkmoreDress === "Blue") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#184e7f", backgroundColor: "#60cdff" }}>
                        <img src={folklore_blue} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her blue flowy dress the Folkmore Era."></img>
                    </td>
                );
            } else if (item.outfits.folkmoreDress === "Yellow") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#FEF1D7", backgroundColor: "#fcbf49" }}>
                        <img src={folklore_yellow} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her yellow flowy dress the Folkmore Era."></img>
                    </td>
                );
            } else if (item.outfits.folkmoreDress === "Hot Pink") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#fbc4e2", backgroundColor: "#ff0a54" }}>
                        <img src={folklore_hotPink} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her hot pink flowy dress the Folkmore Era."></img>
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
        if (selectedOption.value === "colors") {
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
                        <img src={folklore_purple} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her purple flowy dress the Folklore Era."></img>
                    </td>
                );
            } else if (item.outfits.folkloreDress === "White/Cream") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#c29408", backgroundColor: "#fef5db" }}>
                        <img src={folklore_white} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her cream flowy dress the Folklore Era."></img>
                    </td>
                );
            } else if (item.outfits.folkloreDress === "Pink") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#a74f7a", backgroundColor: "#f7c1d9" }}>
                        <img src={folklore_pink} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her light pink flowy dress the Folklore Era."></img>
                    </td>
                );
            } else if (item.outfits.folkloreDress === "Green") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#38761d", backgroundColor: "#bae1ae" }}>
                        <img src={folklore_green} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her green flowy dress the Folklore Era."></img>
                    </td>
                );
            } else if (item.outfits.folkloreDress === "Blue") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#184e7f", backgroundColor: "#60cdff" }}>
                        <img src={folklore_blue} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her blue flowy dress the Folklore Era."></img>
                    </td>
                );
            } else if (item.outfits.folkloreDress === "Yellow") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#FEF1D7", backgroundColor: "#fcbf49" }}>
                        <img src={folklore_yellow} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her yellow flowy dress the Folklore Era."></img>
                    </td>
                );
            } else if (item.outfits.folkloreDress === "Hot Pink") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#fbc4e2", backgroundColor: "#ff0a54" }}>
                        <img src={folklore_hotPink} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her hot pink flowy dress the Folklore Era."></img>
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
        if (selectedOption.value === "colors") {
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
                        <img src={evermore_orange} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her orange dress with flower designs the Evermore Era."></img>
                    </td>
                );
            } else if (item.outfits.evermoreDress === "Bronze") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#700b0a", backgroundColor: "#c8624e" }}>
                        <img src={evermore_bronze} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her bronze dress the Evermore Era."></img>
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
        if (selectedOption.value === "colors") {
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
                        <img src={set1989_green} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her green two-piece for the 1989 Era."></img>
                    </td>
                );
            } else if (item.outfits.combo1989 === "Yellow/Orange") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#fbfcb0", backgroundColor: "#f89324" }}>
                        <img src={set1989_orange} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her orange two-piece for the 1989 Era."></img>
                    </td>
                );
            } else if (item.outfits.combo1989 === "Pink") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#fbc4e2", backgroundColor: "#f655a7" }}>
                        <img src={set1989_pink} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her pink two-piece for the 1989 Era."></img>
                    </td>
                );
            } else if (item.outfits.combo1989 === "Blue") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#d7f3ff", backgroundColor: "#60cdff" }}>
                        <img src={set1989_blue} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her blue two-piece for the 1989 Era."></img>
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
        if (selectedOption.value === "colors") {
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
                        <img src={top1989_pink} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her pink top for the 1989 Era."></img>
                    </td>
                );
            } else if (item.outfits.top1989 === "Red") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#e21837" }}>
                        <img src={top1989_orange} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her orange and red ombre top for the 1989 Era."></img>
                    </td>
                );
            } else if (item.outfits.top1989 === "Yellow") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#FCBE48" }}>
                        <img src={top1989_yellow} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her yellow top for the 1989 Era."></img>
                    </td>
                );
            } else if (item.outfits.top1989 === "Green") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#38761D" }}>
                        <img src={top1989_green} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her green top for the 1989 Era."></img>
                    </td>
                );
            } else if (item.outfits.top1989 === "Blue") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#35D2F1" }}>
                        <img src={top1989_blue} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her blue top for the 1989 Era."></img>
                    </td>
                );
            } else if (item.outfits.top1989 === "Purple") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#8D68B3" }}>
                        <img src={top1989_purple} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her purple top for the 1989 Era."></img>
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
        if (selectedOption.value === "colors") {
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
                        <img src={bottoms1989_pink} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her pink skirt for the 1989 Era."></img>
                    </td>
                );
            } else if (item.outfits.bottoms1989 === "Red") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#e21837" }}>
                        <img src={bottoms1989_orange} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her orange and red ombre skirt for the 1989 Era."></img>
                    </td>
                );
            } else if (item.outfits.bottoms1989 === "Yellow") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#FCBE48" }}>
                        <img src={bottoms1989_yellow} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her yellow skirt for the 1989 Era."></img>
                    </td>
                );
            } else if (item.outfits.bottoms1989 === "Green") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#38761D" }}>
                        <img src={bottoms1989_green} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her green skirt for the 1989 Era."></img>
                    </td>
                );
            } else if (item.outfits.bottoms1989 === "Blue") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#35D2F1" }}>
                        <img src={bottoms1989_blue} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her blue skirt for the 1989 Era."></img>
                    </td>
                );
            } else if (item.outfits.bottoms1989 === "Purple") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#8D68B3" }}>
                        <img src={bottoms1989_purple} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her purple skirt for the 1989 Era."></img>
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
        if (selectedOption.value === "colors") {
            if (item.outfits.ttpdDress === "Ruining my life") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#888888", backgroundColor: "#ffffff" }}>
                        {item.outfits.ttpdDress}
                    </td>
                );
            } if (item.outfits.ttpdDress === "You should be") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#888888" }}>
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
            if (item.outfits.ttpdDress === "Ruining my life") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#888888", backgroundColor: "#ffffff" }}>
                        <img src={ttpdDress_ruining} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her white dress with small text that says I love you its ruining my life for the TTPD Era."></img>
                    </td>
                );
            } if (item.outfits.ttpdDress === "You should be") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#888888" }}>
                        <img src={ttpdDress_shouldbe} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her white dress with small text that says Who's afraid of little old me? You should be for the TTPD Era."></img>
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
        if (selectedOption.value === "colors") {
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
                        <img src={ttpdMarchingBandJacket} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing her white marching band jacket for the TTPD Era."></img>
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
        if (selectedOption.value === "colors") {
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
                        <img src={ttpdTwoPiece_black} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a black bralette and black bottoms for the TTPD Era."></img>
                    </td>
                );
            } else if (item.outfits.ttpdTwoPiece === "White") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#888888", backgroundColor: "#ffffff" }}>
                        <img src={ttpdTwoPiece_white} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a white bralette and white bottoms for the TTPD Era."></img>
                    </td>
                );
            } else if (item.outfits.ttpdTwoPiece === "Silver") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#CCCCCC" }}>
                        <img src={ttpdTwoPiece_silver} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a dark gray bralette and dark gray bottoms for the TTPD Era."></img>
                    </td>
                );
            }
            else if (item.outfits.ttpdTwoPiece === "Gold & Black") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#F1CB41" }}>
                        <img src={ttpdTwoPiece_gold} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a gold bralette and black bottoms for the TTPD Era."></img>
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
        if (selectedOption.value === "colors") {
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
                        <img src={ttpdJacket_gold} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a gold jacket for the TTPD Era."></img>
                    </td>
                );
            } else if (item.outfits.ttpdJacket === "White") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#888888", backgroundColor: "#ffffff" }}>
                        <img src={ttpdJacket_white} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a white jacket with silver glitter for the TTPD Era."></img>
                    </td>
                );
            } else if (item.outfits.ttpdJacket === "Silver") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#FFFFFF", backgroundColor: "#CCCCCC" }}>
                        <img src={ttpdJacket_silver} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a silver jacket for the TTPD Era."></img>
                    </td>
                );
            } else if (item.outfits.ttpdJacket === "White with Black") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#ffffff" }}>
                        <img src={ttpdJacket_whiteWithBlack} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a white jacket with black glitter for the TTPD Era."></img>
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
        if (selectedOption.value === "colors") {
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
            } else if (item.outfits.midnightsShirt === "Purple Sequin") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#7C3AC6", backgroundColor: "#EAC9F6" }}>
                        {item.outfits.midnightsShirt}
                    </td>
                );
            } else if (item.outfits.midnightsShirt === "Icy Silver") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#ACACB7" }}>
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
                        <img src={midnightsShirt_pink} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a pink glittery shirt dress for the Midnights Era."></img>
                    </td>
                );
            } else if (item.outfits.midnightsShirt === "Purple") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#e1d5ff", backgroundColor: "#b595ff" }}>
                        <img src={midnightsShirt_purple} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a purple glittery shirt dress for the Midnights Era."></img>
                    </td>
                );
            } else if (item.outfits.midnightsShirt === "Silver Sequin") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#999999", backgroundColor: "#efefef" }}>
                        <img src={midnightsShirt_silver} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a silver sequin shirt dress for the Midnights Era."></img>
                    </td>
                );
            } else if (item.outfits.midnightsShirt === "Iridescent") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#72359c", backgroundColor: "#a4c6ff" }}>
                        <img src={midnightsShirt_iridescent} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing an iridescent glittery shirt dress for the Midnights Era."></img>
                    </td>
                );
            } else if (item.outfits.midnightsShirt === "Dark Purple") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#d9d2e9", backgroundColor: "#6105a2" }}>
                        <img src={midnightsShirt_darkPurple} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a dark purple glittery shirt dress for the Midnights Era."></img>
                    </td>
                );
            } else if (item.outfits.midnightsShirt === "Blue") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#b1dfff", backgroundColor: "#369df7" }}>
                        <img src={midnightsShirt_blue} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a blue glittery shirt dress for the Midnights Era."></img>
                    </td>
                );
            } else if (item.outfits.midnightsShirt === "Purple Sequin") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#7C3AC6", backgroundColor: "#EAC9F6" }}>
                        <img src={midnightsShirt_purplesequin} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a purple sequin shirt dress for the Midnights Era."></img>
                    </td>
                );
            }else if (item.outfits.midnightsShirt === "Icy Silver") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#000000", backgroundColor: "#ACACB7" }}>
                        <img src={midnightsShirt_icysilver} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing an icy silver sequin shirt dress for the Midnights Era."></img>
                    </td>
                );
            } 
             else {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px" }}>
                        {item.outfits.midnightsShirt}
                    </td>
                );
            }
        }

    }
    const createMidnightsBodysuit = (item) => {
        if (selectedOption.value === "colors") {
            if (item.outfits.midnightsBodysuit === "Scallops") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#d0e2f3", backgroundColor: "#2a48ef" }}>
                        {item.outfits.midnightsBodysuit}
                    </td>
                );
            } else if (item.outfits.midnightsBodysuit === "Lines") {
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
            } else if (item.outfits.midnightsBodysuit === "Moonstone") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#D6CEE1", backgroundColor: "#245E86" }}>
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
                        <img src={midnightsBodysuit_scallops} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a dark blue scallop designed bodysuit for the Midnights Era."></img>
                    </td>
                );
            } else if (item.outfits.midnightsBodysuit === "Chevron") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#b7cbed", backgroundColor: "#163f84" }}>
                        <img src={midnightsBodysuit_lines} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a dark blue chevron designed bodysuit for the Midnights Era."></img>
                    </td>
                );
            } else if (item.outfits.midnightsBodysuit === "Abs") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#d0e2f3", backgroundColor: "#655bcf" }}>
                        <img src={midnightsBodysuit_abs} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a dark blue bodysuit with abs-shaped cutouts for the Midnights Era."></img>
                    </td>
                );
            } else if (item.outfits.midnightsBodysuit === "Sidepods") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#655bcf", backgroundColor: "#d0e2f3" }}>
                        <img src={midnightsBodysuit_sidepods} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a dark blue bodysuit with cutouts on the sides for the Midnights Era."></img>
                    </td>
                );
            } else if (item.outfits.midnightsBodysuit === "Moonstone") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#D6CEE1", backgroundColor: "#245E86" }}>
                        <img src={midnightsBodysuit_moonstone} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a dark blue moon and stars designed bodysuit for the Midnights Era."></img>
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
        if (selectedOption.value === "colors") {
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
                        <img src={midnightsJacket_lightPink} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a light pink jacket for the Midnights Era."></img>
                    </td>
                );
            } else if (item.outfits.midnightsJacket === "Multicolor") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#70b6f7", backgroundColor: "#8644b1" }}>
                        <img src={midnightsJacket_multicolor} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a multicolor jacket for the Midnights Era."></img>
                    </td>
                );
            } else if (item.outfits.midnightsJacket === "Magenta") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#f5cbcb", backgroundColor: "#ca1c50" }}>
                        <img src={midnightsJacket_magenta} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a magenta jacket for the Midnights Era."></img>
                    </td>
                );
            } else if (item.outfits.midnightsJacket === "Blue") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#c6d8f4", backgroundColor: "#2008ff" }}>
                        <img src={midnightsJacket_blue} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a dark blue jacket for the Midnights Era."></img>
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
        if (selectedOption.value === "colors") {
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
            } else if (item.outfits.surpriseSongDress === "Betta Fish") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#CFE1F3", backgroundColor: "#F30050" }}>
                        {item.outfits.surpriseSongDress}
                    </td>
                );
            } else if (item.outfits.surpriseSongDress === "Supernova") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#3119D6" }}>
                        {item.outfits.surpriseSongDress}
                    </td>
                );
            } else if (item.outfits.surpriseSongDress === "Sunrise") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#F30050", backgroundColor: "#FEA647" }}>
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
                        <img src={surpriseSong_pink} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a pink dress for the Surprise Songs."></img>
                    </td>
                );
            } else if (item.outfits.surpriseSongDress === "Blue") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#bde0fe", backgroundColor: "#57A0CD" }}>
                        <img src={surpriseSong_blue} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a blue dress for the Surprise Songs."></img>
                    </td>
                );
            } else if (item.outfits.surpriseSongDress === "Orange") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffd670", backgroundColor: "#fb8500" }}>
                        <img src={surpriseSong_orange} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing an orange dress for the Surprise Songs."></img>
                    </td>
                );
            } else if (item.outfits.surpriseSongDress === "Betta Fish") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#CFE1F3", backgroundColor: "#F30050" }}>
                        <img src={surpriseSong_redblue} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a read and blue dress for the Surprise Songs."></img>
                    </td>
                );
            } else if (item.outfits.surpriseSongDress === "Supernova") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#ffffff", backgroundColor: "#3119D6" }}>
                        <img src={surpriseSong_supernova} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a blue and purple dress for the Surprise Songs."></img>
                    </td>
                );
            } else if (item.outfits.surpriseSongDress === "Sunrise") {
                return (
                    <td style={{ borderBottom: "1px solid gray", minWidth: "100px", border: "1px solid gray", padding: "10px", color: "#F30050", backgroundColor: "#FEA647" }}>
                        <img src={surpriseSong_sunrise} style={{ maxWidth: '100px' }} alt="Taylor Swift on stage wearing a pink and orange dress for the Surprise Songs."></img>
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
                <div class="container-container">
                    <div class="scrollable-container">
                        <div class="content" id="outfits">
                            {createTable()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Outfits;