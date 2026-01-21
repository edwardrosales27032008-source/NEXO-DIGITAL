import React, { useEffect, useState } from 'react';

interface CardProps {
  titulo: string;
  subtitulo: string;
  color?: string;
}

export const Sobremicard = ({ titulo, subtitulo, color }: CardProps) => {
  // Inicializamos con 0 si es la tarjeta de Lógica
  const isLogica = titulo.includes("100") || subtitulo.toLowerCase() === "lógica";
  const [valor, setValor] = useState(isLogica ? 0 : titulo.replace('%', ''));
  const [completado, setCompletado] = useState(false);

  useEffect(() => {
    if (!isLogica) return;

    let cuenta = 0;
    const meta = 100;
    const duracion = 2000; // 2 segundos
    const intervalo = duracion / meta;

    const timer = setInterval(() => {
      cuenta++;
      setValor(cuenta);

      if (cuenta >= meta) {
        clearInterval(timer);
        setCompletado(true);
      }
    }, intervalo);

    return () => clearInterval(timer);
  }, [isLogica]);

  return (
    <div className="relative group flex-1 md:flex-none min-w-[120px] md:min-w-[140px]">
      {/* Resplandor neón al terminar */}
      <div className={`absolute inset-0 rounded-xl transition-all duration-1000 z-0 
        ${completado ? 'shadow-[0_0_40px_rgba(34,211,238,0.4)] border-cyan-400/50' : 'shadow-none'}`}>
      </div>

      <div className="relative flex flex-col justify-center items-center h-32 md:h-40 p-4 md:p-6 rounded-xl bg-slate-900 border border-white/10 overflow-hidden transition-all duration-300 group-hover:scale-105">
        
        {/* Borde Giratorio Neón */}
        <div className="absolute inset-0 rounded-xl p-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 [mask-image:linear-gradient(white,transparent_50%)]">
          <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] animate-[spin_3s_linear_infinite]"></div>
        </div>

        {/* Fondo Interno */}
        <div className="absolute inset-[1.5px] bg-slate-950 rounded-xl z-10 group-hover:bg-slate-900 transition-colors"></div>

        <div className="relative z-20 text-center">
          <p className={`text-2xl md:text-4xl font-black italic leading-none transition-all duration-500
            ${completado ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'text-white'}`}>
            {valor}{isLogica ? '%' : ''}
          </p>
          <p className={`text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] mt-2 
            ${color === 'cyan' ? 'text-cyan-400' : 'text-slate-500'}`}>
            {subtitulo}
          </p>
        </div>
      </div>
    </div>
  );
};