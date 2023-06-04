import { useEffect, useState } from 'react';
import api from '../services/api'; 

function TemperatureSensorData() {
  const [loading, setLoading] = useState(true);
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const fetchTemperatureData = async () => {
      const data = await api.getTemperatureData();
      setTemperature(data.temperature);
      setLoading(false);
    };

    fetchTemperatureData();
  }, []);

  return (
    <div className="bg-red-dark rounded-md p-4 shadow-none hover:shadow-red text-center transition-all duration-500 ease-in-out transform hover:scale-105">
      <h2 className="text-2xl font-bold mb-2 text-white">Datos del sensor de temperatura:</h2>
      {loading ? (
        <p className="text-lg text-white">Cargando datos...</p>
      ) : (
        <p className="text-3xl font-bold text-red-500">{temperature ? `${temperature}°C` : 'N/A'}</p>
      )}
    </div>
  );
}

export default TemperatureSensorData;


