import { useState } from 'react';

function DisplayControl({ displayText, onDisplayChange }) {
  const [inputText, setInputText] = useState(displayText || '');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onDisplayChange(inputText);
  };

  return (
    <div className="animate-slideInLeft">
      <h2 className="text-2xl font-bold mb-2">Control de pantalla:</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          className="p-2 rounded-md shadow-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full py-2 rounded-md bg-gray-900 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105 transition-all duration-300"
        >
          Actualizar pantalla
        </button>
      </form>
    </div>
  );
}

export default DisplayControl;

