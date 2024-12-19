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
          "&.MuiPaper-root": {
            backgroundColor: "#e9e5e6",
            backgroundImage: `url("https://www.theamsolutions.info/-_-/res/93940d22-eaa9-4ca4-96f0-b7298af36029/images/files/93940d22-eaa9-4ca4-96f0-b7298af36029/77834bd2-effe-437d-a30c-fc2240bd1e8b/1200-500/3d4add18ea322d61a96de88bce2c667f6b04c5ae")`,
            color: "#383838",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "1% 11%",
            backgroundAttachment: "scroll",
          },
          alignItems: { xs: "end" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <HiOutlineMenuAlt3 size={28} color="#ffffff" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              mt: { md: 11, sm: 4 },
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
                  "&:hover": {
                    color: "#1677ff",
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
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
