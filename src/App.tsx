function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-cyan-100 via-blue-100 to-indigo-100 flex justify-center p-4">
      <div className="container mx-auto bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-2xl">
        <div className="p-6 md:p-10 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Weather forecast
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <a
              href="/"
              className="p-4 px-6 sm:px-16 md:px-20 text-1xl md:text-2xl rounded-lg bg-slate-900 transition-all duration-300 text-white hover:bg-blue-900 text-center"
            >
              Home
            </a>
            <a
              href="/settings"
              className="p-4 px-6 sm:px-16 md:px-20 text-1xl md:text-2xl rounded-lg bg-slate-800 transition-all duration-300 text-white hover:bg-blue-900 text-center"
            >
              Settings
            </a>
          </div>
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-2 w-full rounded-2xl mt-6">
            <div className="flex flex-col p-6 bg-gray-700 rounded-2xl border-2 border-violet-900">
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
            <div className="flex flex-col p-6 bg-gray-700 rounded-2xl border-2 border-violet-900">
              <h2 className="text-white text-sm sm:text-lg md:text-2xl text-center font-bold mb-6">Sevastopol</h2>
              <div className="flex flex-col p-8 bg-gray-300 shadow-md rounded-2xl text-center">
                <p className="text-5xl text-black font-semibold mb-2">15°C</p>
                <p className="text-1xl text-gray-700 mb-4">sunny and a little bit cloudy</p>
                <p className="text-sm sm:text-lg md:text-2xl text-gray-900 mb-2">Sunset: 17:30</p>
                <p className="text-sm sm:text-lg md:text-2xl text-gray-900 mb-2">Humidity: 70% hPa</p>
                <p className="text-sm sm:text-lg md:text-2xl text-gray-900 mb-2">Feels like: 14°C</p>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default App
