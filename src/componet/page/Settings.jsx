import {
    Badge,
  BlockStack,
  Box,
  Card,
  DescriptionList,
  EmptyState,
  InlineStack,
  LegacyCard,
  Page,
  Scrollable,
  Text,
} from "@shopify/polaris";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

export default function Settings() {
    
  return (
    <Scrollable shadow style={{ height: "calc(100vh - 58px) " }} focusable>
      <BlockStack gap="500">
        <Header />
        <Box paddingInline="300">
          <Page title="Settings" fullWidth={true}>
            <DescriptionList
              items={[
                {
                  term: "Logistics",
                  description: (
                    <Card>
                      <InlineStack>
                        <Text>Activate Checkout rules </Text>
                        <Badge>

                        </Badge>
                      </InlineStack>
                    </Card>
                  ),
                },
                {
                  term: "Sole proprietorship",
                  description:
                    "A business structure where a single individual both owns and runs the company.",
                },
                {
                  term: "Discount code",
                  description:
                    "A series of numbers and/or letters that an online shopper may enter at checkout to get a discount or special offer.",
                },
              ]}
            />
            <Footer />
          </Page>
        </Box>
      </BlockStack>
    </Scrollable>
  );
}
