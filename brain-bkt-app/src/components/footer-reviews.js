import FacebookIcon from "../images-and-icons/facebook-icon-black.png";
import ReviewStar from "../images-and-icons/review-star-icon.png";

//TODO add href links to relevent sources on both the review stars and facebook icon

function FooterReviews() {
    return(
        <div className="footer-reviews-content">
            <div className="footer-facebook">
                <h1 className="facebook-text">
                    Follow Us On Facebook 
                </h1>
                <a href="">
                    <img src={FacebookIcon} alt="facebook Icon" className="facebook-icon" />
                </a>
            </div>
            <div className="footer-review-text">
                <h1>Trusted local company with hundreds of happy customers and 4.8 stars on google</h1>
            </div>
            <div className="footer-review-star-icons">
                <a href="">
                    <img src={ReviewStar} />
                    <img src={ReviewStar} />
                    <img src={ReviewStar} />
                    <img src={ReviewStar} />
                    <img src={ReviewStar} />
                </a>
            </div>
        </div>
    );
}

export default FooterReviews;