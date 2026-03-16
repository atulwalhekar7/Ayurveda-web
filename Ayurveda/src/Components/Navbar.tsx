import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const theme = createTheme({
  palette: {
    primary: { main: "#1B5E20" },
    secondary: { main: "#2E7D32" },
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
  },
});

const DARK_GREEN = "#1B5E20";
const MID_GREEN = "#2E7D32";
const ACCENT_GREEN = "#4CAF50";
const WHITE = "#FFFFFF";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Packages", path: "/packages" },
  { name: "Contact Us", path: "/contact" },
  { name: "Testimonials", path: "/testimonials" },
];

const TopBar: React.FC = () => (
  <Box
    sx={{
      background: DARK_GREEN,
      color: WHITE,
      py: 0.75,
      px: { xs: 2, md: 4 },
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      minHeight: 38,
    }}
  >
    <Box sx={{ display: "flex", gap: 1 }}>
      <IconButton size="small" sx={{ color: WHITE }}>
        <FacebookIcon fontSize="small" />
      </IconButton>

      <IconButton size="small" sx={{ color: WHITE }}>
        <EmailOutlinedIcon fontSize="small" />
      </IconButton>
    </Box>

    <Box sx={{ display: "flex", gap: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <LocationOnIcon sx={{ fontSize: 15, color: ACCENT_GREEN }} />
        <Typography variant="caption">
          123, Green Park, Amritsar-143001 (India)
        </Typography>
      </Box>

      <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 0.5 }}>
        <EmailIcon sx={{ fontSize: 14, color: ACCENT_GREEN }} />
        <Typography variant="caption">info@omayurveda.com</Typography>
      </Box>

      <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
        <PhoneIcon sx={{ fontSize: 14, color: ACCENT_GREEN }} />
        <Typography variant="caption">+91-98765-43210</Typography>
      </Box>
    </Box>
  </Box>
);

const Logo: React.FC = () => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Box
      sx={{
        width: 46,
        height: 46,
        borderRadius: "50%",
        border: `2px solid ${MID_GREEN}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ fontSize: 22, color: DARK_GREEN }}>ॐ</Typography>
    </Box>

    <Box>
      <Typography sx={{ fontWeight: 700, fontSize: 24, color: DARK_GREEN }}>
        OM Ayurveda
      </Typography>

      <Typography sx={{ fontSize: 10, color: MID_GREEN }}>
        A Holistic Healthcare Centre
      </Typography>
    </Box>
  </Box>
);

const Navbar: React.FC = () => {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ position: "sticky", top: 0, zIndex: 1100 }}>

        <TopBar />

        <AppBar position="static" elevation={0} sx={{ background: WHITE }}>
          <Container maxWidth="xl">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

              <Logo />

              {!isMobile && (
                <Box sx={{ display: "flex", gap: 1 }}>
                  {NAV_LINKS.map((item) => (
                    <Button
                      key={item.name}
                      component={Link}
                      to={item.path}
                      sx={{
                        color: "#333",
                        fontWeight: 600,
                        textTransform: "none",
                      }}
                    >
                      {item.name}
                    </Button>
                  ))}
                </Box>
              )}

              {!isMobile && (
                <Button
                  variant="contained"
                  sx={{
                    background: `linear-gradient(135deg, ${MID_GREEN}, ${DARK_GREEN})`,
                    borderRadius: "25px",
                  }}
                >
                  Book Consultation
                </Button>
              )}

              {isMobile && (
                <IconButton onClick={() => setDrawerOpen(true)}>
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{ width: 250 }}>
            <List>
              {NAV_LINKS.map((item) => (
                <ListItem
                  button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

      </Box>
    </ThemeProvider>
  );
};

export default Navbar;