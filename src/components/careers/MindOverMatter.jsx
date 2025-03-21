const MindOverMatter = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center bg-fixed px-4 py-8 md:py-12"
      style={{ backgroundImage: "url('/careers/image.png')" }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center max-w-screen-md bg-white text-center p-6 sm:p-10 rounded-lg shadow-lg">
        {/* Text Section */}
        <div className="w-full sm:w-11/12">
          <h2 className="text-lg sm:text-2xl font-bold mb-4">
            Mind Over Matter
          </h2>
          <p className="text-sm sm:text-base mb-4">
            As a precursor to the internship programme, a day-long orientation
            programme called 'Mind Over Matter' is organised for the management
            interns. The programme aims at providing interns with a better
            understanding of the organization, how best to approach the
            internship, and an opportunity to meet with leadership. The
            programme focuses on how summer internships can be made more
            meaningful both for the student and the organization.
          </p>
          <h2 className="text-base sm:text-lg font-bold mb-2">
            We look for...
          </h2>

          {/* Qualities List */}
          <div className="text-left sm:text-center text-sm">
            {[
              {
                title: "Leadership",
                desc: "Inspiring and guiding others to achieve their full potential",
              },
              {
                title: "Team skills",
                desc: "Collaborating effectively with others to achieve common goals",
              },
              {
                title: "Integrity",
                desc: "Demonstrating honesty, transparency, and ethics in all interactions",
              },
              {
                title: "Creativity",
                desc: "Generating new ideas and approaches to drive growth and improvement",
              },
              {
                title: "A 'will do' attitude",
                desc: "Embracing challenges with enthusiasm and a proactive approach",
              },
              {
                title: "High energy",
                desc: "Maintaining a positive and motivated attitude, even in the face of obstacles",
              },
              {
                title: "Intellectual rigour",
                desc: "Applying critical thinking and analytical skills to solve complex problems",
              },
              {
                title: "Ability to think strategically",
                desc: "Developing innovative solutions that align with organizational objectives",
              },
            ].map((item, index) => (
              <div key={index} className="p-2 ">
                <strong>{item.title}</strong>: {item.desc}
              </div>
            ))}
          </div>

          {/* Call-to-Action Button */}
          <button className="mt-6 py-2 px-5 rounded-full bg-gray-200 font-semibold hover:bg-gray-400 transition">
            Join Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default MindOverMatter;
