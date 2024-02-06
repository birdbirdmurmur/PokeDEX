import { Link, NavLink } from 'react-router-dom';

import {
  Sheet,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full py-2 text-white bg-sky-700 shadow-lg">
      <div className="flex-between max-container">
        {/* Home Logo */}
        <Link to="/" className="flex-center gap-3 px-8 sm:mx-0">
          <img src="/assets/icons/poke-ball.svg" />
          <h1 className="h2-bold">PokéGOdex</h1>
        </Link>

        {/* Navbar */}
        <nav>
          <ul className="hidden h-full gap-12 px-12 sm:flex">
            <li className="base-medium hover:text-sky-500">
              <NavLink to="/">PokéDEX</NavLink>
            </li>
            <li className="base-medium hover:text-sky-500">
              <NavLink to="/calculator">Calculator</NavLink>
            </li>
            <li className="base-medium hover:text-sky-500">
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>

        {/* Menu button */}
        <Sheet>
          <SheetTrigger className="flex-center cursor-pointer sm:hidden">
            <button className="flex-center mr-8 cursor-pointer sm:hidden">
              <img src="/assets/icons/menu.svg" alt="menu" width={32} height={32} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 bg-slate-300 border-none">
            <SheetHeader className="flex my-4">
              <SheetTitle>
                <Link to="/" className="flex-center gap-3 px-8 sm:mx-0">
                  <img src="/assets/icons/poke-ball.svg" />
                  <h1 className="h2-bold">PokéGOdex</h1>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <hr />
            <nav>
              <ul className="flex-center flex-col gap-6 mt-10">
                <li className="base-medium hover:text-sky-700">
                  <NavLink to="/">PokéDEX</NavLink>
                </li>
                <li className="base-medium hover:text-sky-700">
                  <NavLink to="/calculator">Calculator</NavLink>
                </li>
                <li className="base-medium hover:text-sky-700">
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
