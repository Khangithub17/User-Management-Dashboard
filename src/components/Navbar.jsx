import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-[#5D87FF] text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-center">
        <Link to="/" className="text-lg font-bold uppercase flex items-center">
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          User Management Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;