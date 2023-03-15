import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import { getItemCount } from "../../redux/cart";

import classes from "./Header.module.scss";

const Header = () => {
  const cartItemCount = useSelector(getItemCount);
  const { cart } = useSelector((state) => state);
  const items = Object.values(cart);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <header className={classes["header"]}>
      <div className={classes["header__content"]}>
        <Link className={classes["header__logo"]} to="/">
          <img
            className={classes["header__logo-img"]}
            src={logo}
            alt="React Pizza"
          />
          <div className={classes["header__logo-items"]}>
            <p className={classes["header__logo-title"]}>REACT PIZZA</p>
            <p className={classes["header__logo-desc"]}>
              самая вкусная пицца во вселенной
            </p>
          </div>
        </Link>
        <Link to="/cart" className={classes["header__button"]}>
          {totalPrice} $ <FontAwesomeIcon icon={faShoppingCart} />
          {Boolean(cartItemCount) ? (
            <p className={classes["header__button-count"]}>{cartItemCount}</p>
          ) : (
            0
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
