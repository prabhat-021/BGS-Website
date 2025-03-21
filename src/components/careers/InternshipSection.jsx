export default function InternShipSection() {
  return (
    <div className="flex flex-col md:flex-row justify-center px-4 pt-16 pb-5 gap-6">
      <div className="md:w-1/2">
        <div className="py-3 flex gap-4 items-center">
          <div className="border-2 w-5 h-0"></div>
          <div className="text-3xl md:text-5xl font-bold">
            Internships / Jobs
          </div>
        </div>
      </div>

      <div className="md:w-1/2 text-semibold">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-3">
          {[
            "Cloud Computing",
            "Supply Chain/Operations",
            "Assure Developer",
            "Customer & Service",
            "Data Science",
            "AI/ML",
          ].map((text, index) => (
            <button
              key={index}
              className="relative px-5 py-3 font-bold flex items-center justify-center group w-full"
            >
              <span className="relative z-10">{text}</span>
              <span className="absolute inset-0 h-full bg-gray-200 rounded-full transition-all duration-300 w-full"></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
