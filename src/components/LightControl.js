import { useEffect, useState } from 'react';
import { ChromePicker } from 'react-color';
import api from '../services/api';

export default function LightControl() {
  const [ledState, setLEDState] = useState({ on: false, color: [0, 0, 0] });

  const updateColor = (color) => {
    const newLEDState = { ...ledState, color: [color.rgb.r, color.rgb.g, color.rgb.b] };
    api.setLEDState(newLEDState).then(() => setLEDState(newLEDState));
  };

  const toggleLED = () => {
    const newLEDState = { ...ledState, on: !ledState.on };
    api.setLEDState(newLEDState).then(() => setLEDState(newLEDState));
  };

  return (
    <div>
      <ChromePicker color={ledState.color} onChange={updateColor} />
      <button onClick={toggleLED}>{ledState.on ? 'Turn Off' : 'Turn On'}</button>
    </div>
  );
}
