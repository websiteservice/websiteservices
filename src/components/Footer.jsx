import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section brand">
        <h3>Elisa's Website Services</h3>
        <p>Professional website design and hosting.</p>
      </div>

      <div className="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/NailsWebsiteRepo/">Home</a></li>
          <li><a href="/NailsWebsiteRepo/bookings">Bookings</a></li>
          <li><a href="/NailsWebsiteRepo/pricing">Pricing</a></li>
          <li><a href="/NailsWebsiteRepo/location">Location</a></li>
          <li><a href="/NailsWebsiteRepo/contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section social">
        <h3>Connect</h3>
        <p>Follow on Instagram:</p>
        <a 
          href="https://instagram.com/elisasnails" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          @elisa._.kiwi
        </a>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Elisa's Website Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
