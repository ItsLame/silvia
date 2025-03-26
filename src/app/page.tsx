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
          <h1>hello i&apos;m <span className="name block">silvia</span></h1>
          <p className="text-xl">a full stack software engineer who loves to build accessible and nice looking stuff.</p>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
