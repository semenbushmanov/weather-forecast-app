const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

export interface WeatherData {
  name: string;
  main: {
    temp: number
    feels_like: number
    humidity: number
    pressure: number
  };
  wind: {
    speed: number
  };
  weather: Array<{
    main: string
    description: string
  }>;
  sys: {
    sunrise: number
    sunset: number
  };
  coord: {
    lat: number
    lon: number
  };
};

export const getWeather = {
  byCoordinates: async (lat: number, lon: number): Promise<WeatherData> => {
    const response = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch weather data by coordinates.');
    }
    
    return response.json();
  },

  byCity: async (city: string): Promise<WeatherData> => {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch weather data by city.');
    }
    
    return response.json();
  }
};
