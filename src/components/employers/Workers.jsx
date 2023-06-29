import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { appTheme } from '../../styles/theme'
import { Box,Card, CardActionArea, CardContent, Container, Grid, Typography } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';
import ButtonComponent from '../../components/ButtonComponent'

const cards = [
    {

        name: 'Сантехник',
        price: '800TMT',
        title: 'На постоянную работу. Оформление по ТК. Условия: 5/2, с 8.00 до 16.30; Информация о работодателе: Теплоэнергострой.'


    },
    {

        name: 'Слесарь-сантехник',
        price: '400TMT и больше',
        title: 'Наш компания - это компания,управляющая жилой недвижимостью. Мы работаем, чтобы люди жили в безопасности и комфорте. Обязанности: Подготовка домов к ОЗП, работы связанные с ТО и ТР;'


    },
    {

        name: 'Помощник прораба',
        price: '500TMT и больше',
        title: 'Выполнение поручений прораба; Контроль проведения ремонтных работ на объектах; Расчет необходимых черновых материалов и подготовка заявок на материалы. Ведение графика производства работ; журнала КС6; Подготовка отчетов'


    },
    {

        name: 'Рабочий по ремонту техники',
        price: '400TMT и больше',
        title: 'Мы ищем РАБОЧЕГО ПОМОЩНИКА ПО РЕМОНТУ БЫТОВЫХ ХОЛОДИЛЬНИКОВ; В связи с большим потоком заказов ВАКАНСИЯ СРОЧНАЯ; Ждем в свою команду опытных мастеров, а также кандидатов без опыта'


    },

]

export default function Workers() {
    return (
        <ThemeProvider theme={appTheme}>
            <Box sx={{ width: '100%', padding: "150px 0" }}>
                <Container sx={{ width: '90%' }}>
                    <Typography variant='h2' sx={{mb:8, textAlign:'center'}}>Вакансии рфзнорабочих без опыта от прямых работодателей</Typography>
                    <Grid container spacing={{ sm: 4 }} justifyContent='center' >
                        {cards.map((elem) => {
                            return (
                                <Grid width='300px' item xs={12} sm={12} md={12} key={uuidv4()} pb={8} >
                                    <Card sx={{
                                        background: '#ffe57f', mb: 3, padding: "20px",
                                        boxShadow: '17px 22px 37px -1px rgba(64,64,64,0.69)'
                                    }}>
                                        <CardActionArea >
                                            <CardContent sx={{ cursor: 'auto' }}>
                                                <Typography variant='h3' sx={{ textAlign: "center", pb: 2, }}>{elem.name}</Typography>
                                                <Typography variant='body1' sx={{ textAlign: "center", fontWeight: "bold", pb: 1, }}>{elem.price}</Typography>
                                                <Typography variant='body1' sx={{ textAlign: "center", fontWeight: "bold", pb: 1, }}>{elem.title}</Typography>
                                               <Box sx={{textAlign:"center"}}><ButtonComponent href={'tel: +993 61222993'} buttonText={'Позвонить'}/></Box>

                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    )
}
