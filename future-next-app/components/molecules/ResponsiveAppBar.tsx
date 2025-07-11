"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import colors from "@theme/colors";
import Link from "next/link";

const pages = ["Home", "Fields", "Blog", "profile", "Contact Us"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: colors.primary,
        height: "84px",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          // border: "solid red",
          height: "100%",
        }}
      >
        <Toolbar disableGutters sx={{ mt: 0.5 }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".4rem",
              color: colors.text.inverse,
              textDecoration: "none",
              // border: "solid green",
            }}
          >
            Future Academy
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                mt: 2,
                // border: "solid white",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    href={`/${page.toLowerCase().replace(" ", "-")}`}
                    passHref
                  >
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </Link>{" "}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* logo for small screens */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
              mt: 2,
              // border: "solid red",
            }}
          >
            Future Academy
          </Typography>
          {/* navigation list */}
          <Box
            sx={{
              // border: "solid red",
              justifyContent: "center",
              flexGrow: 0.5,
              mt: 0.4,
              gap: 4,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link
                key={page}
                href={`/${page.toLowerCase().replace(" ", "-")}`}
                passHref
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: colors.text.inverse, display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
