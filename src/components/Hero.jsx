function Hero() {
  return (
    <section className="hero bg-[#74C69D] text-white py-20 px-6 min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <p className="text-lg font-bold">Welcome</p>
            <h1 className="text-4xl font-bold my-4">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="text-lg mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?.
            </p>
            <button className="bg-white text-black font-bold py-2 px-6 rounded shadow-md hover:bg-gray-200">Export</button>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img src="/images/hero.webp" alt="Hero" className="w-full max-w-md" />
          </div>
        </div>
      </section>
  );
}
export default Hero;
