import { useSettingsStorage } from "../storage/useSettingsStorage";

export interface WeatherSettings {
  Sunrise: boolean;
  Sunset: boolean;
  Humidity: boolean;
  Pressure: boolean;
  Wind: boolean;
  Feels: boolean;
};

const WEATHER_OPTIONS = ['Sunrise', 'Sunset', 'Humidity', 'Pressure', 'Wind', 'Feels'] as const satisfies readonly (keyof WeatherSettings)[];

export default function Settings() {
  const { settings, handleSettingClick } = useSettingsStorage();

  return (
    <div className="w-full rounded-2xl mt-6">
      <div className="flex flex-col items-center p-4 sm:p-6 bg-gray-700 rounded-2xl border-2 border-violet-900">
        <h2 className="text-white text-sm sm:text-lg md:text-2xl text-center font-bold mb-6">Settings</h2>
        <div className="pl-4 sm:pl-20 md:pl-30">
          {WEATHER_OPTIONS.map((option) => {
            return (
              <label key={option} className="max-w-300 grid grid-cols-2 cursor-pointer items-center">
                <span className="p-2 text-sm sm:text-lg md:text-2xl text-white mx-2 sm:mx-8">
                  {option === 'Wind' && 'Wind Speed'}
                  {option === 'Feels' && 'Feels like'}
                  {option != 'Wind' && option != 'Feels' && option}
                </span>
                <input
                  type="checkbox"
                  checked={settings[option]}
                  onChange={() => handleSettingClick(option)}
                  className="p-2 w-6 h-6 md:w-10 md:h-10 cursor-pointer"
                />
              </label>
            );
          })}
        </div>
      </div>
    </div>      
  );
};
