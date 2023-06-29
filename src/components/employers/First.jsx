import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { appTheme } from '../../styles/theme'
import { Box, Container, Typography } from '@mui/material'


export default function First() {
    return (
        <ThemeProvider theme={appTheme}>
            <Box sx={{
                background: 'linear-gradient(to right, #FFE57F , #FFf)',
                width: '100%',

            }}>
                <Container sx={{ width: "90%", padding: "250px 0px " }} fixed>
                    <Typography variant='h2' textAlign={'center'} sx={{ mb: 3, color: appTheme.palette.secondary.dark, fontWeight: 'bold' }}>Разместите вакансию на HomeSkills</Typography>
                    <Typography variant='h3' textAlign={'center'} sx={{ mb: 6, color: appTheme.palette.secondary.dark, fontWeight: 'bold' }}>И находите сотрудников среди тех, кто хочет у вас работать. HomeSkills — сервис №1 по поиску сотрудников</Typography>
                </Container>
            </Box>
        </ThemeProvider>
    )
}
