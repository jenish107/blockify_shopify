import {
  BlockStack,
  Box,
  Button,
  ButtonGroup,
  Card,
  Collapsible,
  Divider,
  Icon,
  InlineStack,
  LegacyCard,
  Page,
  Scrollable,
  Text,
} from "@shopify/polaris";
import {
  LuShieldAlert,
  LuArrowDownUp,
  LuCreditCard,
  LuPackage2,
} from "react-icons/lu";

import {
  ViewIcon,
  GiftCardFilledIcon,
  HideIcon,
  BlogIcon,
  ChevronRightIcon,
  CaretDownIcon,
  CreditCardPercentIcon,
} from "@shopify/polaris-icons";

import { useNavigate } from "react-router";

import { useState } from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Checkout_rules from "../Checkout_rules";
import Checkout_rules_type from "./Checkout_rules_type";
import "../../../style/Checkout_rules_page.css";

export default function Checkout_rules_page() {
  const [isPayment, SetIsPayment] = useState(false);
  const [isShipping, SetIsShipping] = useState(false);
  const navigate = useNavigate();
  return (
    <Page
      title="Checkout Rules"
      subtitle="Choose a strategy to protect your stores from fake orders and to satisfy different customer segmentation."
      backAction={{ content: "", onAction: () => navigate(-1) }}
      fullWidth={true}
    >
      <BlockStack gap="500">
        <Text variant="headingLg" as="h5">
          Product page & Cart page
        </Text>

        <Checkout_rules_type />
        <Card>
          <Box paddingBlock="500">
            <InlineStack gap="400">
              <Box id="CreditCardPercentIcon">
                <Icon source={CreditCardPercentIcon} tone="base" />
              </Box>
              <BlockStack>
                <Text variant="headingMd" as="h6">
                  Checkout Validation
                </Text>
                <Text>
                  Block spam checkout with advanced conditions (AND/OR - 0$
                  order, country name,...)
                </Text>
              </BlockStack>
            </InlineStack>
            <Box paddingBlockStart="400">
              <Button
                variant="primary"
                onClick={() =>
                  navigate("/Blockify-Checkout/Hide_dynamic_payment_buttons")
                }
              >
                Create Rules
              </Button>
            </Box>
          </Box>
        </Card>
      </BlockStack>
    </Page>
  );
}
