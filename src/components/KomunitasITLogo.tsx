
import React from 'react';
import { Wifi, Server, Database, Code, Cloud } from 'lucide-react';

const KomunitasITLogo = () => {
  return (
    <div className="relative inline-flex flex-col justify-center items-center group">
      {/* Original Logo */}
      <div className="relative">
        <img 
          src="/lovable-uploads/ca64750e-7dcd-47aa-8599-d31e8ed9053b.png" 
          alt="Komunitas IT SMKN 1 Nglegok" 
          className="w-16 h-16 object-contain z-10"
        />
        
        {/* Tech decoration elements that animate on hover */}
        <div className="absolute -z-0 w-full h-full">
          <div className="absolute -top-2 -left-2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-3 opacity-0 group-hover:opacity-100">
            <Server className="h-4 w-4 text-blue-500" />
          </div>
          <div className="absolute -top-2 -right-2 transform translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-3 opacity-0 group-hover:opacity-100">
            <Database className="h-4 w-4 text-green-500" />
          </div>
          <div className="absolute -bottom-2 -left-2 transform -translate-x-1/2 translate-y-1/2 transition-all duration-500 group-hover:scale-110 group-hover:translate-y-3 opacity-0 group-hover:opacity-100">
            <Code className="h-4 w-4 text-purple-500" />
          </div>
          <div className="absolute -bottom-2 -right-2 transform translate-x-1/2 translate-y-1/2 transition-all duration-500 group-hover:scale-110 group-hover:translate-y-3 opacity-0 group-hover:opacity-100">
            <Wifi className="h-4 w-4 text-red-500" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:scale-150 opacity-0 group-hover:opacity-20">
            <Cloud className="h-12 w-12 text-blue-400" />
          </div>
        </div>
        
        {/* Glowing effect on hover */}
        <div className="absolute inset-0 rounded-full bg-blue-500/0 filter blur-xl transition-all duration-500 group-hover:bg-blue-500/20 z-0"></div>
      </div>
      
      {/* Experience details below the logo */}
      <div className="mt-4 text-center space-y-2 max-w-[280px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-sm font-medium text-primary">Community Experience</p>
        <ul className="text-xs text-muted-foreground space-y-1.5">
          <li className="animate-fade-in animate-delay-100">Active member at Komunitas IT SMKN 1 NGLEGOK</li>
          <li className="animate-fade-in animate-delay-200">Ketua Pelaksana Outbound & Sertijab Komunitas IT SMKN 1 NGLEGOK | 2024</li>
          <li className="animate-fade-in animate-delay-300">Penanggung Jawab Sie Human Resource</li>
        </ul>
      </div>
    </div>
  );
};

export default KomunitasITLogo;
