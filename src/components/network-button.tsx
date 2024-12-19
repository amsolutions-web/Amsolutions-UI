import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const NetworkButton = styled(Button)({
  backgroundColor: "#fdfdfd",
  borderRadius: "5px",
  paddingInline: "10px",
  paddingTop: "5px",
  paddingBottom: "5px",
  fontSize: "100%",
  color: "black",
  textTransform: "capitalize",
  border: "2px solid #fdfdfd",
  "&:hover": {
    color: "#1677ff",
  },
  "&:active": {
    color: "#1677ff",
  },
  "&:focus": {
    color: "#1677ff",
  },
});
