import NetworkCard from "@/components/network-card";
import { Mainnet, Testnet } from "@/constants/network";
import { Box, Stack, Typography } from "@mui/material";

const NetworksSection = () => {
  return (
    <div id="networks">
      <Box
        flexDirection={"column"}
        sx={{ px: { sm: "80px", xs: "20px" }, py: "20px" }}
        bgcolor={"#f1f1f1"}
      >
        <Stack flexDirection={"column"} justifyContent={"center"} gap={4}>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
          >
            featured projects
          </Typography>
          <Stack
            gap={3}
            px={"30px"}
            bgcolor={"#fdfdfd"}
            flexDirection={"row"}
            py={3}
            justifyContent={"center"}
            flexWrap={"wrap"}
          >
{Mainnet.map((item, index) => (
  <NetworkCard
    key={index}
    alt={item.alt}
    url={item.url}
    title={item.title}
    id={item.id}
    stakingUrl={item.stakingUrl}
    serviceUrl={item.serviceUrl}
  />
))}

          </Stack>
        </Stack>
        <Stack flexDirection={"column"} justifyContent={"center"}>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            my={4}
          >
            ongoing testnets
          </Typography>
          <Stack
            gap={3}
            px={"30px"}
            bgcolor={"#fdfdfd"}
            flexDirection={"row"}
            py={3}
            justifyContent={"center"}
            flexWrap={"wrap"}
          >
            {Testnet.map((item, index) => (
              <NetworkCard
                key={index}
                alt={item.alt}
                url={item.url}
                title={item.title}
                id={item.id}
              />
            ))}
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default NetworksSection;
