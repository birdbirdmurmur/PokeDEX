import { Link, NavLink } from 'react-router-dom';

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
            <li className="base-medium">
              <NavLink to="/">PokéDEX</NavLink>
            </li>
            <li className="base-medium">
              <NavLink to="/calculator">Calculator</NavLink>
            </li>
            <li className="base-medium">
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>

        {/* Menu button */}
        <button className="flex-center mx-6 cursor-pointer sm:hidden">
          <img src="/assets/icons/menu.svg" alt="menu" width={32} height={32} />
        </button>
      </div>
    </header>
  );
};

export default Header;
