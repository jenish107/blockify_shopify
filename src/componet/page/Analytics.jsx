import {
  Banner,
  BlockStack,
  Box,
  Button,
  Card,
  EmptyState,
  Grid,
  Icon,
  InlineStack,
  Layout,
  LegacyCard,
  Page,
  Scrollable,
  Text,
} from "@shopify/polaris";
import { AlertCircleIcon, CalendarIcon } from "@shopify/polaris-icons";

import "../../style/Analytics.css";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

export default function Analytics() {
  return (
    <Scrollable shadow style={{ height: "calc(100vh - 58px) " }} focusable>
      <BlockStack>
        <Header />
        <Box paddingInline="300">
          <Page title="Analytics" fullWidth={true}>
            <BlockStack gap="500">
              <Banner title="Analytics feature available only on Shopify Plus plan">
                <Text>
                  The analytics feature for Checkout Product Offers is now
                  exclusively available to Shopify Plus users.
                </Text>
              </Banner>
              <Box>
                <Button disabled icon={CalendarIcon}>
                  Last 30 days
                </Button>
              </Box>

              <Grid columns={{ xs: 1, sm: 4, md: 4, lg: 6, xl: 6 }}>
                <Layout>
                  <Card>
                    <Text id="dot_underline">Total sales</Text>

                  </Card>
                </Layout>
              </Grid>

              <Layout>
                <Layout.Section>
                  <Card sectioned>
                    <Box maxWidth="150px">
                      <Text variant="headingMd" id="dot_underline" as="h6">
                        Top performing rules
                      </Text>
                    </Box>

                    <Text tone="subdued">
                      There was no data found for this date range.
                    </Text>
                  </Card>
                </Layout.Section>
                <Layout.Section variant="oneThird">
                  <Card sectioned>
                    <InlineStack align="space-between">
                      <Text variant="headingMd" id="dot_underline" as="h6">
                        Top performing offers
                      </Text>
                      <Box paddingBlockEnd="400">
                        <Icon source={AlertCircleIcon} tone="base" />
                      </Box>
                    </InlineStack>

                    <Text tone="subdued">
                      There was no data found for this date range.
                    </Text>
                  </Card>
                </Layout.Section>
              </Layout>
            </BlockStack>
            <Footer />
          </Page>
        </Box>
      </BlockStack>
    </Scrollable>
  );
}
