import React from "react";

import { Typography } from "@mui/material";

const Header = () => {
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  return (
    <div className="main-style">
      <Typography variant="h2" component="h2" padding="15px">
        CarHunt
      </Typography>
      <Typography
        variant="h6"
        component="h6"
        color={"gray"}
        padding="10px"
        style={{ fontStyle: "italic" }}
      >
        Lengvesnė automobilių paieška
      </Typography>
    </div>
  );
};

export default Header;
