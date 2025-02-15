import Navbar from "@/components/navbar";

const Home = () => {
  return (
    <div className="flex flex-col">
      <header className="flex font-medium">
        <Navbar />
      </header>

      <main className="h-screen px-8 pt-20">
        <p>some paraagraph</p>
      </main>

      <footer className="bg-red-400 py-4 px-8">
        <p>Finally made a portfolio website after procrastinating so long by Silvia</p>
      </footer>
    </div>
  );
};

export default Home;
