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
import Cundition_set_box from "./Cundition_set_box";
import Based_condition_option from "../Based_condition_option";

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
      isDisable: true,
      img: "📱",
      name: "Customer phone number",
      content: "Customer phone number",
    },

    {
      isDisable: true,
      img: "🏷️",
      name: "Customer tag",
      content: "Based on customer tag",
    },
    {
      isDisable: true,
      img: "🟰",
      name: "Customer total spent",
      content: "Based on total amount spent",
    },
    {
      isDisable: true,
      img: "💵",
      name: "Customer currency",
      content: "Based on customer currency",
    },
    {
      isDisable: true,
      img: "👨🏼‍💻",
      name: "Customer is logged in",
      content: "Based on loggin condition",
    },
  ],
  Cart: [
    {
      img: "🛒",
      isDisable: true,
      name: "Cart total",
      content: "Based on total of the cart",
    },
    {
      img: "📊",
      isDisable: true,
      name: "Cart quantity",
      content: "ased on total quantity items of the cart",
    },
    {
      img: "📦",
      isDisable: true,
      name: "Cart contains products",
      content: "Based on cart contains products",
    },
    {
      img: "🗳️",
      isDisable: true,
      name: "Cart contains collection",
      content: "Based on Cart contains collection",
    },
    {
      img: "⚖️",
      isDisable: true,
      name: "Cart weight",
      content: "Based on order weight",
    },
  ],
  Product: [
    {
      img: "    📦",
      name: "Product",
      content: "Based on specific products in cart",
    },
    {
      img: "📦",
      name: "Product quantity",
      content: "Based on specific product quantity added to the cart.",
    },
    {
      img: "🗳️",
      name: "Collection",
      content: "Based on the collection",
    },
    {
      img: "🗳️",
      name: "Product quantity of collection",
      content: "Based on the quantity of a collection's products in the cart.",
    },
    { img: "📦", name: "Product SKU", content: "Based on product SKU" },
    { img: "🔖", name: "Product tag", content: "Based on product tag" },
    { img: "👨‍💼", name: "Product vendor", content: "Based on product vendor" },
    {
      img: "🎉",
      name: "Product is gift card",
      content: "Validate if the product is gift card",
    },
  ],
  Market: [
    {
      img: "🛍️",
      name: "Shopify market",
      content: "Based on Shopify market",
      isDisable: true,
    },
  ],
  "Shipping Address": [
    {
      img: "📍",
      name: "Shipping address line 1",
      content: "Based on shipping address line 1",
    },
    {
      img: "📍",
      name: "Shipping address line 2",
      content: "Based on shipping address line 2",
    },
    { img: "🔠", name: "Name", content: "Based on name" },
    {
      img: "📱",
      name: "Delivery phone number",
      content: "Based on delivery phone number",
    },

    {
      img: "🏤",
      name: "PO Box address",
      content: "Validate if address is PO box",
    },
    {
      img: "🏢",
      name: "Delivery company",
      content: "Based on delivery company",
    },
    { img: "📫", name: "Zip code", content: "Based on customer zip code" },
    {
      img: "🧾",
      name: "VAT number",
      content: "Validate if company missing VAT number",
    },
    { img: "🌎", name: "Country", content: "Based on customer country" },
    {
      img: "🏡",
      name: "Missing house",
      content: "Validate if shipping address missing house number",
    },
    {
      img: "🌆",
      name: "Province code",
      content: "Based on customer province code",
    },
    { img: "🏙", name: "City", content: "Based on customer city" },
  ],
  "Date time": [
    { img: "🕒", name: "Hour", content: "Based on hour (store timezone)" },
    {
      img: "🗓️",
      name: "Weekday",
      content: "Based on weekday (store timezone)",
    },
    {
      img: "🗓️",
      name: "Hour and weekday",
      content: "Based on hour and weekday (store timezone)",
    },
  ],
};

const Cundition_set1 = {
  first_grid: {
    Customer: ["Customer email", "Customer tag"],
    Cart: ["Cart total", "Cart has subscription item", "Cart quantity"],
    product: [
      "Product",
      "Product quantity",
      "Collection",
      "Product quantity of collection",
      "Product SKU",
    ],
  },
  second_grid: {
    "Shipping Address": [
      "Shipping address line 1",
      "Shipping address line 2",
      "Delivery phone number",
      "PO Box address",
      "VAT number",
      "Country",
      "Missing house",
      "Province code",
      "City",
    ],
    "Date time": ["Hour", "Weekday", "Hour and weekday"],
  },
};

const Cundition_set2 = {
  first_grid: {
    Customer: [
      "Customer phone number",
      "Customer total spent",
      "Customer currency",
      "Customer is logged in",
    ],
    product: [
      "Product",
      "Product quantity",
      "Collection",
      "Product quantity of collection",
    ],
  },
  second_grid: {
    Cart: [
      "Cart subtotal",
      "Cart total",
      "Cart has discount",
      "Cart quantity",
      "Cart weight",
    ],

    "Shipping Address": [
      "Name",
      "PO Box address",
      "Delivery company",
      "Zip code",
      "VAT number",
      "Country",
      "Missing house",
    ],
  },
};

const Cundition_set3 = {
  first_grid: {
    Customer: ["Customer email"],
    Cart: [
      "Cart subtotal",
      "Cart total",
      "Cart has subscription item",
      "Cart quantity",
      "Cart weight",
    ],
    product: [
      "Product quantity",
      "Product SKU",
      "Product tag",
      "Product vendor",
      "Product is gift card",
    ],
    Market: ["Shopify market"],
  },
  second_grid: {
    "Shipping Address": [
      "Shipping address line 1",
      "Shipping address line 2",
      "Name",
      "Delivery phone number",
      "PO Box address",
      "Delivery company",
      "Zip code",
      "VAT number",
      "Country",
      "Missing house",
      "Province code",
      "City",
    ],
  },
};

const productNameList = [
  {
    value: "The Inventory Not Tracked Snowboard",
    label: "The Inventory Not Tracked Snowboard",
  },
  { value: "Gift Card", label: "Gift Card" },
  {
    value: "The Minimal Snowboard",
    label: "The Minimal Snowboard",
  },
  {
    value: "The Collection Snowboard: Hydrogen",
    label: "The Collection Snowboard: Hydrogen",
  },
  {
    value: "The Draft Snowboard",
    label: "The Draft Snowboard",
  },
  {
    value: "The Complete Snowboard",
    label: "The Complete Snowboard",
  },
  {
    value: "The Archived Snowboard",
    label: "The Archived Snowboard",
  },
  {
    value: "The Out of Stock Snowboard",
    label: "The Out of Stock Snowboard",
  },
  {
    value: "The Hidden Snowboard",
    label: "The Hidden Snowboard",
  },
  {
    value: "The Videographer Snowboard",
    label: "The Videographer Snowboard",
  },

  {
    value: "Selling Plans Ski Wax",
    label: "Selling Plans Ski Wax",
  },
  {
    value: "The Compare at Price Snowboard",
    label: "The Compare at Price Snowboard",
  },
  {
    value: "The Collection Snowboard: Oxygen",
    label: "The Collection Snowboard: Oxygen",
  },
  {
    value: "The Multi-location Snowboard",
    label: "The Multi-location Snowboard",
  },
  {
    value: "The Multi-managed Snowboard",
    label: "The Multi-managed Snowboard",
  },
  {
    value: "The 3p Fulfilled Snowboard",
    label: "The 3p Fulfilled Snowboard",
  },
  {
    value: "The Collection Snowboard: Liquid",
    label: "The Collection Snowboard: Liquid",
  },
];

export default function Create_checkout_rules() {
  const [selectedCundition, setSelectedCundition] = useState({
    value: Cundition_set1,
    setName: "Cundition_set1",
  });
  const [fieldValues, setFieldValues] = useState({
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
  const [triggerOptions, setTriggerOptions] = useState([
    { value: "Is", label: "Is" },
    { value: "Is not", label: "Is not" },
  ]);

  const [selectedBaseCundition, setSelectedBaseCundition] = useState({
    key: "Most used conditions",
    index: 1,
    name: "Cart total",
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
    setFieldValues((pre) => ({
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
              .includes(fieldValues.search);
          }),
        ];
      }
    );
    setBaseCunditionList(Object.fromEntries(arrayBaseCundtion));
  }, [fieldValues.search]);

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

  const handleSelectCunditonSet = (value, setName, key, index, name) => {
    setSelectedCundition({ value: value, setName: setName });
    setSelectedBaseCundition({
      key: key,
      index: index,
      name: name,
    });
  };

  useEffect(() => {
    const temp = Object.entries(baseCunditionList).map((currItem) => {
      const childTemp = currItem[1].map((currArray) => {
        if (
          selectedCundition.value.first_grid[currItem[0]]?.includes(
            currArray.name
          ) ||
          selectedCundition.value.second_grid[currItem[0]]?.includes(
            currArray.name
          )
        ) {
          return { ...currArray, isDisable: false };
        } else {
          return { ...currArray, isDisable: true };
        }
      });

      return [currItem[0], childTemp];
    });

    setBaseCunditionList(Object.fromEntries(temp));
  }, [selectedCundition]);

  useEffect(() => {
    switch (selectedBaseCundition.name) {
      case "Customer tag":
      case "Shopify market":
      case "Currency":
      case "Country":
      case "Product tag":
      case "Product":
      case "Shipping address line 1":
      case "Shipping address line 2":
      case "Product SKU":
      case "Missing house":
        setTriggerOptions([
          { value: "Is", label: "Is" },
          { value: "Is not", label: "Is not" },
        ]);
        break;

      case "Cart total":
      case "Cart quantity":
      case "Cart weight":
      case "Select trigger":
      case "Product price":
        setTriggerOptions([
          { value: "Select trigger", label: "Select trigger", disabled: true },
          { value: "Equals", label: "Equals" },
          { value: "Greater than", label: "Greater than" },
          { value: "Less than", label: "Less than" },
        ]);
        break;

      case "Cart contains products":
      case "Cart contains collection":
      case "Collection":
      case "Product vendor":
      case "Product is gift card":
        setTriggerOptions([
          { value: "Contains", label: "Contains" },
          { value: "Does not contains", label: "Does not contains" },
        ]);
        break;

      case "PO Box address":
      case "Delivery company":
      case "Zip code":
        setTriggerOptions([
          { value: "Select trigger", label: "Select trigger" },
          { value: "Contains", label: "Contains" },
          { value: "Not contains", label: "Not contains" },
          {
            value: "Count characters less than",
            label: "Count characters less than",
          },
          {
            value: "Count characters greater than",
            label: "Count characters greater than",
          },
          { value: "Is", label: "Is" },
          { value: "Is not", label: "Is not" },
        ]);

        break;

      case "VAT number":
        setTriggerOptions([
          { value: "Select trigger", label: "Select trigger" },
          { value: "Is", label: "Is" },
        ]);
        break;
      case "Hour":
        setTriggerOptions([
          { value: "Select trigger", label: "Select trigger" },
          { value: "Between", label: "Between" },
        ]);
        break;

      default:
        break;
    }
    // setTriggerOptions();
  }, [selectedBaseCundition]);

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
                      value={fieldValues.rule_name}
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
                          preferredPosition="mostSpace"
                          content={
                            <>
                              <Cundition_set_box
                                Cundition_set={Cundition_set1}
                              />
                            </>
                          }
                        >
                          <Box
                            background={
                              selectedCundition.setName == "Cundition_set1"
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
                                Cundition_set1,
                                "Cundition_set1",
                                "Most used conditions",
                                0,
                                "Cart total"
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
                          preferredPosition="mostSpace"
                          content={
                            <Cundition_set_box Cundition_set={Cundition_set2} />
                          }
                        >
                          <Box
                            background={
                              selectedCundition.setName == "Cundition_set2"
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
                                Cundition_set2,
                                "Cundition_set2",
                                "Customer",
                                0,
                                "Customer phone number"
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
                                  Condition set 2{" "}
                                </InlineStack>
                              </Text>
                              <Text>20/38 conditions</Text>
                            </BlockStack>
                          </Box>
                        </Tooltip>

                        <Tooltip
                          width="100%"
                          preferredPosition="mostSpace"
                          content={
                            <Cundition_set_box Cundition_set={Cundition_set3} />
                          }
                        >
                          <Box
                            background={
                              selectedCundition.setName == "Cundition_set3"
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
                                Cundition_set3,
                                "Cundition_set3",
                                "Most used conditions",
                                0,
                                "Customer phone number"
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
                                value={fieldValues.search}
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

                      <Box>
                        <Based_condition_option
                          selectedBaseCundition={selectedBaseCundition}
                          triggerOptions={triggerOptions}
                          handleSelectChange={handleSelectChange}
                          selected={selected}
                          productNameList={productNameList}
                        />
                      </Box>
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
