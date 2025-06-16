import {
  Page,
  Box,
  Banner,
  Button,
  Text,
  Thumbnail,
  Layout,
  Listbox,
  Link,
  Badge,
  BlockStack,
  Card,
  LegacyCard,
  Icon,
  InlineStack,
  FooterHelp,
  Grid,
  Popover,
  ActionList,
  List,
  ButtonGroup,
  Divider,
} from "@shopify/polaris";
import {
  DeleteIcon,
  MenuHorizontalIcon,
  CalendarIcon,
  AlertCircleIcon,
  ViewIcon,
  GiftCardFilledIcon,
  HideIcon,
  BlogIcon,
  CaretDownIcon,
  ChevronRightIcon,
} from "@shopify/polaris-icons";

import {
  LuCreditCard,
  LuPackage2,
  LuShieldAlert,
  LuArrowDownUp,
} from "react-icons/lu";

import { useState, useCallback } from "react";

import headSingLogo from "../assets/headSing.png";

export default function Main_content() {
  const [isBanner, setIsBanner] = useState(true);
  const [active, setActive] = useState(false);
  const [isPayment, SetIsPayment] = useState(false);
  const [isShipping, SetIsShipping] = useState(false);

  const [answerId, setAnswerId] = useState(1);
  const questions = [
    {
      id: 1,
      question: "Do I need to pay for customized rules?",
      answer:
        "Blockify provides a free plan with limited single rules. If you require more complex rules, please consider our paid plans.",
    },
    {
      id: 2,
      question: "Is this app compatible only with Shopify Plus?",
      answer:
        "No, Blockify is compatible with all Shopify plans (including Shopify Basic, Shopify Professional, Shopify Advanced, and Shopify Plus).",
    },
    {
      id: 3,
      question:
        "Is the app compatible with both one-page and three-page checkout options?",
      answer:
        "Yes, Blockify works well with one-page checkout as well as three-page checkout.",
    },
  ];

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
                      width="50"
                      height="50"
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
            </LegacyCard>
            <InlineStack align="end">
              <Button>
                <InlineStack blockAlign="center">
                  <Icon source={CalendarIcon} tone="base" />
                  Last 7 days
                </InlineStack>
              </Button>
            </InlineStack>

            <LegacyCard title="Overview" sectioned>
              <Grid columns={{ xs: 1, sm: 2, md: 2, lg: 4, xl: 4 }}>
                <Grid.Cell>
                  <Box
                    borderWidth="0165"
                    borderColor="border"
                    borderRadius="100"
                    padding="400"
                  >
                    <BlockStack inlineAlign="center">
                      <InlineStack gap="100" blockAlign="center">
                        <Text variant="headingMd" as="h6">
                          Checkout Blocked{" "}
                        </Text>
                        <Icon source={AlertCircleIcon} tone="base" />
                      </InlineStack>
                      <Text variant="headingXl" as="h4">
                        0
                      </Text>
                    </BlockStack>
                  </Box>
                </Grid.Cell>
                <Grid.Cell>
                  <Box
                    borderWidth="0165"
                    borderColor="border"
                    borderRadius="100"
                    padding="400"
                  >
                    <BlockStack inlineAlign="center">
                      <InlineStack gap="100" blockAlign="center">
                        <Text variant="headingMd" as="h6">
                          Validation{" "}
                        </Text>
                        <Icon source={AlertCircleIcon} tone="base" />
                      </InlineStack>
                      <Text variant="headingXl" as="h4">
                        0
                      </Text>
                    </BlockStack>
                  </Box>
                </Grid.Cell>
                <Grid.Cell>
                  <Box
                    borderWidth="0165"
                    borderColor="border"
                    borderRadius="100"
                    paddingBlock="400"
                    padding="100"
                  >
                    <BlockStack inlineAlign="center">
                      <InlineStack gap="100" blockAlign="center">
                        <Text variant="headingMd" as="h6">
                          Checkout Conversion Rate{" "}
                        </Text>
                        <Icon source={AlertCircleIcon} tone="base" />
                      </InlineStack>
                      <Text variant="headingXl" as="h4">
                        0%
                      </Text>
                    </BlockStack>
                  </Box>
                </Grid.Cell>
                <Grid.Cell>
                  <Box
                    borderWidth="0165"
                    borderColor="border"
                    borderRadius="100"
                    paddingBlock="400"
                    padding="100"
                  >
                    <BlockStack inlineAlign="center">
                      <InlineStack gap="100" blockAlign="center">
                        <Text variant="headingMd" as="h6">
                          Revenue saved from block{" "}
                        </Text>
                        <Icon source={AlertCircleIcon} tone="base" />
                      </InlineStack>
                      <Text variant="headingXl" as="h4">
                        ₹ 0
                      </Text>
                    </BlockStack>
                  </Box>
                </Grid.Cell>
              </Grid>
            </LegacyCard>

            <LegacyCard title="Secure your Checkout">
              <LegacyCard.Section>
                <Box paddingBlock="500">
                  <InlineStack gap="400" align="space-between">
                    <InlineStack gap="400">
                      <LuShieldAlert size="2.4rem" />
                      <BlockStack>
                        <Text variant="headingMd" as="h6">
                          Checkout Validation
                        </Text>
                        <Text>
                          Block spam checkout with advanced conditions (AND/OR -
                          0$ order, country name,...)
                        </Text>
                      </BlockStack>
                    </InlineStack>
                    <Box>
                      <Button variant="primary">Create Rules</Button>
                    </Box>
                  </InlineStack>
                </Box>
              </LegacyCard.Section>

              <Divider borderColor="border" />
              <LegacyCard.Section>
                <Box paddingBlock="500">
                  <InlineStack gap="400" align="space-between">
                    <InlineStack gap="400">
                      <InlineStack gap="400">
                        <LuCreditCard size="2.4rem" />
                        <BlockStack>
                          <Text variant="headingMd" as="h6">
                            Payment Methods Customization
                          </Text>
                          <Text>
                            Hide, rename, reorder Payment methods by conditions
                            (email domain, customer tags,...)
                          </Text>
                        </BlockStack>
                      </InlineStack>
                      <Box onClick={() => SetIsPayment((pre) => !pre)}>
                        {isPayment ? (
                          <Icon source={CaretDownIcon} tone="base" />
                        ) : (
                          <Icon source={ChevronRightIcon} tone="base" />
                        )}
                      </Box>
                    </InlineStack>
                    {isPayment && (
                      <Box>
                        <ButtonGroup>
                          <Button>
                            <InlineStack blockAlign="center" gap="100">
                              <Icon source={HideIcon} tone="base" /> Save
                            </InlineStack>
                          </Button>
                          <Button>
                            <InlineStack blockAlign="center" gap="100">
                              <LuArrowDownUp /> Save
                            </InlineStack>
                          </Button>
                          <Button>
                            <InlineStack blockAlign="center" gap="100">
                              <Icon source={BlogIcon} tone="base" /> Save
                            </InlineStack>
                          </Button>
                          <Button>
                            <InlineStack blockAlign="center" gap="100">
                              <Icon source={ViewIcon} tone="base" /> Save
                            </InlineStack>
                          </Button>
                          <Button>
                            <InlineStack blockAlign="center" gap="100">
                              <Icon source={GiftCardFilledIcon} tone="base" />{" "}
                              Save
                            </InlineStack>
                          </Button>
                        </ButtonGroup>
                      </Box>
                    )}
                  </InlineStack>
                </Box>
              </LegacyCard.Section>

              <Divider borderColor="border" />
              <LegacyCard.Section>
                <Box paddingBlock="500">
                  <InlineStack gap="400" align="space-between">
                    <InlineStack gap="400" align="space-between">
                      <LuPackage2 size="2.4rem" />
                      <BlockStack>
                        <Text variant="headingMd" as="h6">
                          Shipping Methods Customization
                        </Text>
                        <Text>
                          Hide, rename, reorder Shipping methods by conditions
                          (cart total, cart quantity,...)
                        </Text>
                      </BlockStack>
                      <Box onClick={() => SetIsShipping((pre) => !pre)}>
                        {isShipping ? (
                          <Icon source={CaretDownIcon} tone="base" />
                        ) : (
                          <Icon source={ChevronRightIcon} tone="base" />
                        )}
                      </Box>
                    </InlineStack>
                    {isShipping && (
                      <Box>
                        <ButtonGroup>
                          <Button>
                            <InlineStack blockAlign="center" gap="100">
                              <Icon source={HideIcon} tone="base" /> Save
                            </InlineStack>
                          </Button>
                          <Button>
                            <InlineStack blockAlign="center" gap="100">
                              <LuArrowDownUp /> Save
                            </InlineStack>
                          </Button>
                          <Button>
                            <InlineStack blockAlign="center" gap="100">
                              <Icon source={BlogIcon} tone="base" /> Save
                            </InlineStack>
                          </Button>
                          <Button>
                            <InlineStack blockAlign="center" gap="100">
                              <Icon source={ViewIcon} tone="base" /> Save
                            </InlineStack>
                          </Button>
                          <Button>
                            <InlineStack blockAlign="center" gap="100">
                              <Icon source={GiftCardFilledIcon} tone="base" />{" "}
                              Save
                            </InlineStack>
                          </Button>
                        </ButtonGroup>
                      </Box>
                    )}
                  </InlineStack>
                </Box>
              </LegacyCard.Section>
            </LegacyCard>
            <LegacyCard title="Frequently Ask Questions" Section>
              {questions.map((currQue, index) => {
                return (
                  <Box key={index}>
                    <Box
                      onClick={() => {
                        setAnswerId(currQue.id);
                      }}
                      padding="400"
                      paddingBlock="200"
                    >
                      <Card>
                        <Box>{currQue.question}</Box>
                      </Card>
                    </Box>
                    {answerId === currQue.id && (
                      <Box paddingInline="600">
                        <Box
                          padding="500"
                          borderRadius="200"
                          background="tooltip-tail-down-border"
                          paddingBlock="200"
                        >
                          <Box>{currQue.question}</Box>
                        </Box>
                      </Box>
                    )}
                  </Box>
                );
              })}
            </LegacyCard>
          </BlockStack>
          <FooterHelp>
            Learn more about{" "}
            <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
              fulfilling orders
            </Link>
          </FooterHelp>
        </Page>
      </BlockStack>
    </>
  );
}
