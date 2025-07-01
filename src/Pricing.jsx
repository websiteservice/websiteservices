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

        <h2 className="section-heading">Website Design and Hosting</h2>
        <p>(One off design includes no maintenance)</p>
        <div className="pricing-cards">
          <ServiceCard title="Starter Website" price="$250" desc={
            <ul className="desc-list">
              <li>Default URL</li>
              <li>Simple website (1–5 pages)</li>
              <li>You provide your pricing and content and I will apply your information.</li>
              <li>1 initial information addition session</li>
              <li>Public website source code</li>
            </ul>
          } />

          <ServiceCard title="Professional Website" price="$380" desc={
            <ul className="desc-list">
              <li>Default URL</li>
              <li>More intricate website (6–8 pages)</li>
              <li>You advise about the website design and add your prices</li>
              <li>1 initial page design and information session</li>
              <li>Public website source code</li>
            </ul>
          } />

          <ServiceCard title="Premium Website" price="$550 + 140/yr for hosting" desc={
            <ul className="desc-list">
              <li>Larger website (9–11 pages)</li>
              <li>Custom URL</li>
              <li>1 initial fully customisable website design session</li>
              <li>Private source code for the website</li>
            </ul>
          } />

          <ServiceCard title="Information" desc={
            <ul className="desc-list">
              <li>Note: limited ability for back-end services with tiers 1 and 2</li>
              <li>Default URL will be https://websiteservice.github.io/yourwebsitename</li>
            </ul>
          } />
        </div>

        <h2 className="section-heading">Website Maintenance</h2>
        <div className="pricing-cards">
        <ServiceCard title="Tier 1" price="$20/Month" desc={
    <ul className="desc-list">
      <li>1x text revision per month</li>
      <li>Basic security updates and patches</li>
      <li>Monthly website backup</li>
      <li>Email support for minor issues</li>
    </ul>
  } />
  <ServiceCard title="Tier 2" price="$40/Month" desc={
    <ul className="desc-list">
      <li>3x text or layout revisions per month</li>
      <li>Security updates and vulnerability monitoring</li>
      <li>Bi-weekly website backups</li>
      <li>Priority email and chat support</li>
    </ul>
  } />
  <ServiceCard title="Tier 3" price="$60/Month" desc={
    <ul className="desc-list">
      <li>5x text or layout revisions per month</li>
      <li>Advanced security and malware scans</li>
      <li>Weekly website backups for easy restoration</li>
      <li>Phone, email, and chat support with fast response</li>
      <li>Uptime monitoring and quick issue resolution</li>
    </ul>
  } />
          <ServiceCard title="Information" desc={
            <>
              <p>Happy to negotiate discounted deals for longer timespans with up-front payment (i.e. 1 year or longer).</p>
              <p><strong>FAQ:</strong></p>
              <p><strong>Text revisions examples:</strong></p>
              <ul className="desc-list">
                <li>Update pricing information</li>
                <li>Update social media links</li>
                <li>Edit an informational paragraph</li>
                <li>Change available services</li>
              </ul>
              <p><strong>Layout revisions examples:</strong></p>
              <ul className="desc-list">
                <li>Add a new section for customer reviews</li>
                <li>Add a new pop-up advertisement</li>
                <li>Reorganize sections on a page</li>
                <li>Add more images to gallery</li>
              </ul>
            </>
          } />
        </div>

        {/* <h2 className="section-heading">Add-ons</h2>
        <div className="pricing-card2">
          <h2>Add-Ons</h2>
          <ul className="addon-prices">
            <li><span className="label">One text revision</span><span className="price">$25</span></li>
            <li><span className="label">One layout revision</span><span className="price">$30</span></li>
          </ul>
        </div> */}

        <h2 className="section-heading">Website Optimization</h2>
        <div className="pricing-cards">
          <ServiceCard 
            title="Search Engine Optimization (Google)" 
            price="$70/Month" 
            desc={
              <ul className="desc-list">
                <li><strong>Google Search Console Setup</strong></li>
                <li>Verify site ownership</li>
                <li>Submit sitemap</li>
                <li>Track keyword performance</li>
                <li><strong>On-Page SEO Optimization</strong></li>
                <li>Add page titles & meta descriptions</li>
                <li>Improve content structure (headings, links, keywords)</li>
                <li><strong>Performance & Analytics</strong></li>
                <li>Track clicks, impressions, and search positions</li>
                <li>Monitor what people search to find them</li>
                <li>Monthly SEO performance reports</li>
              </ul>
            }
          />

          <ServiceCard title="Link Website to Google Business Profile" price="$60/Month" desc={
            <ul className="desc-list">
              <li>Google Business Profile setup (shows on Google Maps & local results)</li>
              <li>Add business hours, services, photos, location pin</li>
              <li>Add schema markup for local business</li>
            </ul>
          } />

          <ServiceCard title="Site Speed Optimization" price="$80/Month" desc={
            <ul className="desc-list">
              <li>Optimize website images</li>
              <li>Use lazy loading</li>
              <li>Minify CSS/JS</li>
              <li>Use tools like PageSpeed Insights or GTmetrix</li>
            </ul>
          } />

          <ServiceCard title="Mobile Optimization" price="$60/Month" desc={
            <ul className="desc-list">
              <li>Ensure mobile responsiveness</li>
              <li>Test with Google’s Mobile-Friendly Test</li>
              <li>Optimize layout for touch & scroll</li>
            </ul>
          } />
        </div>

        <h2 className="section-heading">Google Ads Management</h2>
        <div className="pricing-cards">
          <ServiceCard title="Ad Setup Only" price="$60 (once)" desc={
            <ul className="desc-list">
              <li>Google Ads account setup</li>
              <li>Keyword research</li>
              <li>1 campaign with 1–2 ad groups</li>
              <li>1–2 text ads written and launched</li>
            </ul>
          } />

        <ServiceCard title="Ad Setup & Reporting" price="$100/month" desc={
            <ul className="desc-list">
              <li>$50/month ad spend</li>
              <li>Aproxmiately 25–50 clicks per month</li>
              <li>1 campaign with 1–2 ad groups</li>
              <li>1–2 text ads written and launched</li>
              <li>Monthly performance reporting</li>
            </ul>
          } />

          <ServiceCard title="Ad Setup & Monthly Ad Management" price="$175/month" desc={
            <ul className="desc-list">
              <li>$100/month ad spend</li>
              <li>Aproxmiately 50–100 clicks per month</li>
              <li>1 campaign with 3–4 ad groups</li>
              <li>Ongoing performance monitoring</li>
              <li>Keyword & ad optimization</li>
              <li>Adjust ad budgets, bids & locations</li>
              <li>Monthly performance reporting</li>
            </ul>
          } />

          <ServiceCard title="Large Ad Package (Ad Setup & Management)" price="$325/month" desc={
            <ul className="desc-list">
              <li>$200/month ad spend</li>
              <li>Aproxmiately 100–200 clicks per month</li>
              <li>2 campaigns with 3–4 ad groups</li>
              <li>Includes setup, optimization & monitoring</li>
              <li>Monthly SEO + Ad insights report</li>
            </ul>
          } />
{/* 
  <ServiceCard title="Note" desc={
    <ul className="desc-list">
      <li>These prices are for managing the ad account only.</li>
      <li>Google Ads spend (e.g. $100/month) is paid directly to Google by the client.</li>
      <li>Flexible plans & discounts available on request.</li>
    </ul>
  } /> */}
</div>


        <h2 className="section-heading">Digital Marketing</h2>
        <div className="pricing-cards">
          <ServiceCard title="Marketing bundle" price="$20" desc={
            <ul className="desc-list">
              <li>Custom website QR code</li>
              <li>Shortened website URL</li>
              <li>VCF contact card (mobile contact card)</li>
            </ul>
          } />

          <ServiceCard title="Website advertising banners" price="$150/yr" desc={
            <ul className="desc-list">
              <li>Run an advert every month for 1 week</li>
              <li>1 week seasonal promotions – New Years, Valentine's, Easter, Halloween, Christmas</li>
            </ul>
          } />

          <ServiceCard title="Downloadable Cards" price="$15 each or all 5 for $60" desc={
            <ul className="desc-list">
              <li>Appointment date cards</li>
              <li>Loyalty cards</li>
              <li>Gift cards</li>
              <li>Service menu cards</li>
              <li>Business cards</li>
            </ul>
          } />
        </div>

        <p>Disclaimer: Prices subject to change at my discretion and I reserve the right to cancel and refund recurring payments at any time.</p>
      </main>
      <Footer />
    </>
  );
}

function ServiceCard({ title, price, desc }) {
  return (
    <div className="pricing-card">
      <h2>{title}</h2>
      <p className="price">{price}</p>
      <div className="desc">{desc}</div>
    </div>
  );
}

export default Pricing;
