import SignIn from "./Pages/User/SignIn/signin";
import Home from "./Pages/homePage/Home";
import Signup from "./Pages/User/SignUp/signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetShopService from "./Pages/Admin/adminShopList/getShopService";
import AcceptedOrder from "./Pages/DeliveryBoy/acceptedOrder";
import UpdateProfile from "./Pages/User/UpdateProfile/updateProfile";
import ForgotPassword from "./Pages/User/forgot_password/forgotPassword";
import AdminHome from "./Pages/Admin/adminHome";
import ElaundryHome from "./Pages/elaundryshop/elaundryHome";
import DeliveryBoyHome from "./Pages/DeliveryBoy/deliveryBoyHome";
import RegisterLaundryshop from "./Pages/elaundryshop/registerLaundryshop";
import DeliveryBoyList from "./Pages/Admin/DeliveryBoylist/deliveryBoyList";
import CustomerList from "./Pages/Admin/CustomerList/customerList";
import ShopList from "./Pages/Admin/adminShopList/ShopList";
import GetShopDetails from "./Pages/Admin/adminShopList/getShopDetails";
import AddAddress from "./Pages/Customer/AddAddress";
import Cart from "./Pages/Customer/Cart";
import SelectAddress from "./Pages/Customer/SelectAddress";
import Payment from "./Pages/Customer/Payment";
import Products from "./Pages/elaundryshop/Products";
import CustomerHome from "./Pages/homePage/CustomerHome";
import Addshop from "./Pages/elaundryshop/addshop";
import Editservice from "./Pages/elaundryshop/Editservice";
import ShowFeedbacks from "./Pages/elaundryshop/ShowFeedbacks";
import AddFeedback from "./Pages/Customer/AddFeedback";
import MyOrders from "./Pages/Customer/MyOrders";
import Category from "./Pages/Admin/Category";
import AllOrders from "./Pages/elaundryshop/allOrders";
import AllAcceptedOrders from "./Pages/elaundryshop/allAcceptedOrders";
import UpdateShop from "./Pages/User/UpdateProfile/updateShop";
import ContactUs from "./Pages/homePage/ContactUs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/updateProfile" element={<UpdateProfile />}></Route>
          <Route path="/adminHome" element={<AdminHome />}></Route>
          <Route path="/elaundryHome" element={<ElaundryHome />}></Route>
          <Route path="/deliveryBoyHome" element={<DeliveryBoyHome />}></Route>
          <Route path="/acceptedOrder" element={<AcceptedOrder />}></Route>
          <Route
            path="/registerLaundryshop"
            element={<RegisterLaundryshop/>}
          ></Route>
          <Route path="/deliveryBoyList" element={<DeliveryBoyList />}></Route>
          <Route path="/customerList" element={<CustomerList />}></Route>
          <Route path="/shopList" element={<ShopList />}></Route>
          <Route
            path="/getShopDetails"
            element={<GetShopDetails />}
          ></Route>
          <Route
            path="/getShopServices"
            element={<GetShopService/>}
          ></Route>
          <Route exact path="/CustomerHomePage" element={<CustomerHome />} />
          <Route exact path="/AddAddress" element={<AddAddress />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/SelectAddress" element={<SelectAddress />} />
          <Route exact path="/Payment" element={<Payment />} />
          <Route exact path="/Products" element={<Products />} />
          <Route exact path="/Addshop" element={<Addshop />} />
          <Route exact path="/Editservice" element={<Editservice />} />
          <Route exact path="/ShowFeedbacks" element={<ShowFeedbacks />} />
          <Route exact path="/AddFeedback" element={<AddFeedback />} />
          <Route exact path="/MyOrders" element={<MyOrders />} />
          <Route exact path="/Category" element={<Category />} />
          <Route exact path="/allOrders" element={<AllOrders />} />
          <Route
            exact
            path="/allAcceptedOrders"
            element={<AllAcceptedOrders />}
          />
          <Route
            exact
            path="/updateShop"
            element={<UpdateShop />}
          />
          <Route exact path="/contactUs" element={<ContactUs />} />
        </Routes>

        {/* this container is used to show toast messages */}
        <ToastContainer position="top-center" autoClose={1500} />
      </BrowserRouter>
    </div>
  );
}

export default App;
