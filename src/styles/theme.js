import { createTheme } from '@mui/material';
export const appTheme = createTheme(
  {

    palette: {
      type: 'light',
      primary: {
        main: '#ffd740',
        dark:'#B2962C',
        light:'#FFDF66',
        

      },
      secondary: {
        main: '#000000',
        dark:'#000000',
        light:'#333333',
        
      },
      info: {
        main: '#f5f5f5',
        
      },
    },



    typography: {
      allVariants: {
        fontFamily: "Lato",
      },
      body1: {
        fontFamily: "Lato",
        fontSize: "22px",
        '@media screen and (max-width: 1600px)': {
          fontSize: "20px"
        },
      },
      body2: {
        fontFamily: "Lato",
        fontSize: "20px",
        "@media (max-width:900px)": {
          fontSize: "18px",
        },
      },
      caption: {
        fontFamily: "Lato",
        fontSize: "18px",
        "@media (max-width:900px)": {
          fontSize: "16px",
        },
      },
      h1: {
        fontSize: "50px",
        fontWeight: "bold",
        '@media screen and (max-width: 900px)': {
          fontSize: "40px"
        },
        '@media screen and (max-width: 600px)': {
          fontSize: "35px"
        },
        '@media screen and (max-width: 400px)': {
          fontSize: "30px"
        },
      },
      h2: {
        fontSize: "35px",
        fontWeight: "bold",
        '@media screen and (max-width: 900px)': {
          fontSize: "30px"
        },
        '@media screen and (max-width: 600px)': {
          fontSize: "30px"
        },
        '@media screen and (max-width: 400px)': {
          fontSize: "25px"
        },
      },
      h3: {
        fontSize: "25px",
        fontWeight: "bold",
        "@media (max-width:900px)": {
          fontSize: "22px",
        },
      },
      h4: {
        fontSize: "22px",
        "@media (max-width:900px)": {
          fontSize: "20px",
        },
      },
      h5: {
        fontSize: "20px",
        "@media (max-width:900px)": {
          fontSize: "18px",
        },
      },
      h6: {
        fontFamily: "Lato",
        fontSize: "18px",
        "@media (max-width:900px)": {
          fontSize: "16px",
        },
      },
    },

    breakpoints: {
      values: {
        xxs: 0, // small phone
        xs: 300, // phone
        sm: 600, // tablets
        md: 900, // small laptop
        lg: 1200, // desktop
        xl: 1536 // large screens
      }
    },
    styles: {
      box: {
        width: "100%",
        padding: "100px 0"
      },
      container: {
        width: "90%",
        margin: "0 auto"
      },
      button: {
        backgroundColor: '#091242',
        color: '#fff',
        textTransform: "capitalize",

        '&:hover': {
          backgroundColor: 'rgb(255, 203, 92)',
          color: '#fff',
        },
      }

    },







  }
);


