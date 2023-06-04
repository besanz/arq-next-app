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

const getDisplayData = async () => {
  try {
    const response = await fetch(`${API_URL}/display`);
    if (!response.ok) {
      throw new Error('Failed to fetch display data');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching display data:', error);
    return { text: 'No display available' };
  }
};

const updateDisplayData = async (newDisplayText) => {
  try {
    const response = await fetch(`${API_URL}/display`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newDisplayText }),
    });
    if (!response.ok) {
      throw new Error('Failed to update display data');
    }
    return response.json();
  } catch (error) {
    console.error('Error updating display data:', error);
    return { message: 'Failed to update display' };
  }
};

const api = { getHumidityData, getTemperatureData, getDisplayData, updateDisplayData };

export default api;
