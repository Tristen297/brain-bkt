import './styles/home.css';
import HomeHero from "./components/home-hero";
import HomeServices from './components/home-services.js';

function Home() {
    return(
        <div className="home-content">
            <HomeHero />
            <HomeServices />
        </div>
    );
}

export default Home;