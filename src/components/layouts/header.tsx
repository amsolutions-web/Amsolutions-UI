import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { navItems } from "@/constants/headers";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useRouter } from "next/router";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const Header = (props: Props) => {
  const router = useRouter();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

const handleScroll = (id: string) => {
  if (id === "blog") {
    // открываем блог в новой вкладке, только если window доступен
    if (typeof globalThis !== "undefined" && globalThis.window) {
      globalThis.window.open("https://medium.com/@latflat", "_blank");
    }
  } else if (id === "home") {
    router.push("/");
  } else {
    router.push(`/#${id}`);
  }
};


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        AMSolution
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleScroll(item.target)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          position: "relative",
          overflow: "hidden",
          background: "transparent",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage: 'url("/header.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: "slowZoom 7s ease-in-out infinite alternate",
            zIndex: -1,
          },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, mb: 2 }}
          >
            <HiOutlineMenuAlt3 size={28} color="#ffffff" />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              mt: { md: 7, sm: 2 },
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.target}
                onClick={() => handleScroll(item.target)}
                sx={{
                  color: "#fff",
                  fontSize: "20px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  transition: "all 0.7s ease",
                  "&:hover": {
                    color: "#CC7244",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
