import React from 'react';
import { motion } from 'framer-motion';

const projects = [
{
    id: 1,
    size: 'col-span-1 md:col-span-2 md:row-span-2',
    // Usamos el nombre exacto con espacios que sale en tu VS Code
    video: '/public/JEAN _ Editor ', 
    title: 'Jean Editor Pro',
  },
  {
    id: 2,
    size: 'col-span-1 md:col-span-1 md:row-span-1',
    video: '/public/LIMAGLOSS _ CarWash',
    title: 'Limagloss Carwash',
  },
  {
    id: 3,
    size: 'col-span-1 md:col-span-1 md:row-span-1',
    video: '/public/SISTEMACRíTICO _ EstiloBrutalista',
    title: 'Estilo Brutalista',
  },
  {
    id: 4,
    size: 'col-span-1 md:col-span-1 md:row-span-1',
    video: '/public/UrubambaRoasters_CafeDeEspecialidadLima',
    title: 'Urubamba Roasters',
  },
];

// ... (tus proyectos se quedan igual arriba)

export const BentoGrid = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto bg-transparent">
      {/* Título */}
      <h2 className="text-3xl md:text-5xl font-black mb-8 md:mb-16 uppercase tracking-tighter text-white">
        Mis Proyectos <span className="text-cyan-400">enfocados</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 auto-rows-[300px]">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`relative group rounded-[2rem] overflow-hidden border border-white/10 ${p.size}`}
          >
<video
  autoPlay
  muted
  loop
  playsInline
  preload="auto" // <--- CAMBIO: Ahora sí mostrará el primer frame
  className="w-full h-full object-cover z-0 relative"
>
  <source src={`${p.video}.webm`} type="video/webm" />
  <source src={`${p.video}.mp4`} type="video/mp4" />
</video>

            {/* Overlay - Asegúrate de que tenga un fondo sólido para que Lighthouse no joda con el contraste */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-black via-black/20 to-transparent">
               <h3 className="text-xl font-black text-white uppercase italic">{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};