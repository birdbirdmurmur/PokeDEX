import { Outlet } from 'react-router-dom';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

const Root = () => {
  return (
    <div className="dark">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
