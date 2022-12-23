import { makeStyles } from "@mui/styles";
import img from "../Assets/food_banner.jpg";

export default makeStyles(() => ({
  container_three: {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    height: "450px",
    display: "flex",
  },

  container_three_content: {
    margin: "auto",
    backgroundColor: "#80ca83b0",
    padding: "30px 60px",
    borderRadius: "5px",
    textAlign: "center",
    "& h1": {
      margin: 0,
    },
  },
}));
