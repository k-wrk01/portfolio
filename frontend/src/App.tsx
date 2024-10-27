import './App.css';
import { Header } from './components/Header';
import { Works } from './components/Works';
import { Profile } from './components/Profile';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="hero h-[calc(100vh-4rem)]">
        <div className="hero-content text-center">
          <h1 className="mb-5 md:text-9xl text-6xl font-bold animate-tracking-in-expand">Portfolio</h1>
        </div>
      </div>
      <section id="profile"><Profile /></section>
      <section id="works"><Works /></section>
      <Footer />
    </div>
  );
}

export default App;
