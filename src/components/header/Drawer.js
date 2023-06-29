import { Box, SwipeableDrawer, Typography } from "@mui/material";
import React from "react";

import Navbar from "./Navbar";


function MenuDrawer({ open, onOpen, onClose }) {
  const linkStyle = {
    marginBottom: "20px",
  };
  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          ml: 5,
          mr: 7,
        }}
      >
        <Box sx={{ my: 5 }}>
          <Typography>Homeskills</Typography>
        </Box>
        <Navbar navStyle={linkStyle} />
      </Box>
    </SwipeableDrawer>
  );
}

export default MenuDrawer;

