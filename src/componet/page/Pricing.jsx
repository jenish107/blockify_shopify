import {
  BlockStack,
  Box,
  Button,
  ButtonGroup,
  EmptyState,
  LegacyCard,
  Page,
  Scrollable,
  Text,
} from "@shopify/polaris";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

export default function Pricing() {
  return (
    <Scrollable shadow style={{ height: "calc(100vh - 58px) " }} focusable>
      <BlockStack gap="500">
        <Header />
        <Box paddingInline="300">
          <Page fullWidth={true}>
            <BlockStack gap="500">
              <Text variant="heading2xl" as="h3" alignment="center">
                Choose the best plan for a seamless checkout!
              </Text>
              <ButtonGroup>
                <Button>Pay monthly</Button>
                <Button>Pay yearly</Button>
              </ButtonGroup>
            </BlockStack>
            <Footer />
          </Page>
        </Box>
      </BlockStack>
    </Scrollable>
  );
}
