import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
//import ListItemText from "@mui/material/ListItemText";
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

  const handleScroll = (id: string) => {
    if (id === "home") {
      router.push("/");
    } else {
      router.push(`/#${id}`);
    }
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
  onClick={() => {
    if (item.href) {
      globalThis.window?.open(item.href, "_blank");
    } else if (item.target) {
      handleScroll(item.target);
    }
  }}
>
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
      backgroundRepeat: "no-repeat",
      zIndex: -1,

      animation: `
        zoomMotion 5s ease-in-out infinite alternate,
        blurMotion 5s ease-in-out infinite alternate
      `,
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
{navItems.map((item) => {
  if (item.href) {
    return (
      <Button
        key={item.label}
        component="a"
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "#fff",
          fontSize: "20px",
          textTransform: "uppercase",
          fontWeight: "bold",
          "&:hover": { color: "black" },
        }}
      >
        {item.label}
      </Button>
    );
  }

  return (
    <Button
      key={item.target}
      onClick={() => handleScroll(item.target)}
      sx={{
        color: "#fff",
        fontSize: "20px",
        textTransform: "uppercase",
        fontWeight: "bold",
        "&:hover": { color: "black" },
      }}
    >
      {item.label}
    </Button>
  );
})}

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
