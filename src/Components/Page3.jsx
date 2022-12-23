import React from 'react';
import useStyles from "../Ui/Page3";

const Page3 = () => {
  const classes = useStyles();
  return (
    <div className={classes.container_three}>
      <div className={classes.container_three_content}>
        <h1>Healthy Food</h1>
        <h5>good food restaurant</h5>
        <button className="btn">VIEW MORE</button>
      </div>
    </div>
  )
}

export default Page3