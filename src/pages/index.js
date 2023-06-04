import { useEffect, useState } from 'react';
import HumiditySensorData from '../components/HumiditySensorData';
import TemperatureSensorData from '../components/TemperatureSensorData';

export default function Home() {
  // Code removed for brevity

  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-24">
      <div className="text-4xl font-bold mb-8 animate-fadeIn">Universidad de Deusto</div>
      <div className="text-2xl mb-8 animate-fadeIn">Arquitectura de Computadores</div>
      <div className="flex flex-wrap justify-center space-x-4">
        <HumiditySensorData />
        <TemperatureSensorData />
      </div>
    </main>
  );
}

