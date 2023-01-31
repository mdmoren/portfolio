import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <div className="h-10 bg-[#000] w-full"></div>
      <About />
      <div className="h-10 bg-[#000] w-full"></div>
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
