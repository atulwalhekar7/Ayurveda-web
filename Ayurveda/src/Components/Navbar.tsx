import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../assets/logo.png";

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
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

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
    {/* Social Icons */}
    <Box sx={{ display: "flex", gap: 1 }}>
      
      {/* Facebook */}
      <IconButton
        size="small"
        component="a"
        href="https://www.facebook.com/omayurveda.com.au?mibextid=ZbWKwL"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: WHITE }}
      >
        <FacebookIcon fontSize="small" />
      </IconButton>

      {/* Instagram */}
      <IconButton
        size="small"
        component="a"
        href="https://www.instagram.com/om_ayurvedaperth?utm_source=qr&igshid=OGU0MmVlOWVjOQ%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: WHITE }}
      >
        <InstagramIcon fontSize="small" />
      </IconButton>

      {/* YouTube (optional – keep or remove) */}
      <IconButton size="small" sx={{ color: WHITE }}>
        <YouTubeIcon fontSize="small" />
      </IconButton>

      {/* Email */}
      <IconButton
        size="small"
        component="a"
        href="mailto:omayurveda@hotmail.com"
        sx={{ color: WHITE }}
      >
        <EmailOutlinedIcon fontSize="small" />
      </IconButton>
    </Box>

    {/* Contact Info */}
    <Box sx={{ display: "flex", gap: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <LocationOnIcon sx={{ fontSize: 15, color: ACCENT_GREEN }} />
        <Typography variant="caption">
          Ayurveda Practitioner 2 Redmires Road Aveley, WA -6069
        </Typography>
      </Box>

      <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 0.5 }}>
        <EmailIcon sx={{ fontSize: 14, color: ACCENT_GREEN }} />
        <Typography variant="caption">omayurveda@hotmail.com</Typography>
      </Box>

      <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
        <PhoneIcon sx={{ fontSize: 14, color: ACCENT_GREEN }} />
        <Typography variant="caption">0433401505</Typography>
      </Box>
    </Box>
  </Box>
);
    
const Logo: React.FC = () => (
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <Box component="img" src={logo} alt="OM Ayurveda" sx={{ width: 120 }} />
  </Box>
);

const Navbar: React.FC = () => {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      
      {/* FIXED WRAPPER */}
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1100 }}>
        
        <TopBar />

        <AppBar
          position="static"
          elevation={0}
          sx={{
            background: WHITE,
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
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
                  component="a"
                  href="https://calendly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
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
      </Box>

      {/* SPACING (VERY IMPORTANT) */}
      <Box sx={{ height: { xs: 110, md: 120 } }} />

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {NAV_LINKS.map((item) => (
              <ListItemButton
                key={item.name}
                component={Link}
                to={item.path}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>

    </ThemeProvider>
  );
};

export default Navbar;