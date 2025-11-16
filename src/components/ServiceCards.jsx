import { motion } from 'framer-motion';
import { Smartphone, ShoppingCart, Rocket, MonitorSmartphone, Palette, PenTool, Presentation, Landmark, Shield, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Landing Page',
    desc: "Convertissez vos visiteurs en clients avec des pages percutantes.",
    icon: Rocket,
    path: '/services/landing-page',
    cat: 'DIGITAL'
  },
  {
    title: 'Site vitrine',
    desc: "Présentez votre activité avec élégance et impact.",
    icon: MonitorSmartphone,
    path: '/services/site-vitrine',
    cat: 'DIGITAL'
  },
  {
    title: 'E-commerce',
    desc: "Vendez en ligne avec des boutiques performantes.",
    icon: ShoppingCart,
    path: '/services/e-commerce',
    cat: 'DIGITAL'
  },
  {
    title: 'SaaS',
    desc: "Concevez et lancez votre produit logiciel.",
    icon: Shield,
    path: '/services/saas',
    cat: 'DIGITAL'
  },
  {
    title: 'Appli mobile',
    desc: "iOS & Android sur-mesure au service de vos objectifs.",
    icon: Smartphone,
    path: '/services/appli-mobile',
    cat: 'DIGITAL'
  },
  {
    title: 'UX / UI Design',
    desc: "Des expériences fluides et des interfaces irrésistibles.",
    icon: Palette,
    path: '/services/ux-ui-design',
    cat: 'GRAPHISME'
  },
  {
    title: 'Mockups',
    desc: "Des maquettes réalistes pour projeter vos idées.",
    icon: PenTool,
    path: '/services/mockups',
    cat: 'GRAPHISME'
  },
  {
    title: 'Pitch decks & plaquettes',
    desc: "Présentations impeccables qui captivent.",
    icon: Presentation,
    path: '/services/presentations',
    cat: 'GRAPHISME'
  },
  {
    title: 'Logo & charte',
    desc: "Identités visuelles fortes et mémorables.",
    icon: Landmark,
    path: '/services/branding',
    cat: 'GRAPHISME'
  },
  {
    title: 'SEO',
    desc: "Gagnez en visibilité organique durablement.",
    icon: Search,
    path: '/services/seo',
    cat: 'REFERENCEMENT'
  },
  {
    title: 'SEA',
    desc: "Campagnes publicitaires qui performent.",
    icon: Rocket,
    path: '/services/sea',
    cat: 'REFERENCEMENT'
  },
];

export default function ServiceCards() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-emerald-950/40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(190,242,100,0.15),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Nos Services</h2>
            <p className="text-white/70 mt-2">Du concept à la croissance, nous couvrons tout votre écosystème digital.</p>
          </div>
          <Link to="/services" className="hidden md:inline-flex px-4 py-2 rounded-lg text-sm font-medium border border-white/20 text-white/80 hover:text-white">Explorer tout</Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-tr from-emerald-400/10 to-lime-300/10 blur-2xl" />
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-400 to-lime-300 text-black flex items-center justify-center shadow">
                  <s.icon />
                </div>
                <div>
                  <p className="text-xs text-emerald-200/80">{s.cat}</p>
                  <h3 className="text-white font-semibold text-lg">{s.title}</h3>
                </div>
              </div>
              <p className="text-white/70 mt-3 text-sm">{s.desc}</p>
              <Link to={s.path} className="mt-4 inline-flex text-emerald-200 hover:text-emerald-100">En savoir plus →</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
