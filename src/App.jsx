import AppBar from "./components/AppBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  return (
    <main className="App">
      <AppBar />
      <NavBar />
      <Hero />
      <Skills />
      <div className="divider"></div>
      <Profile />
      <div className="divider"></div>
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
