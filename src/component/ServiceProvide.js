import food from "../assets/food.jpg";
import construction from "../assets/const.png";
import consultant from "../assets/Consulting-Overview.jpg";


function ServiceProvide(){
    return (
      <div className="mb-14">
        <div>
          <p className="bg-[#daeff1] text-[#00838F] text-center font-bold text-xl my-4 p-2 lg:text-3xl">
            Services We Provide
          </p>
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-3 justify-center lg:grid-rows-1">
          <div className=" relative w-40 h-40 shadow-2xl lg:w-56 lg:h-52">
            <i className="absolute right-0 bg-green-500 text-white font-semibold text-sm h-5 rounded-md">
              20% Off
            </i>
            <img className="" src={food} alt="" />
            <div className=" absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black grid items-end pb-5 px-3 rounded-lg ">
              <p className=" text-xl font-bold text-white ">Daily Needs</p>
            </div>
          </div>

          <div className=" relative w-40 h-40shadow-2xl lg:w-56 lg:h-52">
            <i className="absolute right-0 bg-green-500 text-white font-semibold text-sm h-5 rounded-md">
              20% Off
            </i>
            <img src={consultant} alt="" />
            <div className=" absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black grid items-end pb-5 px-3 rounded-lg ">
              <p className=" text-xl font-bold text-white ">Consultancy</p>
            </div>
          </div>

          <div className=" relative  w-40 h-40 shadow-2xl lg:w-56 lg:h-52">
            <i className="absolute right-0 bg-green-500 text-white font-semibold text-sm h-5 rounded-md">
              20% Off
            </i>
            <img src={construction} alt="" />
            <div className=" absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black grid items-end pb-5 px-3 rounded-lg ">
              <p className=" text-xl font-bold text-white ">Construction</p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default ServiceProvide;