import {
  Badge,
  BlockStack,
  Box,
  Button,
  Card,
  DescriptionList,
  EmptyState,
  Icon,
  InlineStack,
  LegacyCard,
  Page,
  RadioButton,
  Scrollable,
  Select,
  Text,
} from "@shopify/polaris";

import { CheckIcon, XIcon } from "@shopify/polaris-icons";

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { useCallback, useState } from "react";

export default function Settings() {
  const [isRules, setIsRules] = useState(true);
  const [value, setValue] = useState("disabled");
  const [selected, setSelected] = useState("English(default)");

  const handleRulesOnClick = () => {
    setIsRules((pre) => !pre);
  };

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    { label: "English(default)", value: "English(default)" },
    { label: "Deutsch", value: "Deutsch" },
    { label: "Franqais", value: "Franqais" },
  ];

  const handleChange = useCallback((newValue) => setValue(newValue), []);
  return (
    <Scrollable shadow style={{ height: "calc(100vh - 58px) " }} focusable>
      <BlockStack gap="500">
        <Header />
        <Box paddingInline="300">
          <Page title="Settings" fullWidth={true}>
            <DescriptionList
              items={[
                {
                  term: "App status",
                  description: (
                    <Card>
                      <InlineStack align="space-between">
                        <Box>
                          <InlineStack align="space-between">
                            <Text fontWeight="bold">
                              Activate Checkout rules{" "}
                            </Text>

                            {isRules ? (
                              <Badge tone="success">on</Badge>
                            ) : (
                              <Badge>off</Badge>
                            )}
                          </InlineStack>
                        </Box>
                        <Box>
                          {isRules ? (
                            <Button onClick={handleRulesOnClick}>
                              Turn off
                            </Button>
                          ) : (
                            <Button
                              variant="primary"
                              onClick={handleRulesOnClick}
                            >
                              Turn on
                            </Button>
                          )}
                        </Box>
                      </InlineStack>
                    </Card>
                  ),
                },
                {
                  term: "Troubleshooting",
                  description: (
                    <Card>
                      <Text variant="headingMd" fontWeight="bold">
                        If the app fails or experiences a problem
                      </Text>
                      <BlockStack>
                        <RadioButton
                          label={
                            <InlineStack>
                              <Icon source={CheckIcon} tone="base" />
                              <Text>
                                {" "}
                                Allow customer to complete the checkout
                              </Text>
                            </InlineStack>
                          }
                          checked={value === "disabled"}
                          id="disabled"
                          name="accounts"
                          onChange={() => handleChange("disabled")}
                        />
                        <RadioButton
                          label={
                            <InlineStack>
                              <Icon source={XIcon} tone="base" />
                              <Text>Accounts are optional</Text>
                            </InlineStack>
                          }
                          id="optional"
                          name="accounts"
                          checked={value === "optional"}
                          onChange={() => handleChange("optional")}
                        />
                      </BlockStack>
                    </Card>
                  ),
                },
                {
                  term: "Debug mode",
                  description: (
                    <Card>
                      <InlineStack
                        wrap={false}
                        align="center"
                        blockAlign="center"
                      >
                        <Box minWidth="200px">
                          <Text>
                            You can share the logs with us for debugging
                            purposes. From the Settings page of Shopify Admin{" "}
                            {">"} Apps and sale channels {">"} Blockify:
                            Checkout Rules+ {">"} Click the action button {">"}{" "}
                            View details {">"} Scroll down to the Share function
                            logs {">"} Clicks Share logs
                          </Text>
                        </Box>
                        <Box minWidth="86px">
                          <Button>Share logs</Button>
                        </Box>
                      </InlineStack>
                    </Card>
                  ),
                },
                {
                  term: "App language",
                  description: (
                    <Card>
                      <BlockStack gap="100">
                        <Text variant="headingMd" fontWeight="bold">
                          Admin language
                        </Text>

                        <Select
                          options={options}
                          onChange={handleSelectChange}
                          value={selected}
                        />
                        <Text>
                          Selected languages will be translated immediately.
                        </Text>
                      </BlockStack>
                    </Card>
                  ),
                },
              ]}
            />
            <Footer />
          </Page>
        </Box>
      </BlockStack>
    </Scrollable>
  );
}
