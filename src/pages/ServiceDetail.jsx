import { useParams } from 'react-router-dom';

const content = {
  'landing-page': {
    title: 'Landing page',
    intro: "Des pages qui transforment l'attention en action",
  },
  'site-vitrine': {
    title: 'Site vitrine',
    intro: "Votre identité en ligne, élégante et efficace",
  },
  'e-commerce': {
    title: 'Site e-commerce',
    intro: "Vendez en ligne avec une expérience d'achat sans friction",
  },
  'saas': {
    title: 'SAAS',
    intro: "De l'idée au produit: design, dev, go-to-market",
  },
  'appli-mobile': {
    title: 'Appli mobile',
    intro: "Apps iOS & Android performantes et scalables",
  },
  'ux-ui-design': {
    title: 'Design UX/UI',
    intro: "Des interfaces désirables, des parcours fluides",
  },
  'mockups': {
    title: 'Mockups',
    intro: "Projetez vos idées avec des visuels réalistes",
  },
  'presentations': {
    title: 'Présentations',
    intro: "Pitch decks et plaquettes qui convainquent",
  },
  'branding': {
    title: 'Logo & charte',
    intro: "Identités visuelles mémorables et cohérentes",
  },
  'seo': {
    title: 'SEO',
    intro: "Gagnez en visibilité durablement",
  },
  'sea': {
    title: 'SEA',
    intro: "Campagnes d'acquisition au ROI mesuré",
  },
};

export default function ServiceDetail(){
  const { slug } = useParams();
  const data = content[slug] || { title: 'Service', intro: '' };

  return (
    <div className="bg-gradient-to-b from-black to-emerald-950/40 min-h-screen py-28">
      <div className="max-w-5xl mx-auto px-4 text-white">
        <h1 className="text-4xl font-extrabold">{data.title}</h1>
        <p className="text-white/70 mt-2">{data.intro}</p>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          <div className="md:col-span-2 space-y-4">
            <div className="p-5 rounded-xl border border-white/10 bg-white/5">
              <h3 className="font-semibold">Approche</h3>
              <p className="text-white/70 mt-1 text-sm">Découverte, stratégie, design, développement et optimisation continue.</p>
            </div>
            <div className="p-5 rounded-xl border border-white/10 bg-white/5">
              <h3 className="font-semibold">Livrables</h3>
              <p className="text-white/70 mt-1 text-sm">Maquettes, prototypes, code source, documentation, guides d'utilisation.</p>
            </div>
            <div className="p-5 rounded-xl border border-white/10 bg-white/5">
              <h3 className="font-semibold">Exemples</h3>
              <p className="text-white/70 mt-1 text-sm">Cas clients et réalisations similaires consultables sur le portfolio.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-5 rounded-xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-lime-400/10">
              <h3 className="font-semibold">Pourquoi OTIKA ?</h3>
              <ul className="text-white/70 mt-2 text-sm list-disc list-inside space-y-1">
                <li>Expertise full-stack</li>
                <li>Design centré utilisateur</li>
                <li>Culture performance</li>
              </ul>
            </div>
            <a href="/contact" className="block text-center px-4 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-emerald-300 to-lime-300">Lancer mon projet</a>
          </div>
        </div>
      </div>
    </div>
  );
}
