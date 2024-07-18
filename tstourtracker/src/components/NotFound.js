import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import brokenRobot from '../images/broken-robot.png';

const About = () => {
    return (
        <div>
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
                            <p>Click <a class="button-like-text" style={{ color: '#177e89' }} href="/">here</a> to go back home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;