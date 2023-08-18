import { useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MyComponent from "./MyComponents";
import { Link } from "react-router-dom";
const Desktop14 = ({formData, setFormData}) => {
  const navigate = useNavigate();



  return (
    <div className="relative bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[1024px] overflow-hidden">
      <div style={{position:"relative"}} className="absolute top-[0px] left-[0px] bg-tomato w-[1440px] h-[207px]" />
      <TextField
        className="[border:none] absolute top-[75px] left-[967px]"
        sx={{ width: 431 }}
        color="error"
        variant="filled"
        type="text"
        id="search"
        placeholder="Search"
        size="medium"
        margin="none"
      />
      <Link
        className="absolute top-[62px] left-[36px] cursor-pointer"
        sx={{ width: 330 }}
        variant="contained"
        id="gobackbutton"
        color="primary"
        to="/license-details"
       
      >{`<- Go Back`}</Link>
      <div
      >
        <MyComponent formData={formData} setFormData={setFormData}/>
      </div>
    </div>
  );
};

export default Desktop14;
