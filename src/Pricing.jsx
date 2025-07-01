import './Pricing.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Title from './components/Title';

function Pricing() {
  return (
    <>
      <Header />
      <Title titleName="Services" />
      <main className="pricing-container">
        <p className="pricing-subtitle">Website design and hosting for every budget.</p>

        {/* Section: Manicures */}
        <h2 className="section-heading">Manicures</h2>
        <div className="pricing-cards">
          {/* <ServiceCard title="Natural Nail Manicure" price="$40" desc="Includes nail shaping, cuticle care & base and top coat polish application." /> */}
          {/* <ServiceCard title="Natural Nail Gel Manicure" price="$50" desc="Long-lasting gel polish with a top coat finish." /> */}
          {/* <ServiceCard title="Acrylic Manicure" price="Starting from $40" desc="Durable acrylic extensions. Includes one solid acrylic colour and top coat. Further pricing information below." />
          <div className="pricing-card2">
          
          <h2>Acrylic Manicure Base Pricing (Full set)</h2>

          <ul class="length-prices">
            <li><span class="label">Short</span><span class="price">$40</span></li>
            <li><span class="label">Medium</span><span class="price">$50</span></li>
            <li><span class="label">Long</span><span class="price">$60</span></li>
            <li><span class="label">Extra Long</span><span class="price">$70</span></li>
            <li><span class="label">2XL</span><span class="price">$80</span></li>
            <li><span class="label">3XL</span><span class="price">$90</span></li>
          </ul>
          <img src="src/assets/nailsImages/nailLengths.jpg" alt="Nail lengths" width="400" height="500"></img>

        </div> */}

        <div className="pricing-card2">
          <h2>Add-Ons</h2>
              <ul class="addon-prices">
                <li><span class="label">Extra revision (1 Month) </span><span class="price">$10</span></li>
                <li><span class="label">Marble</span><span class="price">$10</span></li>
                <li><span class="label">Glitter Acrylic</span><span class="price">$10</span></li>
                <li><span class="label">Acrylic French</span><span class="price">$15</span></li>
                <li><span class="label">Simple Acrylic Colour Blocking</span><span class="price">$15</span></li>
                <li><span class="label">Encapsulation</span><span class="price">$15</span></li>
              </ul>
        </div>
        </div>
        
        <h2 className="section-heading">Website Tiers</h2>
        <div className="pricing-cards">
        <ServiceCard title="Tier 1" price="$40/Month" desc=" for GitHub pages
          Default URL
          Boilerplate website
          You add you prices and we put your name on it
          1 initial information addition session. 
          1 text revision per month. (E.g update pricing or contact information)
          Public website source code. 
        " />
        <ServiceCard title="Tier 2" price="$60/Month" desc="
          Custom URL
          You advise about the website design and add your prices. 
          1 initial page design and information session. 
          3x Text or Layout Revisions a month
          Private source code for the website. " />
        <ServiceCard title="Tier 3" price="$80/Month" desc="
          1 Initial fully customisable website design session. 
          5x Text or Layout revisions a month. 
          Private source code for the website. 
        " />
        <ServiceCard title="Information" desc="

          Willing to negotiate discounted deals for longer timespans. (i.e 1 year or longer.)

          FAQ:
          What kinds of revisions can I make?
          5 revisions example:
          Update pricing information 
          Add additional information paragraph 
          Change salon location on map
          Change avaliable client services " />
        </div>
      
      </main>
      <Footer />
    </>
  );
}

// Reusable card component
function ServiceCard({ title, price, desc }) {
  return (
    <div className="pricing-card">
      <h2>{title}</h2>
      <p className="price">{price}</p>
      <p>{desc}</p>
    </div>
  );
}

export default Pricing;
