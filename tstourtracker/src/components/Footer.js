import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Footer = () => {
    return (
        <div style={{ paddingTop: '100px' }}>
            <footer class="container">
                <p class="col-md-4 mb-0 text-body-secondary"><a class="nav-link px-2 text-body-secondary" href="#/about">&copy; 2024 TS Tour Tracker</a></p>
            </footer>
        </div>
    );
}

export default Footer;