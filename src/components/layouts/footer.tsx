import { SocialIcons } from "@/constants/social-icons";
import { Box, Stack } from "@mui/material";

const Footer = () => {
  return (
    <div id="contact">
      <Box display="flex" justifyContent="center" py="15px">
        <Stack direction="row" gap={3}>
          {SocialIcons.map((item, index) => {
            const Icon = item.icon;

            return (
              <Box
                key={index}
                component="a"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "0.3s",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.15)",
                  },
                }}
              >
                <Icon size={40} />
              </Box>
            );
          })}
        </Stack>
      </Box>
    </div>
  );
};

export default Footer;
