import ServiceBar from "./home-service-bar";
import serviceImage1 from '../images-and-icons/fleet-wrapped-vans.jpg';
import serviceImage2 from '../images-and-icons/writing-with-pen.jpg';
import serviceImage3 from '../images-and-icons/wrapped-car.jpg';
import serviceImage4 from '../images-and-icons/wall-mural.jpg';

function HomeServices() {
    return(
        <div className="home-services-content">
            <ServiceBar image={serviceImage1} title="Fleet Wraps" />
            <ServiceBar image={serviceImage2} title="Custom Graphics" />
            <ServiceBar image={serviceImage3} title="Branding" />
            <ServiceBar image={serviceImage4} title="Wall Murals" />
        </div>
    );
}

export default HomeServices;