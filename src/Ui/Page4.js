import { makeStyles } from "@mui/styles";
import img from "../Assets/Untitled.svg";

export default makeStyles(() => ({
  container_4: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    padding: "50px",
    margin: "auto",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    color: "white",
    "& img": {
      width: "300px",
      display: "block",
      objectFit: "contain",
    },
    "& p": {
      width: "300px",
    },
  },

  container_4_wrapper: {
    background: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundColor: "#ffc800",
    backgroundSize: "cover",
  },

  container_4_part_1: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  container_4_part_2: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },

  cooking__image: {
    height: "300px",
    objectFit: "contain",
  },
}));
