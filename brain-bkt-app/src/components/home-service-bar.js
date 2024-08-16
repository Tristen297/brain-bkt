import '../styles/home.css';

function ServiceBar({image, title}) {
    return(
        <div className="service-bar">
            <div className="service-image" style={{backgroundImage : `url(${image})`}}></div>
            <div className="service-text">
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default ServiceBar;