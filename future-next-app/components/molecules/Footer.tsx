"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import colors from "@theme/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const footerLinks = [
  { label: "Home", href: "/home" },
  { label: "About Us", href: "/about-us" },
  { label: "Courses", href: "/courses" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: colors.primary,
        color: colors.text.inverse,
        py: 6,
        mt: 8,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, sm: 4 },
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {/* Branding */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontFamily: "monospace",
              letterSpacing: ".1rem",
              mb: 2,
            }}
          >
            Future Academy
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <LocationOnIcon sx={{ mr: 1 }} />
            <Typography variant="body2">
              123 Learning St, Cairo, Egypt
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography variant="body2">+20 100 123 4567</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography variant="body2">+20 122 987 6543</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <EmailIcon sx={{ mr: 1 }} />
            <Typography variant="body2">info@futureacademy.com</Typography>
          </Box>
        </Box>

        {/* Navigation */}
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
            Quick Links
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: colors.text.inverse,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                {link.label}
              </Link>
            ))}
          </Box>
        </Box>

        {/* Social Media */}
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
            Follow Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Link href="https://facebook.com" target="_blank">
              <FacebookIcon sx={{ color: colors.text.inverse, fontSize: 28 }} />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <TwitterIcon sx={{ color: colors.text.inverse, fontSize: 28 }} />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <InstagramIcon
                sx={{ color: colors.text.inverse, fontSize: 28 }}
              />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <LinkedInIcon sx={{ color: colors.text.inverse, fontSize: 28 }} />
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Footer Bottom */}
      <Typography
        variant="body2"
        align="center"
        sx={{
          mt: 4,
          color: colors.text.inverse,
          fontSize: "0.85rem",
        }}
      >
        © {new Date().getFullYear()} Future Academy. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
