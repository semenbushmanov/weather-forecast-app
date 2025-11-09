import { useState, useEffect } from "react";
import { type WeatherData, getWeather } from "../services/getWeather";
import WeatherCard from "../components/WeatherCard";
import CitiesBlock from "../components/CitiesBlock";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorCard from "../components/ErrorCard";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [userCoordinates, setUserCoordinates] = useState<[number, number] | null>(null);
  const [activeLocation, setActiveLocation] = useState<string>('...');  
  const [currentLocation, setCurrentLocation] = useState<string>('...');

  async function loadWeatherData(lat: number, lon: number) {
    try {
      setLoading(true);
      setError(null);
      const weather = await getWeather.byCoordinates(lat, lon);
      setWeather(weather);
    } catch (err) {
      setError('Failed to load weather data: ' + err);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  function getPositionSuccess(position: GeolocationPosition): void {
    setUserCoordinates([position.coords.latitude, position.coords.longitude]);
  };

  function getPositionError() {
    setLoading(false);
    setError('Please, turn on geolocation and restart application.');
  };

  function onCurrentLocationClick() {
    if (userCoordinates) {
      loadWeatherData(userCoordinates[0], userCoordinates[1]);
    } else {
      setError('Please, turn on geolocation and restart application.');
      setWeather(null);
      setActiveLocation('...');
    }
  };

  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPositionSuccess, getPositionError);
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    if (userCoordinates) {
      loadWeatherData(userCoordinates[0], userCoordinates[1]);
    }
  }, [userCoordinates]);

  useEffect(() => {
    if (weather) {
      setActiveLocation(weather.name);
    }
  }, [weather]);

  useEffect(() => {
    if (userCoordinates && weather && currentLocation === '...') {
      setCurrentLocation(weather.name);
    }
  }, [userCoordinates, weather, currentLocation]);

  async function loadWeatherDataByCity(city: string) {
    try {
      setLoading(true);
      setError(null);
      const weather = await getWeather.byCity(city);
      setWeather(weather);
    } catch (err) {
      setError('Failed to load weather data by city: ' + err);
      setWeather(null);
      setActiveLocation(city);
    } finally {
      setLoading(false);      
    }
  };

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-2 w-full rounded-2xl mt-6">        
      <CitiesBlock currentLocation={currentLocation} onCityClick={loadWeatherDataByCity} onCurrentLocationClick={onCurrentLocationClick} activeLocation={activeLocation} loading={loading} />
      {loading && <LoadingSpinner />}
      {error && <ErrorCard message={error} />}
      {weather && !loading && <WeatherCard data={weather} />}
    </div>
  );
};
