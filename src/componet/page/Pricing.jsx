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
  Icon,
  InlineStack,
  Layout,
  LegacyCard,
  List,
  Page,
  Scrollable,
  Text,
} from "@shopify/polaris";

import {
  AppsIcon,
  CartIcon,
  ChatIcon,
  CheckIcon,
  ClockIcon,
  DeliveryIcon,
  PaymentIcon,
  StarFilledIcon,
} from "@shopify/polaris-icons";
import React from "react";
import Slider from "react-slick";

import "../../style/Pricing.css";

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { useState } from "react";
import SliderCard from "./Pricing_slider/SliderCard";

export default function Pricing() {
  const [isPlanFirstButton, setIsPlanFirstButton] = useState(true);
  const [slideNumber, setSlideNumber] = useState(1);

  const sliderData = [
    {
      header: "Funkify",
      content:
        "highly recommend it. very easy to use and works well. excellent customer support",
    },
    {
      header: "Alefine",
      content:
        " Great app, free plan gives you a wide scope of rules unlike other apps, allowing you to see how they go and potentially implement more. Louis was quick to reply regarding my query too so happy with th...",
    },
    {
      header: "THE GRAY CRAB",
      content:
        "⭐⭐⭐⭐⭐ Tracy is a Rockstar! Tracy delivered outstanding tech support when we needed it most! She quickly identified and resolved our biggest fraud challenges in record time, putting our worries to rest...",
    },
    {
      header: "Great Lakes Coin",
      content:
        "Very effective app for preventing unwanted orders or just customizing checkout procedures.Customer service was extremely fast to fix one (minor) issue I encountered.",
    },
  ];

  const handlePlanClick = () => {
    setIsPlanFirstButton((pre) => !pre);
  };

  const handleSlideButtonClick = (number) => {
    setSlideNumber(number);
  };
  console.log("Slide number--------", slideNumber);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    gap: "12px",
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Scrollable shadow style={{ height: "calc(100vh - 58px) " }} focusable>
      <BlockStack gap="500">
        <Header />
        <Box paddingInline="2400">
          <Page>
            <BlockStack gap="500">
              <BlockStack inlineAlign="center" gap="300">
                <Text variant="heading2xl" as="h3" alignment="center">
                  Choose the best plan for a seamless checkout!
                </Text>
                <Card>
                  <ButtonGroup>
                    <Button
                      variant="tertiary"
                      onClick={handlePlanClick}
                      pressed={isPlanFirstButton}
                    >
                      Pay monthly
                    </Button>
                    <Button
                      variant="tertiary"
                      onClick={handlePlanClick}
                      pressed={!isPlanFirstButton}
                    >
                      Pay yearly
                    </Button>
                  </ButtonGroup>
                </Card>

                <Grid columns={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}>
                  <Grid.Cell>
                    <Box
                      background="bg-fill"
                      padding="300"
                      borderRadius="300"
                      borderColor="border"
                      borderWidth="0165"
                      minHeight="100%"
                    >
                      <BlockStack gap="200">
                        <Text variant="headingMd" as="h2">
                          BASIC
                        </Text>
                        <Text>
                          Everything you need to start secure checkout{" "}
                        </Text>
                        <Box>
                          <InlineStack blockAlign="center" gap="300">
                            <Text variant="heading2xl" as="h3">
                              ${!isPlanFirstButton ? 9.99 : 1.0}/month
                            </Text>
                            {isPlanFirstButton && (
                              <Box>
                                <Badge>
                                  <InlineStack blockAlign="center">
                                    <Icon source={ClockIcon} tone="base" />
                                    <Text>3 days left</Text>
                                  </InlineStack>
                                </Badge>
                              </Box>
                            )}
                          </InlineStack>
                        </Box>
                        {isPlanFirstButton && (
                          <Text>
                            <InlineStack gap="100">
                              89.99% OFF{" "}
                              <Text
                                textDecorationLine="line-through"
                                tone="critical"
                              >
                                $9.99
                              </Text>
                            </InlineStack>
                          </Text>
                        )}
                        <Text tone="subdued">
                          Billed {!isPlanFirstButton ? "year" : "monthly"}
                        </Text>
                        <Button variant="primary">Select</Button>
                        <Divider />

                        <Text fontWeight="medium">Basic features:</Text>
                        <Box>
                          <InlineStack gap="100">
                            <Box>
                              <Icon source={CheckIcon} tone="subdued" />
                            </Box>
                            <Text tone="subdued">3 active rules of</Text>
                          </InlineStack>
                          <Box paddingInlineStart="400" paddingBlock="200">
                            <BlockStack gap="050">
                              <Text>
                                {" "}
                                <InlineStack>
                                  <Box>
                                    <Icon tone="subdued" source={CartIcon} />
                                  </Box>
                                  <Text tone="subdued">Checkout rules</Text>
                                </InlineStack>
                              </Text>
                              <Text>
                                <InlineStack>
                                  <Box>
                                    <Icon source={PaymentIcon} tone="subdued" />
                                  </Box>
                                  <Text tone="subdued">Payment rules</Text>
                                </InlineStack>
                              </Text>
                              <Text>
                                <InlineStack>
                                  <Box>
                                    <Icon
                                      source={DeliveryIcon}
                                      tone="subdued"
                                    />{" "}
                                  </Box>
                                  <Text tone="subdued">Shipping rules</Text>
                                </InlineStack>
                              </Text>
                            </BlockStack>
                          </Box>

                          <BlockStack gap="200">
                            <InlineStack gap="100">
                              <Box>
                                <Icon source={CheckIcon} tone="subdued" />
                              </Box>
                              <Text tone="subdued">
                                1 active Shipping Discounts
                              </Text>
                            </InlineStack>
                            <InlineStack gap="100">
                              <Box>
                                <Icon source={CheckIcon} tone="subdued" />
                              </Box>
                              <Text tone="subdued">
                                1 active Add fee for COD
                              </Text>
                            </InlineStack>
                            <InlineStack gap="100">
                              <Box>
                                <Icon source={CheckIcon} tone="subdued" />
                              </Box>
                              <Text tone="subdued">
                                1 active Hide dynamic payment button
                              </Text>
                            </InlineStack>
                          </BlockStack>
                        </Box>
                        <BlockStack gap="200">
                          <InlineStack>
                            <Box>
                              <Icon source={ChatIcon} tone="subdued" />
                            </Box>
                            <Text tone="subdued">24/7 Live chat support</Text>
                          </InlineStack>
                        </BlockStack>
                      </BlockStack>
                    </Box>
                  </Grid.Cell>
                  <Grid.Cell>
                    <Box
                      background="bg-fill"
                      padding="300"
                      borderRadius="300"
                      borderColor="border"
                      borderWidth="0165"
                    >
                      <BlockStack gap="200">
                        <InlineStack gap="300">
                          <Text variant="headingMd" as="h2">
                            PREMIUM
                          </Text>
                          <Badge tone="info">Most popular</Badge>
                        </InlineStack>

                        <Text tone="subdued">
                          Best choice for secure, customizable checkout
                        </Text>
                        <Box>
                          <InlineStack blockAlign="center" gap="300">
                            <Text variant="heading2xl" as="h3">
                              ${!isPlanFirstButton ? 19.99 : 1.0}/month
                            </Text>
                            <Box>
                              {isPlanFirstButton && (
                                <Badge>
                                  <InlineStack blockAlign="center">
                                    <Icon source={ClockIcon} tone="base" />
                                    <Text>3 days left</Text>
                                  </InlineStack>
                                </Badge>
                              )}
                            </Box>
                          </InlineStack>
                        </Box>
                        {isPlanFirstButton && (
                          <Text>
                            <InlineStack gap="100">
                              89.99% OFF{" "}
                              <Text
                                textDecorationLine="line-through"
                                tone="critical"
                              >
                                $9.99
                              </Text>
                            </InlineStack>
                          </Text>
                        )}
                        <Text tone="subdued">
                          Billed {!isPlanFirstButton ? "year" : "monthly"}
                        </Text>
                        <Button variant="primary">Select</Button>
                        <Divider />

                        <Text fontWeight="medium">Premium features:</Text>
                        <Box>
                          <InlineStack gap="100">
                            <Box>
                              <Icon source={CheckIcon} tone="subdued" />
                            </Box>
                            <Text tone="subdued">
                              Unlimited active rules of
                            </Text>
                          </InlineStack>
                          <Box paddingInlineStart="400" paddingBlock="200">
                            <BlockStack gap="050">
                              <Text>
                                {" "}
                                <InlineStack>
                                  <Box>
                                    <Icon tone="subdued" source={CartIcon} />
                                  </Box>
                                  <Text tone="subdued">Checkout rules</Text>
                                </InlineStack>
                              </Text>
                              <Text>
                                <InlineStack>
                                  <Box>
                                    <Icon source={PaymentIcon} tone="subdued" />
                                  </Box>
                                  <Text tone="subdued">Payment rules</Text>
                                </InlineStack>
                              </Text>
                              <Text>
                                <InlineStack>
                                  <Box>
                                    <Icon
                                      source={DeliveryIcon}
                                      tone="subdued"
                                    />{" "}
                                  </Box>
                                  <Text tone="subdued">Shipping rules</Text>
                                </InlineStack>
                              </Text>
                            </BlockStack>
                          </Box>

                          <BlockStack gap="200">
                            <InlineStack gap="100">
                              <Box>
                                <Icon source={CheckIcon} tone="subdued" />
                              </Box>
                              <Text tone="subdued">
                                Unlimited active Shipping Discounts
                              </Text>
                            </InlineStack>
                            <InlineStack gap="100">
                              <Box>
                                <Icon source={CheckIcon} tone="subdued" />
                              </Box>
                              <Text tone="subdued">
                                Unlimited active Add fee for COD
                              </Text>
                            </InlineStack>
                            <InlineStack gap="100">
                              <Box>
                                <Icon source={CheckIcon} tone="subdued" />
                              </Box>
                              <Text tone="subdued">
                                Unlimited active Hide dynamic payment button
                              </Text>
                            </InlineStack>
                          </BlockStack>
                        </Box>
                        <BlockStack gap="200">
                          <InlineStack>
                            <Box>
                              <Icon source={ChatIcon} tone="subdued" />
                            </Box>
                            <Text tone="subdued">24/7 Live chat support</Text>
                          </InlineStack>
                          <InlineStack>
                            <Box>
                              <Icon source={AppsIcon} tone="subdued" />
                            </Box>
                            <Text tone="subdued">
                              Early access to Blockify's new features
                            </Text>
                          </InlineStack>
                        </BlockStack>
                      </BlockStack>
                    </Box>
                  </Grid.Cell>
                </Grid>
              </BlockStack>

              <Box>
                <BlockStack gap="300">
                  <Card>
                    <BlockStack>
                      <InlineStack>
                        <Text>FREE FOREVER</Text>
                        <Badge>
                          <Text tone="subdued">Your current plan</Text>
                        </Badge>
                      </InlineStack>
                      <Text>
                        <InlineStack blockAlign="end">
                          <Text
                            variant="heading2xl"
                            as="h3"
                            fontWeight="regular"
                          >
                            $0
                          </Text>
                          <Box paddingBlockEnd="100">
                            <Text tone="subdued">/month</Text>
                          </Box>
                        </InlineStack>
                      </Text>
                      <Text>Ideal for testing and gaining benefits.</Text>
                    </BlockStack>
                  </Card>

                  <Card>
                    <Box paddingBlockEnd="300">
                      <Text variant="headingMd" as="h2">
                        Trusted by merchants
                      </Text>
                    </Box>
                    <Box paddingBlockEnd="400">
                      <Slider {...settings}>
                        {sliderData.map((currData, index) => {
                          return <SliderCard key={index} currData={currData} />;
                        })}
                      </Slider>
                    </Box>
                  </Card>

                  <Card>
                    <InlineStack align="space-between">
                      <Box>
                        <InlineStack gap="100">
                          <Text variant="headingMd" as="h2">
                            PREMIUM
                          </Text>
                          <Badge tone="info">Most popular</Badge>
                        </InlineStack>

                        <InlineStack align="start" blockAlign="end">
                          <Text variant="heading2xl" fontWeight="bold" as="h3">
                            $1.00
                          </Text>
                          <Box paddingBlockEnd="100">
                            <Text>/month</Text>
                          </Box>
                        </InlineStack>
                      </Box>
                      <BlockStack inlineAlign="end">
                        <Button variant="primary">Upgrade</Button>
                        <Text>24/7 Live chat support</Text>
                        <Text>No extra fees</Text>
                      </BlockStack>
                    </InlineStack>
                  </Card>
                </BlockStack>
              </Box>
            </BlockStack>
          </Page>
        </Box>
        <Footer />
      </BlockStack>
    </Scrollable>
  );
}
