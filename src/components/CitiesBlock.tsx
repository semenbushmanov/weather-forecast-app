interface CityBlockProps {
  currentLocation: string;
  cities: string[];
}

export default function CitiesBlock({ currentLocation, cities }: CityBlockProps) {
  return (
    <div className="flex flex-col p-4 sm:p-6 bg-gray-700 rounded-2xl border-2 border-violet-900">
      <div className="grid grid-cols-2 gap-2 px-2 mb-8 items-center">
        <button className=" text-white text-sm sm:text-lg md:text-2xl transition-all duration-300 bg-slate-900 hover:bg-blue-900 rounded-2xl p-2 cursor-pointer">Current location</button>
        <div className="flex justify-end">
          <p className="text-white text-sm sm:text-lg md:text-2xl">{currentLocation}</p>
        </div>
      </div>
      <h2 className="text-white text-sm sm:text-lg md:text-2xl text-center font-medium mb-6">Cities</h2>
      {cities.map(city => {
        return (
          <div className="grid grid-cols-2 gap-2 px-2 mb-4 items-center">
            <button className="text-white text-sm sm:text-lg md:text-2xl transition-all duration-300 bg-blue-900 hover:bg-blue-800 rounded-2xl p-2 cursor-pointer">{city}</button>
            <div className="flex justify-end">
              <button className="text-white text-sm sm:text-lg md:text-2xl transition-all duration-300 bg-sky-900 hover:bg-sky-800 rounded-2xl py-2 px-4 cursor-pointer">Delete</button>
            </div>
          </div>
        )        
      })}
      <button className="mt-10 text-white text-sm sm:text-lg md:text-2xl transition-all duration-300 bg-gray-800 hover:bg-blue-900 rounded-2xl p-2 cursor-pointer">Add city</button>
    </div>
  )
}
