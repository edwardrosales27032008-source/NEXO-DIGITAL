import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    size: 'col-span-1 md:col-span-2 md:row-span-2',
    // Nombre exacto con los 2 espacios de tu captura
    video: '/public/Jean   Editor', 
    title: 'Jean Editor Pro',
  },
  {
    id: 2,
    size: 'col-span-1 md:col-span-1 md:row-span-1',
    // Nombre exacto con los 2 espacios
    video: '/public/Limagloss   Carwash', 
    title: 'Limagloss Carwash',
  },
  {
    id: 3,
    size: 'col-span-1 md:col-span-1 md:row-span-1',
    // Nombre exacto con el espacio
    video: '/public/Sistemacrítico   Estilobrutalista',
    title: 'Estilo Brutalista',
  },
  {
    id: 4,
    size: 'col-span-1 md:col-span-1 md:row-span-1',
    // Nombre exacto
    video: '/public/Urubambaroasters Cafedeespecialidadlima',
    title: 'Urubamba Roasters',
  },
];

export const BentoGrid = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 auto-rows-[300px]">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={`relative group rounded-[2rem] overflow-hidden border border-white/10 ${p.size}`}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              {/* Aquí se le añade el .mp4 automáticamente */}
              <source src={`${p.video}.mp4`} type="video/mp4" />
            </video>

            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-black text-white uppercase italic">{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};