import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  // useNavigate,
  // Outlet,
  // useLocation,
} from "react-router-dom";

// get page from pages
import {
  Home,
  News,
  Policy,
  Video,
  Service,
  Subsidy,
  Map,
  Product,
  Reserve,
  ReserveConfirm,
  WebQA,
  UserLogin,
  UserForget,
  UserRegister,
  UserProfile,
  UserModify,
  SingleVideo,
  Cart,
  SingleProduct,
} from "./pages/appIndex";

//範例用
import Template from "./pages/Template";
import Subsidy_link1 from "./components/subsidy/subsidy_link1";
import Subsidy_link2 from "./components/subsidy/subsidy_link2";
import Subsidy_link3 from "./components/subsidy/subsidy_link3";
import Subsidy_noMatch from "./components/subsidy/subsidy_noMatch";
import Subsidy_Result from "./components/subsidy/subsidy_Result";
// const baseURL = "http://18.182.1.131:3000/news";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} exact />
          <Route path="/News" element={<News />} />
          <Route path="/Policy" element={<Policy />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/Video/:id" element={<SingleVideo />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Subsidy" element={<Subsidy />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Reserve" element={<Reserve />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/WebQA" element={<WebQA />} />

          {/* 商品頁面 */}
          <Route path="/Product/*" element={<Product />} />
          <Route path="/product/category/:category/*" element={<Product />} />
          <Route path="/product/single/:id" element={<SingleProduct />} />

          {/* 購物車 */}
          <Route path="/Cart" element={<Cart />} />

          {/* 商品頁面 */}
          <Route path="/Product/*" element={<Product />} />
          <Route path="/product/category/:category/*" element={<Product />} />
          <Route path="/product/single/:id" element={<SingleProduct />} />

          {/* 會員中心 */}
          <Route path="/UserLogin" element={<UserLogin />} />
          <Route path="/UserForget" element={<UserForget />} />
          <Route path="/UserRegister" element={<UserRegister />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/UserModify" element={<UserModify />} />

          {/* single video */}
          <Route path="/Video/:id" element={<SingleVideo />} />

          {/* 補助資訊 */}
          <Route path="/Subsidy_link1" element={<Subsidy_link1 />} />
          <Route path="/Subsidy_link2" element={<Subsidy_link2 />} />
          <Route path="/Subsidy_link3" element={<Subsidy_link3 />} />
          <Route path="/Subsidy_noMatch" element={<Subsidy_noMatch />} />
          <Route path="/Subsidy_Result" element={<Subsidy_Result />} />

          {/* 範例用 */}
          <Route path="/Template" element={<Template />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
