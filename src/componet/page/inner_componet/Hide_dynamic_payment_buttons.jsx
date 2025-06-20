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
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import { useCallback, useState } from "react";

export default function Hide_dynamic_payment_buttons() {
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
      title="Hide dynamic payment buttons"
      titleMetadata={<Badge tone="success">Enabled</Badge>}
      backAction={{ content: "", onAction: () => navigate(-1) }}
    >
      <BlockStack gap="500">
        {/* <DescriptionList
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
                    error={
                      selected2 == "Select Position" && "Province is required"
                    }
                  />
                </Card>
              ),
            },
            {
              term: "Rule configuration",
              description: (
                <Card>
                  <Text>Based on condition *</Text>
                </Card>
              ),
            },
          ]}
        /> */}
        <PopoverLazyLoadExample />
      </BlockStack>
    </Page>
  );
}

function PopoverLazyLoadExample() {
  const [popoverActive, setPopoverActive] = useState(true);
  const [visibleStaffIndex, setVisibleStaffIndex] = useState(5);
  const staff = [
    "Abbey Mayert",
    "Abbi Senger",
    "Abdul Goodwin",
    "Abdullah Borer",
    "Abe Nader",
    "Abigayle Smith",
    "Abner Torphy",
    "Abraham Towne",
    "Abraham Vik",
    "Ada Fisher",
    "Adah Pouros",
    "Adam Waelchi",
    "Adan Zemlak",
    "Addie Wehner",
    "Addison Wexler",
    "Alex Hernandez",
  ];

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    []
  );

  const handleScrolledToBottom = useCallback(() => {
    const totalIndexes = staff.length;
    const interval =
      visibleStaffIndex + 3 < totalIndexes
        ? 3
        : totalIndexes - visibleStaffIndex;

    if (interval > 0) {
      setVisibleStaffIndex(visibleStaffIndex + interval);
    }
  }, [staff.length, visibleStaffIndex]);

  const handleResourceListItemClick = useCallback(() => {}, []);

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      View staff
    </Button>
  );

  const staffList = staff.slice(0, visibleStaffIndex).map((name) => ({
    name,
    initials: getInitials(name),
  }));

  return (
    <LegacyCard sectioned>
      <div style={{ height: "280px" }}>
        <Popover
          sectioned
          active={popoverActive}
          activator={activator}
          onClose={togglePopoverActive}
          ariaHaspopup={false}
        >
          <Popover.Pane onScrolledToBottom={handleScrolledToBottom}>
            <ResourceList items={staffList} renderItem={renderItem} />
          </Popover.Pane>
        </Popover>
      </div>
    </LegacyCard>
  );

  function renderItem({ name, initials }) {
    return (
      <ResourceList.Item
        id={name}
        media={<Avatar size="md" name={name} initials={initials} />}
        onClick={handleResourceListItemClick}
      >
        {name}
      </ResourceList.Item>
    );
  }

  function getInitials(name) {
    return name
      .split(" ")
      .map((surnameOrFamilyName) => surnameOrFamilyName.slice(0, 1))
      .join("");
  }
}
