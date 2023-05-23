import morang from "../assets/morang.jpg";
import acc from "../assets/acc.jpg";
import brick from "../assets/red-bricks.jpg";

function ServiceProducts() {
  return (
    <div className="bg-white py-2 rounded-lg my-2">
      <div>
        <p className="bg-[#daeff1] text-[#00838F] text-center font-bold text-xl my-1 p-2">
          Popular Service Products
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
          <div className="w-[75px] h-[75px]   mt-2 flex bg-red-400  lg:m-auto">
            <p className="m-auto text-5xl  text-white">K</p>
          </div>
          <p className="text-xs  m-auto text-center w-[75px] mt-1 mb-5 lg:text-sm">
            KJS Cement
          </p>
        </div>
        <div className="w-full p-2  mt-5 bg-white rounded-md shadow-md lg:hover:scale-105">
          <div className="w-[75px] h-[75px]   mt-2 flex lg:m-auto">
            <img src={acc} alt="" />
          </div>
          <p className="text-xs  m-auto text-center w-[75px] mt-1 mb-5 lg:text-sm">
            ACC Cement
          </p>
        </div>

        <div className="w-full p-2  mt-5 bg-white rounded-md shadow-md lg:hover:scale-105">
          <div className="w-[75px] h-[75px]   mt-2 flex bg-blue-400  lg:m-auto">
            <p className="m-auto text-5xl  text-white">R</p>
          </div>
          <p className="text-xs  m-auto text-center w-[75px] mt-1 mb-5 lg:text-sm">
            RR wire
          </p>
        </div>
        <div className="w-full p-2  mt-5 bg-white rounded-md shadow-md lg:hover:scale-105">
          <div className="w-[75px] h-[75px]   mt-2 flex bg-green-400  lg:m-auto">
            <img src={morang} alt="" />
          </div>
          <p className="text-xs  m-auto text-center w-[75px] mt-1 mb-5 lg:text-sm">
            Dehri Bihar Morang
          </p>
        </div>
        <div className="w-full p-2  mt-5 bg-white rounded-md shadow-md lg:hover:scale-105">
          <div className="w-[75px] h-[75px]   mt-2 flex bg-yellow-400 lg:m-auto ">
            <img src={brick} alt="" />
          </div>
          <p className="text-xs  m-auto text-center w-[75px] mt-1 mb-5 lg:text-sm">
            Red Bricks
          </p>
        </div>
        <div className="w-full p-2  mt-5 bg-white rounded-md shadow-md lg:hover:scale-105">
          <div className="w-[75px] h-[75px]   mt-2 flex bg-red-400  lg:m-auto">
            <p className="m-auto text-5xl  text-white">R</p>
          </div>
          <p className="text-xs  m-auto text-center w-[75px] mt-1 mb-5 lg:text-sm">
            Rassi
          </p>
        </div>
      </div>
    </div>
  );
}
export default ServiceProducts;
