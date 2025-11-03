import Hero from './components/Hero';
import Industries from './components/Industries';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <Hero />
        <Industries />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
