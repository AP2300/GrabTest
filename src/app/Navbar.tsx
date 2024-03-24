import Image from "next/image";
import logo from "../../public/img/icongrab.png";

const Navbar = () => {
  return (
    <nav className="navbar bg-transparent absolute top-8 md:top-12 xl:px-20">
      <div className="flex-1">
        <a className="btn btn-ghost h-auto md:my-3 py-1">
          <img src={logo.src} alt="grab logo" className="w-28 md:w-56" />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {Array.from({ length: 6 }).map((_, idx) => (
            <li
              key={idx}
              className="text-white font-bold btn btn-ghost text-xs xl:text-lg 2xl:text-[1.37rem] hidden lg:flex"
            >
              Lorem, ipsum.
            </li>
          ))}

          <li className="lg:hidden text-white font-bold text-lg">
            <details className="z-40">
              <summary className="px-14">Lorem.</summary>
              <ul className="p-2 bg-base-100 rounded-t-none w-full ">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <li key={idx}>
                    <a href="">Lorem, ipsum.</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
