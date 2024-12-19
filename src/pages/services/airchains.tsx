import {
  Command,
  Endpoints,
  Installation,
  Peer,
  Scanner,
  Sidecar,
  Snapshot,
  Statesync,
} from "@/constants/services/airchains";
import { Box, Stack } from "@mui/material";
import { useRouter } from "next/router";
import SidebarLayout from "@/sections/layouts";
import { useMemo } from "react";
import { ContentSection } from "@/components/content-section";
import { StyledTitle } from "@/components/styled-title";

const sidebarWidth = 240;

// Section Configuration: Array of Objects
const sectionConfig = [
  { id: "install", title: "Node Installation Guide", data: Installation },
  { id: "sidecar", title: "Install Sidecar", data: Sidecar },
  { id: "endpoints", title: "RPC, API, GRPC Endpoints", data: Endpoints },
  { id: "statesync", title: "Statesync", data: Statesync },
  { id: "snapshot", title: "Snapshot", data: Snapshot },
  { id: "peer", title: "Peer, Seed, Addrbook", data: Peer },
  { id: "command", title: "CLI Commands", data: Command },
  { id: "scanner", title: "RPC Scanner", data: Scanner },
];

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
      flexDirection="column"
      alignItems="center"
      sx={{
        ml: { sm: `${sidebarWidth}px` },
        width: { sm: `calc(100% - ${sidebarWidth}px)` },
        pt: { sm: "150px", xs: "30px" },
        gap: 5,
      }}
    >
      {sectionConfig.map(({ id, title, data }) => (
        <div key={id} id={id}>
          <Stack
            pb="10px"
            sx={{
              px: { xs: "10px" },
              maxWidth: "800px",
            }}
          >
            {/* Header */}
            <StyledTitle variant="h4">
              {id === "install" ? `${pathName} ${title}` : title}
            </StyledTitle>

            {/* Content Mapping */}
            {data.map((item, index) => (
              <ContentSection key={index} item={item} />
            ))}
          </Stack>
        </div>
      ))}
    </Box>
  );
};

Airchains.getLayout = function getLayout(page: React.ReactElement) {
  return <SidebarLayout>{page}</SidebarLayout>;
};

export default Airchains;
