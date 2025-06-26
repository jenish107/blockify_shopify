import {
  Autocomplete,
  AutoSelection,
  Avatar,
  Badge,
  Banner,
  BlockStack,
  Box,
  Button,
  Card,
  Combobox,
  DescriptionList,
  Divider,
  Grid,
  Icon,
  InlineStack,
  Layout,
  LegacyCard,
  LegacyStack,
  Link,
  Listbox,
  Page,
  Popover,
  RadioButton,
  ResourceList,
  Scrollable,
  Select,
  SkeletonBodyText,
  SkeletonDisplayText,
  SkeletonThumbnail,
  Tag,
  Text,
  TextContainer,
  TextField,
} from "@shopify/polaris";

import {
  AlertCircleIcon,
  SearchIcon,
  SelectIcon,
  StarFilledIcon,
  ViewIcon,
} from "@shopify/polaris-icons";

import { useNavigate } from "react-router";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function Product_offer() {
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("Always");
  const [inputFieldValues, setInputFieldValues] = useState({
    paymentMethodType: "Pre-defined",
  });
  const [popoverActive, setPopoverActive] = useState(false);
  const [isShowError, setIsShowError] = useState(false);

  const navigate = useNavigate();

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

  const updateText = useCallback(
    (value) => {
      setInputValue(value);

      if (value === "") {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(value, "i");
      const resultOptions = deselectedOptions.filter((option) =>
        option.label.match(filterRegex)
      );
      setOptions(resultOptions);
    },
    [deselectedOptions]
  );

  const updateSelection = useCallback(
    (selected) => {
      const selectedValue = selected.map((selectedItem) => {
        const matchedOption = options.find((option) => {
          return option.value.match(selectedItem);
        });
        return matchedOption && matchedOption.label;
      });

      setSelectedOptions(selected);
      setInputValue(selectedValue[0] || "");
    },
    [options]
  );

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      suffix={<Icon source={SelectIcon} tone="base" />}
      value={inputValue}
      prefix={<Icon source={SearchIcon} tone="base" />}
      placeholder="Search products"
      autoComplete="off"
    />
  );

  return (
    <Page
      title="Product offer"
      subtitle="Promote relevant products on the order status page to encourage additional purchases."
      backAction={{ content: "", onAction: () => navigate(-1) }}
    >
      <BlockStack gap="500">
        <Banner
          title="Free Plan Limit Reached"
          tone="warning"
          action={{ content: "increase limit", url: "" }}
          onDismiss={() => {}}
        >
          <p>
            This feature is available on Premium plan only. Please increase the
            limitation by upgrading to this plan
          </p>
        </Banner>

        <Layout>
          <Layout.Section variant="oneHalf">
            <BlockStack gap="200">
              <Box position="relative">
                <LegacyCard title="Name" sectioned>
                  <TextField
                    placeholder="Enter rule name"
                    helpText="Internal only. Not shown to customers."
                  />
                </LegacyCard>
                <Box
                  background="bg-fill"
                  minHeight="100%"
                  width="100%"
                  position="absolute"
                  insetBlockStart="0"
                  zIndex="9999"
                  opacity="0.6"
                  borderRadius="300"
                ></Box>
              </Box>

              <Box position="relative">
                <LegacyCard sectioned title="Offer product">
                  <Text>Select type</Text>
                  <RadioButton
                    label="Auto recommend offer"
                    helpText="Use Shopify's auto-recommend product feature."
                    checked={true}
                    id="disabled"
                    name="accounts"
                  />
                  <RadioButton
                    label="Manual select offer"
                    id="optional"
                    name="accounts"
                    checked={false}
                  />
                  <Box
                    background="bg-fill"
                    minHeight="100%"
                    width="100%"
                    position="absolute"
                    insetBlockStart="0"
                    zIndex="9999"
                    opacity="0.6"
                    borderRadius="300"
                  ></Box>
                </LegacyCard>
              </Box>

              <Box position="relative">
                <LegacyCard sectioned title="Display condition *">
                  <BlockStack gap="300">
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
                              📦
                            </Text>
                            <Box>
                              <Text fontWeight="bold">Product</Text>
                              <Text tone="subdued">
                                Based on specific products in cart
                              </Text>
                            </Box>
                          </InlineStack>
                        </Box>
                        <Box>
                          <Icon source={SelectIcon} tone="base" />
                        </Box>
                      </InlineStack>
                    </Box>

                    <InlineStack>
                      <Box width="30%" paddingInlineEnd="300">
                        <Box paddingBlockEnd="100">
                          <Text variant="headingMd">Trigger *</Text>
                        </Box>
                        <Select
                          options={[{ label: "Contains", value: "Contains" }]}
                          onChange={handleSelectChange}
                          value={selected}
                        />
                      </Box>

                      <Box width="70%">
                        <InlineStack wrap={false} blockAlign="center">
                          <Box width="100%">
                            <Box paddingBlockEnd="100">
                              <Text variant="headingMd">Tags *</Text>
                            </Box>
                            <Autocomplete
                              options={options}
                              selected={selectedOptions}
                              onSelect={updateSelection}
                              textField={textField}
                            />
                          </Box>
                        </InlineStack>
                      </Box>
                    </InlineStack>
                  </BlockStack>
                  <Box
                    background="bg-fill"
                    minHeight="100%"
                    width="100%"
                    position="absolute"
                    insetBlockStart="0"
                    zIndex="9999"
                    opacity="0.6"
                    borderRadius="300"
                  ></Box>
                </LegacyCard>
              </Box>

              <Box position="relative">
                <LegacyCard sectioned>
                  <InlineStack align="center" gap="200" blockAlign="center">
                    <Button disabled>+ Add condition</Button>

                    <Badge tone="info">
                      {" "}
                      <InlineStack>
                        <Icon source={StarFilledIcon} tone="base" /> Premium
                      </InlineStack>
                    </Badge>
                  </InlineStack>
                </LegacyCard>
                <Box
                  background="bg-fill"
                  minHeight="100%"
                  width="100%"
                  position="absolute"
                  insetBlockStart="0"
                  zIndex="9999"
                  opacity="0.6"
                  borderRadius="300"
                ></Box>
              </Box>

              <Box position="relative">
                <LegacyCard title="Widgets" sectioned>
                  <Text tone="subdued">
                    Customize UI and content of widgets.
                  </Text>

                  <Button>Go to Order status page</Button>
                </LegacyCard>
                <Box
                  background="bg-fill"
                  minHeight="100%"
                  width="100%"
                  position="absolute"
                  insetBlockStart="0"
                  zIndex="9999"
                  opacity="0.6"
                  borderRadius="300"
                ></Box>
              </Box>
            </BlockStack>
          </Layout.Section>

          <Layout.Section variant="oneHalf">
            <BlockStack gap="200">
              <Box position="relative">
                <LegacyCard title="Status" sectioned>
                  <Select
                    options={[{ value: "Draft", label: "Draft" }]}
                    onChange={handleSelectChange}
                    value={selected}
                  />
                </LegacyCard>
                <Box
                  background="bg-fill"
                  minHeight="100%"
                  width="100%"
                  position="absolute"
                  insetBlockStart="0"
                  zIndex="9999"
                  opacity="0.6"
                  borderRadius="300"
                ></Box>
              </Box>

              <Box position="relative">
                <LegacyCard
                  title={
                    <InlineStack>
                      <Box>
                        <Icon source={ViewIcon} tone="base" />
                      </Box>
                      <Text>Preview</Text>
                    </InlineStack>
                  }
                  sectioned
                >
                  <InlineStack
                    align="center"
                    blockAlign="center"
                    wrap={false}
                    gap="300"
                  >
                    <SkeletonThumbnail size="small" />
                    <SkeletonBodyText lines={2} />
                  </InlineStack>

                  <Text variant="headingMd" as="h5" alignment="center">
                    You’ll love these
                  </Text>

                  <Grid columns={{ xs: 1, sm: 3, md: 3, lg: 3, xl: 3 }}>
                    <BlockStack gap="100" inlineAlign="center">
                      <Box>
                        <img
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </Box>
                      <Text fontWeight="bold">Product #1</Text>
                      <InlineStack gap="100">
                        <Text fontWeight="bold">9 INR</Text>
                        <Text textDecorationLine="line-through">12 INR</Text>
                      </InlineStack>
                      <Select
                        options={[
                          {
                            value: "Variant 1",
                            label: "Variant 1",
                          },
                        ]}
                        value={selected}
                      />
                      <Box
                        padding="100"
                        color="text-brand-on-bg-fill"
                        background="bg-fill-info-active"
                        borderRadius="200"
                        paddingInline="200"
                      >
                        <Text alignment="center">View product</Text>
                      </Box>
                    </BlockStack>

                    <BlockStack gap="100" inlineAlign="center">
                      <Box>
                        <img
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </Box>
                      <Text fontWeight="bold">Product #1</Text>
                      <InlineStack gap="100">
                        <Text fontWeight="bold">9 INR</Text>
                        <Text textDecorationLine="line-through">12 INR</Text>
                      </InlineStack>
                      <Select
                        options={[
                          {
                            value: "Variant 1",
                            label: "Variant 1",
                          },
                        ]}
                        value={selected}
                      />
                      <Box
                        padding="100"
                        color="text-brand-on-bg-fill"
                        background="bg-fill-info-active"
                        borderRadius="200"
                        paddingInline="200"
                      >
                        <Text alignment="center">View product</Text>
                      </Box>
                    </BlockStack>

                    <BlockStack gap="100" inlineAlign="center">
                      <Box>
                        <img
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </Box>
                      <Text fontWeight="bold">Product #1</Text>
                      <InlineStack gap="100">
                        <Text fontWeight="bold">9 INR</Text>
                        <Text textDecorationLine="line-through">12 INR</Text>
                      </InlineStack>
                      <Select
                        options={[
                          {
                            value: "Variant 1",
                            label: "Variant 1",
                          },
                        ]}
                        value={selected}
                      />
                      <Box
                        padding="100"
                        color="text-brand-on-bg-fill"
                        background="bg-fill-info-active"
                        borderRadius="200"
                        paddingInline="200"
                      >
                        <Text alignment="center">View product</Text>
                      </Box>
                    </BlockStack>
                  </Grid>

                  <Box paddingBlock="300">
                    <Grid columns={{ xs: 1, sm: 4, md: 4, lg: 4, xl: 4 }}>
                      <Grid.Cell
                        columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 6 }}
                      >
                        <BlockStack gap="200">
                          <SkeletonDisplayText maxWidth="400px" size="medium" />
                          <SkeletonBodyText lines={3} />
                        </BlockStack>
                      </Grid.Cell>
                      <Grid.Cell
                        columnSpan={{ xs: 6, sm: 3, md: 3, lg: 1, xl: 6 }}
                      >
                        <BlockStack gap="200">
                          <SkeletonDisplayText maxWidth="200px" size="medium" />
                          <SkeletonBodyText lines={3} />
                        </BlockStack>
                      </Grid.Cell>
                    </Grid>
                  </Box>

                  <Divider />

                  <Box padding="300" paddingBlockEnd="0">
                    <Text alignment="center">
                      <Link>Preview in Editor page</Link>
                    </Text>
                  </Box>
                </LegacyCard>
                <Box
                  background="bg-fill"
                  minHeight="100%"
                  width="100%"
                  position="absolute"
                  insetBlockStart="0"
                  zIndex="9999"
                  opacity="0.6"
                  borderRadius="300"
                ></Box>
              </Box>
            </BlockStack>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}
