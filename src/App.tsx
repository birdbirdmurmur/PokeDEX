import { Route, Routes } from 'react-router-dom'

import Root from '@/routes/root'
import About from '@/routes/About'
import Pokedex from '@/routes/Pokedex'

import './globals.css'

const App = () => {
  return (
    <main>
      <Routes>
        <Route element={<Root />}>
          <Route index element={<Pokedex />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App