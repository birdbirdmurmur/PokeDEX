import { Outlet } from 'react-router-dom';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

const Root = () => {
  return (
    <main className="flex-center flex-col w-full ">
      <Header />

      <section className="grow overflow-y-auto">
        <Outlet />
      </section>

      <Footer />
    </main>
  );
};

export default Root;
