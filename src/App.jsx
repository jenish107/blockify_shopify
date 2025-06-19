import "./App.css";

import Frame_shopify from "./componet/Frame_shopify";
import Carousel from "./componet/page/Pricing_slider/Carousel";
import TestimonialCarousel from "./componet/page/Pricing_slider/Carousel";

import "@shopify/polaris-viz/build/esm/styles.css";
import "@shopify/polaris/build/esm/styles.css";

import { PolarisVizProvider } from "@shopify/polaris-viz";

function App() {
  return (
    <PolarisVizProvider>
      <Frame_shopify></Frame_shopify>
      {/* <Carousel /> */}
    </PolarisVizProvider>
  );
}

export default App;
