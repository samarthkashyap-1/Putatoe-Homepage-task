import bell from "../assets/bell-svgrepo-com.svg";
import loc from "../assets/location-2-svgrepo-com.svg";
import cart from "../assets/cart-4-svgrepo-com.svg";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="bg-[#00838F] h-12">
      <div className="flex flex-row  justify-around lg:justify-end py-2 lg:gap-8">
        <div className="hidden w-11 lg:block lg:left-5 absolute ">
          <img src={logo} alt="" />
        </div>
        <div className="w-7 fill-white">
          <img className="" src={loc} alt="" />
        </div>
        <div className="border-[1px] border-white rounded-lg ">
          <p className="px-16 lg:px-20 lg:w-80 text-white">Your Location...</p>
        </div>

        <div className="w-7 fill-white ">
          <img src={bell} alt="" />
        </div>
        <div className="w-7 lg:mr-2 fill-white">
          <img src={cart} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Header;
