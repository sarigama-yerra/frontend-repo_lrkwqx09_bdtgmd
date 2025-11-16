import Hero from '../components/Hero';
import ServiceCards from '../components/ServiceCards';
import PortfolioGrid from '../components/PortfolioGrid';
import ContactForm from '../components/ContactForm';

export default function Home(){
  return (
    <div className="bg-black">
      <Hero />
      <ServiceCards />
      <PortfolioGrid />
      <ContactForm />
    </div>
  )
}
