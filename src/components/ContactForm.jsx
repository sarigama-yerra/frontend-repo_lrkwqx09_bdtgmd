import { useState } from 'react';

const services = {
  DIGITAL: ['Landing page', 'Site vitrine', 'Site e-commerce', 'SAAS', 'Appli mobile'],
  GRAPHISME: ['Design UX / UI', 'Mockups', 'Présentation (pitch deck, plaquettes...)', 'Logo', 'Charte graphique'],
  REFERENCEMENT: ['SEO', 'SEA']
};

export default function ContactForm() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    company: '',
    phone: '',
    budget_range: '',
    message: '',
    interests: [],
    source: ''
  });
  const [status, setStatus] = useState(null);

  const backend = import.meta.env.VITE_BACKEND_URL || '';

  const toggleInterest = (val) => {
    setForm((f) => {
      const exists = f.interests.includes(val);
      return { ...f, interests: exists ? f.interests.filter((v) => v !== val) : [...f.interests, val] };
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${backend}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Erreur serveur');
      setStatus('success');
      setForm({ full_name: '', email: '', company: '', phone: '', budget_range: '', message: '', interests: [], source: '' });
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-emerald-950/40 to-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Parlez-nous de votre projet</h2>
        <p className="text-white/70 mt-2">Dites-nous ce dont vous avez besoin et nous revenons vers vous rapidement.</p>

        <form onSubmit={submit} className="mt-8 grid md:grid-cols-2 gap-5">
          <input required value={form.full_name} onChange={(e)=>setForm({...form, full_name: e.target.value})} placeholder="Nom complet" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50" />
          <input required type="email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} placeholder="Email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50" />
          <input value={form.company} onChange={(e)=>setForm({...form, company: e.target.value})} placeholder="Société" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50" />
          <input value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value})} placeholder="Téléphone" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50" />

          <select value={form.budget_range} onChange={(e)=>setForm({...form, budget_range: e.target.value})} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 md:col-span-2">
            <option className="text-black" value="">Budget estimatif</option>
            <option className="text-black" value="<2k">Moins de 2k€</option>
            <option className="text-black" value="2k-5k">2k€ - 5k€</option>
            <option className="text-black" value="5k-10k">5k€ - 10k€</option>
            <option className="text-black" value=">10k">Plus de 10k€</option>
          </select>

          <div className="md:col-span-2">
            <p className="text-white/80 mb-2">Ce qui vous intéresse</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
              {Object.entries(services).map(([cat, items]) => (
                <div key={cat} className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-xs text-emerald-200/80 mb-2">{cat}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((label) => {
                      const active = form.interests.includes(label);
                      return (
                        <button type="button" key={label} onClick={() => toggleInterest(label)} className={`px-3 py-1 rounded-lg text-sm border ${active ? 'bg-emerald-400 text-black border-emerald-300' : 'text-white/80 border-white/15 hover:border-white/30'}`}>
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <textarea value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} placeholder="Décrivez votre besoin" className="md:col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 min-h-[140px]" />

          <input value={form.source} onChange={(e)=>setForm({...form, source: e.target.value})} placeholder="Comment nous avez-vous connu ?" className="md:col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50" />

          <div className="md:col-span-2 flex items-center gap-4">
            <button disabled={status==='loading'} className="px-6 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-emerald-300 to-lime-300 disabled:opacity-50">Envoyer la demande</button>
            {status==='success' && <p className="text-emerald-300">Merci ! Nous revenons vers vous très vite.</p>}
            {status==='error' && <p className="text-red-300">Une erreur est survenue. Réessayez.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
