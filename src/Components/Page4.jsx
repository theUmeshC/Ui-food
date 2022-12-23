import React from "react";
import useStyles from "../Ui/Page4";
import img from "../Assets/bowl_spinach.jpg";
import img2 from "../Assets/organic.jpg";
import img3 from "../Assets/cooking_image.jpg";
import img4 from "../Assets/tomato.jpg";

const Page4 = () => {
  const classes = useStyles();
  return (
    <div className={classes.container_4_wrapper}>
      <div className={classes.container_4}>
        <div className={classes.container_4_part_1}>
          <img src={img} alt="" />
          <p >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos qui,
            delectus mollitia repellendus atque beatae aliquam quia blanditiis
            non, aliquid enim quisquam vel, nam exercitationem.
          </p>
          <h2 >Organic Farming</h2>
          <img src={img2} alt="" />
        </div>
        <div className={classes.container_4_part_2}>
          <h2 >Green Eating</h2>
          <img className={classes.cooking__image} src={img3} alt="" />
          <img src={img4} alt="" />
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            deleniti, harum nostrum optio magnam fuga! Quos, pariatur
            consequatur deserunt maiores delectus nobis quas facilis aut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page4;
