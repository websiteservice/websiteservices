import './Homepage.css';
import PhotoCarousel from './components/PhotoCarousel';
import Header from './components/Header';
import Footer from './components/Footer';
// import vanessaImg from './assets/vanessa.jpeg';



function Homepage() {
  return (
    <>
      <Header />

      <main className="homepage-content">
        <h1 className="Heading">Website Services</h1>

        <section className="intro">
          {/* <img src={vanessaImg} className="headshotImg" alt="Vanessa" /> */}

          <div className="bio">
            <h2 className="name">Hi, I&apos;m Elisa!</h2>
            <p className="description">
            
            I'm a university student who is currently completing my bachelors degree, specializing in web development, user experience, and design systems. 
            Through my studies, I’ve taken a range of practical, industry-focused courses including Advanced Web Development, UX Design, Mobile Computing, Software Engineering, 
            and Design Systems. These have given me a strong foundation in building responsive, user-friendly websites with clean code and thoughtful design. 
            If you're looking for a website for your small business or portfolio to display your work, I can deliver something that looks professional, runs smoothly, 
            and is tailored to you.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Homepage;
