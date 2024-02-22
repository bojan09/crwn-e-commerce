import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./Navigation.styles";

import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { CartIcon, CartDropdown } from "../../components";

import { UserContext } from "../../context/user/user.context";
import { CartContext } from "../../context/cart/CartContext";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utility/firebase/firebase";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
