import {
  Autocomplete,
  Avatar,
  Badge,
  BlockStack,
  Box,
  Button,
  CalloutCard,
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
  AlertDiamondIcon,
  AlertTriangleIcon,
  CaretDownIcon,
  CaretUpIcon,
  CursorIcon,
  DesktopIcon,
  MobileIcon,
  PlusCircleIcon,
  SearchIcon,
  SelectIcon,
  StarFilledIcon,
} from "@shopify/polaris-icons";

import { useNavigate } from "react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Cundition_list from "./Cundition_list";

const StaticBaseCunditionList = {
  "Most used conditions": [
    {
      img: "✉️",
      name: "Customer email",
      content: "Based on customer email",
      isDisable: true,
    },
    {
      img: "🛒",
      name: "Cart total",
      content: "Base on total o the cart",
      isDisable: true,
    },
    {
      img: "📊",
      name: "Cart quantity",
      content: "Based on total quantity items of the cart",
      isDisable: true,
    },
  ],
  Customer: [
    {
      img: "📱",
      name: "Customer email",
      content: "Based on customer email",
      isDisable: true,
    },
    {
      img: "🏷️",
      name: "Customer tag",
      content: "Based on customer tag",
      isDisable: false,
    },
    {
      img: "🟰",
      name: "Customer total spent",
      content: "Based on total amount spent",
      isDisable: true,
    },
  ],
  Cart: [
    {
      img: "🏷️",
      name: "Customer email",
      content: "Based on customer email",
      isDisable: true,
    },
    {
      img: "🎁",
      name: "Customer email",
      content: "Based on customer email",
      isDisable: true,
    },
    {
      img: "🏷️",
      name: "Customer email",
      content: "Based on customer email",
      isDisable: true,
    },
  ],
  Product: [
    {
      img: "💳",
      name: "Customer email",
      content: "Based on customer email",
      isDisable: true,
    },
  ],
  Market: [
    {
      img: "💵",
      name: "Customer email",
      content: "Based on customer email",
      isDisable: true,
    },
  ],
  "Shipping Address": [
    {
      img: "👨‍💻",
      name: "Customer email",
      content: "Based on customer email",
      isDisable: true,
    },
    {
      img: "📍",
      name: "Customer email",
      content: "Based on customer email",
      isDisable: true,
    },
  ],
  "Date time": [
    {
      img: "🕐",
      name: "Hour",
      content: "Based on hour",
      isDisable: true,
    },
  ],
};

export default function Create_checkout_rules() {
  const [selectedCundition, setSelectedCundition] = useState(1);
  const [textFieldValues, setTextFieldValues] = useState({
    search: "",
    store_name: "",
  });
  const [selected, setSelected] = useState("");
  const [popoverActive, setPopoverActive] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const scrollRef = useRef(null);
  const [isStoreName, setIsStoreName] = useState(false);

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
    if (event.target.name == "store_name") {
      setIsStoreName(event.target.value == "" && true);
    }
    setTextFieldValues((pre) => ({
      ...pre,
      [event.target.name]: event.target.value,
    }));
  }, []);

  useEffect(() => {
    if (popoverActive && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedBaseCundition, popoverActive]);

  useEffect(() => {
    const arrayBaseCundtion = Object.entries(StaticBaseCunditionList).map(
      (currArray) => {
        return [
          currArray[0],
          currArray[1].filter((currItem) => {
            return currItem.name
              .toLocaleLowerCase()
              .includes(textFieldValues.search);
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

  const handleSelectCunditonSet = (value, name, index) => {
    setSelectedCundition(value);
    setSelectedBaseCundition({
      key: name,
      index: index,
    });
  };

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
                  <BlockStack gap="100">
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
                  </BlockStack>
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
                            onClick={() =>
                              handleSelectCunditonSet(
                                1,
                                "Most used conditions",
                                0
                              )
                            }
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
                            onClick={() =>
                              handleSelectCunditonSet(2, "Customer", 0)
                            }
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
                            onClick={() =>
                              handleSelectCunditonSet(
                                3,
                                "Most used conditions",
                                0
                              )
                            }
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
                                      scrollRef={scrollRef}
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
                          <InlineStack wrap={false} blockAlign="end">
                            <Box width="100%">
                              <TextField
                                label="Store name"
                                name="store_name"
                                placeholder="Enter email address"
                                value={textFieldValues.store_name}
                                onChange={handleTextFieldChanged}
                                onBlur={() =>
                                  setIsStoreName(
                                    textFieldValues.store_name == "" && true
                                  )
                                }
                                autoComplete="off"
                                requiredIndicator
                                error={isStoreName && "Store name is required"}
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
                    <InlineStack align="center" gap="200" blockAlign="center">
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
                  <BlockStack gap="400">
                    <InlineStack gap="300">
                      <Text variant="headingMd">Error message *</Text>
                      <Badge tone="info">Upgrade to edit</Badge>
                    </InlineStack>

                    <TextField
                      disabled
                      helpText="Enter an error message to notify the customer about the field you are validating."
                      name="Error_message"
                      value="Order cannot be placed due to suspected fraud."
                      maxLength={255}
                      autoComplete="off"
                      showCharacterCount
                    />

                    <AutocompleteExample />

                    <Text variant="headingMd">Preview</Text>

                    {isMobileView ? (
                      <Box
                        background="bg-fill"
                        borderRadius="300"
                        borderColor="border"
                        borderWidth="0165"
                        minHeight="100%"
                        paddingBlock="400"
                      >
                        <BlockStack align="center" inlineAlign="center">
                          <Box width="70%">
                            <BlockStack gap="300">
                              <Box
                                background="bg-fill-active"
                                padding="300"
                                borderRadius="400"
                                borderEndEndRadius="0"
                                borderEndStartRadius="0"
                              >
                                <BlockStack gap="200">
                                  <Text tone="magic-subdued">
                                    Order summary
                                  </Text>
                                  <Box width="100%" paddingBlockStart="300">
                                    <InlineStack
                                      align="space-between"
                                      blockAlign="center"
                                    >
                                      <InlineStack>
                                        <Box>
                                          <Box position="relative">
                                            <Box
                                              background="bg-surface-tertiary"
                                              borderRadius="200"
                                            >
                                              <img
                                                style={{
                                                  mixBlendMode: "multiply",
                                                }}
                                                height="100"
                                                width="100"
                                                src="https://www.americancountryhomestore.com/media/products/979a94fc-3b84-49b9-b48f-f0ff51dd3686.jpg?dimensions=500x500&format=webp"
                                                alt=""
                                              />
                                            </Box>
                                            <Box
                                              position="absolute"
                                              insetBlockStart="0"
                                              insetInlineEnd="0"
                                            >
                                              <Badge>2</Badge>
                                            </Box>
                                          </Box>
                                        </Box>
                                        <Text>The vase</Text>
                                      </InlineStack>
                                      <Text>$15.99</Text>
                                    </InlineStack>
                                  </Box>

                                  <InlineStack gap="500" wrap={false}>
                                    <Box
                                      shadow="200"
                                      minHeight="30px"
                                      width="100%"
                                      background="bg-fill"
                                      borderRadius="150"
                                    ></Box>
                                    <Box minWidth="58px ">
                                      <Button disabled>Apply</Button>
                                    </Box>
                                  </InlineStack>

                                  <InlineStack align="space-between">
                                    <Text>Shipping</Text>
                                    <Text>Free</Text>
                                  </InlineStack>

                                  <InlineStack align="space-between">
                                    <Text variant="headingMd">Total</Text>
                                    <Text variant="headingMd">$15.99</Text>
                                  </InlineStack>
                                </BlockStack>
                              </Box>

                              <Box
                                background="bg-fill-tertiary"
                                borderRadius="150"
                                padding="200"
                                color="text-critical-secondary"
                              >
                                <InlineStack>
                                  <Box>
                                    <Icon
                                      source={AlertDiamondIcon}
                                      tone="inherit"
                                    />
                                  </Box>
                                  <Text>
                                    Order cannot be placed due to suspected
                                    fraud.
                                  </Text>
                                </InlineStack>
                              </Box>
                              <Box paddingBlockStart="300">
                                <InlineStack align="space-between">
                                  <Text variant="headingMd">Contact</Text>
                                  <Text tone="magic">Login</Text>
                                </InlineStack>
                              </Box>
                            </BlockStack>
                          </Box>
                        </BlockStack>
                      </Box>
                    ) : (
                      <Box
                        background="bg-fill"
                        borderRadius="300"
                        borderColor="border"
                        borderWidth="0165"
                        minHeight="100%"
                      >
                        <InlineStack>
                          <Box width="70%" padding="300">
                            <BlockStack gap="400">
                              <Box
                                background="bg-fill-tertiary"
                                borderRadius="150"
                                padding="200"
                                color="text-critical-secondary"
                              >
                                <InlineStack>
                                  <Box>
                                    <Icon
                                      source={AlertDiamondIcon}
                                      tone="inherit"
                                    />
                                  </Box>
                                  <Text>
                                    Order cannot be placed due to suspected
                                    fraud.
                                  </Text>
                                </InlineStack>
                              </Box>

                              <InlineStack align="space-between">
                                <Text variant="headingMd">Contact</Text>
                                <Text tone="magic">Login</Text>
                              </InlineStack>

                              <TextField
                                disabled
                                value="Email or mobile phone number"
                                autoComplete="off"
                              />
                            </BlockStack>
                          </Box>
                          <Box
                            padding="300"
                            background="bg-fill-active"
                            width="30%"
                          >
                            <Box width="fit-content">
                              <InlineStack blockAlign="center">
                                <Box position="relative">
                                  <Box
                                    background="bg-surface-tertiary"
                                    borderRadius="200"
                                  >
                                    <img
                                      style={{ mixBlendMode: "multiply" }}
                                      height="100"
                                      width="100"
                                      src="https://www.americancountryhomestore.com/media/products/979a94fc-3b84-49b9-b48f-f0ff51dd3686.jpg?dimensions=500x500&format=webp"
                                      alt=""
                                    />
                                  </Box>
                                  <Box
                                    position="absolute"
                                    insetBlockStart="0"
                                    insetInlineEnd="0"
                                  >
                                    <Badge>2</Badge>
                                  </Box>
                                </Box>
                                <Text>The vase</Text>
                              </InlineStack>
                            </Box>

                            <InlineStack wrap={false} gap="200">
                              <Box
                                shadow="200"
                                width="70%"
                                minHeight="30px"
                                background="bg-fill"
                                borderRadius="150"
                              ></Box>
                              <Box minWidth="58px ">
                                <Button disabled>Apply</Button>
                              </Box>
                            </InlineStack>
                          </Box>
                        </InlineStack>
                      </Box>
                    )}

                    <InlineStack align="center" gap="300">
                      <Button
                        pressed={isMobileView}
                        onClick={() => setIsMobileView((pre) => !pre)}
                      >
                        {" "}
                        <Icon source={MobileIcon} tone="base" />
                      </Button>
                      <Button
                        pressed={!isMobileView}
                        onClick={() => setIsMobileView((pre) => !pre)}
                      >
                        {" "}
                        <Icon source={DesktopIcon} tone="base" />
                      </Button>
                    </InlineStack>
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

function AutocompleteExample() {
  const deselectedOptions = useMemo(
    () => [
      {
        title: "",
        options: [
          {
            value: "Top of the checkout page",
            label: "Top of the checkout page",
          },
        ],
      },
      {
        title: "Under field",
        options: [
          { value: "Contact", label: "Contact" },
          { value: "Address line 1", label: "Address (line 1)" },
          {
            value: "Address apartment, suite, etc",
            label: "Address (apartment, suite, etc)",
          },
          { value: "City", label: "City" },
          { value: "Company", label: "Company" },
          { value: "Country Code", label: "Country Code" },
          { value: "First name", label: "First name" },
          { value: "Last name", label: "Last name" },
          { value: "Phone Address", label: "Phone Address" },
          { value: "Province/ State", label: "Province/ State" },
        ],
      },
    ],
    []
  );
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(deselectedOptions);

  const updateText = useCallback(
    (value) => {
      setInputValue(value);

      if (value === "") {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(value, "i");
      const resultOptions = [];

      deselectedOptions.forEach((opt) => {
        const options = opt.options.filter((option) =>
          option.label.match(filterRegex)
        );

        resultOptions.push({
          title: opt.title,
          options,
        });
      });

      setOptions(resultOptions);
    },
    [deselectedOptions]
  );

  const updateSelection = useCallback(
    (selected) => {
      let selectedValue;

      options.forEach(({ options }) => {
        if (selectedValue) {
          return;
        }

        const matchedOption = options.find((option) =>
          option.value.match(selected[0])
        );

        if (matchedOption) {
          selectedValue = matchedOption.label;
        }
      });

      setSelectedOptions(selected);
      setInputValue(selectedValue ? selectedValue : "");
    },
    [options]
  );

  const textField = (
    <Autocomplete.TextField
      helpText="Message will be displayed on this position."
      onChange={updateText}
      label="Tags"
      value={inputValue}
      prefix={<Icon source={SearchIcon} tone="base" />}
      placeholder="Search"
      autoComplete="off"
    />
  );

  return (
    <Autocomplete
      textField={textField}
      selected={selectedOptions}
      options={options}
      onSelect={updateSelection}
    />
  );
}
