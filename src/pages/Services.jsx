import { Link } from 'react-router-dom';

const sections = {
  DIGITAL: [
    { path: '/services/landing-page', title: 'Landing page' },
    { path: '/services/site-vitrine', title: 'Site vitrine' },
    { path: '/services/e-commerce', title: 'Site e-commerce' },
    { path: '/services/saas', title: 'SAAS' },
    { path: '/services/appli-mobile', title: 'Appli mobile' },
  ],
  GRAPHISME: [
    { path: '/services/ux-ui-design', title: 'Design UX / UI' },
    { path: '/services/mockups', title: 'Mockups' },
    { path: '/services/presentations', title: 'Présentations (pitch deck, plaquettes...)' },
    { path: '/services/branding', title: 'Logo & charte graphique' },
  ],
  REFERENCEMENT: [
    { path: '/services/seo', title: 'SEO' },
    { path: '/services/sea', title: 'SEA' },
  ]
};

export default function Services(){
  return (
    <div className="bg-gradient-to-b from-black to-emerald-950/40 min-h-screen py-28">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-white">Services</h1>
        <p className="text-white/70 mt-2">Chaque service peut avoir sa page dédiée pour détailler processus, livrables et exemples.</p>

        {Object.entries(sections).map(([cat, items]) => (
          <div key={cat} className="mt-10">
            <p className="text-emerald-200 text-sm">{cat}</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {items.map(it => (
                <Link key={it.path} to={it.path} className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white/90">
                  {it.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
