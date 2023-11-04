import Drawer from "./Drawer";
import { ModeToggle } from "./Toggle";

export default function Navbar() {
  const navlinks = ["Projects", "Whimsy", "Connect"];

  return (
    <header className="z-10 px-4 md:px-0 dark:border-b-2 border-b-2 backdrop-blur-sm sticky top-0 flex items-center md:justify-evenly justify-between" style={{ minHeight: "8dvh" }}>
      <div>
        <h1>Shahmeer Asim</h1>
      </div>
      <div className="hidden md:block">
        <nav>
          <ul className="flex">
            <li className="space-x-9">
              {navlinks.map((navlink) => {
                return (
                  <a key={navlink} className="cursor-pointer">
                    {navlink}
                  </a>
                );
              })}
            </li>
          </ul>
        </nav>
      </div>
      <div className="hidden md:flex md:items-center">
        <ModeToggle />
      </div>
      <div className="md:hidden">
        <Drawer />
      </div>
    </header>
  );
}
