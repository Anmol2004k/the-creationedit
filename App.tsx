
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
// import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { Helmet } from "react-helmet-async";


function App() {
  return (
    <div className="bg-[#050505] text-white selection:bg-white selection:text-black">

      <Helmet>
  {/* ===== BASIC SEO ===== */}
  <title>
    Video Editing Services in Sonipat, Panipat & Delhi NCR | Reels, Shorts, YouTube Editing
  </title>

  <meta
    name="description"
    content="Professional video editing services in Sonipat, Panipat, Ganaur, Murthal, Kundli, Haryana and Delhi NCR. We edit Instagram reels, YouTube shorts, podcasts, promotional and event videos for creators and businesses."
  />

  <meta
    name="keywords"
    content="
    video editing sonipat,
    video editing panipat,
    video editor haryana,
    reels editor delhi ncr,
    youtube video editor sonipat,
    instagram reels editing,
    youtube shorts editing,
    podcast editing service,
    promotional video editing,
    event video editing,
    murthal video editor,
    kundli video editing,
    ganaur video editor,
    gurgaon video editing,
    delhi video editing agency,
    social media video editing service
    "
  />

  <meta name="robots" content="index, follow" />

  {/* ===== GEO TARGET (LOCAL SEO BOOST) ===== */}
  <meta name="geo.region" content="IN-HR" />
  <meta name="geo.placename" content="Sonipat, Haryana, India" />
  <meta name="geo.position" content="28.9931;77.0151" />
  <meta name="ICBM" content="28.9931, 77.0151" />

  {/* ===== OPEN GRAPH ===== */}
  <meta property="og:title" content="Professional Video Editing Services - Delhi NCR & Haryana" />
  <meta
    property="og:description"
    content="We create high-quality reels, shorts, YouTube and promotional videos for creators & businesses."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thecreationedit.com/" />
  <meta property="og:image" content="https://thecreationedit.com/preview.jpg" />

  {/* ===== STRUCTURED DATA (GOOGLE TRUST BOOST) ===== */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "The Creation Edit",
      "image": "https://thecreationedit.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sonipat",
        "addressRegion": "Haryana",
        "addressCountry": "India"
      },
      "areaServed": [
        "Sonipat",
        "Panipat",
        "Ganaur",
        "Murthal",
        "Kundli",
        "Delhi NCR",
        "Gurgaon"
      ],
      "description": "Video editing services for reels, YouTube videos, podcasts, promotional and event videos.",
      "url": "https://yourdomain.com"
    }
  `}
  </script>
</Helmet>


      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Testimonials />
        {/* <Pricing /> */}
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
