import {
  Box,
  Text,
  Scrollable,
  Banner,
  BlockStack,
  Page,
  LegacyCard,
  EmptyState,
} from "@shopify/polaris";

import { useNavigate } from "react-router";

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

export default function Checkout_rules() {
  const navigate = useNavigate();
  return (

    <Page title="Checkout rules" >
      <BlockStack gap="500">
        <Banner
          onDismiss={() => {}}
          title="Activate unlimited checkout rules with only $1 today!"
          action={{
            content: "View Promotions",
            url: "#",
          }}
          tone="info"
        >
          <p>
            Unlock all plans with only $1 in 30 days here! Hurry up, this ends
            in 3 days!
          </p>
        </Banner>

        <LegacyCard sectioned>
          <EmptyState
            heading="Oops! You don’t have any checkout rules."
            action={{
              content: "+ Add new rule",
              onAction: () =>
                navigate("/Blockify-Checkout/Checkout_rules_page"),
            }}
            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
          >
            <p>Add checkout rules to secure your Checkout now.</p>
          </EmptyState>
        </LegacyCard>
      </BlockStack>
    </Page>
  );
}
