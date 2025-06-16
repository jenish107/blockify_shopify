import {
  Page,
  Box,
  Banner,
  Button,
  Text,
  Thumbnail,
  Link,
  Badge,
  BlockStack,
  LegacyCard,
  Icon,
  InlineStack,
  Popover,
  ActionList,
  List,
} from "@shopify/polaris";
import { DeleteIcon, MenuHorizontalIcon } from "@shopify/polaris-icons";
import { useState, useCallback } from "react";

import headSingLogo from "../assets/headSing.png";

export default function Main_content() {
  const [isBanner, setIsBanner] = useState(true);

  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const handleImportedAction = useCallback(
    () => console.log("Imported action"),
    []
  );

  const handleExportedAction = useCallback(
    () => console.log("Exported action"),
    []
  );

  const activator = (
    <Box onClick={toggleActive} disclosure>
      <Icon source={MenuHorizontalIcon} tone="base" />
    </Box>
  );

  console.log("headSingLogo--------", headSingLogo);
  return (
    <>
      <BlockStack gap="500">
        <Box position="sticky" background="bg-fill-info">
          <Text variant="headingLg" as="h5" fontWeight="medium">
            Blockify Checkout
          </Text>
        </Box>
        <Page>
          <BlockStack gap="500">
            <Text variant="heading3xl" as="h2">
              Hello Jenish Dev Store,
            </Text>
            <Text variant="headingXl" as="h4" fontWeight="regular">
              How are you today? Start protecting your checkout by creating more
              rules!
            </Text>
            {isBanner && (
              <Banner
                title="USPS has updated their rates"
                action={{ content: "View all plans", url: "" }}
                tone="info"
                onDismiss={() => {
                  setIsBanner((pre) => !pre);
                }}
              >
                <p>Make sure you know how these changes affect your store.</p>
              </Banner>
            )}

            <LegacyCard>
              <LegacyCard.Header title="Need a hand?">
                <Popover
                  active={active}
                  activator={activator}
                  autofocusTarget="first-node"
                  onClose={toggleActive}
                >
                  <ActionList
                    actionRole="menuitem"
                    items={[
                      {
                        content: "Dismiss",
                        onAction: handleImportedAction,
                      },
                    ]}
                  />
                </Popover>
              </LegacyCard.Header>
              <LegacyCard.Section>
                <InlineStack wrap={false}>
                  <BlockStack align="space-between">
                    <Text>
                      In addition to our extensive help docs, our team is always
                      ready to assist you. If you need anything, don’t hesitate
                      to reach out!
                    </Text>
                    <InlineStack gap="300">
                      <Button>Chat with us</Button>
                      <Link url="">Read our Docs</Link>
                    </InlineStack>
                  </BlockStack>
                  <InlineStack gap="200" align="center">
                    <img
                      width="75"
                      height="75"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      src={headSingLogo}
                      alt="Black choker necklace"
                    />
                    <Box
                      background="bg-fill-emphasis-active"
                      borderRadius="200"
                      padding="100"
                    >
                      <Text tone="text-inverse">Available 24/7</Text>
                    </Box>
                  </InlineStack>
                </InlineStack>
              </LegacyCard.Section>
              <LegacyCard.Section>
                <Button>Add product</Button>
              </LegacyCard.Section>
            </LegacyCard>
          </BlockStack>
        </Page>
      </BlockStack>
    </>
  );
}
