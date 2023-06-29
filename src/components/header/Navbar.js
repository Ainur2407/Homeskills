import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Navbar({ navStyle }) {
  const navItems = [
    { linkName: "Работодатели", href: "/employer" },
    { linkName: "Соискатели", href: "/" },
    { linkName: "О нас", href: "/about" },

  ];
  return (
    <>
      {navItems.map((navItem) => (
        <Link key={uuidv4()} to={navItem.href} style={{textDecoration:"none"}}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 400, fontSize: "20px", lineHeight: "25px" }}
            underline="none"
            color="secondary"
            style={navStyle}
          >
            {navItem.linkName}
          </Typography>
        </Link>
      ))}
    </>
  );
}

export default Navbar;