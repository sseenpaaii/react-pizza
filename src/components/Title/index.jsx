import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

import image from "../../images/cart-image.png";

import classes from "./Title.module.scss";

const Title = ({ children, className }) => {
  return (
    <div className={classNames(classes["block"], className)}>
      <h2 className={classNames(classes["block__title"])}>Корзина пуста 😕</h2>
      <img className={classes['block__image']} src={image} alt="Empty Cart" />
      <Link className={classes['block__btn']} to="/">Hазад</Link>
    </div>
  );
}; 

export default Title;
