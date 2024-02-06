import { Route, Routes } from 'react-router-dom';

import Root from '@/routes/Root';
import About from '@/routes/About';
import PokeDex from '@/routes/PokeDex';
import Calculator from '@/routes/Calculator';

import './globals.css';
import PokemonDetails from './routes/PokemonDetails';

const App = () => {
  return (
    <main>
      <Routes>
        <Route element={<Root />}>
          <Route index element={<PokeDex />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
