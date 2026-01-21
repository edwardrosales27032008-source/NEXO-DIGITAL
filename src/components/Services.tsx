import React from 'react';
import { motion } from 'framer-motion';

const prices = [
  { name: "Landing Page", price: "300", desc: "Diseño de una sola página optimizado para conversiones rápidas y campañas de Ads." },
  { name: "Web Negocio", price: "300", desc: "Presencia digital profesional para empresas locales con secciones informativas estratégicas." },
  { name: "Portafolio", price: "300", desc: "Exhibición de alto impacto para creativos con galerías avanzadas y transiciones fluidas." },
  { name: "Corporativa", price: "500", desc: "Plataforma robusta con integraciones personalizadas y rendimiento de nivel empresarial." }
];

export const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-[#020617] text-white relative overflow-hidden" id="servicios">
      {/* Luces de Fondo Responsivas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 md:left-1/4 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/10 blur-[80px] md:blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 md:right-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-600/10 blur-[80px] md:blur-[120px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Título Responsivo: text-5xl en móvil, text-8xl en desktop */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl md:text-8xl font-black italic uppercase mb-12 md:mb-20 text-center tracking-tighter drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] md:drop-shadow-[0_0_30px_rgba(34,211,238,0.6)]"
        >
          Inversión
        </motion.h2>

        {/* Grid Adaptable: 1 col móvil, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {prices.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.02, 
                zIndex: 20,
                boxShadow: "0px 0px 40px rgba(34, 211, 238, 0.2)"
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="group relative p-6 md:p-8 bg-[#0a0f1d] border border-white/10 flex flex-col justify-between min-h-[350px] md:min-h-[400px] cursor-pointer hover:border-cyan-400 transition-all duration-300"
            >
              {/* Línea de luz superior dinámica */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-cyan-400 opacity-0 group-hover:opacity-100 shadow-[0_0_15px_#22d3ee] transition-opacity duration-300"></div>
              
              <div>
                <h3 className="text-cyan-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4">Plan {i + 1}</h3>
                <h4 className="text-2xl md:text-3xl font-black uppercase leading-tight mb-4 md:mb-6 group-hover:text-cyan-400 transition-colors duration-300">
                  {p.name}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 md:mb-8">
                  {p.desc}
                </p>
              </div>

              <div className="mt-auto">
                <div className="text-4xl md:text-5xl font-black italic text-white">
                  <span className="text-cyan-400 text-xl md:text-2xl not-italic mr-1">S/</span>
                  {p.price}
                </div>
                <div className="mt-6 w-full h-[1px] bg-white/10 group-hover:bg-cyan-400/50 transition-colors duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};