import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Desktop11 = ({ formData, setFormData }) => {

  const [numberOfDays, setNumberOfDays] = useState(1);
  const [startDate, setStartDate] = useState(
    new Date().toISOString().substr(0, 10)
  );
  const [endDate, setEndDate] = useState("");

  const handleNumberOfDaysChange = (event) => {
    setNumberOfDays(event.target.value);
  };
  console.log(formData)



  const calculateEndDate = (numberOfDays, startDate) => {
    if (!numberOfDays || !startDate) {
      setEndDate(startDate.getDate + 1);
      return;
    }
    const startDateObject = new Date(startDate);
    const endDateObject = new Date(startDateObject);
    endDateObject.setDate(startDateObject.getDate() + parseInt(numberOfDays, 10));
    setFormData({ ...formData, endDate: endDateObject.toISOString().substring(0, 10) });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log("user info", data))
      .catch((error) => console.error("Error fetching user data:", error));
  };
  useEffect(() => {
    calculateEndDate(formData.noOfDays, formData.startDate)
  }, [formData.noOfDays, formData.startDate]);

  return (
    <div className="relative bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[1024px] overflow-hidden text-center text-21xl text-black font-hp-simplified-jpan">
      <nav
        className="m-0 absolute top-[0px] left-[0px] bg-peachpuff w-[1440px] h-[207px]"
        id="navContainer"
      />
      <div className="absolute top-[39px] left-[111px] w-[1233px] h-[131px]">
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
        <div className="absolute top-[0px] left-[752px] w-[82px] h-[83px] text-white">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-tomato shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[82px] h-[83px]" />
          <div className="absolute top-[16px] left-[23px] flex items-center justify-center w-[37px] h-11">
            3
          </div>
        </div>
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
        <div className="absolute top-[80px] left-[366px] text-xl flex items-center justify-center w-[117px] h-[51px]">
          License Type
        </div>
        <div className="absolute top-[79px] left-[679px] text-xl flex items-center justify-center w-[229px] h-[51px]">
          License Details
        </div>
      </div>
      <div className="absolute top-[1039px] left-[359px] w-[434px] h-[73px]">
        <div className="absolute top-[0px] left-[0px] rounded-mini bg-whitesmoke-100 box-border w-[434px] h-[73px] border-[3px] border-solid border-gainsboro-100" />
      </div>
      <Link
      onClick={handleSubmit}
        className="[text-decoration:none] cursor-pointer [border:none] p-0 bg-tomato absolute top-[914px] left-[550px] rounded-sm w-[341px] h-[62px] flex flex-col items-center justify-center"
        to="/preview"
      >
        <div className="relative text-6xl font-inter text-white text-center flex items-center justify-center w-[278.35px] h-[50.47px] shrink-0">{`Next Step  ->`}</div>
      </Link>
      <div className="absolute top-[233px] left-[calc(50%_-_485px)] w-[970px] h-[655px] overflow-y-auto text-left font-inter">
        <div className="absolute top-[879px] left-[7px] w-[913px] h-[121px]">
          <p
            className="m-0 absolute top-[0px] left-[0px] font-bold inline-block w-[795px] h-[71px]"
            id="Licenserestrictionsheading"
          >
            License Restrictions
          </p>
          <TextField
            className="absolute top-[71px] left-[0px]"
            sx={{ width: 913 }}
            color="secondary"
            variant="outlined"
            multiline
            value={formData.licenseRestrictions}
            onChange={(e) => { setFormData({ ...formData, licenseRestrictions: e.target.value }) }}
            id="licenserestrictioninput"
            placeholder="Add in some comments here (IF APPLICABLE)"
            margin="none"
          />
        </div>
        <div className="absolute top-[1085px] left-[0px] w-[913px] h-[113px]">
          <p
            className="m-0 absolute top-[0px] left-[0px] font-bold inline-block w-[888px] h-[71px]"
            id="additionalCommentsHeading"
          >
            Additional Comments:
          </p>
          <TextField
            className="absolute top-[71px] left-[0px]"
            sx={{ width: 913 }}
            color="secondary"
            value={formData.comments}
            onChange={(e) => { setFormData({ ...formData, comments: e.target.value }) }}
            variant="outlined"
            multiline
            id="additionalCommentsInput"
            placeholder="Add in some comments here (IF APPLICABLE)"
            margin="none"
          />
        </div>
        <div className="absolute top-[0px] left-[17px] w-[548px] h-[187px] text-6xl text-dimgray-100">
          <p
            className="m-0 absolute top-[71px] left-[0px] font-medium inline-block w-[548px]"
            id="pageThreeSubHeading"
          >
            <span className="block">Modules to be Enabled:</span>
          </p>
          <p
            className="m-0 absolute top-[0px] left-[0px] text-21xl font-bold text-black inline-block w-[346px] h-[71px]"
            id="pageThreeHeading"
          >
            Select Modules:
          </p>
          <Link
            className="cursor-pointer [text-decoration:none] absolute top-[125px] left-[0px] w-[341px] h-[62px] text-center text-white"
            to="/module-selector"
          >
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-dimgray-200 w-[341px] h-[62px]" />
            <div className="absolute top-[5.89px] left-[31.56px] flex items-center justify-center w-[278.35px] h-[50.47px]">
              Click here to select
            </div>
          </Link>
        </div>
        <div className="absolute top-[272px] left-[17px] w-[785px] h-[522px] text-6xl">
          <p
            className="m-0 absolute top-[71px] left-[0px] font-medium text-dimgray-100 inline-block w-[695px]"
            id="licenseDurationSubheading"
          >{`Indicate the length of the license period in terms of days: `}</p>
          <p
            className="m-0 absolute top-[338px] left-[0px] font-medium text-dimgray-100 inline-block w-[491px]"
            id="datesubheading"
          >
            When do you want to get started?
          </p>
          <p
            className="m-0 absolute top-[0px] left-[0px] text-21xl font-bold inline-block w-[346px] h-[71px]"
            id="licenseDurationHeading"
          >
            License Duration:
          </p>
          <div className="absolute top-[417px] left-[0px] font-hp-simplified-jpan inline-block w-[131px]">
            Start Date:
          </div>
          <div className="absolute top-[410px] left-[515px] font-hp-simplified-jpan inline-block w-[131px]">
            End Date:
          </div>
          <p
            className="m-0 absolute top-[147px] left-[0px] font-assistant inline-block w-[227px]"
            id="dayinput"
          >
            Enter the No of days:
          </p>
          <TextField
            className="[border:none] bg-[transparent] absolute top-[210px] left-[0px]"
            sx={{
              width: 274, color: 'black', "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#000000",
              }
            }}
            color="secondary"
            variant="outlined"
            type="number"
            id="dayinput"
            disabled={formData.licenseType === 'Demo' || formData.licenseType === 'Trial'}
            placeholder="Enter no of days"
            size="medium"
            margin="none"
            required
            onBlur={(e) => {
              if (!formData.noOfDays) {
                setFormData({ ...formData, noOfDays: 1 });
              }
            }}
            value={formData.noOfDays}
            onChange={(e) => { setFormData({ ...formData, noOfDays: e.target.value }) }}
          />
          {/* <div
            className="absolute top-[459px] left-[511px] rounded-mini bg-whitesmoke-100 box-border w-[274px] h-[63px] border-[3px] border-solid border-gainsboro-100"
            id="calculatedEndDate"
          >
          </div> */}
            <TextField
              className="[border:none] bg-[transparent] absolute top-[459px] left-[511px]"
              sx={{
                width: 300, "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "#000000",
                }
              }}
              color="secondary"
              variant="outlined"
              id="dateInput"
              disabled
              size="medium"
              margin="none"
              value={formData.endDate}
            />
          <TextField
            className="[border:none] bg-[transparent] absolute top-[459px] left-[0px]"
            sx={{
              width: 434, "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#000000",
              }
            }}
            color="secondary"
            variant="outlined"
            type="date"
            id="dateInput"
            placeholder="Default - Day of Application"
            size="medium"
            margin="none"
            disabled={formData.licenseType === 'Demo' || formData.licenseType === 'Trial'}
            onChange={(e) => { setFormData({ ...formData, startDate: e.target.value }) }}
            value={formData.startDate}
          />
        </div>
      </div>
    </div>
  );
};

export default Desktop11;
