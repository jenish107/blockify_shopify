import {
  Box,
  Button,
  Text,
  Thumbnail,
  Icon,
  InlineStack,
} from "@shopify/polaris";
import { MenuHorizontalIcon } from "@shopify/polaris-icons";

export default function Header() {
  return (
    <Box
      position="sticky"
      zIndex="500"
      padding="500"
      background="bg"
      insetBlockStart="100"
      borderColor="border"
      borderBlockEndWidth="0165"
    >
      <InlineStack align="space-between" blockAlign="center">
        <Text variant="headingLg" as="h5" fontWeight="medium">
          <InlineStack gap="100">
            <Thumbnail
              size="extraSmall"
              source="https://cdn.shopify.com/s/files/applications/ea2ade25c2da95bcb2e4e80b473ec410_200x200.png?1721715498"
              alt="Black choker necklace"
            />
            Blockify Checkout
          </InlineStack>
        </Text>
        <Button variant="tertiary">
          <Icon source={MenuHorizontalIcon} tone="base" />
        </Button>
      </InlineStack>
    </Box>
  );
}
