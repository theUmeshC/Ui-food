import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  main_container: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
  left_part: {
    flex: 1,
    minWidth: "250px",
  },
  left_top: {
    display: "flex",
    "& img": {
      objectFit: "fill",
      width: "50%",
      height: "200px",
    },
  },
  left_bottom: {
    height: "150px",
    backgroundColor: "black",
    color: "white",
    display: "flex",
  },
  left_bottom_content: {
    margin: "auto",
  },
  right_part: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    minWidth: "250px",

  },
  right_part_top: {
    height: "200px",
    background: "#ffc400",
    padding: "0 15px",
  },
  right_part_bottom: {
    height: "150px",
    background: "#09ebf7",
    padding: "0 15px",
    "& h1": {
        margin: "0",
    }
  },
}));
