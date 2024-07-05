import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import pinkpink from '../images/1989outfits/pinkpink.png'
import pinkred from '../images/1989outfits/pinkred.png'
import pinkyellow from '../images/1989outfits/pinkyellow.png'
import pinkgreen from '../images/1989outfits/pinkgreen.png'
import pinkblue from '../images/1989outfits/pinkblue.png'
import pinkpurple from '../images/1989outfits/pinkpurple.png'

import redpink from '../images/1989outfits/redpink.png'
import redred from '../images/1989outfits/redred.png'
import redyellow from '../images/1989outfits/redyellow.png'
import redgreen from '../images/1989outfits/redgreen.png'
import redblue from '../images/1989outfits/redblue.png'
import redpurple from '../images/1989outfits/redpurple.png'

import yellowpink from '../images/1989outfits/yellowpink.png'
import yellowred from '../images/1989outfits/yellowred.png'
import yellowyellow from '../images/1989outfits/yellowyellow.png'
import yellowgreen from '../images/1989outfits/yellowgreen.png'
import yellowblue from '../images/1989outfits/yellowblue.png'
import yellowpurple from '../images/1989outfits/yellowpurple.png'

import greenpink from '../images/1989outfits/greenpink.png'
import greenred from '../images/1989outfits/greenred.png'
import greenyellow from '../images/1989outfits/greenyellow.png'
import greengreen from '../images/1989outfits/greengreen.png'
import greenblue from '../images/1989outfits/greenblue.png'
import greenpurple from '../images/1989outfits/greenpurple.png'

import bluepink from '../images/1989outfits/bluepink.png'
import bluered from '../images/1989outfits/bluered.png'
import blueyellow from '../images/1989outfits/blueyellow.png'
import bluegreen from '../images/1989outfits/bluegreen.png'
import blueblue from '../images/1989outfits/blueblue.png'
import bluepurple from '../images/1989outfits/bluepurple.png'

import purplepink from '../images/1989outfits/purplepink.png'
import purplered from '../images/1989outfits/purplered.png'
import purpleyellow from '../images/1989outfits/purpleyellow.png'
import purplegreen from '../images/1989outfits/purplegreen.png'
import purpleblue from '../images/1989outfits/purpleblue.png'
import purplepurple from '../images/1989outfits/purplepurple.png'

const Combo1989 = () => {
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
        </div>
    );
}

export default Combo1989;