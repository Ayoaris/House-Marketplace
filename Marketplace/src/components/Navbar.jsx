import { Link } from "react-router-dom";
import OfferIcon from "../assets/svg/localOfferIcon.svg";
import ExploreIcon from "../assets/svg/exploreIcon.svg";
import PersonOutlineIcon from "../assets/svg/personOutlineIcon.svg";

function Navbar() {
    
    
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <Link to="/">
            <li className="navbarListItem">
              <img src={ExploreIcon} width="36px" height="36px" />
              <p>
                Explore
              </p>
            </li>
          </Link>

          <Link to="/offers">
            <li className="navbarListItem">
              <img src={OfferIcon} width="36px" height="36px" />
              <p>
                Offer
              </p>
            </li>
          </Link>
          <Link to="/profile">
            <li className="navbarListItem">
              <img src={PersonOutlineIcon} width="36px" height="36px" />
              <p>
                Profile
              </p>
            </li>
          </Link>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
