import mobile from "../assets/mobilemajor-svgrepo-com.svg";
import tv from "../assets/television-svgrepo-com.svg";
import loan from "../assets/currency-rupee-circle-svgrepo-com.svg";
import promote from "../assets/promotion-svgrepo-com.svg";
import water from "../assets/water-drop-svgrepo-com.svg";
import gas from "../assets/gas-stove-svgrepo-com.svg";
import feedback from "../assets/feedback-svgrepo-com.svg";
import blog from "../assets/blog-svgrepo-com.svg";
import bulb from "../assets/bulb-on-svgrepo-com.svg";
import right from "../assets/arrow-right-333-svgrepo-com.svg";
import job from "../assets/jobs-open-svgrepo-com.svg";
import news from "../assets/news-publishing-svgrepo-com.svg";


function AllServices() {
  return (
    <div className="grid grid-cols-4 p-2 bg-white my-2 lg:box-border lg:overflow-hidden ">
      <div className="flex flex-col p-2 gap-1 lg:hover:scale-105 ">
        <img className="w-7 lg:w-12 m-auto" src={mobile} alt="" />
        <p className="text-[8px] lg:text-sm text-center text-[#00838F] font-medium w-14 m-auto">
          Prepaid Mobile Recharge
        </p>
      </div>
      <div className="flex flex-col p-2 gap-1 lg:hover:scale-105 ">
        <img className="w-7 lg:w-12 m-auto" src={tv} alt="" />
        <p className="text-[8px] lg:text-sm text-center text-[#00838F] font-medium w-14 m-auto">
          DTH Recharge
        </p>
      </div>
      <div className="flex flex-col p-2 gap-1 lg:hover:scale-105 ">
        <img className="w-7 lg:w-12 m-auto" src={loan} alt="" />
        <p className="text-[8px] lg:text-sm text-center text-[#00838F] font-medium w-14 m-auto">
          Loans
        </p>
      </div>
      <div className="flex flex-col p-2 gap-1 lg:hover:scale-105 ">
        <img className="w-7 lg:w-12 m-auto" src={promote} alt="" />
        <p className="text-[8px] lg:text-sm text-center text-[#00838F] font-medium w-14 m-auto">
          Promotion
        </p>
      </div>
      <div className="flex flex-col p-2 gap-1 lg:hover:scale-105 ">
        <img className="w-7 lg:w-12 m-auto" src={news} alt="" />
        <p className="text-[8px] lg:text-sm text-center text-[#00838F] font-medium w-14 m-auto">
          News
        </p>
      </div>
      <div className="flex flex-col p-2 gap-1 lg:hover:scale-105 ">
        <img className="w-7 lg:w-12 m-auto" src={blog} alt="" />
        <p className="text-[8px] lg:text-sm text-center text-[#00838F] font-medium w-14 m-auto">
          Blogs
        </p>
      </div>
      <div className="flex flex-col p-2 gap-1 lg:hover:scale-105 ">
        <img className="w-7 lg:w-12 m-auto" src={job} alt="" />
        <p className="text-[8px] lg:text-sm text-center text-[#00838F] font-medium w-14 m-auto">
          Jobs
        </p>
      </div>
      <div className="flex flex-col p-2 gap-1 lg:hover:scale-105 ">
        <img className="w-7 lg:w-12 m-auto" src={feedback} alt="" />
        <p className="text-[8px] lg:text-sm text-center text-[#00838F] font-medium w-14 m-auto">
          Anonymous Feedback
        </p>
      </div>
      <div className="flex flex-col p-2 gap-1 lg:hover:scale-105 ">
        <img className="w-7 lg:w-12 m-auto" src={gas} alt="" />
        <p className="text-[8px] lg:text-sm text-center text-[#00838F] font-medium w-14 m-auto">
          Gas Booking
        </p>
      </div>
      <div className="flex flex-col p-2 gap-1 lg:hover:scale-105 ">
        <img className="w-7 lg:w-12 m-auto" src={bulb} alt="" />
        <p className="text-[8px] lg:text-sm text-center text-[#00838F] font-medium w-14 m-auto">
          Electricity Bill
        </p>
      </div>
      <div className="flex flex-col p-2 gap-1 lg:hover:scale-105 ">
        <img className="w-7 lg:w-12 m-auto" src={water} alt="" />
        <p className="text-[8px] lg:text-sm text-center text-[#00838F] font-medium w-14 m-auto">
          Water Bill
        </p>
      </div>
      <div className="flex flex-col p-2 gap-1  lg:hover:scale-105">
        <div className="bg-[#00838F] rounded-full w-8 h-8 lg:w-12 lg:h-12 m-auto">
          <img className="w-6 m-auto mt-1 lg:mt-3" src={right} alt="" />
        </div>
        <p className="text-[8px] text-center lg:text-sm text-[#00838F] font-medium w-14 m-auto">
          See More
        </p>
      </div>
    </div>
  );
}
export default AllServices;
