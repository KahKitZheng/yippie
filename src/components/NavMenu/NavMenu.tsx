import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

type NavMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
};

export default function NavMenu(props: NavMenuProps) {
  const { isMenuOpen, setIsMenuOpen } = props;

  return (
    <header className="sticky top-0 z-20 w-full border-b border-b-slate-200 bg-white">
      <nav className="mx-auto flex items-center justify-between gap-4 p-3 sm:px-5 lg:w-[700px] lg:px-0 lg:py-5">
        <NavLink to="/">
          <h1 className="text-xl font-bold sm:text-3xl">Yippie</h1>
        </NavLink>
        <ul className="hidden gap-5 sm:flex">
          <li>
            <NavLink className="font-bold" to="/teams">
              Teams
            </NavLink>
          </li>
          <li>
            <NavLink className="font-bold" to="/report/1">
              Mijn verslagen
            </NavLink>
          </li>
        </ul>

        <div className="sm:hidden">
          <button className="grid place-content-center">
            <HiMenu
              className="text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />

            {isMenuOpen && (
              <ul className="absolute right-0 top-[52px] z-20 flex w-full flex-col gap-4 border border-slate-200 bg-white p-4">
                <li>
                  <NavLink to="/teams">Teams</NavLink>
                </li>
                <li>
                  <NavLink to="/reports">Mijn verslagen</NavLink>
                </li>
              </ul>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
