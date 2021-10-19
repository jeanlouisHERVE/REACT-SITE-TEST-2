import { FaBars } from 'react-icons/fa';
import PropTypes from 'prop-types';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggle }) => (
  <>
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Dolla </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="discover">Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="sign Up">Sign Up</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn to="/signin"><NavBtnLink to="/signin">Sign In</NavBtnLink></NavBtn>
      </NavbarContainer>
    </Nav>
  </>
);

Navbar.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default Navbar;
