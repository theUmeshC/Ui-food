import { makeStyles } from "@mui/styles";
import img from "../Assets/banner_3.jpg";

export default makeStyles(() => ({
  container_5: {
    backgroundImage: `url(${img})`,
    display: "flex",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "280px",
    width: "100%",
    alignItems: "flex-end",
    
    "& h1": {
      width: "30%",
      color: "white",
      margin: "auto",
    },
  },
}));
