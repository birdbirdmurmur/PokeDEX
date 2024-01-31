import { Route, Routes } from 'react-router-dom';

import Root from '@/routes/Root';
import About from '@/routes/About';
import PokeGOdex from '@/routes/PokeGOdex';
import Calculator from '@/routes/Calculator';

import './globals.css';

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<Root />}>
          <Route index element={<PokeGOdex />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
