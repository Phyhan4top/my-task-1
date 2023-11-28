import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Home = () => {
  return (
    <div className="text bg-Home-1 w-full h-screen bg-no-repeat bg-cover flex items-start justify-end opacity-3 z-[1]">
      {/* <div className="w-[100vw] h-[90vh] m-auto flex">
        <div className="flex-1 bg-Home-1 bg-no-repeat bg-cover opacity-3">
          <div className="w-[60%] mx-auto ">
            <div className="text-white text-4xl font-bold ">
              The race for <span className="bg-purple-500">the Leadership</span>
            </div>
            <div className="text-normal border-l-purple-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              ipsum ipsam aperiam fuga, possimus ab, error dolorem sint quo,
              odio sequi. Ut distinctio ipsum qui est maiores dignissimos dolor
              magni sapiente exercitationem. Optio repudiandae, beatae deserunt
              dolores dolore amet exercitationem ducimus. Vitae asperiores natus
              sint illum, sequi sit repellendus laboriosam.
            </div>
          </div>
        </div>

        <div className="flex-[1.5]">
          <img
            src="/Resources/istockphoto-1148091793-1024x1024.jpg"
            className="w-[100%] h-[100%]"
          />
        </div>
      </div> */}
      <div className=" z-[2]">
        <h1 className="text-[#f2f2f2] text-7xl my-5 font-[700]">Leader helps the team</h1>
        <Button variant="contained">Learn More</Button>
      </div>
    </div>
  );
};

export default Home;
