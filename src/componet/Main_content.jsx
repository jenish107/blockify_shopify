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
  Scrollable,
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
  Collapsible,
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
  AlertTriangleIcon,
  ShieldCheckMarkIcon,
  CheckIcon,
  XIcon,
  ShieldPersonIcon,
  StoreIcon,
  CreditCardSecureIcon,
} from "@shopify/polaris-icons";

import { useState, useCallback } from "react";

import headSingLogo from "../assets/headSing.png";
import "../style/Main_content.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Checkout_rules_page from "./page/inner_componet/Checkout_rules_page";
import Checkout_rules_type from "./page/inner_componet/Checkout_rules_type";

export default function Main_content() {
  const [isBanner, setIsBanner] = useState(true);
  const [active, setActive] = useState(false);

  const [answerId, setAnswerId] = useState(0);
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
                  ready to assist you. If you need anything, don’t hesitate to
                  reach out!
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

        <Checkout_rules_type title="Secure your Checkout" />

        <LegacyCard title="Frequently Ask Questions" Section>
          <Box paddingBlockEnd="300">
            {questions.map((currQue, index) => {
              return (
                <Box key={index}>
                  <Box
                    onClick={() => {
                      currQue.id === answerId
                        ? setAnswerId(0)
                        : setAnswerId(currQue.id);
                    }}
                    padding="400"
                    paddingBlock="200"
                  >
                    <Card>
                      <Box>{currQue.question}</Box>
                    </Card>
                  </Box>
                  <Collapsible
                    open={answerId === currQue.id}
                    id="basic-collapsible"
                    transition={{
                      duration: "500ms",
                      timingFunction: "ease-in-out",
                    }}
                    expandOnPrint
                  >
                    <Box paddingInline="600">
                      <Box
                        padding="500"
                        borderRadius="200"
                        background="tooltip-tail-down-border"
                        paddingBlock="200"
                      >
                        <Box>{currQue.answer}</Box>
                      </Box>
                    </Box>
                  </Collapsible>
                </Box>
              );
            })}
          </Box>
        </LegacyCard>
        <LegacyCard
          title="Promotions"
          sectioned
          actions={[
            {
              content: <Icon source={XIcon} tone="base" />,
            },
          ]}
        >
          <Layout>
            <Layout.Section variant="oneHalf">
              <LegacyCard
                title={
                  <InlineStack>
                    <Box>
                      <Icon tone="warning" source={AlertTriangleIcon} />
                    </Box>
                    <Text>You might not know this!</Text>
                  </InlineStack>
                }
                sectioned
              >
                <LegacyCard.Section
                  title="
                        Did you know that PayPal and Stripe can hold your funds
                        and limit your account?"
                >
                  <Text>
                    <InlineStack>
                      <Box>
                        <Icon tone="warning" source={AlertTriangleIcon} />
                      </Box>
                      They can hold your funds for up to 21 days
                    </InlineStack>
                  </Text>
                  <Text>
                    <InlineStack>
                      <Box>
                        <Icon tone="warning" source={AlertTriangleIcon} />
                      </Box>
                      Limit your accounts
                    </InlineStack>
                  </Text>
                  <Text>
                    <InlineStack>
                      <Box>
                        <Icon tone="warning" source={AlertTriangleIcon} />
                      </Box>
                      Ban your account permanently
                    </InlineStack>
                  </Text>
                  <Box paddingBlockStart="100">
                    PayPal or Stripe may randomly check if your orders are being
                    delivered.
                  </Box>
                </LegacyCard.Section>
              </LegacyCard>
            </Layout.Section>
            <Layout.Section variant="oneHalf">
              <LegacyCard>
                <LegacyCard.Header
                  title={
                    <InlineStack>
                      <Box>
                        <Icon source={ShieldCheckMarkIcon} tone="base" />
                      </Box>
                      <Text>You might not know this!</Text>
                    </InlineStack>
                  }
                >
                  <Badge tone="success">Fulfilled</Badge>
                </LegacyCard.Header>
                <LegacyCard.Section sectioned>
                  <LegacyCard.Section
                    title="Strong PayPal or Stripe account looks like this:"
                    sectioned
                  >
                    <Box>
                      <InlineStack>
                        <Box>
                          {" "}
                          <Icon source={CheckIcon} tone="base" />
                        </Box>{" "}
                        No random holds or bans
                      </InlineStack>
                    </Box>
                    <Box>
                      <InlineStack>
                        <Box>
                          {" "}
                          <Icon source={CheckIcon} tone="base" />
                        </Box>
                        Fewer chargebacks and holds
                      </InlineStack>
                    </Box>
                    <Box>
                      <InlineStack>
                        <Box>
                          {" "}
                          <Icon source={CheckIcon} tone="base" />
                        </Box>
                        A better relationship between PayPal and Stripe
                      </InlineStack>
                    </Box>
                    <Box>
                      You can automate this by sending proof of delivery to
                      PayPal using Synctrack.
                    </Box>
                  </LegacyCard.Section>
                  <Button fullWidth>Yes, help me strengthen my account</Button>
                </LegacyCard.Section>
              </LegacyCard>
            </Layout.Section>
          </Layout>
        </LegacyCard>

        <LegacyCard
          title={<Badge tone="success">Suggested by experts</Badge>}
          sectioned
          actions={[
            {
              content: <Icon source={XIcon} tone="base" />,
            },
          ]}
        >
          <InlineStack>
            <Box>
              <Icon source={AlertTriangleIcon} tone="base" />
            </Box>
            <Text fontWeight="bold">
              With growth in sales comes growth in fraud. Here is the solid
              fraud prevention strategy you should know
            </Text>
          </InlineStack>
          <Text>
            With the right tools, you can minimize risks, protect your profits.
            Focus your energy on growth rather than concerns.
          </Text>
          <Box paddingBlockStart="300">
            <Layout>
              <Layout.Section variant="oneHalf">
                <LegacyCard
                  title={
                    <InlineStack>
                      <Box>
                        <Icon source={ShieldPersonIcon} />
                      </Box>
                      <Text>Detect and prevent fraudulent activities!</Text>
                    </InlineStack>
                  }
                  sectioned
                >
                  <Text>
                    Protect your store by analyze store traffic, block
                    fraudulent access and auto-canceling high-risk orders.
                  </Text>
                  <Box paddingBlockStart="500">
                    <Button>Set up store protection</Button>
                  </Box>
                </LegacyCard>
              </Layout.Section>

              <Layout.Section variant="oneHalf">
                <LegacyCard
                  title={
                    <InlineStack>
                      <Box>
                        <Icon source={StoreIcon} />
                      </Box>
                      <Text>Manage fraud, disputes and chargeback</Text>
                    </InlineStack>
                  }
                  sectioned
                >
                  <Text>
                    Providing delivery proof to PayPal/Stripe helps defend
                    against disputes and chargebacks & build trust with payment
                    processor.
                  </Text>
                  <Box paddingBlockStart="500">
                    <Button>Set up payment protection</Button>
                  </Box>
                </LegacyCard>
              </Layout.Section>
              <Layout.Section variant="oneHalf">
                <LegacyCard
                  title={
                    <InlineStack>
                      <Box>
                        <Icon source={ShieldCheckMarkIcon} />
                      </Box>
                      <Text>Comply with global privacy laws</Text>
                    </InlineStack>
                  }
                  sectioned
                >
                  <Text>
                    If you selling to US, EU, your store is required to ask
                    consent before gather customer data. Non-compliance can lead
                    to large fines.
                  </Text>
                  <Box paddingBlockStart="500">
                    <Button>Set up cookie consent</Button>
                  </Box>
                </LegacyCard>
              </Layout.Section>

              <Layout.Section variant="oneHalf">
                <LegacyCard
                  title={
                    <InlineStack>
                      <Box>
                        <Icon source={CreditCardSecureIcon} />
                      </Box>
                      <Text>Comply with legal age requirements</Text>
                    </InlineStack>
                  }
                  sectioned
                >
                  <Text>
                    If you are selling sells age-restricted products then age
                    verification is a must. Limit age on accessing your store
                    and checkout.
                  </Text>
                  <Box paddingBlockStart="500">
                    <Button>Set up age verification</Button>
                  </Box>
                </LegacyCard>
              </Layout.Section>
            </Layout>
          </Box>
        </LegacyCard>
      </BlockStack>
    </Page>
  );
}
