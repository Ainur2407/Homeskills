import React from 'react'
import bg from '../../images/bg.jpg'
import { Box, Button, Container, Stack, ThemeProvider, Typography } from "@mui/material";
import { appTheme } from '../../styles/theme';


export default function Introduction() {
    return (
        <ThemeProvider theme={appTheme}>
            <>
                <Box sx={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "center"
                }}

                >
                    <Container
                        sx={{ width: "90%", padding: "250px 0px " }} fixed

                    >
                        <Stack sx={{
                            width: {
                                xxs: "90%",
                                xs: "90%",
                                sm: "50%",
                                md: "50%",
                                lg: "50%",
                                xl: "50%"
                            },
                        }} >
                            <Typography
                                variant="h1"
                                sx={{
                                    color: 'primary.main',
                                    marginBottom: "30px",
                                    textTransform: "uppercase",

                                }}
                            >
                                Работа найдётся для каждого
                            </Typography>


                            <Button
                                href='/employer'
                                variant='text'
                                sx={{
                                    fontWeight: "bold",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    color: "secondary.main",
                                    textDecoration: "underline",
                                    mb: 3
                                }}
                            >
                                Я ищу сотрудника
                            </Button>

                            <Box sx={{
                                display: "flex",
                                flexWrap: {
                                    xxs: "wrap",
                                    xs: "wrap",
                                    sm: "wrap",
                                    md: "nowrap",
                                    lg: "nowrap",
                                    xl: "nowrap"
                                }
                            }}>
                                <Button
                                    variant="contained"
                                    href='/signup'
                                    sx={{

                                        padding: "10px 20px",
                                        borderRadius: { xxs: '20px', xs: '20px', sm: '30px', md: '30px' },
                                        textTransform: 'capitalize',
                                        fontSize: appTheme.typography.body1,
                                        textAlign: "center",
                                        marginBottom: "20px",
                                        mr: 2
                                    }}>
                                    Регистрация
                                </Button>
                                <Button
                                    variant="contained"
                                    href='/login'
                                    sx={{

                                        padding: "10px 20px",
                                        borderRadius: { xxs: '20px', xs: '20px', sm: '30px', md: '30px' },
                                        textTransform: 'capitalize',
                                        fontSize: appTheme.typography.body1,
                                        textAlign: "center",
                                        bgcolor: 'secondary.main',
                                        color: 'primary.main',
                                        marginBottom: "20px"
                                    }}>
                                    Войти
                                </Button>
                            </Box>
                        </Stack>
                    </Container>
                </Box>
            </>
        </ThemeProvider>
    )
}
