import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Reviews } from './components/Reviews';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-cream text-deepTeal font-sans selection:bg-teal selection:text-cream">
      <Navigation />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Reviews />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>);

}