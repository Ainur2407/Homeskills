import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Box, Container, Stack, Typography } from '@mui/material'
import bg from '../../images/needajob.jpg'
import { appTheme } from '../../styles/theme'

export default function Overview() {
    return (
        <ThemeProvider theme={appTheme}>
            <Box sx={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: "center"
            }}>
                <Container sx={{ width: "90%", padding: "150px 10px ", margin:"0 auto" }} fixed>
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
                        <Typography variant='h2' sx={{color: appTheme.palette.primary.main, marginBottom:"30px"}}>Поиск работы</Typography>
                        <Typography variant='body1' sx={{color: appTheme.palette.primary.main,marginBottom:"30px", fontWeight:'bold'}}>Работа составляет большую часть жизни почти каждого из нас. Но ничто не вечно: случается, что однажды приходится менять место работы и с головой погружаться в поиски вакансий — хочется ведь найти хорошую альтернативу текущей должности.</Typography>
                        <Typography variant='body1' sx={{color: appTheme.palette.primary.main,marginBottom:"30px", fontWeight:'bold'}}>В этом вам поможет компания Homeskills</Typography>
                    </Stack>

                </Container>
            </Box>
        </ThemeProvider>
    )
}
