import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

type CardButtonProps = ButtonProps & {
  href?: string;
  target?: string;
  rel?: string;
};

export const CardButton = styled(
  (props: CardButtonProps) => <Button {...props} />
)({
  backgroundColor: "#e7e6e8",
  borderRadius: "5px",
  paddingInline: "10px",
  paddingTop: "5px",
  paddingBottom: "5px",
  fontSize: "100%",
  color: "black",
  textTransform: "capitalize",
  border: "2px solid #d0d7de",
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
