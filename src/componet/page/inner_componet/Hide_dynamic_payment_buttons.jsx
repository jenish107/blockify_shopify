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

import { useNavigate } from "react-router";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import { useCallback, useEffect, useMemo, useState } from "react";
import Cundition_list from "./child_componet/Create_checkout_rules/Cundition_list";

import { SearchIcon, SelectIcon } from "@shopify/polaris-icons";

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

export default function Hide_dynamic_payment_buttons() {
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("Select Position");
  const [textFieldValues, setTextFieldValues] = useState({});
  const [popoverActive, setPopoverActive] = useState(false);
  const [isShowError, setIsShowError] = useState(false);
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
  const options2 = [
    { label: "Select Position", value: "Select Position", disabled: "true" },
    { label: "Enabled", value: "Enabled" },
    { label: "Disabled", value: "Disabled" },
  ];

  const handleSelectChange = useCallback((value) => setSelected(value), []);
  const handleSelect2Change = useCallback((value) => {
    setSelected2(value);
  }, []);

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
    setIsShowError(selected2 == "Select Position");
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

                    {selected2 !== "Select Position" && (
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
                              <MultiComboboxExample />
                            </Box>
                          </InlineStack>
                        </Box>
                      </InlineStack>
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

function MultiComboboxExample() {
  const deselectedOptions = useMemo(
    () => [
      { value: "rustic", label: "Rustic" },
      { value: "antique", label: "Antique" },
      { value: "vinyl", label: "Vinyl" },
      { value: "vintage", label: "Vintage" },
      { value: "refurbished", label: "Refurbished" },
    ],
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
        label="Value"
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
