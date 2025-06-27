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
import { useCallback, useEffect, useMemo, useState } from "react";

import { SearchIcon, SelectIcon } from "@shopify/polaris-icons";

import currency from "../../../../Api/currencies.json";

export default function Based_condition_option({
  selectedBaseCundition,
  triggerOptions,
  handleSelectChange,
  selected,
  productNameList,
}) {
  const [fieldValues, setFieldValues] = useState({
    search: "",
  });
  const [inputValue, setInputValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showMesureQuantity, setShowMesureQuantity] = useState();
  const [chackValidQuantity, setChackValidQuantity] = useState();

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

  const handleFieldChanged = useCallback(() => {
    setFieldValues((pre) => ({
      ...pre,
      [event.target.name]: event.target.value,
    }));
  }, []);

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

  useEffect(() => {
    fieldValues.Min_quantity_purchase > fieldValues.Max_quantity_purchase
      ? setChackValidQuantity("Min number must be equal or less than max")
      : setChackValidQuantity();
  }, [fieldValues.Min_quantity_purchase, fieldValues.Max_quantity_purchase]);

  return (
    <InlineStack wrap={false}>
      {selectedBaseCundition.name !== "Always" &&
        selectedBaseCundition.name !== "Product quantity" && (
          <Box width="30%" paddingInlineEnd="300">
            <>
              <Text variant="headingMd">Trigger *</Text>
              <Select
                options={triggerOptions}
                onChange={handleSelectChange}
                value={selected}
              />
            </>
          </Box>
        )}

      <Box
        width={
          selectedBaseCundition.name == "Product quantity" ? "100%" : "70%"
        }
      >
        {selectedBaseCundition.name === "Shopify market" && (
          <Box>
            <Text variant="headingMd">Add *</Text>
            <MultiCombobox
              StaticOptions={[
                { value: "canada", label: "Canada" },
                { value: "india", label: "India" },
                {
                  value: "United States",
                  label: "United States",
                },
              ]}
            />
          </Box>
        )}

        {selectedBaseCundition.name === "Cart contains products" && (
          <Box>
            <Text variant="headingMd">Add *</Text>
            <MultiCombobox StaticOptions={productNameList} />
          </Box>
        )}

        {selectedBaseCundition.name === "Cart contains collection" && (
          <Box>
            <Text variant="headingMd">Add *</Text>
            <MultiCombobox
              StaticOptions={[
                { value: "Home page", label: "Home page" },
                {
                  value: "Automated Collection",
                  label: "Automated Collection",
                },
                { value: "Hydrogen", label: "Hydrogen" },
              ]}
            />
          </Box>
        )}

        {selectedBaseCundition.name === "Cart weight" && (
          <Box>
            <InlineStack wrap={false} gap="200">
              <Box>
                <Text variant="headingMd">Value *</Text>
                <TextField
                  onChange={handleFieldChanged}
                  type="number"
                  value={fieldValues.Cart_weight}
                  name="Cart_weight"
                  placeholder="Enter value"
                />
              </Box>

              <Box width="100%">
                <Text variant="headingMd">Unit *</Text>
                <Select
                  options={[
                    {
                      label: "Select unit",
                      value: "Select unit",
                      disabled: "true",
                    },
                    {
                      label: "g",
                      value: "g",
                    },
                    {
                      label: "kg",
                      value: "kg",
                    },
                    {
                      label: "oz",
                      value: "oz",
                    },
                    {
                      label: "lb",
                      value: "lb",
                    },
                  ]}
                  onChange={handleFieldChanged}
                  name="unit_input"
                  value={fieldValues.unit_input}
                />
              </Box>
            </InlineStack>
          </Box>
        )}

        {selectedBaseCundition.name === "Currency" && (
          <Box>
            <Text variant="headingMd">Value *</Text>
            <MultiCombobox
              StaticOptions={currency.map((currItem) => {
                return {
                  value: currItem.name,
                  label: `${currItem.name} (${currItem.symbol})`,
                };
              })}
            />
          </Box>
        )}

        {selectedBaseCundition.name === "Cart total" && (
          <Box>
            <TextField
              onChange={handleFieldChanged}
              value={fieldValues.cart_total_value}
              name="cart_total_value"
              label="Value"
              prefix="₹"
              placeholder="Enter value"
            />
          </Box>
        )}

        {selectedBaseCundition.name === "Cart quantity" && (
          <Box>
            <TextField
              type="number"
              onChange={handleFieldChanged}
              value={fieldValues.Cart_quantity}
              name="Cart_quantity"
              label="Value"
              placeholder="Enter value"
            />
          </Box>
        )}

        {selectedBaseCundition.name === "Customer tag" && (
          <>
            <InlineStack wrap={false} blockAlign="end">
              <Box width="100%">
                <Text variant="headingMd">Value *</Text>

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
          </>
        )}

        {selectedBaseCundition.name === "Product" && (
          <Box>
            <Text variant="headingMd">Value *</Text>
            <MultiCombobox StaticOptions={productNameList} />
          </Box>
        )}

        {selectedBaseCundition.name === "Product price" && (
          <Box>
            <Text variant="headingMd">Value *</Text>
            <TextField
              onChange={handleFieldChanged}
              value={fieldValues.Product_price}
              name="Product_price"
              prefix="₹"
              placeholder="Enter value"
            />
          </Box>
        )}

        {selectedBaseCundition.name === "Product tag" && (
          <>
            <InlineStack wrap={false} blockAlign="end">
              <Box width="100%">
                <Text variant="headingMd">Value *</Text>

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
          </>
        )}

        {selectedBaseCundition.name === "Product SKU" && (
          <Box>
            <Text variant="headingMd">Value *</Text>
            <TextField
              onChange={handleFieldChanged}
              value={fieldValues.Product_price}
              name="Product_price"
              placeholder="Enter product SKU"
            />
          </Box>
        )}

        {selectedBaseCundition.name === "Collection" && (
          <Box>
            <Text variant="headingMd">Value *</Text>
            <MultiCombobox
              StaticOptions={[
                { value: "Home page", label: "Home page" },
                {
                  value: "Automated Collection",
                  label: "Automated Collection",
                },
                { value: "Hydrogen", label: "Hydrogen" },
              ]}
            />
          </Box>
        )}

        {selectedBaseCundition.name === "Product quantity" && (
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

            <Box paddingBlock="200">
              <TextContainer>
                <LegacyStack>{tagsMarkup}</LegacyStack>
              </TextContainer>
            </Box>

            <InlineStack gap="200" wrap={false}>
              <Box width="50%">
                <TextField
                  onChange={handleFieldChanged}
                  value={fieldValues.Min_quantity_purchase}
                  disabled={selectedOptions.length <= 0 && true}
                  name="Min_quantity_purchase"
                  label={<Text variant="headingMd">Min quantity purchase</Text>}
                  onBlur={() => setShowMesureQuantity(1)}
                  error={showMesureQuantity == 1 && chackValidQuantity}
                  placeholder="Enter value"
                />
              </Box>

              <Box width="50%">
                <TextField
                  onChange={handleFieldChanged}
                  disabled={selectedOptions.length <= 0 && true}
                  value={fieldValues.Max_quantity_purchase}
                  name="Max_quantity_purchase"
                  label={<Text variant="headingMd">Max quantity purchase</Text>}
                  error={showMesureQuantity == 2 && chackValidQuantity}
                  onBlur={() => setShowMesureQuantity(2)}
                  placeholder="Enter value"
                />
              </Box>
            </InlineStack>

            <Text tone="subdued">
              <InlineStack>
                <Text tone="subdued" fontWeight="medium">
                  {" "}
                  Example:{" "}
                </Text>
                min quantity = 0; Max quantity = 5
              </InlineStack>
              <Text>
                If customers buy 1-5 items, their checkout will be blocked. They
                can process checkout if they buy 6 items or more
              </Text>
            </Text>
          </Box>
        )}
      </Box>
    </InlineStack>
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
