import { Box, Card, CardActionArea, CardContent, Container, Grid, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { appTheme } from '../../styles/theme';


const cards = [
    {

        name: 'Сантехник',
        price: '20TMT и больше',
        bgColor: '#C2185B',

    },
    {

        name: 'Слесарь',
        price: '20TMT и больше',
        bgColor: '#F48FB1',

    },
    {

        name: 'Электрик',
        price: '30TMT и больше',
        bgColor: '#6A1B9A',

    },
    {

        name: 'Ремонт обуви',
        price: '10TMT и больше',
        bgColor: '#BA68C8',

    },
    {

        name: 'Клининговые сотрудники',
        price: '30TMT и больше',
        bgColor: '#283593',

    },
    {

        name: 'Ремонт бытовой техники',
        price: '20 и больше',
        bgColor: '#5C6BC0',

    },

]
export default function Jobs() {
    return (
       <ThemeProvider theme={appTheme}>
         <>
            <Box sx={{width:'100%', padding:"150px 0"}}>
                <Container sx={{width:'90%'}}>
                    <Typography variant='h2' sx={{textAlign:'center', pb:5}}>Вакансии</Typography>

                    <Grid container spacing={{ sm: 4 }} justifyContent='center' >
                        {cards.map((elem) => {
                            return (
                                <Grid width='300px' item xs={12} sm={6} md={6} key={uuidv4()} pb={8} >
                                    <Card sx={{
                                        background: 'linear-gradient(to right, #FFE082 , #FFAB00)', mb: 3,  padding: "20px",
                                        boxShadow: '17px 22px 37px -1px rgba(64,64,64,0.69)'
                                    }}>
                                        <CardActionArea >
                                            <CardContent sx={{ cursor: 'auto' }}>
                                                <Typography variant='h3' sx={{ textAlign: "center", pb: 2,  }}>{elem.name}</Typography>
                                                <Typography variant='body1' sx={{ textAlign: "center", fontWeight: "bold", pb: 1,  }}>{elem.price}</Typography>
               
                                              
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>
        </>
       </ThemeProvider>
    )
}
