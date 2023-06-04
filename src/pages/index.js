import { useEffect, useState } from 'react';
import HumiditySensorData from '../components/HumiditySensorData';
import TemperatureSensorData from '../components/TemperatureSensorData';
import LightControl from '../components/LightControl';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-24">
      <div className="text-4xl font-bold mb-8 animate-fadeIn">Universidad de Deusto</div>
      <div className="text-2xl mb-8 animate-fadeIn">Datos a tiempo real de la plantación:</div>
      <div className="flex flex-wrap justify-center space-x-4">
        <HumiditySensorData />
        <TemperatureSensorData />
      </div>
      <div className="text-2xl mb-8 animate-fadeIn">Iluminación a tiempo real:</div>
      <div className="flex flex-wrap justify-center space-x-4">
        <LightControl />
      </div>
    </main>
  );
}



