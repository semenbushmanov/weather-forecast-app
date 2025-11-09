import { useState, useEffect } from 'react';
import { type WeatherSettings } from '../pages/Settings';

export const useSettingsStorage = () => {
  const [settings, setSettings] = useState<WeatherSettings>({
    Sunrise: false,
    Sunset: false,
    Humidity: false,
    Pressure: false,
    Wind: false,
    Feels: false
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem('weather-settings');
    if (savedSettings) setSettings(JSON.parse(savedSettings));
  }, []);

  const handleSettingClick = (key: keyof WeatherSettings) => {
    const updatedSettings = {...settings, [key]: !settings[key]};
    setSettings(updatedSettings);
    localStorage.setItem('weather-settings', JSON.stringify(updatedSettings));
  };

  return { settings, handleSettingClick };
};
