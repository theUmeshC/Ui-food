import React from "react";
import useStyles from "../Ui/Page2";

const Page2 = () => {
  const classes = useStyles();
  return (
    <div className={classes.container_two_wrapper}>
      <div className={classes.container_two}>
        <div className={classes.part_1}>
          <h1>Healthy Food</h1>
          <h1 className={classes.numeric_title}>01</h1>
          <h5>Easy to Use Tools</h5>
          <p className={classes.para_container}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            asperiores magnam debitis iure eos expedita.
          </p>
        </div>
        <div className={classes.part_2}>
          <p className={classes.para_container}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            iste quia non assumenda enim aperiam?
          </p>
          <h1 className={classes.numeric_title}>02</h1>
          <h5>Special Discounts</h5>
          <p className={classes.para_container}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ea
            laborum modi aspernatur quis rem laudantium tenetur voluptate
            praesentium debitis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page2;
