import { Suspense, lazy } from 'react';
import './lib/i18n';
import { HelmetProvider } from 'react-helmet-async';

import SEO from './components/common/SEO';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/common/WhatsAppFloat';

// Above-the-fold : eager
import Hero from './components/sections/heroes/HeroCinematic';
import About from './components/sections/About';
import Services from './components/sections/Services';

// Below-the-fold : code-split
const Process = lazy(() => import('./components/sections/Process'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Testimonials = lazy(() => import('./components/sections/Testimonials'));
const FAQ = lazy(() => import('./components/sections/FAQ'));
const Contact = lazy(() => import('./components/sections/Contact'));

function SectionFallback() {
  return <div className="min-h-[400px]" aria-hidden="true" />;
}

export default function App() {
  return (
    <HelmetProvider>
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Suspense fallback={<SectionFallback />}>
          <Process />
          <Projects />
          <Testimonials />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFloat />
    </HelmetProvider>
  );
}
