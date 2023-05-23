import logo from '../assets/logo.png';
function Floater(){


return (
  <div className="fixed bottom-16 right-5">
    <div className="w-11 h-11 bg-[#00838F] rounded-full p-2 shadow-lg">
      <img className="w-6 h-6 " src={logo} alt="" />
    </div>
   
  </div>
);
}

export default Floater;