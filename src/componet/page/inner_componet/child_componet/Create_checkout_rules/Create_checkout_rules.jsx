import {
  Avatar,
  Badge,
  BlockStack,
  Box,
  Button,
  Card,
  DescriptionList,
  FormLayout,
  Grid,
  Icon,
  InlineGrid,
  InlineStack,
  LegacyCard,
  Page,
  Popover,
  ResourceList,
  Scrollable,
  Select,
  Text,
  TextField,
  Tooltip,
} from "@shopify/polaris";

import {
  CaretDownIcon,
  CaretUpIcon,
  CursorIcon,
  SearchIcon,
  SelectIcon,
  StarFilledIcon,
} from "@shopify/polaris-icons";

import { useNavigate } from "react-router";
import { useCallback, useEffect, useState } from "react";
import Cundition_list from "./Cundition_list";

const StaticBaseCunditionList = {
  "Most used conditions": [
    {
      img: "✉️",
      name: "Customer email",
      content: "Based on customer email",
      opacity: 0.6,
    },
    {
      img: "🛒",
      name: "Cart total",
      content: "Base on total o the cart",
      opacity: 0.6,
    },
    {
      img: "📊",
      name: "Cart quantity",
      content: "Based on total quantity items of the cart",
      opacity: 0.6,
    },
  ],
  Customer: [
    {
      img: "📱",
      name: "Customer email",
      content: "Based on customer email",
      opacity: 0.6,
    },
    {
      img: "🏷️",
      name: "Customer tag",
      content: "Based on customer tag",
      opacity: 0.6,
    },
    {
      img: "🟰",
      name: "Customer total spent",
      content: "Based on total amount spent",
      opacity: 0.6,
    },
  ],
  Cart: [
    {
      img: "🏷️",
      name: "Customer email",
      content: "Based on customer email",
      opacity: 0.6,
    },
    {
      img: "🎁",
      name: "Customer email",
      content: "Based on customer email",
      opacity: 0.6,
    },
    {
      img: "🏷️",
      name: "Customer email",
      content: "Based on customer email",
      opacity: 0.6,
    },
  ],
  Product: [
    {
      img: "💳",
      name: "Customer email",
      content: "Based on customer email",
      opacity: 0.6,
    },
  ],
  Market: [
    {
      img: "💵",
      name: "Customer email",
      content: "Based on customer email",
      opacity: 0.6,
    },
  ],
  "Shipping Address": [
    {
      img: "👨‍💻",
      name: "Customer email",
      content: "Based on customer email",
      opacity: 0.6,
    },
    {
      img: "📍",
      name: "Customer email",
      content: "Based on customer email",
      opacity: 0.6,
    },
  ],
  "Date time": [
    {
      img: "🕐",
      name: "Hour",
      content: "Based on hour",
      opacity: 0.6,
    },
  ],
};

export default function Create_checkout_rules() {
  const [selectedCundition, setSelectedCundition] = useState(1);
  const [textFieldValues, setTextFieldValues] = useState({});
  const [selected, setSelected] = useState("");
  const [popoverActive, setPopoverActive] = useState(false);

  const [baseCunditionList, setBaseCunditionList] = useState(
    StaticBaseCunditionList
  );
  const [selectedBaseCundition, setSelectedBaseCundition] = useState({
    key: "Most used conditions",
    index: 1,
  });

  const navigate = useNavigate();

  const options = [
    { label: "Enabled", value: "Enabled" },
    { label: "Disabled", value: "Disabled" },
  ];

  const togglePopoverActive = useCallback(() => {
    setPopoverActive((popoverActive) => !popoverActive);
  }, []);

  const handleTextFieldChanged = useCallback(() => {
    setTextFieldValues((pre) => ({
      ...pre,
      [event.target.name]: event.target.value,
    }));
  }, []);

  useEffect(() => {
    const arrayBaseCundtion = Object.entries(StaticBaseCunditionList).map(
      (currArray) => {
        return [
          currArray[0],
          currArray[1].filter((currItem) => {
            return currItem.name.toLocaleLowerCase().includes(textFieldValues);
          }),
        ];
      }
    );

    setBaseCunditionList(Object.fromEntries(arrayBaseCundtion));
  }, [textFieldValues]);

  const activator = (
    <Box
      background={popoverActive ? "bg-fill-active" : "bg-fill"}
      padding="300"
      borderRadius="200"
      borderColor="border"
      borderWidth="0165"
      minHeight="100%"
      onClick={togglePopoverActive}
    >
      <InlineStack align="space-between" blockAlign="center">
        <Box>
          <InlineStack gap="500">
            <Text variant="headingXl" as="h4">
              {
                StaticBaseCunditionList[selectedBaseCundition.key][
                  selectedBaseCundition.index
                ].img
              }
            </Text>
            <Box>
              <Text fontWeight="bold">
                {" "}
                {
                  StaticBaseCunditionList[selectedBaseCundition.key][
                    selectedBaseCundition.index
                  ].name
                }
              </Text>
              <Text tone="subdued">
                {" "}
                {
                  StaticBaseCunditionList[selectedBaseCundition.key][
                    selectedBaseCundition.index
                  ].content
                }
              </Text>
            </Box>
          </InlineStack>
        </Box>
        <Box>
          <Icon source={SelectIcon} tone="base" />
        </Box>
      </InlineStack>
    </Box>
  );

  const handleSelectChange = useCallback((value) => setSelected(value), []);
  return (
    <Page
      title="Checkout validation rule"
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
                  <Text variant="headingMd" as="h6">
                    Rule status
                  </Text>
                  <Select
                    label="Date range"
                    options={options}
                    onChange={handleSelectChange}
                    value={selected}
                  />
                  <Text variant="headingMd" as="h6">
                    Rule name
                  </Text>
                  <TextField
                    value={textFieldValues.rule_name}
                    name="rule_name"
                    onChange={handleTextFieldChanged}
                    label="For internal use only, not visible to customers."
                    placeholder="Enter rule name"
                    autoComplete="off"
                  />
                </Card>
              ),
            },
            {
              term: "Rule configuration",
              description: (
                <BlockStack gap="300">
                  <Card>
                    <BlockStack gap="300">
                      <Grid columns={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 3 }}>
                        <Tooltip
                          width="100%"
                          padding="400"
                          preferredPosition="mostSpace"
                          content={
                            <InlineGrid columns={2} gap="800">
                              <Box width="100%">
                                <Text variant="headingMd" as="h6">
                                  Customer
                                </Text>
                                <Box paddingInlineStart="300">
                                  <Text>Customer email</Text>
                                  <Text>Customer tag</Text>
                                </Box>

                                <Box>
                                  <Text variant="headingMd" as="h6">
                                    Cart
                                  </Text>
                                  <Box paddingInlineStart="300">
                                    <Text>Cart total </Text>
                                    <Text>Cart has subscription item </Text>
                                    <Text>Cart quantity </Text>
                                  </Box>
                                </Box>

                                <Text variant="headingMd" as="h6">
                                  Product
                                </Text>
                                <Box paddingInlineStart="300">
                                  <Text> Product</Text>
                                  <Text>Product quantity</Text>
                                  <Text>Collection</Text>
                                  <Text>Product quantity of collection</Text>
                                  <Text>Product SKU</Text>
                                </Box>
                              </Box>

                              <Box width="100%">
                                <Text variant="headingMd" as="h6">
                                  Shipping Address
                                </Text>
                                <Box paddingInlineStart="300">
                                  <Text> Shipping address line 1</Text>
                                  <Text>Shipping address line 2</Text>
                                  <Text>Delivery phone number</Text>
                                  <Text>PO Box address</Text>
                                  <Text>VAT number</Text>
                                  <Text>Country</Text>
                                  <Text>Missing house</Text>
                                  <Text>Province code</Text>
                                  <Text>City</Text>
                                </Box>

                                <Text variant="headingMd" as="h6">
                                  Date time
                                </Text>
                                <Box paddingInlineStart="300">
                                  <Text> Hour</Text>
                                  <Text>Weekday</Text>
                                  <Text>Hour and weekday</Text>
                                </Box>
                              </Box>
                            </InlineGrid>
                          }
                        >
                          <Box
                            background={
                              selectedCundition == 1
                                ? "bg-fill-active"
                                : "bg-fill"
                            }
                            padding="300"
                            borderRadius="300"
                            borderColor="border-brand"
                            borderWidth="0165"
                            minHeight="100%"
                            onClick={() => setSelectedCundition(1)}
                          >
                            <BlockStack align="center" inlineAlign="center">
                              <Text variant="headingMd" as="h6">
                                {" "}
                                <InlineStack>
                                  <Box>
                                    <Icon source={CursorIcon} tone="base" />
                                  </Box>
                                  Condition set 1{" "}
                                </InlineStack>
                              </Text>
                              <Text>22/38 conditions</Text>
                            </BlockStack>
                          </Box>
                        </Tooltip>

                        <Tooltip
                          width="100%"
                          padding="400"
                          preferredPosition="mostSpace"
                          content={
                            <InlineGrid columns={2} gap="800">
                              <Box width="100%">
                                <Text variant="headingMd" as="h6">
                                  Customer
                                </Text>
                                <Box paddingInlineStart="300">
                                  <Text> Customer phone number</Text>
                                  <Text>Customer total spent</Text>
                                  <Text>Customer currency</Text>
                                  <Text>Customer is logged in</Text>
                                </Box>

                                <Text variant="headingMd" as="h6">
                                  Product
                                </Text>
                                <Box paddingInlineStart="300">
                                  <Text> Product</Text>
                                  <Text>Product quantity</Text>
                                  <Text>Collection</Text>
                                  <Text>Product quantity of collection</Text>
                                </Box>
                              </Box>

                              <Box width="100%">
                                <Text variant="headingMd" as="h6">
                                  Cart
                                </Text>
                                <Box paddingInlineStart="300">
                                  <Text> Cart subtotal</Text>
                                  <Text>Cart total</Text>
                                  <Text>Cart has discount</Text>
                                  <Text>Cart quantity</Text>
                                  <Text>Cart weight</Text>
                                </Box>

                                <Text variant="headingMd" as="h6">
                                  Shipping Address
                                </Text>
                                <Box paddingInlineStart="300">
                                  <Text> Name</Text>
                                  <Text>PO Box address</Text>
                                  <Text>Delivery company</Text>
                                  <Text>Zip code</Text>
                                  <Text>VAT number</Text>
                                  <Text>Country</Text>
                                  <Text>Missing house</Text>
                                </Box>
                              </Box>
                            </InlineGrid>
                          }
                        >
                          <Box
                            background={
                              selectedCundition == 2
                                ? "bg-fill-active"
                                : "bg-fill"
                            }
                            padding="300"
                            borderRadius="300"
                            borderColor="border-brand"
                            borderWidth="0165"
                            minHeight="100%"
                            onClick={() => setSelectedCundition(2)}
                          >
                            <BlockStack align="center" inlineAlign="center">
                              <Text variant="headingMd" as="h6">
                                {" "}
                                <InlineStack>
                                  <Box>
                                    <Icon source={CursorIcon} tone="base" />
                                  </Box>
                                  Condition set 2{" "}
                                </InlineStack>
                              </Text>
                              <Text>20/38 conditions</Text>
                            </BlockStack>
                          </Box>
                        </Tooltip>

                        <Tooltip
                          width="100%"
                          padding="400"
                          preferredPosition="mostSpace"
                          content={
                            <InlineGrid columns={2} gap="800">
                              <Box width="100%">
                                <Text variant="headingMd" as="h6">
                                  Customer
                                </Text>
                                <Box paddingInlineStart="300">
                                  <Text>Customer email</Text>
                                </Box>

                                <Box>
                                  <Text variant="headingMd" as="h6">
                                    Product
                                  </Text>
                                  <Box paddingInlineStart="300">
                                    <Text> Product quantity</Text>
                                    <Text>Product SKU</Text>
                                    <Text>Product tag</Text>
                                    <Text>Product vendor</Text>
                                    <Text>Product is gift card</Text>
                                  </Box>
                                </Box>

                                <Text variant="headingMd" as="h6">
                                  Cart
                                </Text>
                                <Box paddingInlineStart="300">
                                  <Text> Cart subtotal</Text>
                                  <Text>Cart total</Text>
                                  <Text>Cart has subscription item</Text>
                                  <Text>Cart quantity</Text>
                                  <Text>Cart weight</Text>
                                </Box>

                                <Text variant="headingMd" as="h6">
                                  Market
                                </Text>
                                <Box paddingInlineStart="300">
                                  <Text> Shopify market</Text>
                                </Box>
                              </Box>

                              <Box width="100%">
                                <Text variant="headingMd" as="h6">
                                  Shipping Address
                                </Text>
                                <Box paddingInlineStart="300">
                                  <Text> Shipping address line 1</Text>
                                  <Text>Shipping address line 2</Text>
                                  <Text>Delivery phone number</Text>
                                  <Text>PO Box address</Text>
                                  <Text>VAT number</Text>
                                  <Text>Country</Text>
                                  <Text>Missing house</Text>
                                  <Text>Province code</Text>
                                  <Text>City</Text>
                                </Box>

                                <Text variant="headingMd" as="h6">
                                  Date time
                                </Text>
                                <Box paddingInlineStart="300">
                                  <Text> Hour</Text>
                                  <Text>Weekday</Text>
                                  <Text>Hour and weekday</Text>
                                </Box>
                              </Box>
                            </InlineGrid>
                          }
                        >
                          <Box
                            background={
                              selectedCundition == 3
                                ? "bg-fill-active"
                                : "bg-fill"
                            }
                            padding="300"
                            borderRadius="300"
                            borderColor="border-brand"
                            borderWidth="0165"
                            minHeight="100%"
                            onClick={() => setSelectedCundition(3)}
                          >
                            {" "}
                            <BlockStack align="center" inlineAlign="center">
                              <Text variant="headingMd" as="h6">
                                {" "}
                                <InlineStack>
                                  <Box>
                                    <Icon source={CursorIcon} tone="base" />
                                  </Box>
                                  Condition set 3{" "}
                                </InlineStack>
                              </Text>
                              <Text>24/38 conditions</Text>
                            </BlockStack>
                          </Box>
                        </Tooltip>
                      </Grid>

                      <Text variant="headingMd" as="h6">
                        Based on condition *
                      </Text>

                      <Popover
                        active={popoverActive}
                        activator={activator}
                        onClose={togglePopoverActive}
                        ariaHaspopup={false}
                        sectioned
                        fullWidth
                      >
                        <Popover.Pane>
                          <Box paddingInline="025">
                            <Box>
                              <TextField
                                prefix={
                                  <Icon source={SearchIcon} tone="base" />
                                }
                                autoComplete="off"
                                placeholder="Search"
                                clearButton
                                name="search"
                                value={textFieldValues.search}
                                onChange={handleTextFieldChanged}
                                onClearButtonClick={() => {}}
                              />
                            </Box>

                            <Cundition_list
                              key={0}
                              togglePopoverActive={togglePopoverActive}
                              currKey="Most used conditions"
                              baseCunditionList={baseCunditionList}
                              selectedBaseCundition={selectedBaseCundition}
                              setSelectedBaseCundition={
                                setSelectedBaseCundition
                              }
                            />
                            <Scrollable style={{ height: "200px" }} focusable>
                              {Object.keys(baseCunditionList).map(
                                (currKey, index) => {
                                  if (index == 0) {
                                    return;
                                  }
                                  return (
                                    <Cundition_list
                                      key={index}
                                      togglePopoverActive={togglePopoverActive}
                                      currKey={currKey}
                                      baseCunditionList={baseCunditionList}
                                      selectedBaseCundition={
                                        selectedBaseCundition
                                      }
                                      setSelectedBaseCundition={
                                        setSelectedBaseCundition
                                      }
                                    />
                                  );
                                }
                              )}
                            </Scrollable>
                          </Box>
                        </Popover.Pane>
                      </Popover>

                      <InlineStack blockAlign="start">
                        <Box width="30%" paddingInlineEnd="300">
                          <Select
                            requiredIndicator
                            label="Date range"
                            options={[
                              { label: "Is", value: "Is" },
                              {
                                label: "Select trigger",
                                value: "Select trigger",
                                disabled: true,
                              },
                              { label: "Contains", value: "Contains" },
                              { label: "Not contains", value: "Not contains" },
                              { label: "Is not", value: "Is not" },
                              { label: "Regex (Beta)", value: "Regex (Beta)" },
                            ]}
                            onChange={handleSelectChange}
                            value={selected}
                          />
                        </Box>

                        <Box width="70%">
                          <InlineStack wrap={false} blockAlign="center">
                            <Box width="100%">
                              <TextField
                                label="Store name"
                                name="store_name"
                                placeholder="Enter email address"
                                value={textFieldValues.store_name}
                                onChange={handleTextFieldChanged}
                                autoComplete="off"
                                requiredIndicator
                                error={
                                  !textFieldValues.store_name &&
                                  "Store name is required"
                                }
                              />
                            </Box>
                            <Box minWidth="70px" paddingInlineStart="300">
                              <Button disabled variant="primary">
                                Add
                              </Button>
                            </Box>
                          </InlineStack>
                        </Box>
                      </InlineStack>
                    </BlockStack>
                  </Card>

                  <Card>
                    <InlineStack align="center" blockAlign="center">
                      <Button disabled>+ Add condition</Button>

                      <Badge tone="info">
                        {" "}
                        <InlineStack>
                          <Icon source={StarFilledIcon} tone="base" /> Premium
                        </InlineStack>
                      </Badge>
                    </InlineStack>
                  </Card>
                </BlockStack>
              ),
            },
            {
              term: "Rule actions",
              description: (
                <Card>
                  <Text>Based on condition *</Text>
                </Card>
              ),
            },
          ]}
        />
      </BlockStack>
    </Page>
  );
}
