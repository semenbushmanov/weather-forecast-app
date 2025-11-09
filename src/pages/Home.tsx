import { useState, useEffect } from "react";
import { type WeatherData, getMockWeatherByCity, getMockWeatherByCoordinates } from "../services/getWeather";
import WeatherCard from "../components/WeatherCard";
import CitiesBlock from "../components/CitiesBlock";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  async function loadWeatherData(lat: number, lon: number) {
    try {
      setLoading(true);
      setError(null);
      const weather = await getMockWeatherByCoordinates(lat, lon);
      setWeather(weather);
    } catch (err) {
      setError(`Failed to load weather data: ${String(err)}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWeatherData(27.34, 35.87);  
  }, []);

  useEffect(() => {
    if (weather) {
      setActiveLocation(weather.name);
    }
  }, [weather]);

  async function loadWeatherDataByCity(city: string) {
    try {
      setLoading(true);
      setError(null);
      const weather = await getMockWeatherByCity(city);
      setWeather(weather);
    } catch (err) {
      setError(`Failed to load weather data in the city: ${String(err)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-2 w-full rounded-2xl mt-6">        
      <CitiesBlock currentLocation="Sevastopol" onCityClick={loadWeatherDataByCity} onCurrentLocationClick={loadWeatherData} activeLocation={activeLocation} />
      {loading && <LoadingSpinner />}
      {error && <p className="text-red-500">{error}</p>}
      {weather && !loading && <WeatherCard data={weather} />}
    </div>
  );
};
