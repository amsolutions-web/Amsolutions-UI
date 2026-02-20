import { useState } from "react";
import { Box, Button, Typography, Snackbar } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const EmailPage = () => {
  const [copied, setCopied] = useState(false);
  const email = "latflat@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
  };

  const handleClose = () => setCopied(false);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      textAlign="center"
      gap={2}
    >
      <Typography variant="h4" sx={{ color: "#113361" }}>Email :</Typography>
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#113361" }}>
        {email}
      </Typography>
      <Button
        variant="contained"
        startIcon={<ContentCopyIcon />}
        onClick={handleCopy}
      >
        Copy Email
      </Button>

      <Snackbar
        open={copied}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Email copied!"
      />
    </Box>
  );
};

export default EmailPage;
