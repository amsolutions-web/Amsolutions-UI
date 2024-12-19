import { SocialIcons } from "@/constants/social-icons";
import { Box, Stack } from "@mui/material";

const Footer = () => {
  return (
    <>
      <div id="contact">
        <Box display={"flex"} justifyContent={"center"} py={"15px"}>
          <Stack flexDirection={"row"} gap={3}>
            {SocialIcons.map((Icon, index) => (
              <Icon key={index} size={"40px"} />
            ))}
          </Stack>
        </Box>
      </div>
    </>
  );
};

export default Footer;
