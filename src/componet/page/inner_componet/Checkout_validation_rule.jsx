import {
  Avatar,
  Badge,
  BlockStack,
  Box,
  Button,
  Card,
  DescriptionList,
  LegacyCard,
  Page,
  Popover,
  ResourceList,
  Scrollable,
  Select,
  Text,
  TextField,
} from "@shopify/polaris";

import { useNavigate } from "react-router";
import { useCallback, useState } from "react";

export default function Checkout_validation_rule() {
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("Select Position");
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
  const handleSelect2Change = useCallback((value) => setSelected2(value), []);

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
                    error={
                      selected2 == "Select Position" && "Province is required"
                    }
                  />
                </Card>
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
