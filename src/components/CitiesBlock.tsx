import { useState } from "react";
import { useStorage } from "../storage/useStorage";

interface CityBlockProps {
  currentLocation: string;
  activeLocation: string | null;  
  onCurrentLocationClick(): void;
  onCityClick(city: string): Promise<void>;
  loading: boolean;
}

export default function CitiesBlock({ currentLocation, activeLocation, onCurrentLocationClick, onCityClick, loading }: CityBlockProps) {
  const [input, setInput] = useState<string>('');
  const { cities, addCity, deleteCity } = useStorage();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const cleanedInput = input.trim();

    if (cleanedInput) {
      addCity(cleanedInput);
      setInput('');
      onCityClick(cleanedInput);
    }
  };

  const handleCityDeleteClick = (city: string) => {
    deleteCity(city);

    if (city === activeLocation) {
      onCurrentLocationClick();
    };
  };

  return (
    <div className="flex flex-col p-4 sm:p-6 bg-gray-700 rounded-2xl border-2 border-violet-900">
      <div className="grid grid-cols-2 gap-2 px-0 sm:px-2 mb-8 items-center">
        <button disabled={loading} onClick={() => onCurrentLocationClick()} className={`text-white text-sm sm:text-lg md:text-2xl transition-all duration-300 ${activeLocation === currentLocation ? 'bg-slate-900 hover:bg-slate-800' : 'bg-blue-900 hover:bg-blue-800' } rounded-2xl p-2 cursor-pointer`}>Current location</button>
        <div className="flex justify-end">
          <p className="text-white text-sm sm:text-lg md:text-2xl">{currentLocation}</p>
        </div>
      </div>
      <h2 className="text-white text-sm sm:text-lg md:text-2xl text-center font-medium mb-6">Cities</h2>
      {cities.map(city => {
        return (
          <div key={city} className="grid grid-cols-2 gap-2 px-0 sm:px-2 mb-4 items-center">
            <button disabled={loading} onClick={() => onCityClick(city)} className={`text-white text-sm sm:text-lg md:text-2xl transition-all duration-300 ${activeLocation === city ? 'bg-slate-900 hover:bg-slate-800' : 'bg-blue-900 hover:bg-blue-800' } rounded-2xl p-2 cursor-pointer`}>{city}</button>
            <div className="flex justify-end">
              <button disabled={loading} onClick={() => handleCityDeleteClick(city)} className="text-white text-sm sm:text-lg md:text-2xl transition-all duration-300 bg-sky-900 hover:bg-sky-800 rounded-2xl py-2 px-4 cursor-pointer">Delete</button>
            </div>
          </div>
        );
      })}
      <form onSubmit={handleSubmit} className="flex flex-col mt-10 px-0 sm:px-2">
        <input
          disabled={loading}
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Enter city..."
          className="px-4 py-2 text-white bg-gray-600 placeholder-gray-900 border-2 border-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-800"
        />
        <button disabled={loading} type="submit" className="mt-2 text-white text-sm sm:text-lg md:text-2xl transition-all duration-300 bg-gray-800 hover:bg-blue-900 rounded-2xl p-2 cursor-pointer">Add city</button>
      </form>
    </div>
  );
};
