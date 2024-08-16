import './styles/home.css';
import HomeHero from "./components/home-hero";
import HomeServices from './components/home-services.js';
import OurWorkParallax from './components/home-our-work-parallax.js';
import ImageCarousel from './components/home-image-carousel.js'

function Home() {
    return(
        <div className="home-content">
            <HomeHero />
            <HomeServices />
            <OurWorkParallax />
            <ImageCarousel />
        </div>
    );
}

export default Home;