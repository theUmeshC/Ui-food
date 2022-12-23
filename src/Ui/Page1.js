import { makeStyles } from "@mui/styles";
import img from "../Assets/Banner.jpg"

export default makeStyles(() => ({
  top_container: {
    marginTop: "0px",
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    height: "450px",
    display: "flex",
  },
  top_container_content: {
    margin: "auto",
    width: "250px",
    minWidth: "120px",
    backgroundColor: "#80ca83b0",
    padding: "25px",
    borderRadius: "5px",
    "& h1": {
      color: "#ff6200",
      margin: 0,
    },
    "& p": {
      color: "rgb(46,45,45)",
    },
  },

  btn: {
    padding: "5px 15px",
    backgroundColor: "#ff8400",
    border: "none",
    borderRadius: "5px",
    color: "aliceblue",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#ff6200",
    },
  },
}));
