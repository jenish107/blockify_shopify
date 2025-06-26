import {
  Box,
  Text,
  Scrollable,
  Banner,
  BlockStack,
  Page,
  LegacyCard,
  EmptyState,
  MediaCard,
  Layout,
  InlineGrid,
  Card,
  Grid,
  Icon,
  InlineStack,
  Button,
} from "@shopify/polaris";
import { PaymentIcon } from "@shopify/polaris-icons";

import { useNavigate } from "react-router";

import "../../style/Cash_on_Delive.css";

import Cash_on_delivery_img1 from "../../assets/Cash_on_delivery_img1.png";

export default function Cash_on_Delive() {
  const navigate = useNavigate();
  return (
    <Page title="Cash on delivery fee">
      <BlockStack gap="500">
        <Card>
          <Grid gap="200" columns={{ xs: 1, sm: 1, md: 1, lg: 3, xl: 3 }}>
            <Grid.Cell columnSpan={{ xs: 1, sm: 2, md: 2, lg: 1, xl: 1 }}>
              <Box maxWidth="300px">
                <img
                  alt=""
                  width="100%"
                  height="100%"
                  src={Cash_on_delivery_img1}
                />
              </Box>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}>
              <Box>
                <BlockStack gap="400">
                  <Text fontWeight="bold"> Add Cash on Delivery fee</Text>
                  <Text tone="subdued">
                    Sync the shipping and payment methods to require a fee for
                    customers who select COD (Cash on Delivery) as their
                    shipping option.
                  </Text>
                  <Box>
                    <Button
                      onClick={() =>
                        navigate("/Blockify-Checkout/Cash_on_delivery_fee")
                      }
                    >
                      Create rule
                    </Button>
                  </Box>
                </BlockStack>
              </Box>
            </Grid.Cell>
          </Grid>
        </Card>

        <Text variant="headingMd" as="h6">
          User cases
        </Text>
        <Layout>
          <Layout.Section>
            <Grid gap="300" columns={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 4 }}>
              <Card>
                <BlockStack gap="300">
                  <Box id="background_liner" borderRadius="200" padding="400">
                    <InlineStack align="space-between">
                      <Text>COD </Text>
                      <InlineStack blockAlign="center">
                        <Box width="40px" background="bg" minHeight="1px"></Box>
                      </InlineStack>
                      <Box>
                        <Icon source={PaymentIcon} />
                      </Box>
                    </InlineStack>
                  </Box>

                  <Text variant="headingMd" as="h6">
                    Sync COD with COD payment (+fee)
                  </Text>
                  <Box paddingBlockStart="1000">
                    <Text tone="subdued">
                      Example: For COD shipping, show COD payment option with an
                      added fee
                    </Text>
                  </Box>
                </BlockStack>
              </Card>

              <Card>
                <BlockStack gap="300">
                  <Box id="background_liner" borderRadius="200" padding="400">
                    <InlineStack blockAlign="center" align="space-between">
                      <Text>FedEx </Text>
                      <InlineStack blockAlign="center">
                        <Box width="40px" background="bg" minHeight="1px"></Box>
                      </InlineStack>
                      <Box width="50px">
                        <Text
                          as="p"
                          fontWeight="regular"
                          id="font_Weight_small"
                        >
                          Bank Transfer
                        </Text>
                      </Box>
                    </InlineStack>
                  </Box>

                  <Text variant="headingMd" as="h6">
                    Sync FedEx with Bank Transfer
                  </Text>
                  <Box paddingBlockStart="1000">
                    <Text tone="subdued">
                      Example: For FedEx shipping, show only Bank Transfer.'
                    </Text>
                  </Box>
                </BlockStack>
              </Card>
              <Card>
                <BlockStack gap="300">
                  <Box id="background_liner" borderRadius="200" padding="400">
                    <InlineStack
                      blockAlign="center"
                      align="space-between"
                      wrap={false}
                    >
                      <Text>Easyship </Text>
                      <InlineStack blockAlign="center">
                        <Box width="40px" background="bg" minHeight="1px"></Box>
                      </InlineStack>
                      <Box width="50px">
                        <Text id="font_Weight_small">Credit Card</Text>
                      </Box>
                    </InlineStack>
                  </Box>

                  <Text variant="headingMd" as="h6">
                    Sync Easyship with Credit Card
                  </Text>
                  <Box paddingBlockStart="1000">
                    <Text tone="subdued">
                      Example: Show only Credit Card for Easyship shipping
                    </Text>
                  </Box>
                </BlockStack>
              </Card>
              <Card>
                <BlockStack gap="200">
                  <Text variant="headingMd" as="h6">
                    Request a new feature
                  </Text>
                  <Box>
                    <InlineStack gap="300">
                      <Text tone="subdued">
                        If you can't find a feature or condition that matches
                        your needs, feel free to request it.
                      </Text>
                      <Button>Request feature</Button>
                    </InlineStack>
                  </Box>
                </BlockStack>
              </Card>
            </Grid>
          </Layout.Section>
        </Layout>

        <Text variant="headingMd" as="h6">
          Cash on delivery fee rule
        </Text>
        <LegacyCard sectioned>
          <LegacyCard sectioned>
            <EmptyState
              heading="Oops! You don’t have any checkout rules."
              action={{
                content: "+ Add new rule",
                onAction: () =>
                  navigate("/Blockify-Checkout/Cash_on_delivery_fee"),
              }}
              image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
            >
              <p>Add checkout rules to secure your Checkout now.</p>
            </EmptyState>
          </LegacyCard>
        </LegacyCard>
      </BlockStack>
    </Page>
  );
}
