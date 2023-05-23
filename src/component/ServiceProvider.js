import interior from "../assets/interior.jpg"
function ServiceProvider() {
  return (
    <div className="bg-white py-1 rounded-lg my-2">
      <div>
        <p className="bg-[#daeff1] text-[#00838F] text-center font-bold text-xl my-1 p-2">
          All Popular Service Provider
        </p>
      </div>
      <div>
        <p className="text-center text-gray-400 font-semibold text-lg ">
          Construction
          <hr className="w-[70%] m-auto mt-1 border-black" />
        </p>
      </div>

      <div className="flex w-vw gap-2 overflow-x-auto scrollbar-hide pb-5 box-border">
        <div className="w-full p-2  mt-5 bg-white rounded-md shadow-md lg:hover:scale-105">
          <div className="w-[75px] h-[75px]   mt-2 flex bg-red-400  lg:m-auto ">
            <p className="m-auto text-5xl  text-white">A</p>
          </div>
          <p className="text-xs  m-auto text-center w-[75px] mt-1 mb-5 lg:text-sm">
            Anuj Construction
          </p>
        </div>
        <div className="w-full p-2  mt-5 bg-white rounded-md shadow-md lg:hover:scale-105">
          <div className="w-[75px] h-[75px]   mt-2 flex bg-sky-400  lg:m-auto ">
            <img src={interior} alt="" />
          </div>
          <p className="text-xs  m-auto text-center w-[75px] mt-1 mb-5 lg:text-sm">
            Gorakhpur Interior
          </p>
        </div>

        <div className="w-full p-2  mt-5 bg-white rounded-md shadow-md lg:hover:scale-105">
          <div className="w-[75px] h-[75px]   mt-2 flex bg-blue-400 lg:m-auto ">
            <p className="m-auto text-5xl  text-white">P</p>
          </div>
          <p className="text-xs  m-auto text-center w-[75px] mt-1 mb-5 lg:text-sm">
            Pulak Shop
          </p>
        </div>
        <div className="w-full p-2  mt-5 bg-white rounded-md shadow-md lg:hover:scale-105">
          <div className="w-[75px] h-[75px]   mt-2 flex bg-green-400 lg:m-auto ">
            <p className="m-auto text-5xl  text-white">G</p>
          </div>
          <p className="text-xs  m-auto text-center w-[75px] mt-1 mb-5 lg:text-sm">
            Gangotari Building
          </p>
        </div>
        <div className="w-full p-2  mt-5 bg-white rounded-md shadow-md lg:hover:scale-105">
          <div className="w-[75px] h-[75px]   mt-2 flex bg-yellow-400  lg:m-auto">
            <p className="m-auto text-5xl  text-white">S</p>
          </div>
          <p className="text-xs  m-auto text-center w-[75px] mt-1 mb-5 lg:text-sm">
            Singh Building Material
          </p>
        </div>
        <div className="w-full p-2  mt-5 bg-white rounded-md shadow-md lg:hover:scale-105">
          <div className="w-[75px] h-[75px]   mt-2 flex bg-red-400  lg:m-auto">
            <p className="m-auto text-5xl  text-white">A</p>
          </div>
          <p className="text-xs  m-auto text-center w-[75px] mt-1 mb-5 lg:text-sm">
            Aarambh Travels
          </p>
        </div>
      </div>
    </div>
  );
}
export default ServiceProvider;
