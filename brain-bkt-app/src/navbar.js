import logoPlaceholder from './logo-placeholder.png';

function Navbar() {
    // need to update the href's for the nav links.
    return (
        <nav className='navbar'>
            <div className='nav-logo'>
                <a href='/'>
                    <img src={logoPlaceholder} alt='Company logo' className='logo' />
                </a>
            </div>
            <div className='nav-links'>
                <a href='/'>Home</a>
                <a href='/'>Services</a>
                <a href='/'>About Us</a>
                <a href='/'>Our Work</a>
                <a href='/'>Contact Us</a>
            </div>
        </nav>
    );
}

export default Navbar;