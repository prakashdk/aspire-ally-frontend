import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@nextui-org/react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button color="primary">
        Aspir Ally
      </Button>
    </div>
  )
}

export default App
