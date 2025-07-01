import Header from './components/Header';
import Footer from './components/Footer';
import Title from './components/Title';
import './Bookings.css';

function Bookings() {
  return (
    <>
      <Header />
      <main className="bookings-container">
        <Title titleName="Bookings" />
        
      </main>
      <Footer />
    </>
  );
}

export default Bookings;
