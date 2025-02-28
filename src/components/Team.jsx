function Team() {
  return (
    <section className="text-center py-16 px-6 bg-gray-100">
      <div className="container mx-auto">
        <p className="text-lg font-bold text-[#74C69D]">team</p>
        <h3 className="text-3xl font-bold text-black my-3"> Our Team</h3>
        <p className="text-lg text-black mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, quibusdam.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <img src="/images/team1.webp" alt="Team Member" className="w-full mb-4 rounded" />
            <h4 className="text-xl font-bold">Peg Legge</h4>
            <p className="text-gray-600">CEO</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <img src="/images/team4.webp" alt="Team Member" className="w-full mb-4 rounded" />
            <h4 className="text-xl font-bold">Richard Guerra</h4>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <img src="/images/team3.webp" alt="Team Member" className="w-full mb-4 rounded" />
            <h4 className="text-xl font-bold">Alexandra Stolz</h4>
            <p className="text-gray-600">DESIGNER</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <img src="/images/team2.webp" alt="Team Member" className="w-full mb-4 rounded" />
            <h4 className="text-xl font-bold">Janet Bray</h4>
            <p className="text-gray-600">DEVELOPER</p>
          </div>
        </div>
        <button className="bg-black mt-6 text-white font-bold py-2 px-6 rounded shadow-md hover:bg-gray-800">View Team</button>
      </div>
    </section>
  );
}
export default Team;
