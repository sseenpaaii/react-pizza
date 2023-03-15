import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import { addOne, removeFromCart, removeOne } from "../../redux/cart";

import classes from "./CartItem.module.scss";

const CartItem = ({ image, name, id, quantity, price }) => {
  const dispatch = useDispatch();
  const handleRemove = () => dispatch(removeFromCart(id));
  const handlePlus = () => dispatch(addOne(id));
  const handleMinus = () => dispatch(removeOne(id));

  return (
    <div className={classes["cart"]}>
      <div className={classes["cart__block"]} key={id}>
        <img className={classes["cart__image"]} src={image} alt={name} />
        <div className={classes["cart__item"]}>
          <h4 className={classes["cart__name"]}>{name}</h4>
          <p className={classes["cart__desc"]}>тонкое тесто, 26 см.</p>
        </div>
        <div className={classes["cart__controls"]}>
          <button onClick={handleMinus} className={classes["cart__minus"]}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <p className={classes["cart__amount"]}>{quantity}</p>
          <button onClick={handlePlus} className={classes["cart__plus"]}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <p className={classes["cart__price"]}>{price} $</p>
        <button onClick={handleRemove} className={classes["cart__close"]}>
          x
        </button>
      </div>
    </div>
  );
};

export default CartItem;
