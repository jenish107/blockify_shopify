import { useState } from "react";
import "./App.css";
import { Button } from "@shopify/polaris";

import Frame_shopify from "./componet/Frame_shopify";

import { TopBar, ActionList, Icon, Frame } from "@shopify/polaris";
import { ArrowLeftIcon, QuestionCircleIcon } from "@shopify/polaris-icons";

import {
  Text,
  InlineStack,
  Box,
  Card,
  Badge,
  BlockStack,
  useBreakpoints,
} from "@shopify/polaris";
import { InfoIcon } from "@shopify/polaris-icons";
import { useCallback } from "react";

function App() {
  return (
    <>
      <Frame_shopify>Add product</Frame_shopify>
      {/* <TopBarExample /> */}
    </>
  );
}

export default App;
