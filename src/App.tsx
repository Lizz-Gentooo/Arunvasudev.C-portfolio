import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import AmbientBackground from "./components/AmbientBackground";
import TrajectoryRail from "./components/TrajectoryRail";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import ResumeSection from "./sections/ResumeSection";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-day-bg text-day-text dark:bg-space-primary dark:text-space-white">
      <AmbientBackground />
      <TrajectoryRail />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
