import search from "../assets/search-magnifying-glass-svgrepo-com.svg";
import mic from '../assets/mic-svgrepo-com.svg';

function Sticky(){
    return (
      <div className="flex justify-around lg:justify-start lg:gap-4 sticky top-0 mt-[-10px] lg:mt-0 bg-[#00838F] h-[50px] ">
        <div className="rounder-lg mt-1 lg:ml-5">
          <i className="absolute left-8  top-3 ">
            <img className="w-6" src={search} alt="" />
          </i>
          <input
            className="  px-14 py-2 rounded-lg lg:w-[550px]  lg:left-0"
            type="text"
            placeholder="Search for Products..."
          />
        </div>

        <div className="w-6 fill-white mt-3 lg:absolute lg:right-2">
          <img src={mic} alt="" />
        </div>
      </div>
    );
}
export default Sticky;