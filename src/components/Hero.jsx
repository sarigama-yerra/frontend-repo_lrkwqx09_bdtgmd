import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 pt-40 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow [text-wrap:balance]"
        >
          OTIKA
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-200 to-lime-200">
            Dominez la jungle du digital !
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl"
        >
          Studio digital et créatif: sites web, e-commerce, SaaS, apps mobiles, branding, UX/UI et référencement SEO/SEA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link to="/contact" className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-emerald-300 to-lime-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-transform hover:-translate-y-0.5">
            Démarrer un projet
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>

          <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white/90 border border-white/20 hover:border-white/40 backdrop-blur bg-white/5">
            Voir nos réalisations
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
