import { Box, InlineStack, Text } from "@shopify/polaris";

export default function Cundition_list({
  currKey,
  baseCunditionList,
  selectedBaseCundition,
  togglePopoverActive,
  setSelectedBaseCundition,
}) {
  if (baseCunditionList[currKey].length !== 0) {
    return (
      <Box>
        <Box
          paddingInline="600"
          paddingBlock="300"
          background="bg-surface-tertiary"
        >
          <Text variant="headingSm" as="h6">
            {currKey}
          </Text>
        </Box>

        {baseCunditionList[currKey].map((currItem, index) => {
          return (
            <Box
              key={index}
              onClick={() =>
                setSelectedBaseCundition({ key: currKey, index: index })
              }
            >
              <Box
                padding="300"
                borderColor="border"
                borderWidth="0165"
                minHeight="100%"
                onClick={() => togglePopoverActive(currKey, index)}
              >
                <InlineStack align="space-between" blockAlign="center">
                  <Box overflowX="hidden">
                    <InlineStack gap="500">
                      <Text variant="headingXl" as="h4">
                        {currItem.img}
                      </Text>
                      <Box>
                        <Text fontWeight="bold"> {currItem.name}</Text>
                        <Text tone="subdued">{currItem.content}</Text>
                      </Box>
                    </InlineStack>
                  </Box>

                  {selectedBaseCundition.key === currKey &&
                    selectedBaseCundition.index == index && (
                      <Text variant="headingMd" as="h5">
                        ✅
                      </Text>
                    )}
                </InlineStack>
              </Box>
            </Box>
          );
        })}
      </Box>
    );
  } else {
    return <Box></Box>;
  }
}
