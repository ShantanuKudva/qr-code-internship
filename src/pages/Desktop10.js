import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const Desktop10 = ({formData, setFormData}) => {
  return (
    <div className="relative bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[1024px] overflow-hidden text-center text-21xl text-black font-hp-simplified-jpan">
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[207px] overflow-hidden">
        <nav
          className="m-0 absolute top-[0px] left-[0px] bg-peachpuff w-[1440px] h-[207px]"
          id="navContainer"
        />
        <div className="absolute top-[39px] left-[111px] w-[1233px] h-[130px]">
          <Link
            className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[31px] w-[82px] h-[83px] text-tomato"
            to="/"
          >
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[82px] h-[83px]" />
            <div className="absolute top-[17px] left-[23px] flex items-center justify-center w-[37px] h-11">
              1
            </div>
          </Link>
          <div className="absolute top-[0px] left-[384px] w-[82px] h-[83px] text-white">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-tomato shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[82px] h-[83px]" />
            <div className="absolute top-[17px] left-[23px] flex items-center justify-center w-[37px] h-11">
              2
            </div>
          </div>
          <Link
            className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[752px] w-[82px] h-[83px] text-tomato"
            to="/license-details"
          >
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-whitesmoke-100 shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[82px] h-[83px]" />
            <div className="absolute top-[16px] left-[23px] flex items-center justify-center w-[37px] h-11">
              3
            </div>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[1119px] w-[82px] h-[83px] text-tomato"
            to="/preview"
          >
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[82px] h-[83px]" />
            <div className="absolute top-[17px] left-[22px] flex items-center justify-center w-[37px] h-11">
              4
            </div>
          </Link>
          <img
            className="absolute top-[40.5px] left-[138px] w-[220px] h-[3px]"
            alt=""
            src="/line-11.svg"
          />
          <img
            className="absolute top-[40.5px] left-[499px] w-[220px] h-[3px]"
            alt=""
            src="/line-11.svg"
          />
          <img
            className="absolute top-[40.5px] left-[866px] w-[220px] h-[3px]"
            alt=""
            src="/line-11.svg"
          />
          <div className="absolute top-[93px] left-[0px] text-xl flex items-center justify-center w-[145px] h-7">
            Customer Info
          </div>
          <div className="absolute top-[91px] left-[1088px] text-xl flex items-center justify-center w-[145px] h-7">
            Preview
          </div>
          <div className="absolute top-[79px] left-[282px] text-xl flex items-center justify-center w-[286px] h-[51px]">{`License Type `}</div>
          <div className="absolute top-[79px] left-[679px] text-xl flex items-center justify-center w-[229px] h-[51px]">
            License Details
          </div>
        </div>
      </div>
      <div className="absolute top-[291px] left-[293px] w-[994px] h-[558px] text-left text-6xl text-dimgray-100 font-inter">
        <p
          className="m-0 absolute top-[71px] left-[0px] font-medium inline-block w-[515px]"
          id="pageTwoSubheading"
        >
          Pick the type of Subscription
        </p>
        <p
          className="m-0 absolute top-[0px] left-[0px] text-21xl font-bold text-black inline-block w-[281px] h-[71px]"
          id="pageTwoHeading"
        >
          License Type:
        </p>
        <Link
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[146px] left-[0px] w-[382px] h-[143px] [&_.all-modules-enabled-container]:hover:text-white [&_.demo-license]:hover:text-white [&_.rectangle-div]:hover:bg-tomato"
          autoFocus
          onClick={()=>{setFormData({...formData, licenseType:'Demo', noOfDays:7, endDate: formData.startDate.getDate + 7})}}
          id="demoLicenseButton"
          to="/license-details"
        >
          <div className="rectangle-div absolute top-[0px] left-[0px] rounded-31xl bg-whitesmoke-200 shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[382px] h-[143px]" />
          <div className="demo-license absolute top-[25px] left-[56px] text-13xl font-hp-simplified-jpan text-black text-left flex items-center w-[300px] h-8">
            Demo License
          </div>
          <div className="all-modules-enabled-container absolute top-[72px] left-[56px] text-5xl font-light font-hp-simplified-jpan text-black text-left flex items-center w-[196px] h-12">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0 w-[300px]">All modules enabled</p>
              <p className="m-0 w-[300px]">7 Days</p>
            </span>
          </div>
        </Link>
        <Link
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[146px] left-[577px] rounded-31xl w-[382px] h-[143px] [&_.production-license]:hover:text-white [&_.all-modules-enabled-container]:hover:text-white [&_.frame-child2]:hover:bg-tomato"
          autoFocus
          onClick={()=>{setFormData({...formData, licenseType:'Production',noOfDays:1})}}
          id="productionLicenseButton"
          to="/license-details"
        >
          <div className="frame-child2 absolute top-[0px] left-[0px] rounded-31xl bg-whitesmoke-200 shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[382px] h-[143px]" />
          <div className="production-license absolute top-[24px] left-[56px] text-13xl font-hp-simplified-jpan text-black text-left flex items-center w-[266px] h-8">
            Production License
          </div>
          <div className="all-modules-enabled-container absolute top-[72px] left-[56px] text-5xl font-light font-hp-simplified-jpan text-black text-left flex items-center w-[196px] h-12">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">Custom Modules</p>
              <p className="m-0">Custom Days</p>
            </span>
          </div>
        </Link>
        <Link
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[366px] left-[577px] rounded-31xl w-[382px] h-[143px] [&_.production-license]:hover:text-white [&_.all-modules-enabled-container]:hover:text-white [&_.frame-child2]:hover:bg-tomato"
          autoFocus
          onClick={()=>{setFormData({...formData, licenseType:'Perpetual', noOfDays:1})}}
          id="perpetualLicenseButton"
          to="/license-details"
        >
          <div className="frame-child2 absolute top-[0px] left-[0px] rounded-31xl bg-whitesmoke-200 shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[382px] h-[143px]" />
          <div className="production-license absolute top-[24px] left-[56px] text-13xl font-hp-simplified-jpan text-black text-left flex items-center w-[266px] h-8">
            Perpetual License
          </div>
          <div className="all-modules-enabled-container absolute top-[72px] left-[56px] text-5xl font-light font-hp-simplified-jpan text-black text-left flex items-center w-[196px] h-12">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">Custom Modules</p>
              <p className="m-0">Unlimited Days</p>
            </span>
          </div>
        </Link>
        <Link
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[366px] left-[0px] rounded-31xl w-[382px] h-[143px] [&_.all-modules-enabled-container]:hover:text-white [&_.demo-license]:hover:text-white [&_.rectangle-div]:hover:bg-tomato"
          autoFocus
          onClick={()=>{setFormData({...formData, licenseType:'Trial', noOfDays:30})}}
          id="trialLicenseButton"
          to="/license-details"
        >
          <div className="rectangle-div absolute top-[0px] left-[0px] rounded-31xl bg-whitesmoke-200 shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[382px] h-[143px]" />
          <div className="demo-license absolute top-[25px] left-[56px] text-13xl font-hp-simplified-jpan text-black text-left flex items-center w-[300px] h-8">
            Trial License
          </div>
          <div className="all-modules-enabled-container absolute top-[72px] left-[56px] text-5xl font-light font-hp-simplified-jpan text-black text-left flex items-center w-[196px] h-12">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0 w-[300px]">All modules enabled</p>
              <p className="m-0 w-[300px]">30 Days</p>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Desktop10;
