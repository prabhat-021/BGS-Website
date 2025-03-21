export default function InternShipSection() {
  return (
    <div className="flex flex-col md:flex-row justify-center  px-4 pt-16 pb-5 gap-6">
      <div className="md:w-1/2">
        <div className=" py-3 flex gap-4 items-center">
          <div className="border-2 w-5 h-0"></div>
          <div className="text-5xl font-bold">Internships / Jobs</div>
        </div>
      </div>

      <div className="md:w-1/2  text-semibold">
        <div className="flex  gap-7  p-3">
          <button className="relative px-5 py-3 font-bold  flex items-center group">
            <span className="relative z-10">Cloud Computing</span>
            <span className="absolute inset-0  h-12 bg-gray-300 rounded-full transition-all duration-300 :w-full"></span>
          </button>
          <button className="relative px-5 py-3 font-bold  flex items-center group">
            <span className="relative z-10">Supply Chain/Operations</span>
            <span className="absolute inset-0  h-12 bg-gray-300 rounded-full transition-all duration-300 w-full"></span>
          </button>
          <button className="relative px-5 py-3 font-bold  flex items-center group">
            <span className="relative z-10">Assure Developer</span>
            <span className="absolute inset-0  h-12 bg-gray-300 rounded-full transition-all duration-300 w-full"></span>
          </button>
        </div>
        <div className="flex gap-6  p-3">
          <button className="relative px-5 py-3 font-bold  flex items-center group">
            <span className="relative z-10">Customer & Service</span>
            <span className="absolute inset-0  h-12 bg-gray-300 rounded-full transition-all duration-300 w-full"></span>
          </button>
          <button className="relative px-5 py-3 font-bold  flex items-center group">
            <span className="relative z-10">Data Science</span>
            <span className="absolute inset-0  h-12 bg-gray-300 rounded-full transition-all duration-300 w-full"></span>
          </button>
          <button className="relative px-5 py-3 font-bold  flex items-center group">
            <span className="relative z-10">AI/ML</span>
            <span className="absolute inset-0 h-12 bg-gray-300 rounded-full transition-all duration-300 w-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
