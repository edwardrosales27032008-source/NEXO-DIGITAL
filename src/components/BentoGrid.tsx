import React from 'react';
import { motion } from 'framer-motion';

const projects = [
{
    id: 1,
    size: 'col-span-1 md:col-span-2 md:row-span-2',
    // Usamos el nombre exacto con espacios que sale en tu VS Code
    video: '/public/Jean   Editor', 
    title: 'Jean Editor Pro',
  },
  {
    id: 2,
    size: 'col-span-1 md:col-span-1 md:row-span-1',
    video: '/public/Limagloss   Carwash',
    title: 'Limagloss Carwash',
  },
  {
    id: 3,
    size: 'col-span-1 md:col-span-1 md:row-span-1',
    video: '/public/Sistemacrítico   Estilobrutalista',
    title: 'Estilo Brutalista',
  },
  {
    id: 4,
    size: 'col-span-1 md:col-span-1 md:row-span-1',
    video: '/public/Urubambaroasters Cafedeespecialidadlima',
    title: 'Urubamba Roasters',
  },
];

// ... (tus proyectos se quedan igual arriba)

export const BentoGrid = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto bg-transparent">
      <h2 className="text-3xl md:text-5xl font-black mb-8 md:mb-16 uppercase tracking-tighter text-white">
        Mis Proyectos <span className="text-cyan-400 font-italic">enfocados</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 auto-rows-[300px]">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`relative group rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900 ${p.size}`}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
            >
              {/* Prioridad al WebM que pesa menos de 2MB según tus archivos */}
              <source src={`${p.video}.webm`} type="video/webm" />
              <source src={`${p.video}.mp4`} type="video/mp4" />
            </video>

            {/* Overlay de información optimizado */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
              <h3 className="text-xl md:text-2xl font-black uppercase text-white italic tracking-tighter">
                {p.title}
              </h3>
              <div className="h-1 w-12 bg-cyan-400 mt-2 group-hover:w-full transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};