import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  container_two_wrapper: {
    background: "#000",
    backgroundSize: "auto auto",
    padding: "30px 0",
    display: "flex",
  },

  container_two: {
    color: "white",
    display: "flex",
    flexWrap: "wrap",
    margin: "auto 25%",
    gap: "10px",
  },

  part_1: {
    minWidth: "200px",
    flex: 1,
    margin: "auto",
  },
  part_2: {
    minWidth: "200px",
    flex: 1,
    margin: "auto",
  },

  para_container: {
    color: "rgb(173,169,169)",
  },

  numeric_title: {
    color: "#ffc400",
  },
}));
