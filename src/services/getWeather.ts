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

export function getMockWeatherByCoordinates(lat: number, lon: number): Promise<WeatherData> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (lat && lon) {
        resolve({
            name: 'Sevastopol',
            coord: {
              lat: lat,
              lon: lon,
            },
            main: {
              temp: 15,
              humidity: 60,
              pressure: 1021,
              feels_like: 14
            },
            wind: {
              speed: 2.02
            },
            weather: [
              {
                main: 'Sunny',
                description: 'quite nice'
              }
            ],            
            sys: {
              sunrise: 1726636384,
              sunset: 1726680975
            }
        });
      } else {
        reject({
          status: 404,
          message: 'Not Found'
        });
      }
    }, 1000);
  });
};
