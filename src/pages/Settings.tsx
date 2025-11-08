export interface WeatherSettings {
  Sunrise: boolean;
  Sunset: boolean;
  Humidity: boolean;
  Pressure: boolean;
  Wind: boolean;
  Feels: boolean;
}

interface WeatherSettingsProps {
  settings: WeatherSettings;
  onClick: (key: keyof WeatherSettings) => void;
}

export default function Settings({ settings, onClick }: WeatherSettingsProps) {
  return (
    <div className="w-full rounded-2xl mt-6">
      <div className="flex flex-col items-center p-4 sm:p-6 bg-gray-700 rounded-2xl border-2 border-violet-900">
        <h2 className="text-white text-sm sm:text-lg md:text-2xl text-center font-bold mb-6">Settings</h2>
        <div className="pl-4 sm:pl-20 md:pl-30">
          <label key='Sunrise' className="max-w-300 grid grid-cols-2 cursor-pointer items-center">
            <span className="p-2 text-sm sm:text-lg md:text-2xl text-white mx-2 sm:mx-8">Sunrise</span>
            <input
              type="checkbox"
              checked={settings['Sunrise']}
              onChange={() => onClick('Sunrise')}
              className="p-2 w-6 h-6 md:w-10 md:h-10 cursor-pointer"
            />
          </label>
          <label key='Sunset' className="max-w-300 grid grid-cols-2 cursor-pointer items-center">
            <span className="p-2 text-sm sm:text-lg md:text-2xl text-white mx-2 sm:mx-8">Sunset</span>
            <input
              type="checkbox"
              checked={settings['Sunset']}
              onChange={() => onClick('Sunset')}
              className="p-2 w-6 h-6 md:w-10 md:h-10 cursor-pointer"
            />
          </label>
          <label key='Humidity' className="max-w-300 grid grid-cols-2 cursor-pointer items-center">
            <span className="p-2 text-sm sm:text-lg md:text-2xl text-white mx-2 sm:mx-8">Humidity</span>
            <input
              type="checkbox"
              checked={settings['Humidity']}
              onChange={() => onClick('Humidity')}
              className="p-2 w-6 h-6 md:w-10 md:h-10 cursor-pointer"
            />
          </label>
          <label key='Pressure' className="max-w-300 grid grid-cols-2 cursor-pointer items-center">
            <span className="p-2 text-sm sm:text-lg md:text-2xl text-white mx-2 sm:mx-8">Pressure</span>
            <input
              type="checkbox"
              checked={settings['Pressure']}
              onChange={() => onClick('Pressure')}
              className="p-2 w-6 h-6 md:w-10 md:h-10 cursor-pointer"
            />
          </label>
          <label key='Wind' className="max-w-300 grid grid-cols-2 cursor-pointer items-center">
            <span className="p-2 text-sm sm:text-lg md:text-2xl text-white mx-2 sm:mx-8">Wind Speed</span>
            <input
              type="checkbox"
              checked={settings['Wind']}
              onChange={() => onClick('Wind')}
              className="p-2 w-6 h-6 md:w-10 md:h-10 cursor-pointer"
            />
          </label>
          <label key='Feels' className="max-w-300 grid grid-cols-2 cursor-pointer items-center">
            <span className="p-2 text-sm sm:text-lg md:text-2xl text-white mx-2 sm:mx-8">Feels like</span>
            <input
              type="checkbox"
              checked={settings['Feels']}
              onChange={() => onClick('Feels')}
              className="p-2 w-6 h-6 md:w-10 md:h-10 cursor-pointer"
            />
          </label>
        </div>
      </div>
    </div>      
  )
}
