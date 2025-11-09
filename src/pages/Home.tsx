import { useState, useEffect } from "react";
import { type WeatherData, getMockWeatherByCity, getMockWeatherByCoordinates } from "../services/getWeather";
import WeatherCard from "../components/WeatherCard";
import CitiesBlock from "../components/CitiesBlock";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorCard from "../components/ErrorCard";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [userCoordinates, setUserCoordinates] = useState<[number, number] | null>(null);
  const [currentLocation, setCurrentLocation] = useState<string>('...');

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
      setCurrentLocation('...');
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
    if (userCoordinates && weather) {
      if (userCoordinates[0] == weather.coord.lat && userCoordinates[1] == weather.coord.lon) {
        setCurrentLocation(weather.name);
      }
    }
  }, [userCoordinates, weather]);

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

  const latitude = 'Latitude: ' + (userCoordinates? userCoordinates[0] : 'unavailable');
  const longitude = 'Longitude: ' + (userCoordinates? userCoordinates[1] : 'unavailable');

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-2 w-full rounded-2xl mt-6">        
      <CitiesBlock currentLocation={currentLocation} onCityClick={loadWeatherDataByCity} onCurrentLocationClick={onCurrentLocationClick} activeLocation={activeLocation} loading={loading} />
      {loading && <LoadingSpinner />}
      {error && <ErrorCard message={error} />}
      {weather && !loading && <WeatherCard data={weather} />}
      <p className="text-white text-3xl m 20">{latitude}</p>
      <p className="text-white text-3xl m 20">{longitude}</p>
    </div>
  );
};
