import React from 'react'
import { AppBar, Container, CssBaseline, Grid, ThemeProvider, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import MenuDrawer from './Drawer';
import Navbar from './Navbar';
import { appTheme } from '../../styles/theme';


export default function Header() {

    const [open, setOpen] = useState(false);
    function toggleClick() {
        setOpen(!open);
    }
    return (
    <ThemeProvider theme={appTheme}>
            <AppBar sx={{ backgroundColor: "primary.main", boxShadow: "0 0 0" }}
        >
            <CssBaseline/>
            <Container fixed>
                <Grid
                    container
                    
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: 3,
                    }}
                >
                    <Grid item sx={{ width: { md: 1 / 2, sm: 1 / 3, xs: 1 / 2 } }}>
                        <Typography>Homeskills</Typography>
                    </Grid>
                    <Grid
                        item
                        sx={{
                            width: { md: 1 / 2, sm: 3 / 5 },
                            display: { sm: "flex", xs: "none",xxs: "none" },
                            justifyContent: "space-between",
                        }}
                    >
                        <Navbar/>
                    </Grid>
                    <Grid item sx={{ display: { sm: "none", xs: "flex" } }}>
                        <Menu onClick={toggleClick} color="secondary.main" fontSize="large" />
                        <MenuDrawer
                            open={open}
                            onOpen={toggleClick}
                            onClose={toggleClick}
                        />
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    </ThemeProvider>
    )
}
