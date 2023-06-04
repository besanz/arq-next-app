const API_URL = 'http://192.168.1.157:5000';

const getHumidityData = async () => {
  try {
    const response = await fetch(`${API_URL}/humidity`);
    if (!response.ok) {
      throw new Error('Failed to fetch humidity data');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching humidity data:', error);
    return { humidity: 'N/A' };
  }
};

const getTemperatureData = async () => {
  try {
    const response = await fetch(`${API_URL}/temperature`);
    if (!response.ok) {
      throw new Error('Failed to fetch temperature data');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching temperature data:', error);
    return { temperature: 'N/A' };
  }
};

const getLEDState = async () => {
  try {
    const response = await fetch(`${API_URL}/led`);
    if (!response.ok) {
      throw new Error('Failed to fetch LED state');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching LED state:', error);
    return { on: false, color: [0, 0, 0] };
  }
};

const setLEDState = async (newLEDState) => {
  try {
    const response = await fetch(`${API_URL}/led`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLEDState),
    });
    if (!response.ok) {
      throw new Error('Failed to update LED state');
    }
  } catch (error) {
    console.error('Error updating LED state:', error);
  }
};

const api = {
  getHumidityData,
  getTemperatureData,
  getLEDState,
  setLEDState,
};

export default api;

