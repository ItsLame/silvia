import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="home">
      <header>
        <Navbar />
      </header>

      <main>
        <div className="hero flex flex-col flex-1 min-h-[calc(100vh-11.25rem)] justify-center">
          <h1 className="text-8xl">hello i&apos;m <span className="name block">silvia</span></h1>
          <p className="text-xl">a full stack software engineer who loves to build nice looking things.</p>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
