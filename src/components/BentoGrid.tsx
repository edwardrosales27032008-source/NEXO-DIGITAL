import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { 
    id: 1, 
    size: 'col-span-1 md:col-span-2 md:row-span-2', 
    video: '/JEAN _ Editor .mp4', 
    title: 'Jean Editor Pro'
  },
  { 
    id: 2, 
    size: 'col-span-1 md:col-span-1 md:row-span-1', 
    video: '/LIMAGLOSS _ CarWash.mp4', 
    title: 'Limagloss Carwash'
  },
  { 
    id: 3, 
    size: 'col-span-1 md:col-span-1 md:row-span-2', 
    video: '/SISTEMACRÍTICO _ Estilobrutalista.mp4', 
    title: 'Estilo Brutalista'
  },
  { 
    id: 4, 
    size: 'col-span-1 md:col-span-1 md:row-span-1', 
    video: '/UrubambaRoasters_CafedeEspecialidadLima.mp4', 
    title: 'Urubamba Roasters'
  }
];

export const BentoGrid = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto bg-transparent">
      {/* Título responsivo: text-3xl en móvil, text-5xl en desktop */}
      <h2 className="text-3xl md:text-5xl font-black mb-8 md:mb-16 uppercase tracking-tighter text-white text-center md:text-left">
        Mis Proyectos <span className="text-cyan-400">enfocados</span> en soluciones
      </h2>
      
      {/* Grid: 1 columna en móvil, 3 en desktop. auto-rows ajustado para móvil */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 auto-rows-[300px] md:auto-rows-[350px]">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0px 0px 30px rgba(34, 211, 238, 0.3)" 
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`relative group rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm ${p.size} w-full`}
          >
            {/* Efecto de Brillo */}
            <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
            
            {/* VIDEO: Optimizado para cubrir el área sin deformar */}
            <video 
              src={p.video} 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover md:object-contain z-10 relative transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Overlay de información: Visible siempre en móvil o al hover en desktop */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 z-20">
              <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-tighter">
                {p.title}
              </h3>
              <div className="h-1 w-12 bg-cyan-400 mt-2 md:group-hover:w-full transition-all duration-700" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};