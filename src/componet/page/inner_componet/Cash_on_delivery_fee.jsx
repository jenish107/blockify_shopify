import {
  AutoSelection,
  Avatar,
  Badge,
  BlockStack,
  Box,
  Button,
  Card,
  Combobox,
  DescriptionList,
  Icon,
  InlineStack,
  LegacyCard,
  LegacyStack,
  Link,
  Listbox,
  Page,
  Popover,
  ResourceList,
  Scrollable,
  Select,
  Tag,
  Text,
  TextContainer,
  TextField,
} from "@shopify/polaris";

import {
  AlertCircleIcon,
  SearchIcon,
  SelectIcon,
} from "@shopify/polaris-icons";

import { useNavigate } from "react-router";
import { useCallback, useEffect, useMemo, useState } from "react";

import Cundition_list from "./child_componet/Create_checkout_rules/Cundition_list";
import currency from "../../../Api/currencies.json";

const StaticBaseCunditionList = {
  Always: [
    {
      img: "🎯",
      name: "Always",
      content: "Always hide the dynamic button when the rule is enabled",
      opacity: 0.6,
    },
  ],
  Cart: [
    {
      img: "🛒",
      name: "Cart total",
      content: "Based on total of the cart",
      opacity: 0.6,
    },
    {
      img: "📊",
      name: "Cart quantity",
      content: "ased on total quantity items of the cart",
      opacity: 0.6,
    },
    {
      img: "📦",
      name: "Cart contains products",
      content: "Based on cart contains products",
      opacity: 0.6,
    },
    {
      img: "🗳️",
      name: "Cart contains collection",
      content: "Based on Cart contains collection",
      opacity: 0.6,
    },
    {
      img: "⚖️",
      name: "Cart weight",
      content: "Based on order weight",
      opacity: 0.6,
    },
  ],

  Customer: [
    {
      img: "🏷️",
      name: "Customer tag",
      content: "Based on Customer tag",
      opacity: 0.6,
    },
  ],
  Market: [
    {
      img: "💵",
      name: "Currency",
      content: "Based on customer Currency",
      opacity: 0.6,
    },
    {
      img: "🛍️",
      name: "Shopify market",
      content: "Based on Shopify Markets",
      opacity: 0.6,
    },
  ],
};

export default function Hide_dynamic_payment_buttons() {
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("Always");
  const [inputFieldValues, setInputFieldValues] = useState({
    paymentMethodType: "Pre-defined",
  });
  const [popoverActive, setPopoverActive] = useState(false);
  const [isShowError, setIsShowError] = useState(false);
  const [baseCunditionList, setBaseCunditionList] = useState(
    StaticBaseCunditionList
  );

  const navigate = useNavigate();

  const options = [
    { label: "Enabled", value: "Enabled" },
    { label: "Disabled", value: "Disabled" },
  ];

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const togglePopoverActive = useCallback(() => {
    setPopoverActive((popoverActive) => !popoverActive);
  }, []);

  const handleInputFieldChanged = useCallback(() => {
    setInputFieldValues((pre) => ({
      ...pre,
      [event.target.name]: event.target.value,
    }));
  }, []);

  useEffect(() => {
    setIsShowError(selected2 == "Select Position");
  }, [selected2]);

  return (
    <Page
      title="Cash on delivery fee"
      titleMetadata={<Badge tone="success">Enabled</Badge>}
      backAction={{ content: "", onAction: () => navigate(-1) }}
    >
      <BlockStack gap="500">
        <DescriptionList
          items={[
            {
              term: "Rule info",
              description: (
                <Card>
                  <BlockStack gap="200">
                    <Text variant="headingMd" as="h6">
                      Rule status
                    </Text>
                    <Select
                      label="Date range"
                      options={options}
                      name="Data_range"
                      onChange={handleInputFieldChanged}
                      value={inputFieldValues.Data_range}
                    />
                    <Box>
                      <Text variant="headingMd" as="h6">
                        Rule name
                      </Text>
                      <TextField
                        label="For internal use only, not visible to customers."
                        placeholder="Enter rule name"
                        autoComplete="off"
                        name="rule_name"
                        onChange={handleInputFieldChanged}
                        value={inputFieldValues.rule_name}
                      />
                    </Box>
                  </BlockStack>
                </Card>
              ),
            },
            {
              term: "Methods setup",
              description: (
                <Card>
                  <BlockStack gap="300">
                    <Box>
                      <BlockStack gap="100">
                        <Text variant="headingMd">
                          1. Set up COD shipping method
                        </Text>
                        <Text>
                          You need to set the shipping method to Cash on
                          Delivery (COD).
                        </Text>
                        <InlineStack blockAlign="center" gap="300">
                          <Button>Set up COD shipping</Button>
                          <Link url="#">How to set up?</Link>
                        </InlineStack>
                      </BlockStack>
                    </Box>
                    <Box>
                      <BlockStack gap="100">
                        <Text variant="headingMd">
                          2. Set up COD shipping method
                        </Text>
                        <Text>
                          Set up Cash on Delivery (COD) payment and add it to
                          Manual Payment Methods.
                        </Text>
                        <InlineStack gap="300" blockAlign="center">
                          <Button>Set up COD payment</Button>
                          <Link url="#">How to set up?</Link>
                        </InlineStack>
                      </BlockStack>
                    </Box>
                  </BlockStack>
                </Card>
              ),
            },
            {
              term: "Connections",
              description: (
                <Card>
                  <BlockStack gap="400">
                    <InlineStack>
                      <Text variant="headingMd">
                        1. Shipping method keyword
                      </Text>
                      <Box>
                        <Icon source={AlertCircleIcon} tone="base" />
                      </Box>
                    </InlineStack>

                    <InlineStack gap="300" wrap={false}>
                      <Box width="100%">
                        <TextField
                          error={
                            !inputFieldValues.store_name &&
                            "Keyword is required"
                          }
                          name="store_name"
                          placeholder="Enter shipping method keyword"
                          value={inputFieldValues.store_name}
                          onChange={handleInputFieldChanged}
                          autoComplete="off"
                        />
                      </Box>
                      <Box minWidth="17%">
                        <Button
                          disabled={!inputFieldValues.store_name}
                          size="large"
                        >
                          Add keyword
                        </Button>
                      </Box>
                    </InlineStack>
                    <Text tone="subdued">
                      Enter and add the shipping method name to be used for Cash
                      on Delivery.
                    </Text>

                    <Text>2. Connect with Payment method</Text>

                    <Select
                      options={[
                        {
                          value: "Pre-defined",
                          label: "Pre-defined",
                        },
                        { value: "Equals to", label: "Equals to" },
                      ]}
                      name="paymentMethodType"
                      onChange={handleInputFieldChanged}
                      value={inputFieldValues.paymentMethodType}
                    />
                    {inputFieldValues.paymentMethodType === "Pre-defined" ? (
                      <Select
                        options={[
                          {
                            value: "Select_an_option",
                            label: "Select an option",
                            disabled: true,
                          },
                          {
                            value: "Cash_on_Delivery_(COD)",
                            label: "Cash on Delivery (COD)",
                          },
                          { value: "Bank_Deposit", label: "Bank Deposit" },
                        ]}
                        name="PaymentMethodSelect"
                        onChange={handleInputFieldChanged}
                        value={inputFieldValues.PaymentMethodSelect}
                      />
                    ) : (
                      <TextField
                        onChange={handleInputFieldChanged}
                        value={inputFieldValues.PaymentMethodText}
                        name="PaymentMethodText"
                        placeholder="Example: COD, Cash on Delivery, etc."
                      />
                    )}
                  </BlockStack>
                </Card>
              ),
            },
          ]}
        />
      </BlockStack>
    </Page>
  );
}
