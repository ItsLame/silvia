import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactLinks from "@/components/ContactLinks";

const Contact = () => {
  return (
    <div className="contact">
      <header>
        <Navbar />
      </header>

      <main>
        <section className="contact-links-section">
          <h1>connect or message me!</h1>
          <ContactLinks />
        </section>
      </main>

      <footer>
        <Footer hideContent/>
      </footer>
    </div>
  );
};

export default Contact;

