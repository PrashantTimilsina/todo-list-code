import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Nav() {
  const [show, setShow] = useState(false);
  function toggleMenu() {
    setShow((show) => !show);
  }
  return (
    <header className="flex items-center justify-between p-6">
      <div>
        <h1>Prashant</h1>
      </div>
      <nav className="flex items-center justify-center gap-6">
        <ul
          className={`flex flex-col sm:flex-row items-center justify-center top-16 sm:top-0  fixed z-20 w-full gap-6 sm:relative sm:flex sm:w-auto transition-all ease-in-out duration-300 mr-8 sm:mr-0 ${
            show
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-full sm:opacity-100 sm:translate-x-0 sm:pointer-events-auto"
          }`}
        >
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Project</li>
        </ul>
        {show ? (
          <IoClose onClick={toggleMenu} className="z-40 flex sm:hidden" />
        ) : (
          <GiHamburgerMenu
            onClick={toggleMenu}
            className="z-40 flex sm:hidden"
          />
        )}
      </nav>
    </header>
  );
}

export default Nav;
