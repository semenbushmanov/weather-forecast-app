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

  // byCoordinates: (lat: number, lon: number): Promise<WeatherData> =>
  //   fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(response => response.json()),

  // byCity: (city: string): Promise<WeatherData> =>
  //   fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`).then(response => response.json())
};

// export function getMockWeatherByCoordinates(lat: number, lon: number): Promise<WeatherData> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (lat && lon) {
//         resolve({
//             name: 'Sevastopol',
//             coord: {
//               lat: lat,
//               lon: lon,
//             },
//             main: {
//               temp: 15,
//               humidity: 60,
//               pressure: 1021,
//               feels_like: 14
//             },
//             wind: {
//               speed: 2.02
//             },
//             weather: [
//               {
//                 main: 'Sunny',
//                 description: 'quite nice'
//               }
//             ],            
//             sys: {
//               sunrise: 1726636384,
//               sunset: 1726680975
//             }
//         });
//       } else {
//         reject({
//           status: 404,
//           message: 'Not Found'
//         });
//       }
//     }, 1000);
//   });
// };

// export function getMockWeatherByCity(city: string): Promise<WeatherData> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (city && city != 'Notexistburg') {
//         resolve({
//             name: city,
//             coord: {
//               lat: 34.56,
//               lon: 44.07,
//             },
//             main: {
//               temp: 15,
//               humidity: 60,
//               pressure: 1021,
//               feels_like: 14
//             },
//             wind: {
//               speed: 2.02
//             },
//             weather: [
//               {
//                 main: 'Sunny',
//                 description: 'quite nice'
//               }
//             ],            
//             sys: {
//               sunrise: 1726636384,
//               sunset: 1726680975
//             }
//         });
//       } else {
//         reject({
//           status: 404,
//           message: 'Not Found'
//         });
//       }
//     }, 1000);
//   });
// };
