import React from 'react'
import { ThemeProvider } from 'styled-components'
import { appTheme } from '../../styles/theme'
import { Box, Container, Stack, Typography } from '@mui/material'
import bg from '../../images/jobs.jpg'



export default function We() {
    return (
        <ThemeProvider theme={appTheme}>
            <Box sx={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: "center"
            }}>
                <Container sx={{ width: "90%", padding: "150px 10px ", margin: "0 auto" }}>
                    <Stack sx={{
                        width: {
                            xxs: "90%",
                            xs: "90%",
                            sm: "70%",
                            md: "70%",
                            lg: "70%",
                            xl: "70%"
                        }
                    }}>
                        <Typography variant='h3' sx={{ color: appTheme.palette.primary.main, marginBottom: "30px" }}>О компании</Typography>
                        <Typography variant='body1' sx={{ color: appTheme.palette.secondary.main, marginBottom: "30px", fontWeight: 'bold' }}>
                            Homeskills — один из самых удобных сайтов по поиску работы и сотрудников . Мы создаем передовые технологии на платформах для того, чтобы работодатели могли быстро найти подходящего сотрудника, а соискатели — хорошую работу.
                        </Typography>

                    </Stack>
                </Container>
            </Box>
        </ThemeProvider>
    )
}
