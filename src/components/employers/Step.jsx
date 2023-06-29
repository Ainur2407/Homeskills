import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { appTheme } from '../../styles/theme'
import { Box, Container, Divider, Typography } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';





const cards = [
    {

        number: '01',
        title: 'Зарегистрируйтесь',
        text: 'И получите доступ ко всем услугам Homeskills',

    },
    {

        number: '02',
        title: ' Разместите вакансию',
        text: 'Получайте отклики с контактами соискателей',

    },
    {

        number: '03',
        title: 'Выбирайте лучших',
        text: 'Из тех, кто уже хочет у вас работать',

    },


]






export default function Step() {
    return (
        <ThemeProvider theme={appTheme}>
            <Box sx={{

                width: '100%',
                padding:"120px 0"

            }}>
                <Container sx={{ width: "90%",margin:'0 auto' }} >
                    <Typography variant='h1' textAlign={'center'} sx={{ mb: 10, fontWeight: 'bold' }}>С чего начать поиск сотрудников?</Typography>
                    <Box sx={{
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
                                md: "nowrap",
                                lg: "nowrap",
                                xl: "nowrap"
                            }
                    }}>
                        {cards.map((card) => {
                            return (
                                <>
                                    <Box key={uuidv4()} sx={{pr:2, pb:5,}}>
                                        <Typography variant='h1' sx={{color:appTheme.palette.primary.main}}>{card.number}</Typography>
                                        <Typography variant='h3'>{card.title}</Typography>
                                        <Typography variant='body1'>{card.text}</Typography>
                                    </Box>
                                    
                                </>
                            )
                        })}
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    )
}
