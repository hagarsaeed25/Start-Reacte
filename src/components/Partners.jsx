function Partner() {
  return (
   <>
    <section className="partner text-center bg-white py-20 px-6">
      <div className="container mx-auto">
        <p className="text-lg font-bold text-[#74C69D]">partners</p>
        <h2 className="text-3xl font-bold text-black my-4">Lorem Ipsum Dolor</h2>
        <p className="text-lg text-black mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4 items-center justify-center">
            <img src="/images/google.webp" alt="Service 1" className="max-w-full h-auto mx-auto" />
            <img src="/images/microsoft.webp" alt="Service 2" className="max-w-full h-auto mx-auto" />
            <img src="/images/XMLID_1_ (2).webp" alt="Service 3" className="max-w-full h-auto mx-auto" />
            <img src="/images/Group.webp" alt="Service 4" className="max-w-full h-auto mx-auto" />
            <img src="/images/google.webp" alt="Service 5" className="max-w-full h-auto mx-auto" />
          </div>
        <button className="bg-black text-white font-bold py-2 px-6 rounded shadow-md hover:bg-gray-800">Learn More</button>
      </div>
    </section>
    <section>
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between"> 
    <div className="md:w-1/2 flex justify-center md:justify-start">
          <img src="/images/image.webp" alt="Hero" className="w-full max-w-md" />
        </div>
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl font-bold my-4">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="text-lg mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?.
          </p>
          <button className="bg-black text-white font-bold py-2 px-6 rounded shadow-md hover:bg-gray-800">Learn More</button>
        </div>
      </div>
    </section>
    <section>
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between"> 
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl font-bold my-4">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="text-lg mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?.
          </p>
          <button className="bg-black text-white font-bold py-2 px-6 rounded shadow-md hover:bg-gray-800">Learn More</button>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img src="/images/Group (3).webp" alt="Hero" className="w-full max-w-md" />
        </div>
      </div>
    </section>

    </>
  );
}
export default Partner;
