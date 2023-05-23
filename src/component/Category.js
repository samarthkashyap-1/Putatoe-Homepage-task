import cover from "../assets/cover.jpg";

function Category(){

    return (
      <div className="mt-5 bg-white">
        <div className="bg-white  rounded-md p-1">
          <p className="text-xl text-[#00838F] font-bold">SHOP BY CATEGORY</p>
        </div>
        <hr className="border-[#daeff1]" />
        <div>
          <p className="text-center text-gray-400 font-semibold text-lg ">
            Construction
            <hr className="w-[70%] m-auto mt-1 border-black" />
          </p>
        </div>
        <div className="p-2">
          <div className="w-28 px-6 py-2 border-[1px] border-[#00838F] bg-white lg:w-36 ">
            <img className="w-20" src={cover} alt="" />
            <p className="text-[8px] w-28 lg:text-lg">Cover Block</p>
            <p className="text-[10px] font-semibold w-28">
              {" "}
              UP TO
              <span className="text-red-700 "> 0% OFF</span>
            </p>
          </div>
        </div>
      </div>
    );
}
export default Category;