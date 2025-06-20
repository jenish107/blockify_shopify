import {
  Badge,
  BlockStack,
  Box,
  Button,
  ButtonGroup,
  Card,
  Divider,
  EmptyState,
  Grid,
  InlineStack,
  Layout,
  LegacyCard,
  Page,
  Scrollable,
  Text,
} from "@shopify/polaris";
import { useNavigate } from "react-router";

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import "../../style/CheckoutCards.css";

export default function CheckoutCards() {
  let navigate = useNavigate();

  const cardsDetails = [
    {
      img: "https://protection.blockifyapp.com/static/media/product_offer.48b0a9e4fa0742a505cf5ed8e77b6548.svg",
      heading: "Product offer",
      content: "Upsell with relevant product deals.",
    },
    {
      img: "https://protection.blockifyapp.com/static/media/product_offer.48b0a9e4fa0742a505cf5ed8e77b6548.svg",
      heading: "Custom banner",
      content: "Share updates, promotions, or messages.",
    },
    {
      img: "https://protection.blockifyapp.com/static/media/product_offer.48b0a9e4fa0742a505cf5ed8e77b6548.svg",
      heading: "Trust badge",
      content: "Strengthen trust and optimize checkout conversion rates.",
    },
    {
      img: "https://protection.blockifyapp.com/static/media/product_offer.48b0a9e4fa0742a505cf5ed8e77b6548.svg",
      heading: "Social media icon",
      content: "Boost engagement by linking to your socials.",
    },
    {
      img: "https://protection.blockifyapp.com/static/media/product_offer.48b0a9e4fa0742a505cf5ed8e77b6548.svg",
      heading: "Support button",
      content: "Ensure customers can quickly reach support when needed.",
    },
    {
      img: "https://protection.blockifyapp.com/static/media/promote_banner_checkout.334c52c5c6942fb28da0.png",
      heading: "Promotion banner",
      content:
        "Showcase exclusive discounts and special offers to boost sales.",
    },
  ];

  return (
    <Page
      title="Select component"
      backAction={{ content: "", onAction: () => navigate(-1) }}
      fullWidth={true}
    >
      <BlockStack gap="500">
        <LegacyCard>
          <LegacyCard.Section>
            <ButtonGroup>
              <Button tone="success" pressed={true} variant="tertiary">
                Order status page
              </Button>
              <Button variant="plain" disabled>
                Thank you page
              </Button>
              <Badge>Coming soon</Badge>
            </ButtonGroup>
          </LegacyCard.Section>

          <Divider />
          <LegacyCard.Section>
            <Grid columns={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}>
              {cardsDetails.map((currData, index) => {
                return (
                  <CheckoutCard
                    key={index}
                    img={currData.img}
                    heading={currData.heading}
                    content={currData.content}
                  />
                );
              })}
            </Grid>
          </LegacyCard.Section>
        </LegacyCard>
      </BlockStack>
    </Page>
  );
}

const CheckoutCard = ({ img, heading, content }) => {
  return (
    <Card padding="0">
      <BlockStack align="space-between">
        <Box padding="300" id="background_liner_Gradient">
          <BlockStack align="center" inlineAlign="center">
            <img src={img} alt="" />
          </BlockStack>
        </Box>
        <Box padding="300" minHeight="min-content">
          <Box paddingBlockEnd="500">
            <BlockStack gap="200" align="space-between">
              <Box>
                <Text variant="headingMd" as="h6">
                  {heading}
                </Text>
                <Text tone="subdued">{content}</Text>
              </Box>
            </BlockStack>
          </Box>
          <Box position="relative" insetBlockStart="100" insetInlineEnd="100">
            <Button>Create</Button>
          </Box>
        </Box>
      </BlockStack>
    </Card>
  );
};
