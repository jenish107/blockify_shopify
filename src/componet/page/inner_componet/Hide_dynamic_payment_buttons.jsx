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

const StaticBaseCunditionList = {
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
      name: " Product",
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

export default function Hide_dynamic_payment_buttons() {
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("Select Position");
  const [textFieldValues, setTextFieldValues] = useState({});
  const [popoverActive, setPopoverActive] = useState(false);
  const [isShowError, setIsShowError] = useState(false);
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [triggerOptions, setTriggerOptions] = useState([
    { value: "Is", label: "Is" },
    { value: "Is not", label: "Is not" },
  ]);

  const [baseCunditionList, setBaseCunditionList] = useState(
    StaticBaseCunditionList
  );

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

  const handleTextFieldChanged = useCallback(() => {
    setTextFieldValues((pre) => ({
      ...pre,
      [event.target.name]: event.target.value,
    }));
  }, []);

  useEffect(() => {
    if (selected2 == "Cart") {
      setBaseCunditionList({ ...StaticBaseCunditionList, ...StaticCartList });
    }
    if (selected2 == "Product") {
      setBaseCunditionList({
        ...StaticBaseCunditionList,
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
                baseCunditionList[selectedBaseCundition.key][
                  selectedBaseCundition?.index
                ]?.img
              }
            </Text>
            <Box>
              <Text fontWeight="bold">
                {
                  baseCunditionList[selectedBaseCundition.key][
                    selectedBaseCundition?.index
                  ]?.name
                }
              </Text>
              <Text tone="subdued">
                {
                  baseCunditionList[selectedBaseCundition.key][
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
                                value={textFieldValues.search}
                                onChange={handleTextFieldChanged}
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

                    {/* {selectedBaseCundition.name === "Customer tag" && ( */}
                    <Box>
                      <InlineStack wrap={false}>
                        <Box width="30%" paddingInlineEnd="300">
                          <Text variant="headingMd">Trigger *</Text>
                          <Select
                            options={triggerOptions}
                            onChange={handleSelectChange}
                            value={selected}
                          />
                        </Box>

                        <Box width="70%">
                          <InlineStack wrap={false} blockAlign="end">
                            <Box width="100%">
                              <Text variant="headingMd">Value *</Text>
                              {/* <MultiComboboxExample /> */}

                              <Combobox
                                allowMultiple
                                activator={
                                  <Combobox.TextField
                                    onChange={updateText}
                                    label="Enter customer tag"
                                    value={inputValue}
                                    labelHidden
                                    placeholder="Search tags"
                                    autoComplete="off"
                                  />
                                }
                              ></Combobox>
                            </Box>
                            <Box paddingInlineStart="100" minWidth="3.6rem">
                              <Button
                                disabled={!inputValue && true}
                                variant="primary"
                                onClick={() => updateSelection(inputValue)}
                              >
                                Add
                              </Button>
                            </Box>
                          </InlineStack>
                          <Box paddingBlock="200">
                            <TextContainer>
                              <LegacyStack>{tagsMarkup}</LegacyStack>
                            </TextContainer>
                          </Box>
                        </Box>
                      </InlineStack>
                    </Box>
                    {/* )} */}
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

function MultiComboboxExample() {
  let deselectedOptions = useMemo(
    () =>
      currency.map((currItem) => {
        return {
          value: currItem.name,
          label: `${currItem.name} (${currItem.symbol})`,
        };
      }),
    []
  );

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
    <Box>
      <Text variant="headingMd">Value *</Text>
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
      <TextContainer>
        <LegacyStack>{tagsMarkup}</LegacyStack>
      </TextContainer>
    </Box>
  );
}
