import './styles/global.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { EventStats } from './components/EventStats/EventStats';
import { About } from './components/About/About';
import { Numbers } from './components/Numbers/Numbers';
import { Topics } from './components/Topics/Topics';
import { Speakers } from './components/Speakers/Speakers';
import { Schedule } from './components/Schedule/Schedule';
import { Benefits } from './components/Benefits/Benefits';
import { Gallery } from './components/Gallery/Gallery';
import { Tickets } from './components/Tickets/Tickets';
import { Venue } from './components/Venue/Venue';
import { Partners } from './components/Partners/Partners';
import { FAQ } from './components/FAQ/FAQ';
import { FinalCTA } from './components/FinalCTA/FinalCTA';
import { Footer } from './components/Footer/Footer';
import { WhatsAppButton } from './components/WhatsAppButton/WhatsAppButton';
import { MobileStickyCTA } from './components/MobileStickyCTA/MobileStickyCTA';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ir para o conteúdo principal
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <EventStats />
        <About />
        <Numbers />
        <Topics />
        <Speakers />
        <Schedule />
        <Benefits />
        <Gallery />
        <Tickets />
        <Venue />
        <Partners />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <WhatsAppButton />
      <MobileStickyCTA />
    </>
  );
}

export default App;
