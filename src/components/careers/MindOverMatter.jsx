const MindOverMatter = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat h-[90vh] flex justify-center items-center  bg-fixed"
      style={{ backgroundImage: "url('/careers/image.png')" }}
    >
      <div className="container mx-18 flex flex-col items-center justify-center  h-[80%] text-black bg-white text-center">
        {/* Text Section */}
        <div className=" w-2/3 ">
          <h2 className="text-2xl font-bold mb-4">Mind Over Matter</h2>
          <div className="text-sm mb-4 text-center">
            As a precursor to the internship programme, a day-long orientation
            programme called 'Mind Over Matter' is organised for the management
            interns. The programme aims at providing interns with a better
            understanding of the organization, how best to approach the
            internship, and an opportunity to meet with leadership. The
            programme focuses on how summer internships can be made more
            meaningful both for the student and the organization.
          </div>
          <h2 className="text-xl font-bold mb-2">We look for...</h2>
          <div className="flex flex-col text-center justify-start ">
            <div className=" mb-2">
              <strong>Leadership</strong>: Inspiring and guiding others to
              achieve their full potential
            </div>
            <div className=" mb-2">
              <strong>Team skills</strong>: Collaborating effectively with
              others to achieve common goals
            </div>

            <div className=" mb-2">
              <strong>Integrity</strong>: Demonstrating honesty, transparency,
              and ethics in all interactions
            </div>
            <div className=" mb-2">
              <strong>Creativity</strong>: Generating new ideas and approaches
              to drive growth and improvement
            </div>
            <div className=" mb-2">
              <strong>A 'will do' attitude</strong>: Embracing challenges with
              enthusiasm and a proactive approach
            </div>
            <div className=" mb-2">
              <strong>High energy</strong>: Maintaining a positive and motivated
              attitude, even in the face of obstacles
            </div>
            <div className=" mb-2">
              <strong>Intellectual rigour</strong>: Applying critical thinking
              and analytical skills to solve complex problems
            </div>

            <div className=" mb-2">
              <strong>Ability to think strategically</strong>: Developing
              innovative solutions that align with organizational objectives
            </div>
          </div>
          <button className="py-2 px-5 rounded-full bg-gray-200 font-semibold hover:bg-gray-400 cursor-pointer">
            Join Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default MindOverMatter;
