import React from "react";
import {
  faAngleLeft,
  faShoppingCart,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/CartItem";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Container from "../../layout/Container";

import classes from "./Cart.module.scss";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const items = Object.values(cart);
  const cartEmpty = items.length === 0;
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const count = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <Container>
        <Header />
        {!cartEmpty && (
          <div className={classes["cart"]}>
            <div className={classes["cart__intro"]}>
              <h3 className={classes["cart__title"]}>
                <FontAwesomeIcon
                  className={classes["cart__title-icon"]}
                  icon={faShoppingCart}
                />
                Корзина
              </h3>
            </div>
          </div>
        )}
        {cartEmpty ? (
          <Title />
        ) : (
          items.map((card) => <CartItem key={card.id} {...card} />)
        )}
        {!cartEmpty && (
          <div className={classes["cart"]}>
            <div className={classes["cart__info"]}>
              <p className={classes["cart__totalAmount"]}>
                Всего пицц: <span>{count}</span> шт.
              </p>
              <p className={classes["cart__totalPrice"]}>
                Сумма заказа: <span>{total} $</span>
              </p>
            </div>
            <div className={classes["cart__back"]}>
              <Link to="/" className={classes["cart__leftBtn"]}>
                <FontAwesomeIcon
                  className={classes["cart__leftBtn-icon"]}
                  icon={faAngleLeft}
                />
                Вернуться назад
              </Link>
              <button className={classes["cart__payBtn"]}>
                Оплатить сейчас
              </button>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Cart;
