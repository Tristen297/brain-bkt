import PhoneNumber from "./phone-number";
import PhoneIcon from '../images-and-icons/phone-icon.png';

function CallUs() {
  return (
    <div className="call-us-content">
      <div className="call-us-text">
        <span className="">Call Us Today To Get Started On Your Project </span>
        <PhoneNumber />
      </div>
      <img src={PhoneIcon} alt='Phone icon' className='phone-icon' />
    </div>
  );
}

export default CallUs;
