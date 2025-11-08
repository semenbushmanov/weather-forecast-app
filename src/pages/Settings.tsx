export default function Settings() {
  return (
    <div className="w-full rounded-2xl mt-6">
      <div className="flex flex-col items-center p-4 sm:p-6 bg-gray-700 rounded-2xl border-2 border-violet-900">
        <h2 className="text-white text-sm sm:text-lg md:text-2xl text-center font-bold mb-6">Settings</h2>
        <div className="pl-4 sm:pl-20 md:pl-30">
          <label key='showSunset' className="max-w-300 grid grid-cols-2 cursor-pointer items-center">
            <span className="p-2 text-sm sm:text-lg md:text-2xl text-white mx-2 sm:mx-8">Sunrise</span>
            <input
              type="checkbox"
              checked
              className="p-2 w-6 h-6 md:w-10 md:h-10 cursor-pointer"
            />
          </label>
          <label key='showSunset' className="max-w-300 grid grid-cols-2 cursor-pointer items-center">
            <span className="p-2 text-sm sm:text-lg md:text-2xl text-white mx-2 sm:mx-8">Sunset</span>
            <input
              type="checkbox"
              checked
              className="p-2 w-6 h-6 md:w-10 md:h-10 cursor-pointer"
            />
          </label>
          <label key='showHumidity' className="max-w-300 grid grid-cols-2 cursor-pointer items-center">
            <span className="p-2 text-sm sm:text-lg md:text-2xl text-white mx-2 sm:mx-8">Humidity</span>
            <input
              type="checkbox"
              checked
              className="p-2 w-6 h-6 md:w-10 md:h-10 cursor-pointer"
            />
          </label>
          <label key='showHumidity' className="max-w-300 grid grid-cols-2 cursor-pointer items-center">
            <span className="p-2 text-sm sm:text-lg md:text-2xl text-white mx-2 sm:mx-8">Pressure</span>
            <input
              type="checkbox"
              checked
              className="p-2 w-6 h-6 md:w-10 md:h-10 cursor-pointer"
            />
          </label>
          <label key='showHumidity' className="max-w-300 grid grid-cols-2 cursor-pointer items-center">
            <span className="p-2 text-sm sm:text-lg md:text-2xl text-white mx-2 sm:mx-8">Wind Speed</span>
            <input
              type="checkbox"
              checked
              className="p-2 w-6 h-6 md:w-10 md:h-10 cursor-pointer"
            />
          </label>
          <label key='showHumidity' className="max-w-300 grid grid-cols-2 cursor-pointer items-center">
            <span className="p-2 text-sm sm:text-lg md:text-2xl text-white mx-2 sm:mx-8">Feels like</span>
            <input
                type="checkbox"
                checked
              className="p-2 w-6 h-6 md:w-10 md:h-10 cursor-pointer"
            />
          </label>
        </div>
      </div>
    </div>      
  )
}
