import './Contact.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Title from './components/Title';

function Contact() {
  return (
    <>
      <Header />

      <main className="contact-container">
        <Title titleName="Contact" />

        <p className="contact-subtitle">
          If you'd like to get started with website services or if you have questions, please get in touch via the details below.
        </p>

        <div className="contact-details">
          <p><strong>Email:</strong> elisasbusinessemail@gmail.com</p>
          {/* <p><strong>Instagram:</strong>
            <a 
              href="https://instagram.com/elisasnails" 
              target="_blank" 
              rel="noopener noreferrer"
              className="insta-link"
            >
              @elisa._.kiwi
            </a>
          </p> */}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
