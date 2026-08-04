import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";

const Home = () => {
  return (
    <div className="home">
      <header>
        <Navbar />
      </header>

      <main>
        <div className="intro">
          <h1>hello i&apos;m <span className="name">silvia</span></h1>
          <p>a full stack software engineer who loves to build agentic centric solutions.</p>
        </div>
        <DarkModeToggle float mobileOnly />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
