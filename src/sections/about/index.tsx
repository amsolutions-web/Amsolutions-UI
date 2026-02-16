import { Abouts } from "@/constants/abouts";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div id="about">
      <Box
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          pt: { md: "120px", sm: "80px" },
          pb: "25px",
        }}
        bgcolor={"#f1f1f1"}
      >
        <Stack
          flexDirection={"row"}
          justifyContent={"center"}
          gap={{ md: 10, sm: 7 }}
          flexWrap={"wrap"}
          mt={"40px"}
        >
          {Abouts.map((item, index) => (
            <Stack
              key={index}
              display={"flex"}
              flexDirection={"column"}
              px={1}
              py={2}
              bgcolor={"#fdfdfd"}
              gap={2}
            >
              <Image alt="photo" src={item.url} width={345} height={210} />
              <Typography variant="h6" fontWeight={"bold"}>
                {item.subtitle}
              </Typography>
              <Typography textAlign={"center"} width={330}>
                {item.description}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </div>
  );
};

export default AboutSection;
