import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="home">
      <header>
        <Navbar />
      </header>

      <main>
        <div className="intro">
          <h1>hello i&apos;m <span className="name">silvia</span></h1>
          <p>a full stack software engineer who loves to build intuitive user-friendly web applications.</p>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
