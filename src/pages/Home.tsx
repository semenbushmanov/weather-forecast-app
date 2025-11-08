export default function Home() {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-2 w-full rounded-2xl mt-6">
      <div className="flex flex-col p-4 sm:p-6 bg-gray-700 rounded-2xl border-2 border-violet-900">
        <div className="grid grid-cols-2 gap-2 px-2 mb-8 items-center">
          <button className=" text-white text-sm sm:text-lg md:text-2xl transition-all duration-300 bg-slate-900 hover:bg-blue-900 rounded-2xl p-2 cursor-pointer">Current location</button>
          <div className="flex justify-end">
            <p className="text-white text-sm sm:text-lg md:text-2xl">Sevastopol</p>
          </div>
        </div>
        <h2 className="text-white text-sm sm:text-lg md:text-2xl text-center font-medium mb-6">Cities</h2>
        <div className="grid grid-cols-2 gap-2 px-2 mb-4 items-center">
          <button className="text-white text-sm sm:text-lg md:text-2xl transition-all duration-300 bg-blue-900 hover:bg-blue-800 rounded-2xl p-2 cursor-pointer">Moscow</button>
          <div className="flex justify-end">
            <button className="text-white text-sm sm:text-lg md:text-2xl transition-all duration-300 bg-sky-900 hover:bg-sky-800 rounded-2xl py-2 px-4 cursor-pointer">Delete</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 px-2 mb-4 items-center">
          <button className="text-white text-sm sm:text-lg md:text-2xl transition-all duration-300 bg-blue-900 hover:bg-blue-800 rounded-2xl p-2 cursor-pointer">Amsterdam</button>
          <div className="flex justify-end">
            <button className="text-white text-sm sm:text-lg md:text-2xl transition-all duration-300 bg-sky-900 hover:bg-sky-800 rounded-2xl py-2 px-4 cursor-pointer">Delete</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 px-2 mb-4 items-center">
          <button className="text-white text-sm sm:text-lg md:text-2xl transition-all duration-300 bg-blue-900 hover:bg-blue-800 rounded-2xl p-2 cursor-pointer">Paris</button>
          <div className="flex justify-end">
            <button className="text-white text-sm sm:text-lg md:text-2xl transition-all duration-300 bg-sky-900 hover:bg-sky-800 rounded-2xl py-2 px-4 cursor-pointer">Delete</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 px-2 mb-4 items-center">
          <button className="text-white text-sm sm:text-lg md:text-2xl transition-all duration-300 bg-blue-900 hover:bg-blue-800 rounded-2xl p-2 cursor-pointer">London</button>
          <div className="flex justify-end">
            <button className="text-white text-sm sm:text-lg md:text-2xl transition-all duration-300 bg-sky-900 hover:bg-sky-800 rounded-2xl py-2 px-4 cursor-pointer">Delete</button>
          </div>
        </div>
        <button className="mt-10 text-white text-sm sm:text-lg md:text-2xl transition-all duration-300 bg-gray-800 hover:bg-blue-900 rounded-2xl p-2 cursor-pointer">Add city</button>
      </div>
      <div className="flex flex-col p-4 sm:p-6 bg-gray-700 rounded-2xl border-2 border-violet-900">
        <h2 className="text-white text-sm sm:text-lg md:text-2xl text-center font-bold mb-6">Sevastopol</h2>
        <div className="flex flex-col p-8 bg-gray-300 shadow-md rounded-2xl text-center">
          <p className="text-5xl text-black font-semibold mb-2">15°C</p>
          <p className="text-3xl md:text-4xl text-purple-900 font-semibold mb-2">Sunny</p>      
          <p className="text-1xl text-gray-700 mb-4">sunny and a little bit cloudy</p>
          <p className="text-sm sm:text-lg md:text-2xl text-orange-600 mb-2">Sunrise: 06:25</p>
          <p className="text-sm sm:text-lg md:text-2xl text-red-600 mb-2">Sunset: 17:30</p>
          <p className="text-sm sm:text-lg md:text-2xl text-violet-700 mb-2">Humidity: 70%</p>
          <p className="text-sm sm:text-lg md:text-2xl text-violet-700 mb-2">Pressure: 1021 hPa</p>
          <p className="text-sm sm:text-lg md:text-2xl text-violet-700 mb-2">Wind speed: 4.09 m/s</p>
          <p className="text-sm sm:text-lg md:text-2xl text-green-700 mb-2">Feels like: 14°C</p>
        </div>
      </div>
    </div>      
  )
}
