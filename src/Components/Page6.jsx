import React from "react";
import useStyles from "../Ui/Page6";
import img from "../Assets/cooking-fire-nature-night.jpg";
import img2 from "../Assets/vegetables.jpg";

const Page6 = () => {
  const classes = useStyles();
  return (
    <div className={classes.main_container}>
      <div className={classes.left_part}>
        <div className={classes.left_top}>
          <img src={img} alt="" />
          <img src={img2} alt="" />
        </div>
        <div className={classes.left_bottom}>
          <div className={classes.left_bottom_content}>
            <p>
              Contact us today to plant your boat's maintenance or repair
              procedure
            </p>
            <p>4262 Richison Drive</p>
            <p>Missoula, MT 59801</p>
          </div>
        </div>
      </div>
      <div className={classes.right_part}>
        <div className={classes.right_part_top}>
          <h1>Reduce Waste</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis fugiat obcaecati nobis consequuntur corrupti.
          </p>
        </div>
        <div className={classes.right_part_bottom}>
          <div className="content">
          <h1>Contact Us</h1>
          <p>Freephone: +18005596580</p>
          <p>Telephone: +18005596580</p>
          <p>Fax: +18005596580</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
