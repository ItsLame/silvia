import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactLinks from "@/components/contact-links";

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

