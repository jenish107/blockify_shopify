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
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

export default function Checkout_rules() {
  return (
    <Scrollable shadow style={{ height: "calc(100vh - 58px) " }} focusable>
      <BlockStack gap="500">
        <Header />
        <Box paddingInline="300">
          <Page title="Checkout rules" fullWidth={true}>
            <BlockStack gap="500">
              <Banner
                onDismiss={() => {}}
                title="Activate unlimited checkout rules with only $1 today!"
                action={{ content: "View Promotions", url: "" }}
                tone="info"
              >
                <p>
                  Unlock all plans with only $1 in 30 days here! Hurry up, this
                  ends in 3 days!
                </p>
              </Banner>

              <LegacyCard sectioned>
                <EmptyState
                  heading="Oops! You don’t have any checkout rules."
                  action={{ content: "+ Add new rule" }}
                  image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                >
                  <p>Add checkout rules to secure your Checkout now.</p>
                </EmptyState>
              </LegacyCard>
            </BlockStack>
            <Footer />
          </Page>
        </Box>
      </BlockStack>
    </Scrollable>
  );
}
