import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { appTheme } from '../../styles/theme'
import { Box, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const containerStyle = {
    display: "flex",

    justifyContent: {
        xxs: "center",
        xs: "center",
        sm: "center",
        md: "space-between",
        lg: "space-between",
        xl: "space-between"
    },
    flexWrap: {
        xxs: "wrap",
        xs: "wrap",
        sm: "wrap",
        md: "wrap",
        lg: "wrap",
        xl: "nowrap"
    },

}
const white = {
    color: "#fff",
    textDecoration: "none",
    marginBottom: "10px"
}
const boxStyle = {
    display: "flex",
    flexDirection: "column",
    color: "white",
    marginBottom: "25px",

    marginRight: {
        xxs: "0",
        xs: "20px",
        sm: "20px",
        md: "20px",
        lg: "20px",
        xl: "20px"
    }

}



export default function Footer() {
    return (
        <ThemeProvider theme={appTheme}>
            <Box sx={{ width: '100%', bgcolor: appTheme.palette.secondary.light }}>
                <Container sx={containerStyle} style={{ width: '90%', padding: '100px 0' }}>
                    <Box sx={boxStyle}>
                        <Typography variant='h3' sx={white}>Homeskills</Typography>
                        <Link style={{ color: "white", textDecoration: "none", paddingTop: "10px", paddingBottom: "10px" }}>Homeskills@gmail.com</Link>
                        <Link to='tel:+993 61222993' style={{ color: "white", textDecoration: "none", paddingTop: "10px", paddingBottom: "10px" }}>+993 61222993</Link>
                    </Box>

                    <Box sx={boxStyle}>
                        <Typography variant='h3' sx={white}>О нас</Typography>
                        <Link to='/employer' style={white} >Работодатели</Link>
                        <Link to='/about' style={white} > О компании </Link>

                    </Box >

                    <Box sx={boxStyle}>
                        <Typography variant='h3' sx={white}>Вакансии</Typography>
                        <Link to='/employer' style={white}>От работодателей</Link>
                        <Link to='/' style={white}>От соискателей</Link>
                    </Box>

                 
                </Container>
            </Box>
        </ThemeProvider>
    )
}
