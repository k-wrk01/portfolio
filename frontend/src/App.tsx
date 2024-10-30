import { useState, useEffect } from "react";

import { Header } from './components/Header';
import { Works } from './components/Works';
import { Profile } from './components/Profile';
import { Footer } from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false);
    }, 2 * 1000)
  }, [])

  return (
    <div className="App">
      {isLoading ?
        <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
        : <div>
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
      }
    </div>
  );
}

export default App;
