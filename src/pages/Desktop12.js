import { useEffect, useState } from "react";
import { Button, useScrollTrigger } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";



const Desktop12 = ({formData}) => {
  let [userName, setUserName] = useState("");
  let [tempData, setTempData] = useState({});
  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setTempData(data[data.length-1]);
       
          
        

      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="relative bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[1024px] overflow-hidden text-center text-6xl text-white font-inter">
      <div className="absolute top-[246px] left-[calc(50%_-_594px)] rounded-xl bg-salmon-100 w-[1188px] h-[634px] overflow-hidden" />
      <div className="absolute top-[914px] left-[550px] w-[341px] h-[62px]">
        <div className="absolute top-[0px] left-[0px] rounded-sm bg-limegreen w-[341px] h-[62px]" />
        <div className="absolute top-[6px] left-[32px] flex items-center justify-center w-[278.35px] h-[50.47px]">{`Generate License  ->`}</div>
      </div>
      <nav
        className="m-0 absolute top-[0px] left-[0px] bg-peachpuff w-[1440px] h-[207px]"
        id="navContainer"
      />
      <div className="absolute top-[39px] left-[111px] w-[1233px] h-[134px] text-21xl text-black font-hp-simplified-jpan">
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[31px] w-[82px] h-[83px] text-tomato"
          to="/"
        >
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[82px] h-[83px]" />
          <div className="absolute top-[17px] left-[23px] flex items-center justify-center w-[37px] h-11">
            1
          </div>
        </Link>
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[384px] w-[82px] h-[83px] text-tomato"
          to="/license-type"
        >
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[82px] h-[83px]" />
          <div className="absolute top-[17px] left-[23px] flex items-center justify-center w-[37px] h-11">
            2
          </div>
        </Link>
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[752px] w-[82px] h-[83px] text-tomato"
          to="/license-details"
        >
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-whitesmoke-100 shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[82px] h-[83px]" />
          <div className="absolute top-[16px] left-[23px] flex items-center justify-center w-[37px] h-11">
            3
          </div>
        </Link>
        <div className="absolute top-[0px] left-[1119px] w-[82px] h-[83px] text-whitesmoke-100">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-tomato shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[82px] h-[83px]" />
          <div className="absolute top-[17px] left-[22px] flex items-center justify-center w-[37px] h-11">
            4
          </div>
        </div>
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
        <div className="absolute top-[83px] left-[369px] text-xl flex items-center justify-center w-[111px] h-[51px]">
          License Type
        </div>
        <div className="absolute top-[79px] left-[679px] text-xl flex items-center justify-center w-[229px] h-[51px]">
          License Details
        </div>
      </div>
      <div className="absolute top-[381px] left-[calc(50%_-_569px)] w-[1102px] h-[453px] overflow-y-auto text-left text-9xl text-whitesmoke-100">
        <div className="absolute top-[15px] left-[9px] flex items-center w-[466px] h-[38px]">Organization: {tempData.organization}</div>
        <div className="absolute top-[129px] left-[9px] flex items-center w-[466px] h-[38px]">License Duration: {tempData.noOfDays}</div>
        <div className="absolute top-[186px] left-[9px] flex items-center w-[466px] h-[38px]">Valid Upto: {tempData.endDate}</div>
        <div className="absolute top-[72px] left-[9px] flex items-center w-[466px] h-[38px]">License Type: {tempData.licenseType}</div>
        <Link
            className="cursor-pointer [text-decoration:none] absolute top-[125px] left-[0px] w-[341px] h-[62px] text-center text-white"
            to="/selected-modules"
          >
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-dimgray-200 w-[341px] h-[62px]" />
            <div className="absolute top-[5.89px] left-[31.56px] flex items-center justify-center w-[278.35px] h-[50.47px]">
              View Selected Modules
            </div>
          </Link>
        <div
          className="absolute top-[20px] left-[192px] bg-salmon-200 w-56 h-[29px]"
          id="organizationName"
        />
        <div
          className="absolute top-[77px] left-[194px] bg-salmon-200 w-[241px] h-7"
          id="lcenseTypeDiv"
        />
        <div
          className="absolute top-[135px] left-[247px] bg-salmon-200 w-[191px] h-8"
          id="licenseDurationDi\v"
        />
        <div
          className="absolute top-[190px] left-[162px] bg-salmon-200 w-[285px] h-[30px]"
          id="validityDiv"
        />
        <div className="absolute top-[322px] left-[19px] w-[1083px] h-[101px] text-11xl">
          <div className="absolute top-[0px] left-[0px] inline-block w-[1023px] h-12">
            <p className="m-0">
              <b>License Restrictions</b>
              {tempData.licenseRestrictions}
            </p>
            <p className="m-0 text-6xl">&nbsp;</p>
          </div>
          <div
            className="absolute top-[55px] left-[0px] bg-salmon-200 w-[1083px] h-[46px]"
            id="licenseRestrictionDiv"
          />
        </div>
        <div className="absolute top-[453px] left-[19px] w-[1083px] h-[101px] text-11xl">
          <div className="absolute top-[0px] left-[0px] inline-block w-[1023px] h-12">
            <p className="m-0">
              <b>Additional Comments</b>
              {tempData.comments}
            </p>
            <p className="m-0 text-6xl">&nbsp;</p>
          </div>
          <div
            className="absolute top-[55px] left-[0px] bg-salmon-200 w-[1083px] h-[46px]"
            id="licenseRestrictionDiv"
          />
        </div>
      </div>
      <div className="absolute top-[278px] left-[calc(50%_-_570px)] box-border w-[1103px] h-[103px] overflow-hidden border-[1px] border-solid border-black">
        <div
          className="absolute top-[6px] left-[20px] bg-gainsboro-200 w-[378px] h-[84px]"
          id="customerNameDiv"
        >
          <p>User Name: {tempData.name}</p>
        </div>
        <div
          className="absolute top-[23px] left-[809px] bg-gainsboro-200 w-[274px] h-[29px]"
          id="customerEmail"
        />
        <div
          className="absolute top-[61px] left-[809px] bg-gainsboro-200 w-[274px] h-[29px]"
          id="customerPhone"
        />
      </div>
    </div>
  );
};

export default Desktop12;
