import { AIPowered, Blog, Contact, EarlyAccess, FAQ, Footer, Hero, KeyFeatures, Navbar, Newsletter, Pricing } from './components';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <EarlyAccess />
      <AIPowered />
      <KeyFeatures />
      <Blog />
      <Newsletter />
      <FAQ />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
