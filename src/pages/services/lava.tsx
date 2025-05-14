import {
  Command,
  Endpoints,
  Installation,
  Peer,
  Scanner,
  Snapshot,
  Blabla,
} from "@/constants/services/lava";
import { Box, Stack } from "@mui/material";
import { useRouter } from "next/router";
import SidebarLayout from "@/sections/layouts";
import { useMemo } from "react";
import { ContentSection } from "@/components/content-section";
import { StyledTitle } from "@/components/styled-title";

const sidebarWidth = 240;

const Airchains = () => {
  const router = useRouter();
  const pathName = useMemo(
    () => router.pathname.split("/").pop(),
    [router.pathname]
  );

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection={"column"}
      alignItems={"center"}
      sx={{
        ml: { sm: `${sidebarWidth}px` },
        width: { sm: `calc(100% - ${sidebarWidth}px)` },
        pt: { sm: "150px", xs: "30px" },
        gap: 5,
      }}
    >
      <div id="install">
        <Stack
          pb="10px"
          sx={{
            px: { xs: "10px" },
            maxWidth: "800px",
          }}
        >
          {/* Header */}
          <StyledTitle variant="h4">
            {pathName} Node Installation
          </StyledTitle>

          {/* Content Mapping */}
          {Installation.map((item, index) => (
            <ContentSection key={index} item={item} />
          ))}
        </Stack>
      </div>
      <div id="sidecar">
        <Stack
          pb="10px"
          sx={{
            px: { xs: "10px" },
            maxWidth: "800px",
          }}
        >
          {/* Header */}
          <StyledTitle variant="h4"> RPC, API, GRPC Endpoints</StyledTitle>

          {/* Content Mapping */}
          {Endpoints.map((item, index) => (
            <ContentSection key={index} item={item} />
          ))}
        </Stack>
      </div>
      <div id="blabla">
        <Stack
          pb="10px"
          sx={{
            px: { xs: "10px" },
            maxWidth: "800px",
          }}
        >
          {/* Header */}
          <StyledTitle variant="h4">Blabla</StyledTitle>

          {/* Content Mapping */}
          {Blabla.map((item, index) => (
            <ContentSection key={index} item={item} />
          ))}
        </Stack>
      </div>
      <div id="snapshot">
        <Stack
          pb="10px"
          sx={{
            px: { xs: "10px" },
            maxWidth: "800px",
          }}
        >
          {/* Header */}
          <StyledTitle variant="h4">Snapshot</StyledTitle>

          {/* Content Mapping */}
          {Snapshot.map((item, index) => (
            <ContentSection key={index} item={item} />
          ))}
        </Stack>
      </div>
      <div id="peer">
        <Stack
          pb="10px"
          sx={{
            px: { xs: "10px" },
            maxWidth: "800px",
          }}
        >
          {/* Header */}
          <StyledTitle variant="h4">Peer,seed, addrbook</StyledTitle>

          {/* Content Mapping */}
          {Peer.map((item, index) => (
            <ContentSection key={index} item={item} />
          ))}
        </Stack>
      </div>
      <div id="command">
        <Stack
          pb="10px"
          sx={{
            px: { xs: "10px" },
            maxWidth: "800px",
          }}
        >
          {/* Header */}
          <StyledTitle variant="h4">CLI commands</StyledTitle>

          {/* Content Mapping */}
          {Command.map((item, index) => (
            <ContentSection key={index} item={item} />
          ))}
        </Stack>
      </div>
      <div id="scanner">
        <Stack
          pb="10px"
          sx={{
            px: { xs: "10px" },
            maxWidth: "800px",
          }}
        >
          {/* Header */}
          <StyledTitle variant="h4">RPC Scanner</StyledTitle>

          {/* Content Mapping */}
          {Scanner.map((item, index) => (
            <ContentSection key={index} item={item} />
          ))}
        </Stack>
      </div>
    </Box>
  );
};

Airchains.getLayout = function getLayout(page: React.ReactElement) {
  return <SidebarLayout>{page}</SidebarLayout>;
};

export default Airchains;
