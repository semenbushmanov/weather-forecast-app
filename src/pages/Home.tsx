import { useState, useEffect } from "react";
import { type WeatherData, getMockWeatherByCoordinates } from "../services/getWeather";
import WeatherCard from "../components/WeatherCard";
import CitiesBlock from "../components/CitiesBlock";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
    }

    loadWeatherData(27.34, 35.87);
  }, []);

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-2 w-full rounded-2xl mt-6">        
      <CitiesBlock currentLocation="Sevastopol" cities={['Moscow', 'Amsterdam', 'Paris', 'London']} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  )
}
