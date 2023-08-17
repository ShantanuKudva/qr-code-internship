import { useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MyComponent from "./MyComponents";

const Desktop14 = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/license-details");
  }, [navigate]);

  return (
    <div className="relative bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[1024px] overflow-hidden">
      <div className="absolute top-[0px] left-[0px] bg-tomato w-[1440px] h-[207px]" />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[75px] left-[967px]"
        sx={{ width: 431 }}
        color="primary"
        variant="filled"
        type="text"
        id="search"
        placeholder="Search"
        size="medium"
        margin="none"
      />
      <Button
        className="absolute top-[62px] left-[36px] cursor-pointer"
        sx={{ width: 330 }}
        variant="contained"
        id="gobackbutton"
        color="primary"
        href="/license-details"
        onClick={onGroupButtonClick}
      >{`<- Go Back`}</Button>
      <div
        className="absolute top-[calc(50%_-_258px)] left-[calc(50%_-_674px)] bg-gainsboro-200 w-[1347px] h-[727px]"
        id="moduleContainer"
      >
        <MyComponent />
      </div>
    </div>
  );
};

export default Desktop14;
