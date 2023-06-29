import { Button, ThemeProvider } from '@mui/material'
import React from 'react'
import { appTheme } from '../styles/theme'

export default function ButtonComponent({ buttonColor, buttonText, href,backgrounColor }) {
    return (
     <ThemeProvider theme={appTheme}>
           <>
            <Button
                variant="contained"
                href={href}
                color={buttonColor}
                backgrounColor={backgrounColor}
                sx={{
                    width:{xxs:'150px',xs:'150px', sm:'150px', md:'200px'},
                    padding:"10px 20px",
                    borderRadius: { xxs: '20px',xs: '20px', sm: '30px', md: '30px' },
                    textTransform: 'capitalize',
                    fontSize: appTheme.typography.body1,
                    textAlign:"center",
                    bgcolor:appTheme.palette.secondary.main,
                    color:appTheme.palette.primary.main
                }}>
                {buttonText}
            </Button>
        </>
     </ThemeProvider>
    )
}
