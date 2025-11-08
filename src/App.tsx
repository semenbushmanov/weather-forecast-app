import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from "react";
import Home from './pages/Home';
import Settings from './pages/Settings';
import { type WeatherSettings } from './pages/Settings';

function App() {
  const [settings, setSettings] = useState<WeatherSettings>({
    Sunrise: false,
    Sunset: false,
    Humidity: false,
    Pressure: false,
    Wind: false,
    Feels: false
  });

  const handleSettingClick = (key: keyof WeatherSettings) => {
    setSettings(old => ({
      ...old,
      [key]: !old[key]
    }))
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-linear-to-br from-cyan-100 via-blue-100 to-indigo-100 flex justify-center p-2 sm:p-4">
        <div className="container mx-auto bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-2xl">
          <div className="p-2 sm:p-6 md:p-10 flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Weather forecast
            </h1>
            <div className="grid grid-cols-2 gap-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? 'bg-slate-900' : 'bg-slate-800 hover:bg-blue-900'} 
                  p-4 px-6 sm:px-16 md:px-20 text-1xl md:text-2xl rounded-lg transition-all duration-300 text-white text-center`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  `${isActive ? 'bg-slate-900' : 'bg-slate-800 hover:bg-blue-900'} 
                  p-4 px-6 sm:px-16 md:px-20 text-1xl md:text-2xl rounded-lg transition-all duration-300 text-white text-center`
                }
              >
                Settings
              </NavLink>
            </div>
            <Routes>
              <Route path="/" element={<Home settings={settings} />} />
              <Route path="/settings" element={<Settings settings={settings} onClick={handleSettingClick} />} />
            </Routes>
          </div>
        </div>      
      </div>
    </BrowserRouter>
  )
}

export default App
