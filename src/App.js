import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
// pages
import { Home, Category, Cart } from "./pages/index";
// components
import { Provider } from "react-redux";
import store from "./store/store";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserInfo from "./pages/UserInfo";
import AddProfile from "./pages/AddProfile";
import Error from "./components/Error/Error";
import OrderHistory from "./pages/OrderHistory";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer position="top-right" />
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/userinfo/:id" element={<UserInfo />} />
            <Route path="/addprofile" element={<AddProfile />} />
            <Route path="/editprofile/:id" element={<AddProfile />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
