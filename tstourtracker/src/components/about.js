import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import willowPic from '../images/Willow.jpeg';

const About = () => {
    const isSmallScreen = window.innerWidth <= 800;

    if (isSmallScreen) {
        return (
            <div>
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
            </div >
        );
    } else {
        return (
            <div>
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
            </div>
        );
    }
}

export default About;