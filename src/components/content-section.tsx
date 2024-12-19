import { Box, Button, Stack, Typography } from "@mui/material";
import { IoIosCopy } from "react-icons/io";
import CopyCode from "@/utils/copy-code";
import { ContentType } from "@/types";

export const ContentSection = ({ item }: { item: ContentType }) => {
  return (
    <Stack mt="30px" gap={2}>
      <Typography variant="h5" fontWeight="bold" color="#0f172a">
        {item.title}
      </Typography>
      <Typography>{item.method}</Typography>

      {/* Code Block */}
      <Stack
        sx={{
          bgcolor: "#1f2937",
          borderRadius: "10px",
          color: "#dbdde2",
          px: "15px",
          py: "20px",
          fontSize: "15px",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="code"
          sx={{
            whiteSpace: "pre-wrap",
            lineHeight: "1.5",
            wordBreak: "break-word",
            display: "block",
          }}
        >
          {item.code.trim().replace(/^\s+/gm, "")}
        </Box>
        <Button
          sx={{ color: "#ffffff", "&:hover": { color: "#f3d74e" } }}
          onClick={() => CopyCode(item.code)}
        >
          <IoIosCopy />
        </Button>
      </Stack>
    </Stack>
  );
};
