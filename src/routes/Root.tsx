import { Outlet } from 'react-router-dom';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

const Root = () => {
  return (
    <main className="flex-center flex-col w-full">
      <Header />

      <section className="flex-grow">
        <Outlet />
      </section>

      <Footer />
    </main>
  );
};

export default Root;
