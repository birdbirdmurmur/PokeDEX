import { Outlet } from 'react-router-dom';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import ScrollToTopButton from '@/components/common/ScrollToTopButton';

const Root = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />

      <section className="grow min-h-[90dvh]">
        <Outlet />
      </section>
      <ScrollToTopButton />

      <Footer />
    </div>
  );
};

export default Root;
