import Container from "./Container";
import { FaInstagram, FaYoutube, FaTiktok, FaSnapchat } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav>
      <Container className="flex justify-center items-center py-2 relative">
        <span className="font-semibold text-sm">
          GET 10% OFF YOUR FIRST ORDER: PRIME
        </span>
        <ul className="absolute left-0  items-center gap-x-4 hidden md:flex">
          <li>
            <FaInstagram className="text-lg" />
          </li>
          <li>
            <FaYoutube className="text-lg" />
          </li>
          <li>
            <FaTiktok className="text-lg" />
          </li>
          <li>
            <FaSnapchat />
          </li>
        </ul>
      </Container>

      <div className="bg-black">
        <Container>
          <div></div>
          <div></div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
