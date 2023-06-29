
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { ThemeProvider } from "styled-components";
import MainLayout from "./components/MainLayout";
import HomePage from "./components/pages/HomePage";
import { appTheme } from "./styles/theme";
import SignUp from "./components/registration/Signup";

import SignIn from "./components/registration/SignIn";
import Employer from "./components/employers/Employer";
import About from "./components/about/About";










function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<MainLayout/>}>
            <Route  index element={<HomePage/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/login" element={<SignIn/>}></Route>
            <Route path="/employer" element={<Employer/>}></Route>
            <Route path="/about" element={<About/>}></Route>
    
          
           </Route>
          </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  
  );
}

export default App;



