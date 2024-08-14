import CallUs from "./components/footer-call-us";
import CompInfo from "./components/footer-comp-info.js";
import "./styles/footer.css"

function Footer() {
    return(
        <div className="footer-content">
            <CallUs />
            <CompInfo />
        </div>
    );
}

export default Footer;