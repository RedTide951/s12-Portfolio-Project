import AppBar from "./components/AppBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AppBarMobile from "./components/AppBarMobile";

import "./App.css";

function App() {
  return (
    <>
      <div className="">
        <AppBarMobile />
      </div>
      <main className="App mx-4 sm:mx-8 md:mx-8 lg:mx-16 xl:mx-24 2xl:mx-32">
        <div className="hidden md:block">
          <AppBar />
        </div>
        <NavBar />
        <Hero />
        <div className="divider md:hidden"></div>
        <Skills />
        <div className="divider"></div>
        <Profile />
        <div className="divider"></div>
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
