import { motion } from 'framer-motion';

export default function PortfolioGrid({ items = [] }) {
  const data = items.length ? items : [
    { title: 'E-commerce Jungle', tag: 'E-commerce', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop' },
    { title: 'SaaS Dashboard', tag: 'SaaS', image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Branding Totem', tag: 'Branding', image: 'https://images.unsplash.com/photo-1703206848101-e0b15d418ddd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFLWNvbW1lcmNlJTIwSnVuZ2xlfGVufDB8MHx8fDE3NjMyOTE2ODZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { title: 'Mobile App', tag: 'Mobile', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Landing Growth', tag: 'Landing', image: 'https://images.unsplash.com/photo-1703206848101-e0b15d418ddd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFLWNvbW1lcmNlJTIwSnVuZ2xlfGVufDB8MHx8fDE3NjMyOTE2ODZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { title: 'UX/UI Flow', tag: 'UX/UI', image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop' },
  ];

  return (
    <section className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Portfolio</h2>
          <p className="text-white/70 mt-2">Quelques réalisations qui ont fait rugir nos clients.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <img src={item.image} alt={item.title} className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-emerald-200 text-xs">{item.tag}</p>
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
