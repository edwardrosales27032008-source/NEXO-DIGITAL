import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    size: 'col-span-1 md:col-span-2 md:row-span-2',
    image: '/img/proyecto_01.webp', // Cambia por tus rutas reales
    title: 'Branding Identidad Corporativa',
    category: 'Diseño Estratégico'
  },
  {
    id: 2,
    size: 'col-span-1 md:col-span-1 md:row-span-1',
    image: '/img/proyecto_02.webp',
    title: 'E-commerce High-End',
    category: 'Desarrollo Web'
  },
  {
    id: 3,
    size: 'col-span-1 md:col-span-1 md:row-span-1',
    image: '/img/proyecto_03.webp',
    title: 'Campaña Digital Nexo',
    category: 'Marketing'
  },
];

export const BentoGrid = () => {
  return (
    <section className="py-20 bg-black" id="proyectos">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título con jerarquía */}
        <div className="mb-12 border-l-4 border-cyan-500 pl-6">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
            NUESTROS <span className="text-cyan-500">PROYECTOS</span>
          </h2>
          <p className="text-gray-400 mt-2 font-medium">Soluciones digitales que rompen el molde.</p>
        </div>

        {/* Grid Estilo Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {projects.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.98 }}
              className={`relative group overflow-hidden border border-white/10 ${p.size}`}
            >
              {/* Imagen de Fondo - Sin border-radius por tu estilo industrial */}
              <img 
                src={p.image} 
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay de Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Contenido de la Tarjeta */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-cyan-500 text-xs font-bold tracking-[3px] mb-2 uppercase">
                  {p.category}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase italic leading-none">
                  {p.title}
                </h3>
                
                {/* Botón que aparece en Hover */}
                <div className="mt-4 overflow-hidden">
                   <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-white text-xs font-bold border-b-2 border-cyan-500 pb-1 cursor-pointer">
                        VER CASO DE ESTUDIO +
                      </span>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};