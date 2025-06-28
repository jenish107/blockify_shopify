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
  EmptySearchResult,
  Icon,
  InlineStack,
  LegacyCard,
  LegacyStack,
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

import { SearchIcon, SelectIcon } from "@shopify/polaris-icons";

import { useNavigate } from "react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import Cundition_list from "./child_componet/Create_checkout_rules/Cundition_list";
import currency from "../../../Api/currencies.json";
import Based_condition_option from "./child_componet/Based_condition_option";

const CommanBaseCunditionList = {
  Always: [
    {
      img: "🎯",
      isDisable: true,
      name: "Always",
      content: "Always hide the dynamic button when the rule is enabled",
    },
  ],

  Customer: [
    {
      img: "🏷️",
      isDisable: true,
      name: "Customer tag",
      content: "Based on Customer tag",
    },
  ],
  Market: [
    {
      img: "💵",
      isDisable: true,
      name: "Currency",
      content: "Based on customer Currency",
    },
    {
      img: "🛍️",
      isDisable: true,
      name: "Shopify market",
      content: "Based on Shopify Markets",
    },
  ],
};

const StaticCartList = {
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
};

const StaticProductList = {
  Product: [
    {
      img: " 📦",
      isDisable: true,
      name: "Product",
      content: "Based on selected product",
    },
    {
      img: "📦",
      isDisable: true,
      name: "Product price",
      content: "Based on the price of product",
    },
    {
      img: "🔖",
      isDisable: true,
      name: "Product tag",
      content: "Based on product tag",
    },
    {
      img: "📦",
      isDisable: true,
      name: "Product SKU",
      content: "Based on product SKU",
    },
    {
      img: "🗳️",
      isDisable: true,
      name: "Collection",
      content: "Based on the collection",
    },
    {
      img: "📦",
      isDisable: true,
      name: "Product quantity",
      content: "Based on specific product quantity added to the cart.",
    },
  ],
};

const FullBaseCunditionList = {
  ...CommanBaseCunditionList,
  ...StaticCartList,
  ...StaticProductList,
};

export default function Hide_dynamic_payment_buttons() {
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("Select Position");
  const [fieldValues, setFieldValues] = useState({
    search: "",
  });
  const [popoverActive, setPopoverActive] = useState(false);
  const [isShowError, setIsShowError] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [baseCunditionList, setBaseCunditionList] = useState(
    CommanBaseCunditionList
  );

  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const [triggerOptions, setTriggerOptions] = useState([
    { value: "Is", label: "Is" },
    { value: "Is not", label: "Is not" },
  ]);

  const [selectedBaseCundition, setSelectedBaseCundition] = useState({
    key: "Always",
    index: 0,
    name: "Always",
  });

  const options = [
    { label: "Enabled", value: "Enabled" },
    { label: "Disabled", value: "Disabled" },
  ];
  const options2 = [
    { label: "Select Position", value: "Select Position", disabled: "true" },
    { label: "Product page", value: "Product" },
    { label: "Cart page", value: "Cart" },
  ];

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

  const handleSelectChange = useCallback((value) => setSelected(value), []);
  const handleSelect2Change = useCallback((value) => {
    setSelected2(value);
    setSelectedBaseCundition({
      key: "Always",
      index: 0,
      name: "Always",
    });
    setIsShowError(selected2 == value);
  }, []);

  const togglePopoverActive = useCallback(() => {
    setPopoverActive((popoverActive) => !popoverActive);
  }, []);

  useEffect(() => {
    if (popoverActive && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedBaseCundition, popoverActive]);

  const handleFieldChanged = useCallback(() => {
    setFieldValues((pre) => ({
      ...pre,
      [event.target.name]: event.target.value,
    }));
  }, []);

  useEffect(() => {
    if (selected2 == "Cart") {
      setBaseCunditionList({ ...CommanBaseCunditionList, ...StaticCartList });
    }
    if (selected2 == "Product") {
      setBaseCunditionList({
        ...CommanBaseCunditionList,
        ...StaticProductList,
      });
    }
  }, [selected2]);

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
                FullBaseCunditionList[selectedBaseCundition.key][
                  selectedBaseCundition?.index
                ]?.img
              }
            </Text>
            <Box>
              <Text fontWeight="bold">
                {
                  FullBaseCunditionList[selectedBaseCundition.key][
                    selectedBaseCundition?.index
                  ]?.name
                }
              </Text>
              <Text tone="subdued">
                {
                  FullBaseCunditionList[selectedBaseCundition.key][
                    selectedBaseCundition?.index
                  ]?.content
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

  const escapeSpecialRegExCharacters = useCallback(
    (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    []
  );

  const updateText = useCallback(
    (value) => {
      setInputValue(value);
    },
    [escapeSpecialRegExCharacters]
  );

  const updateSelection = useCallback(
    (selected) => {
      if (!selectedOptions.includes(selected)) {
        setSelectedOptions([...selectedOptions, selected]);
      }
      updateText("");
    },
    [selectedOptions, updateText]
  );

  const removeTag = useCallback(
    (tag) => () => {
      const options = [...selectedOptions];
      options.splice(options.indexOf(tag), 1);
      setSelectedOptions(options);
    },
    [selectedOptions]
  );

  const tagsMarkup = selectedOptions.map((option) => (
    <Tag key={`option-${option}`} onRemove={removeTag(option)}>
      {option}
    </Tag>
  ));

  useEffect(() => {
    switch (selectedBaseCundition.name) {
      case "Customer tag":
      case "Shopify market":
      case "Currency":
      case "Product tag":
      case "Product":
      case "Product SKU":
        setTriggerOptions([
          { value: "Is", label: "Is" },
          { value: "Is not", label: "Is not" },
        ]);
        break;

      case "Cart total":
      case "Cart quantity":
      case "Cart weight":
      case "Product price":
        setTriggerOptions([
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

      default:
        break;
    }
    // setTriggerOptions();
  }, [selectedBaseCundition]);

  useEffect(() => {
    const arrayBaseCundtion = Object.entries(CommanBaseCunditionList).map(
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

  const optionsMarkup =
    productNameList.length > 0
      ? productNameList.map((option) => {
          const { label, value } = option;

          return (
            <Listbox.Option
              key={`${value}`}
              value={value}
              selected={selectedOptions.includes(value)}
              accessibilityLabel={label}
            >
              {label}
            </Listbox.Option>
          );
        })
      : null;

  return (
    <Page
      title="Hide dynamic payment buttons"
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
                    label="For internal use only, not visible to customers."
                    placeholder="Enter rule name"
                    autoComplete="off"
                  />
                </Card>
              ),
            },
            {
              term: "Hide dynamic button",
              description: (
                <Card>
                  <Box paddingBlockEnd="200">
                    <Text variant="headingMd" as="h6">
                      Hide dynamic payment buttons
                    </Text>
                  </Box>

                  <Select
                    requiredIndicator
                    label="Position"
                    options={options2}
                    onBlur={() =>
                      setIsShowError(selected2 == "Select Position")
                    }
                    onChange={handleSelect2Change}
                    value={selected2}
                    error={isShowError && "Province is required"}
                  />
                </Card>
              ),
            },
            {
              term: "Rule configuration",
              description: (
                <Card>
                  <BlockStack gap="300">
                    <Text variant="headingMd" as="h6">
                      Based on condition *
                    </Text>
                    <Box position="relative">
                      <Popover
                        active={popoverActive}
                        activator={activator}
                        onClose={togglePopoverActive}
                        ariaHaspopup={false}
                        sectioned
                        fullWidth
                      >
                        <Popover.Pane>
                          <Box paddingInline="050">
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
                                onChange={handleFieldChanged}
                                onClearButtonClick={() => {}}
                              />
                            </Box>

                            <Scrollable style={{ height: "200px" }} focusable>
                              {Object.keys(baseCunditionList).map(
                                (currKey, index) => {
                                  return (
                                    <Cundition_list
                                      scrollRef={scrollRef}
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

                      <Box
                        visuallyHidden={selected2 !== "Select Position"}
                        position="absolute"
                        minHeight="100%"
                        background="bg-fill"
                        opacity="0.4"
                        insetBlockStart="0"
                        width="100%"
                        borderRadius="200"
                      ></Box>
                    </Box>

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
              ),
            },
          ]}
        />
      </BlockStack>
    </Page>
  );
}

function MultiCombobox({ StaticOptions }) {
  let deselectedOptions = useMemo(() => StaticOptions, []);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(deselectedOptions);

  const escapeSpecialRegExCharacters = useCallback(
    (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    []
  );
  const updateText = useCallback(
    (value) => {
      setInputValue(value);

      if (value === "") {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(escapeSpecialRegExCharacters(value), "i");
      const resultOptions = deselectedOptions.filter((option) =>
        option.label.match(filterRegex)
      );
      setOptions(resultOptions);
    },
    [deselectedOptions, escapeSpecialRegExCharacters]
  );

  const updateSelection = useCallback(
    (selected) => {
      if (selectedOptions.includes(selected)) {
        setSelectedOptions(
          selectedOptions.filter((option) => option !== selected)
        );
      } else {
        setSelectedOptions([...selectedOptions, selected]);
      }

      updateText("");
    },
    [selectedOptions, updateText]
  );

  const removeTag = useCallback(
    (tag) => () => {
      const options = [...selectedOptions];
      options.splice(options.indexOf(tag), 1);
      setSelectedOptions(options);
    },
    [selectedOptions]
  );

  const tagsMarkup = selectedOptions.map((option) => (
    <Tag key={`option-${option}`} onRemove={removeTag(option)}>
      {option}
    </Tag>
  ));

  const optionsMarkup =
    options.length > 0
      ? options.map((option) => {
          const { label, value } = option;

          return (
            <Listbox.Option
              key={`${value}`}
              value={value}
              selected={selectedOptions.includes(value)}
              accessibilityLabel={label}
            >
              {label}
            </Listbox.Option>
          );
        })
      : null;

  return (
    <>
      <Combobox
        allowMultiple
        activator={
          <Combobox.TextField
            prefix={<Icon source={SearchIcon} />}
            onChange={updateText}
            label="Search tags"
            labelHidden
            value={inputValue}
            placeholder="Search tags"
            autoComplete="off"
          />
        }
      >
        {optionsMarkup ? (
          <Listbox
            autoSelection={AutoSelection.None}
            onSelect={updateSelection}
          >
            {optionsMarkup}
          </Listbox>
        ) : null}
      </Combobox>

      <Box paddingBlock="200">
        <TextContainer>
          <LegacyStack>{tagsMarkup}</LegacyStack>
        </TextContainer>
      </Box>
    </>
  );
}
