import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import Tooltip from "react-bootstrap/Tooltip";
import { OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../store/categorySlice";
import { getCartTotal } from "../../store/cartSlice";
import userLogo from "../../assets/images/user.jpg";
import Order from "../../assets/images/icons8-mobile-order-100.png";
// alert
import { UserAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const dispatch = useDispatch();
  const { data: categories } = useSelector((state) => state.category);
  const { totalItems } = useSelector((state) => state.cart);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { user, imageAsset } = UserAuth();

  const renderTooltip = (props) => (
    <Tooltip
      className="text-white bg-black/20 ml-2 px-3 py-1 rounded-lg text-xs md:text-base mr-2"
      id="button-tooltip"
      {...props}
    >
      Profile
    </Tooltip>
  );

  const orderTooltip = (props) => (
    <Tooltip
      className="text-white bg-black/20 ml-2 px-3 py-1 rounded-lg text-xs md:text-base mr-2"
      id="button-tooltip"
      {...props}
    >
      Orders
    </Tooltip>
  );

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="container">
          <div className="navbar-top flex flex-between">
            <Link to="/home" className="navbar-brand">
              <span className="text-regal-blue">Shopping</span>
              <span className="text-gold">Hub.</span>
            </Link>
            <form className="navbar-search flex">
              <input type="text" placeholder="Search here ..." />
              <button type="submit" className="navbar-search-btn">
                <i className="fas fa-search"></i>
              </button>
            </form>

            <div className="navbar-btns flex gap-x-5">
              <Link to={"/orders"}>
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 200, hide: 100 }}
                  overlay={orderTooltip}
                >
                  <div className="w-[40px] h-[40px] ">
                    <img src={Order} alt="order" />
                  </div>
                </OverlayTrigger>
              </Link>

              <Link to="/cart" className="add-to-cart-btn flex">
                <span className="btn-ico">
                  <i className="fas fa-shopping-cart"></i>
                </span>
                <div className="btn-txt fw-5">
                  Cart
                  <span className="cart-count-value">{totalItems}</span>
                </div>
              </Link>

              <OverlayTrigger
                placement="left"
                delay={{ show: 200, hide: 100 }}
                overlay={renderTooltip}
              >
                <div>
                  <Link to={`/userinfo/${user?.uid}`}>
                    <img
                      src={`${imageAsset ? imageAsset : userLogo}`}
                      alt="user-logo"
                      className="w-[40px] h-[40px] rounded-full"
                    />
                  </Link>
                </div>
              </OverlayTrigger>

              <Link
                to={"/"}
                className="px-5 py-3 font-semibold rounded-xl bg-slate-600 text-white cursor-pointer"
              >
                Sign Out
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-bottom bg-regal-blue">
          <div className="container flex flex-between">
            <ul
              className={`nav-links flex ${
                isSidebarOpen ? "show-nav-links" : ""
              }`}
            >
              <button
                type="button"
                className="navbar-hide-btn text-white"
                onClick={() => setIsSidebarOpen(false)}
              >
                <i className="fas fa-times"></i>
              </button>
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/category/${category.id}`}
                    className="nav-link text-white"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="navbar-show-btn text-gold"
              onClick={() => setIsSidebarOpen(true)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
