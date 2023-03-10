import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/cartSlice";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleOpenCart = (open) => {
    dispatch(toggleCart(open));
  };

  const cartQuantity = cartItems.length;

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="navbar">
            <h1>Redux Shopping Cart</h1>
            <div className="nav_menu">
              <div
                title="Cart"
                className="cart_icon"
                onClick={() => handleOpenCart(true)}
              >
                {/* <img src="/images/bag-icon.svg" alt="bag-icon" /> */}
                <h3>Cart</h3>
                <span className="badge">{cartQuantity}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
