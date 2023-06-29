import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { appTheme } from '../../styles/theme'
import { Box, Button, Container, Typography } from '@mui/material'
import ButtonComponent from '../ButtonComponent'

export default function Find() {
    return (
        <ThemeProvider theme={appTheme}>
            <Box sx={{ width: '100%', bgcolor: appTheme.palette.primary.light, padding:'100px 0' }}>
                <Container sx={{width:'90%', }}>
                    <Typography variant='h2' textAlign={'center'} sx={{mb:3}}>Какие сотрудники есть на Homeskills?</Typography>
                    <Typography variant='h3' textAlign={'center'} sx={{mb:6}}>Найдите идеальног сотрудника сами!</Typography>
                    <Box sx={{textAlign:'center'}}><ButtonComponent buttonText={'Работодатели'} href={'employer'}/></Box>
                </Container>
            </Box>
        </ThemeProvider>
    )
}
