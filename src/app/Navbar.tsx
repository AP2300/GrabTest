import Image from "next/image";
import logo from "../../public/img/icongrab.png";

const Navbar = () => {
  return (
    <nav className="navbar bg-transparent fixed container">
      <div className="flex-1">
        <a className="btn btn-ghost btn-wide h-auto py-3">
          <Image src={logo} alt="grab logo" width={250} />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {Array.from({ length: 6 }).map((_, idx) => (
            <li key={idx} className="text-white font-bold">
              Lorem, ipsum.
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
