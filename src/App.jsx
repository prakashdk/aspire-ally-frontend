import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Spacer } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NavBar from './utils/NavBar';
import Goal from './components/Goal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import { Course } from './components/Goal/Short/Course';

function App() {
  const [theme,setTheme]=useState(true)
  return (
    <Router>
      <NextThemesProvider attribute="class" defaultTheme={theme?"light":"dark"}>
        <NavBar setTheme={setTheme} />
        <Spacer y={10} />
        <div style={{ padding: "0% 5%" }}>
          <Routes>
            <Route path='/' element={<div>Home</div>} />
            <Route path='/leaderboard' element={<div>Leaderboard</div>} />
            <Route path='/updates' element={<div>Updates</div>} />
            <Route path='/about' element={<div>About</div>} />
            <Route path='/login' element={<div>Login</div>} />
            <Route path='/signup' element={<div>Sign Up</div>} />
            <Route path='/goals' element={<Goal />} />
            <Route path='/goals/course' element={<Course />} />
          </Routes>
        </div>
      </NextThemesProvider>
    </Router>
  )
}

export default App
