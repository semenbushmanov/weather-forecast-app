import { useState, useEffect } from 'react'

export const useStorage = () => {
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    const savedCities = localStorage.getItem('weather-cities')
    if (savedCities) setCities(JSON.parse(savedCities))
  }, []);

  const addCity = (city: string) => {
    const updatedCities = [...cities, city];
    setCities(updatedCities)
    localStorage.setItem('weather-cities', JSON.stringify(updatedCities))
  };

  const deleteCity = (city: string) => {
    const updatedCities = cities.filter(c => c !== city)
    setCities(updatedCities)
    localStorage.setItem('weather-cities', JSON.stringify(updatedCities))
  };

  return { cities, addCity, deleteCity }
}
