import {
  BlockStack,
  Box,
  Card,
  Grid,
  InlineStack,
  Text,
} from "@shopify/polaris";

export default function Cundition_set_box({ Cundition_set }) {
  return (
    <Box padding="200" maxWidth="450px">
      <InlineStack>
        <BlockStack>
          {Object.keys(Cundition_set.first_grid).map((keys) => {
            return (
              <Box width="200px">
                <Text variant="headingMd" as="h6">
                  {keys}
                </Text>
                {Cundition_set.first_grid[keys].map((currItem) => {
                  return (
                    <Box paddingInlineStart="300">
                      <Text>{currItem}</Text>
                    </Box>
                  );
                })}
              </Box>
            );
          })}
        </BlockStack>

        <BlockStack>
          {Object.keys(Cundition_set.second_grid).map((keys) => {
            return (
              <Box width="200px">
                <Text variant="headingMd" as="h6">
                  {keys}
                </Text>
                {Cundition_set.second_grid[keys].map((currItem) => {
                  return (
                    <Box paddingInlineStart="300">
                      <Text>{currItem}</Text>
                    </Box>
                  );
                })}
              </Box>
            );
          })}
        </BlockStack>
      </InlineStack>
    </Box>
  );
}
