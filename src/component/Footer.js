import logo from "../assets/logo.png";
import home from "../assets/home-svgrepo-com.svg";
import list from "../assets/list-svgrepo-com.svg";
import prof from "../assets/profile-2user-svgrepo-com.svg";
import chat from "../assets/chat-line-round-svgrepo-com.svg";


function Footer(){
    return (
      <div className=" fixed bottom-0 w-full flex justify-around shadow-lg bg-white py-1 border-box border-#000000 border-t-2">
        
        <div className="w-vw">
          <img className="w-6 m-auto" src={home} alt="" />
          <p className="text-[10px] text-center">Home</p>
        </div>
        <div className="w-vw">
          <img className="w-6 m-auto" src={prof} alt="" />
          <p className="text-[10px] text-center">Profile</p>
        </div>
      <div className="">

        <div className="w-11 h-11 bg-[#00838F] rounded-lg">
          <img className="w-9 m-auto pt-1" src={logo} alt="" />
        </div>
      </div>

        <div className="w-vw">
          <img className="w-6 m-auto" src={list} alt="" />
          <p className="text-[10px] text-center">Follow List</p>
        </div>
        <div className="w-vw">
          <img className="w-6 m-auto" src={chat} alt="" />
          <p className="text-[10px] text-center ">Chat</p>
        </div>
      </div>
    );
}
export default Footer;