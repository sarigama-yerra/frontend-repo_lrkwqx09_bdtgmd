import ContactForm from '../components/ContactForm';

export default function Contact(){
  return (
    <div className="bg-black min-h-screen pt-28">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-white">Contact</h1>
        <p className="text-white/70 mt-2">Expliquez-nous votre besoin via le formulaire ci-dessous.</p>
      </div>
      <ContactForm />
    </div>
  );
}
