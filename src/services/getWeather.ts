export interface WeatherData {
  name: string
  main: {
    temp: number
    feels_like: number
    humidity: number
    pressure: number
  }
  wind: {
    speed: number
  }
  weather: Array<{
    main: string
    description: string
  }>
  sys: {
    sunrise: number
    sunset: number
  }
  coord: {
    lat: number
    lon: number
  }
}
