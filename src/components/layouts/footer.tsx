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
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="
                  group
                  flex items-center justify-center
                  w-14 h-14
                  rounded-full
                  bg-neutral-900
                  border border-neutral-700
                  transition-all duration-300
                  hover:scale-110
                  hover:bg-gradient-to-r
                  hover:from-blue-500
                  hover:to-purple-600
                  active:scale-95
                "
              >
                <Icon
                  size={28}
                  className="
                    text-neutral-300
                    transition-colors duration-300
                    group-hover:text-white
                  "
                />
              </a>
            );
          })}
        </Stack>
      </Box>
    </div>
  );
};

export default Footer;
