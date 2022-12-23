import React from "react";
import useStyles from "../Ui/Page1";

const Page1 = () => {
  const classes = useStyles();
    return (
    <div className={classes.top_container}>
      <div className={classes.top_container_content}>
        <h1>Citrus Farm</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          accusantium nisi esse culpa! Omnis inventore cum cupiditate magni sed
          maxime eius sequi consequatur exercitationem option
        </p>
        <button className="btn">Contact Us</button>
      </div>
    </div>
  );
};

export default Page1;
