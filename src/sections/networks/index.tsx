import { NetworkButton } from "@/components/network-button";
import NetworkCard from "@/components/network-card";
import { Mainnet, Network, Testnet } from "@/constants/network";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

const NetworksSection = () => {
  const [network, setNetwork] = useState(Network.Mainnet);

  return (
    <div id="networks">
      <Box
        flexDirection={"column"}
        sx={{ px: { sm: "80px", xs: "20px" }, py: "20px" }}
        bgcolor={"#f1f1f1"}
      >
        <Typography variant="h3" fontWeight={"bold"}>
          Networks
        </Typography>
        <Stack gap={2} flexDirection={"row"}>
          <NetworkButton onClick={() => setNetwork(Network.Mainnet)}>
            Mainnet
          </NetworkButton>
          <NetworkButton onClick={() => setNetwork(Network.Testnet)}>
            Testnet
          </NetworkButton>
        </Stack>
        <Stack
          gap={3}
          px={"30px"}
          bgcolor={"#fdfdfd"}
          flexDirection={"row"}
          py={3}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          {network === Network.Mainnet
            ? Mainnet.map((item, index) => (
                <NetworkCard
                  key={index}
                  alt={item.alt}
                  url={item.url}
                  title={item.title}
                  id={item.id}
                />
              ))
            : Testnet.map((item, index) => (
                <NetworkCard
                  key={index}
                  alt={item.alt}
                  url={item.url}
                  title={item.title}
                  id={item.id}
                />
              ))}
        </Stack>
      </Box>
    </div>
  );
};

export default NetworksSection;
