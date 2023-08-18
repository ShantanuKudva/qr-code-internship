import { useState } from "react";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
//import { useScroll } from "framer-motion";

const Desktop9 = ({ formData, setFormData }) => {
  let [userName, setUserName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName }),
    })
      .then((response) => response.json())
      .then((data) => console.log("user info", data))
      .catch((error) => console.error("Error fetching user data:", error));
  };
  return (
    <div className="relative bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[1024px] overflow-hidden text-left text-21xl text-black font-inter">

      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[207px] overflow-hidden" />
      <div className="absolute top-[254px] left-[343px] w-[724px] h-[607.73px] overflow-hidden" />
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[207px] overflow-hidden" />
      <div className="absolute top-[254px] left-[343px] w-[724px] h-[607.73px] overflow-hidden" />
      <nav
        className="m-0 absolute top-[0px] left-[0px] bg-peachpuff w-[1440px] h-[207px] overflow-hidden flex flex-col py-[38px] px-24 box-border items-end justify-end text-center text-21xl text-black font-hp-simplified-jpan"
        id="navContainer"
      >
        <div className="relative w-[1233px] h-[130px]">
          <Link
            className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[384px] w-[82px] h-[83px] text-tomato"
            to="/license-type"
          >
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[82px] h-[83px]" />
            <div className="absolute top-[17px] left-[23px] flex items-center justify-center w-[37px] h-11">
              2
            </div>
          </Link>
          <div className="absolute top-[0px] left-[23px] w-[82px] h-[83px] text-white">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-tomato shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[82px] h-[83px]" />
            <div className="absolute top-[17px] left-[23px] flex items-center justify-center w-[37px] h-11">
              1
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
          <div className="absolute top-[79px] left-[367px] text-xl flex items-center justify-center w-[116px] h-[51px]">
            License Type
          </div>
          <div className="absolute top-[79px] left-[679px] text-xl flex items-center justify-center w-[229px] h-[51px]">
            License Details
          </div>
        </div>
      </nav>
      <div className="absolute top-[241px] left-[343px] w-[915px] h-[634px] overflow-y-scroll flex flex-col pt-1.5 pb-0 pr-0 pl-0.5 box-border items-start justify-start gap-[35px]">
        <p
          className="m-0 relative font-bold inline-block w-[685px] h-10 shrink-0"
          id="pageOneHeading"
        >
          Customer Info:
        </p>
        <p
          className="m-0 relative text-6xl font-medium text-dimgray-100 inline-block w-[299px]"
          id="pageOneSubHeading"
        >
          Let us get to know you!
        </p>
        <p
          className="m-0 relative text-xl font-inter text-black text-left inline-block w-[91.08px] h-[35.74px] shrink-0"
          id="nameLabel"
        >
          Name
        </p>
        <TextField
          className="[border:none] bg-[transparent] relative"
          sx={{ width: 724 }}
          color="secondary"
          variant="outlined"
          type="text"
          id="nameInput"
          placeholder="Enter your Name"
          size="medium"
          margin="none"
          required
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value })
          }}
        />
        <p
          className="m-0 relative text-xl font-inter text-black text-left inline-block w-[91.08px] h-[35.74px] shrink-0"
          id="emailLabel"
        >
          Email
        </p>
        <TextField
          className="[border:none] bg-[transparent] relative"
          sx={{ width: 724 }}
          color="secondary"
          variant="outlined"
          type="email"
          id="emailInput"
          value={formData.email}
          onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
          placeholder="Enter your Email"
          size="medium"
          margin="none"
          required
        />
        
        <p
          className="m-0 relative text-xl font-inter text-black text-left inline-block w-[250.08px] h-[35.74px] shrink-0"
          id="contactLabel"
        >
          Contact Number
        </p>
        <TextField
          className="[border:none] bg-[transparent] relative"
          sx={{ width: 724 }}
          color="secondary"
          variant="outlined"
          type="tel"
          value={formData.phone}
          onChange={(e) => { setFormData({ ...formData, phone: e.target.value }) }}
          id="phoneInput"
          placeholder="Enter your Phone Number"
          size="medium"
          margin="none"
          required
        />
        <p
          className="m-0 relative text-xl font-inter text-black text-left inline-block w-[250.08px] h-[35.74px] shrink-0"
          id="orgsLabel"
        >
          Organization
        </p>
        <TextField
          className="[border:none] bg-[transparent] relative"
          sx={{ width: 724 }}
          color="secondary"
          variant="outlined"
          type="text"
          id="orgsInput"
          placeholder="Enter Organization Name"
          size="medium"
          value={formData.organization}
          onChange={(e) => { setFormData({ ...formData, organization: e.target.value }) }}
          margin="none"
          required
        />
      </div>
        <Link
          className="[text-decoration:none] cursor-pointer [border:none] p-0 bg-tomato absolute top-[914px] left-[550px] rounded-sm w-[341px] h-[62px] flex flex-col items-center justify-center"
          to="/license-type"
        >
          <div
            className="[text-decoration:none] relative text-6xl font-inter text-white text-center flex items-center justify-center w-[278.35px] h-[50.47px] shrink-0"
          >{`Next Step  ->`}</div>
        </Link>
    </div>
  );
};

export default Desktop9;
