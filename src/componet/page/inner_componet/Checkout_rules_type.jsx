import {
  BlockStack,
  Box,
  Button,
  ButtonGroup,
  Card,
  Collapsible,
  Divider,
  Icon,
  InlineStack,
  LegacyCard,
  Text,
} from "@shopify/polaris";

import {
  LuShieldAlert,
  LuArrowDownUp,
  LuCreditCard,
  LuPackage2,
} from "react-icons/lu";

import {
  ViewIcon,
  GiftCardFilledIcon,
  HideIcon,
  BlogIcon,
  ChevronRightIcon,
  CaretDownIcon,
} from "@shopify/polaris-icons";

import { useNavigate } from "react-router";

import { useState } from "react";

export default function Checkout_rules_type({ title }) {
  const [isPayment, SetIsPayment] = useState(false);
  const [isShipping, SetIsShipping] = useState(false);

  const navigate = useNavigate();
  return (
    <LegacyCard title={title}>
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
                  Block spam checkout with advanced conditions (AND/OR - 0$
                  order, country name,...)
                </Text>
              </BlockStack>
            </InlineStack>
            <Box>
              <Button
                variant="primary"
                onClick={() =>
                  navigate("/Blockify-Checkout/Create_checkout_ruls")
                }
              >
                Create Rules
              </Button>
            </Box>
          </InlineStack>
        </Box>
      </LegacyCard.Section>

      <Divider borderColor="border" />
      <LegacyCard.Section>
        <Box paddingBlock="500">
          <InlineStack align="space-between">
            <InlineStack gap="400">
              <InlineStack gap="400">
                <LuCreditCard size="2.4rem" />
                <BlockStack>
                  <Text variant="headingMd" as="h6">
                    Payment Methods Customization
                  </Text>
                  <Text>
                    Hide, rename, reorder Payment methods by conditions (email
                    domain, customer tags,...)
                  </Text>
                </BlockStack>
              </InlineStack>
            </InlineStack>
            <Box onClick={() => SetIsPayment((pre) => !pre)}>
              {isPayment ? (
                <Icon source={CaretDownIcon} tone="base" />
              ) : (
                <Icon source={ChevronRightIcon} tone="base" />
              )}
            </Box>

            <Collapsible
              open={isPayment}
              id="basic-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
              expandOnPrint
            >
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
                    <Icon source={GiftCardFilledIcon} tone="base" /> Save
                  </InlineStack>
                </Button>
              </ButtonGroup>
            </Collapsible>
          </InlineStack>
        </Box>
      </LegacyCard.Section>

      <Divider borderColor="border" />
      <LegacyCard.Section>
        <Box paddingBlock="500">
          <InlineStack align="space-between">
            <InlineStack gap="400" align="space-between">
              <LuPackage2 size="2.4rem" />
              <BlockStack>
                <Text variant="headingMd" as="h6">
                  Shipping Methods Customization
                </Text>
                <Text>
                  Hide, rename, reorder Shipping methods by conditions (cart
                  total, cart quantity,...)
                </Text>
              </BlockStack>
            </InlineStack>
            <Box onClick={() => SetIsShipping((pre) => !pre)}>
              {isShipping ? (
                <Icon source={CaretDownIcon} tone="base" />
              ) : (
                <Icon source={ChevronRightIcon} tone="base" />
              )}
            </Box>
            <Collapsible
              open={isShipping}
              id="basic-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
              expandOnPrint
            >
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
                    <Icon source={GiftCardFilledIcon} tone="base" /> Save
                  </InlineStack>
                </Button>
              </ButtonGroup>
            </Collapsible>
          </InlineStack>
        </Box>
      </LegacyCard.Section>
    </LegacyCard>
  );
}
