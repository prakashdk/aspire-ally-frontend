import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Spacer } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NavBar from './utils/NavBar';
import Goal from './components/Goal';

function App() {

  return (
    <>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <NavBar />
        <Spacer y={10} />
        <Goal />
      </NextThemesProvider>
    </>
  )
}

export default App
