import "./App.css";

import Frame_shopify from "./componet/Frame_shopify";

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router";

import "@shopify/polaris-viz/build/esm/styles.css";
import "@shopify/polaris/build/esm/styles.css";

import { PolarisVizProvider } from "@shopify/polaris-viz";
import Main_content from "./componet/Main_content";
import Checkout_rules from "./componet/page/Checkout_rules";
import Cash_on_Delive from "./componet/page/Cash_on_Delive";
import Checkout from "./componet/page/Checkout";
import Settings from "./componet/page/Settings";
import Pricing from "./componet/page/Pricing";
import Analytics from "./componet/page/Analytics";
import CheckoutCards from "./componet/page/CheckoutCards";
import Checkout_rules_page from "./componet/page/inner_componet/Checkout_rules_page";
import Hide_dynamic_payment_buttons from "./componet/page/inner_componet/Hide_dynamic_payment_buttons";
import Checkout_validation_rule from "./componet/page/inner_componet/Checkout_validation_rule";
import Create_checkout_rules from "./componet/page/inner_componet/child_componet/Create_checkout_rules/Create_checkout_rules";

function App() {
  let navigate = useNavigate();
  const location = useLocation();
  {
    location.pathname == "/" && navigate("/Blockify-Checkout");
  }
  return (
    <PolarisVizProvider>
      <Routes>
        <Route path="/" element={<Frame_shopify />}>
          <Route path="/Blockify-Checkout" element={<Main_content />} />
          <Route path="/Checkout-rules" element={<Checkout_rules />} />
          <Route path="/Cash-on-Delive" element={<Cash_on_Delive />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route
            path="/Blockify-Checkout/CheckoutCard"
            element={<CheckoutCards />}
          />
          <Route
            path="/Blockify-Checkout/Checkout_rules_page"
            element={<Checkout_rules_page />}
          />
          <Route
            path="/Blockify-Checkout/Hide_dynamic_payment_buttons"
            element={<Hide_dynamic_payment_buttons />}
          />
          <Route
            path="/Blockify-Checkout/Checkout_validation_rule"
            element={<Checkout_validation_rule />}
          />
          <Route
            path="/Blockify-Checkout/Create_checkout_ruls"
            element={<Create_checkout_rules />}
          />
        </Route>
      </Routes>
    </PolarisVizProvider>
  );
}

export default App;
