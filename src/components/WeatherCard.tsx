import { type WeatherData } from "../services/getWeather";
import { useSettingsStorage } from "../storage/useSettingsStorage";

interface WeatherCardProps {
  data: WeatherData;
};

export default function WeatherCard({ data }: WeatherCardProps) {
  const { settings } = useSettingsStorage();

  return (
    <div className="flex flex-col p-4 sm:p-6 bg-gray-700 rounded-2xl border-2 border-violet-900">
      <h2 className="text-white text-sm sm:text-lg md:text-2xl text-center font-bold mb-6">{data.name}</h2>
      <div className="flex flex-col p-8 bg-gray-300 shadow-md rounded-2xl text-center">
        <p className="text-5xl text-black font-semibold mb-2">{data.main.temp}°C</p>
        <p className="text-3xl md:text-4xl text-purple-900 font-semibold mb-2">{data.weather[0].main}</p>      
        <p className="text-1xl text-gray-700 mb-4">{data.weather[0].description}</p>
        {settings['Sunrise'] && (
          <p className="text-sm sm:text-lg md:text-2xl text-orange-600 mb-2">Sunrise:{" "}
            {new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-EN", {hour: "2-digit", minute: "2-digit",})}
          </p>
        )}
        {settings['Sunset'] && (
          <p className="text-sm sm:text-lg md:text-2xl text-red-600 mb-2">Sunset:{" "}
            {new Date(data.sys.sunset * 1000).toLocaleTimeString("en-EN", {hour: "2-digit", minute: "2-digit",})}
          </p>
        )}
        {settings['Humidity'] && (<p className="text-sm sm:text-lg md:text-2xl text-violet-700 mb-2">Humidity: {data.main.humidity}%</p>)}
        {settings['Pressure'] && (<p className="text-sm sm:text-lg md:text-2xl text-violet-700 mb-2">Pressure: {data.main.pressure} hPa</p>)}
        {settings['Wind'] && (<p className="text-sm sm:text-lg md:text-2xl text-violet-700 mb-2">Wind speed: {data.wind.speed} m/s</p>)}
        {settings['Feels'] && (<p className="text-sm sm:text-lg md:text-2xl text-green-700 mb-2">Feels like: {data.main.feels_like}°C</p>)}
      </div>
    </div>
  );
};
