import { useEffect, useState } from 'react';
import api from '../services/api'; 

function HumiditySensorData() {
  const [loading, setLoading] = useState(true);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    const fetchHumidityData = async () => {
      const data = await api.getHumidityData();
      setHumidity(data.humidity);
      setLoading(false);
    };

    // Cada 10 segundos
    fetchHumidityData();
    const intervalId = setInterval(fetchHumidityData, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-blue-dark rounded-md p-4 shadow-none hover:shadow-blue text-center transition-all duration-500 ease-in-out transform hover:scale-105">
      <h2 className="text-2xl font-bold mb-2 text-white">Datos del sensor de humedad:</h2>
      {loading ? (
        <p className="text-lg text-white">Cargando datos...</p>
      ) : (
        <p className="text-3xl font-bold text-blue-500">{humidity ? `${humidity}%` : 'N/A'}</p>
      )}
    </div>
  );
}

export default HumiditySensorData;





  