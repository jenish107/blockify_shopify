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
  const [namePlaceholder, setNamePlaceholder] = useState("Enter name");

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

  useEffect(() => {
    switch (fieldValues.name_type) {
      case "Full name":
        switch (fieldValues.name_methode) {
          case "Contains":
          case "Not contains":
          case "Is":
          case "Is not":
            setNamePlaceholder("Example: John Smith");
            break;
          case "Count characters less than":
          case "Count characters greater than":
            setNamePlaceholder("Enter the number of characters");
            break;
          case "Is empty":
          case "Is not empty":
            setNamePlaceholder("No value required");
            break;

          default:
            break;
        }
        break;
      case "First name":
        switch (fieldValues.name_methode) {
          case "Contains":
          case "Not contains":
          case "Is":
          case "Is not":
            setNamePlaceholder("Enter first name");
            break;
          case "Count characters less than":
          case "Count characters greater than":
            setNamePlaceholder("Enter the number of characters");
            break;
          case "Is empty":
          case "Is not empty":
            setNamePlaceholder("No value required");
            break;

          default:
            break;
        }
        break;
      case "Last name":
        switch (fieldValues.name_methode) {
          case "Contains":
          case "Not contains":
          case "Is":
          case "Is not":
            setNamePlaceholder("Enter last name");
            break;
          case "Count characters less than":
          case "Count characters greater than":
            setNamePlaceholder("Enter the number of characters");
            break;
          case "Is empty":
          case "Is not empty":
            setNamePlaceholder("No value required");
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }, [fieldValues.name_methode, fieldValues.name_type]);

  return (
    <InlineStack wrap={false}>
      {selectedBaseCundition.name !== "Always" &&
        selectedBaseCundition.name !== "Name" &&
        selectedBaseCundition.name !== "Hour" &&
        selectedBaseCundition.name !== "Hour and weekday" &&
        selectedBaseCundition.name !== "Weekday" &&
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
          selectedBaseCundition.name == "Product quantity" ||
          selectedBaseCundition.name == "Weekday" ||
          selectedBaseCundition.name == "Hour and weekday" ||
          selectedBaseCundition.name === "Always" ||
          selectedBaseCundition.name === "Name"
            ? "100%"
            : "70%"
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

        {selectedBaseCundition.name === "Name" && (
          <Box>
            <InlineStack gap="200" wrap={false}>
              <Box width="50%">
                <Select
                  label={<Text variant="headingMd">Date range</Text>}
                  options={[
                    {
                      value: "Select type name",
                      label: "Select type name",
                      disabled: "true",
                    },
                    { value: "Full name", label: "Full name" },
                    { value: "First name", label: "First name" },
                    { value: "Last name", label: "Last name" },
                  ]}
                  onChange={handleFieldChanged}
                  name="name_type"
                  value={fieldValues.name_type}
                />
              </Box>
              <Box width="50%">
                <Select
                  label={<Text variant="headingMd">Trigger</Text>}
                  options={[
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
                    { value: "Is empty", label: "Is empty" },
                    { value: "Is not empty", label: "Is not empty" },
                  ]}
                  onChange={handleFieldChanged}
                  name="name_methode"
                  value={fieldValues.name_methode}
                />
              </Box>
            </InlineStack>

            <TagAdder
              isDisable={
                fieldValues.name_methode == "Is empty" ||
                (fieldValues.name_methode == "Is not empty" && true)
              }
              placeholder={namePlaceholder}
              updateText={updateText}
              inputValue={inputValue}
              updateSelection={updateSelection}
              tagsMarkup={tagsMarkup}
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

        {selectedBaseCundition.name === "Currency" ||
          (selectedBaseCundition.name === "Customer currency" && (
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
          ))}

        {selectedBaseCundition.name === "VAT number" && (
          <Box>
            <Text variant="headingMd">Value *</Text>
            <MultiCombobox
              StaticOptions={[
                { value: "All countries EU", label: "All countries EU" },
                {
                  value: "Argentina (AR99999999999)",
                  label: "Argentina (AR99999999999)",
                },
                {
                  value: "Australia (AU99999999999)",
                  label: "Australia (AU99999999999)",
                },
              ]}
            />
          </Box>
        )}

        {selectedBaseCundition.name === "Country" && (
          <Box>
            <Text variant="headingMd">Value *</Text>
            <MultiCombobox
              StaticOptions={[
                { value: "All countries EU", label: "All countries EU" },
                { value: "Andorra", label: "Andorra" },
                {
                  value: "United Arab Emirates",
                  label: "United Arab Emirates",
                },
                { value: "Afghanistan", label: "Afghanistan" },
                { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
              ]}
            />
          </Box>
        )}

        {selectedBaseCundition.name === "Missing house" && (
          <Box>
            <Text variant="headingMd">Value *</Text>
            <MultiCombobox
              StaticOptions={[
                { value: "All countries EU", label: "All countries EU" },
                { value: "Andorra", label: "Andorra" },
                {
                  value: "United Arab Emirates",
                  label: "United Arab Emirates",
                },
                { value: "Afghanistan", label: "Afghanistan" },
                { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
              ]}
            />
          </Box>
        )}

        {selectedBaseCundition.name === "Cart total" && (
          <Box>
            <TextField
              onChange={handleFieldChanged}
              value={fieldValues.cart_total_value}
              type="number"
              name="cart_total_value"
              label={<Text variant="headingMd">Value</Text>}
              prefix="₹"
              placeholder="Enter value"
            />
          </Box>
        )}

        {selectedBaseCundition.name === "Customer is logged in" && (
          <Box>
            <TextField
              onChange={handleFieldChanged}
              disabled
              value={fieldValues.Customer_is_logged_in}
              name="Customer_is_logged_in"
              label={
                <Text variant="headingMd" tone="base">
                  Value
                </Text>
              }
              placeholder="No value required"
            />
          </Box>
        )}

        {selectedBaseCundition.name === "Select trigger" && (
          <Box>
            <TextField
              onChange={handleFieldChanged}
              value={fieldValues.Select_trigger}
              name="Select_trigger"
              label={<Text variant="headingMd">Value</Text>}
              prefix="₹"
              placeholder="Enter value"
            />
          </Box>
        )}

        {selectedBaseCundition.name === "Customer phone number" && (
          <>
            <TagAdder
              placeholder="Search tags"
              updateText={updateText}
              inputValue={inputValue}
              updateSelection={updateSelection}
              tagsMarkup={tagsMarkup}
            />
          </>
        )}

        {selectedBaseCundition.name === "Province code" && (
          <>
            <TagAdder
              placeholder="Enter Province code"
              updateText={updateText}
              inputValue={inputValue}
              updateSelection={updateSelection}
              tagsMarkup={tagsMarkup}
            />
          </>
        )}

        {selectedBaseCundition.name === "City" && (
          <>
            <TagAdder
              placeholder="Enter customer city"
              updateText={updateText}
              inputValue={inputValue}
              updateSelection={updateSelection}
              tagsMarkup={tagsMarkup}
            />
          </>
        )}

        {selectedBaseCundition.name === "Hour" && (
          <>
            <Box maxWidth="30%">
              <Select
                label={<Text variant="headingMd">Trigger</Text>}
                requiredIndicator
                options={[
                  {
                    value: "Select trigger",
                    label: "Select trigger",
                    disabled: "true",
                  },
                  { value: "Between", label: "Between" },
                ]}
              />
            </Box>
            <Text variant="headingMd">Value *</Text>
            <InlineStack>
              <TextField
                type="time"
                name="hour_select_1"
                value={fieldValues.hour_select_1}
                onChange={handleFieldChanged}
                autoComplete="off"
              />
              <BlockStack inlineAlign="center" align="center">
                <Badge>unit</Badge>
              </BlockStack>
              <TextField
                type="time"
                name="hour_select_2"
                value={fieldValues.hour_select_2}
                onChange={handleFieldChanged}
                autoComplete="off"
              />
            </InlineStack>
          </>
        )}

        {selectedBaseCundition.name === "Weekday" && (
          <>
            <Box width="100%">
              <Select
                label="Trigger"
                requiredIndicator
                options={[
                  {
                    value: "Select trigger",
                    label: "Select trigger",
                    disabled: "true",
                  },
                  { value: "Between", label: "Between" },
                ]}
              />
            </Box>

            <InlineStack gap="200" wrap={false}>
              <Box width="100%">
                <Select
                  label="Trigger"
                  requiredIndicator
                  options={[
                    { value: "Monday", label: "Monday" },
                    { value: "Tuesday", label: "Tuesday" },
                    { value: "Wednesday", label: "Wednesday" },
                    { value: "Thursday", label: "Thursday" },
                    { value: "Friday", label: "Friday" },
                    { value: "Saturday", label: "Saturday" },
                    { value: "Sunday", label: "Sunday" },
                  ]}
                />
              </Box>
              <Box width="100%">
                <Select
                  label="Trigger"
                  requiredIndicator
                  options={[
                    { value: "Monday", label: "Monday" },
                    { value: "Tuesday", label: "Tuesday" },
                    { value: "Wednesday", label: "Wednesday" },
                    { value: "Thursday", label: "Thursday" },
                    { value: "Friday", label: "Friday" },
                    { value: "Saturday", label: "Saturday" },
                    { value: "Sunday", label: "Sunday" },
                  ]}
                />
              </Box>
            </InlineStack>
          </>
        )}

        {selectedBaseCundition.name === "Hour and weekday" && (
          <>
            <Box width="50%">
              <Select
                label={<Text variant="headingMd">Trigger</Text>}
                options={[
                  {
                    value: "Select trigger",
                    label: "Select trigger",
                    disabled: "true",
                  },
                  { value: "Between", label: "Between" },
                ]}
              />
            </Box>

            <Box width="70%" paddingBlock="200">
              <Text variant="headingMd">Value *</Text>
              <InlineStack gap="200" wrap={false}>
                <Box width="100%">
                  <Select
                    requiredIndicator
                    options={[
                      { value: "Monday", label: "Monday" },
                      { value: "Tuesday", label: "Tuesday" },
                      { value: "Wednesday", label: "Wednesday" },
                      { value: "Thursday", label: "Thursday" },
                      { value: "Friday", label: "Friday" },
                      { value: "Saturday", label: "Saturday" },
                      { value: "Sunday", label: "Sunday" },
                    ]}
                  />
                </Box>
                <Box>
                  <TextField
                    type="time"
                    name="hour_select_1"
                    value={fieldValues.hour_select_1}
                    onChange={handleFieldChanged}
                    autoComplete="off"
                  />
                </Box>
              </InlineStack>
            </Box>

            <Text alignment="center">
              <Badge>until</Badge>
            </Text>

            <Box width="70%" paddingBlock="200">
              <InlineStack gap="200" wrap={false}>
                <Box width="100%">
                  <Select
                    requiredIndicator
                    options={[
                      { value: "Monday", label: "Monday" },
                      { value: "Tuesday", label: "Tuesday" },
                      { value: "Wednesday", label: "Wednesday" },
                      { value: "Thursday", label: "Thursday" },
                      { value: "Friday", label: "Friday" },
                      { value: "Saturday", label: "Saturday" },
                      { value: "Sunday", label: "Sunday" },
                    ]}
                  />
                </Box>
                <TextField
                  type="time"
                  name="hour_select_2"
                  value={fieldValues.hour_select_2}
                  onChange={handleFieldChanged}
                  autoComplete="off"
                />
              </InlineStack>
            </Box>
          </>
        )}

        {selectedBaseCundition.name === "Delivery phone number" && (
          <>
            <TagAdder
              placeholder="Enter tag"
              updateText={updateText}
              inputValue={inputValue}
              updateSelection={updateSelection}
              tagsMarkup={tagsMarkup}
            />
          </>
        )}

        {selectedBaseCundition.name === "PO Box address" && (
          <>
            <TagAdder
              placeholder="Enter tag"
              updateText={updateText}
              inputValue={inputValue}
              updateSelection={updateSelection}
              tagsMarkup={tagsMarkup}
            />
          </>
        )}

        {selectedBaseCundition.name === "Delivery company" && (
          <>
            <TagAdder
              placeholder="Enter delivery company"
              updateText={updateText}
              inputValue={inputValue}
              updateSelection={updateSelection}
              tagsMarkup={tagsMarkup}
            />
          </>
        )}

        {selectedBaseCundition.name === "Zip code" && (
          <>
            <TagAdder
              placeholder="Enter zip oode"
              updateText={updateText}
              inputValue={inputValue}
              updateSelection={updateSelection}
              tagsMarkup={tagsMarkup}
            />
          </>
        )}

        {selectedBaseCundition.name === "Customer email" && (
          <>
            <TagAdder
              placeholder="Enter email"
              updateText={updateText}
              inputValue={inputValue}
              updateSelection={updateSelection}
              tagsMarkup={tagsMarkup}
            />
          </>
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
            <TagAdder
              placeholder="Enter customer tag"
              updateText={updateText}
              inputValue={inputValue}
              updateSelection={updateSelection}
              tagsMarkup={tagsMarkup}
            />
          </>
        )}

        {selectedBaseCundition.name === "Shipping address line 2" && (
          <>
            <TagAdder
              placeholder="Enter address"
              updateText={updateText}
              inputValue={inputValue}
              updateSelection={updateSelection}
              tagsMarkup={tagsMarkup}
            />
          </>
        )}
        {selectedBaseCundition.name === "Shipping address line 1" && (
          <>
            <TagAdder
              placeholder="Enter address"
              updateText={updateText}
              inputValue={inputValue}
              updateSelection={updateSelection}
              tagsMarkup={tagsMarkup}
            />
          </>
        )}

        {selectedBaseCundition.name === "Product vendor" && (
          <>
            <TagAdder
              placeholder="Enter vendor"
              updateText={updateText}
              inputValue={inputValue}
              updateSelection={updateSelection}
              tagsMarkup={tagsMarkup}
            />
          </>
        )}

        {selectedBaseCundition.name === "Product" && (
          <Box>
            <Text variant="headingMd">Value *</Text>
            <MultiCombobox StaticOptions={productNameList} />
          </Box>
        )}
        {selectedBaseCundition.name === "Product is gift card" && (
          <Box>
            <Text variant="headingMd">Value *</Text>
            <MultiCombobox
              StaticOptions={[{ value: "Gift Card", label: "Gift Card" }]}
            />
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
            <TagAdder
              placeholder="Enter tag"
              updateText={updateText}
              inputValue={inputValue}
              updateSelection={updateSelection}
              tagsMarkup={tagsMarkup}
            />
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

function TagAdder({
  placeholder,
  updateText,
  inputValue,
  updateSelection,
  tagsMarkup,
  isDisable,
}) {
  return (
    <>
      <InlineStack wrap={false} blockAlign="end">
        <Box width="100%">
          <Combobox
            allowMultiple
            activator={
              <Combobox.TextField
                disabled={isDisable}
                onChange={updateText}
                label={<Text variant="headingMd">Value *</Text>}
                value={inputValue}
                placeholder={placeholder}
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
