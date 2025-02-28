function Partner() {
  return (
    <section className="partner text-center bg-white py-20 px-6">
      <div className="container mx-auto">
        <p className="text-lg font-bold text-[#74C69D]">partners</p>
        <h2 className="text-3xl font-bold text-black my-4">Lorem Ipsum Dolor</h2>
        <p className="text-lg text-black mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1 mb-6 items-center justify-center">
            <img src="/images/google.webp" alt="Service 1" className="max-w-full h-auto" />
            <img src="/images/microsoft.webp" alt="Service 2" className="max-w-full h-auto" />
            <img src="/images/XMLID_1_ (2).webp" alt="Service 3" className="max-w-full h-auto" />
            <img src="/images/Group.webp" alt="Service 4" className="max-w-full h-auto" />
            <img src="/images/google.webp" alt="Service 5" className="max-w-full h-auto" />
          </div>
        <button className="bg-black text-white font-bold py-2 px-6 rounded shadow-md hover:bg-gray-800">Learn More</button>
      </div>
    </section>
  );
}
export default Partner;
