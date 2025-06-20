import { Box, Card, Icon, InlineStack, Text } from "@shopify/polaris";
import { StarFilledIcon } from "@shopify/polaris-icons";

export default function SliderCard({ currData }) {
  return (
    <Box minHeight="100%" paddingInline="100">
      <Box
        background="bg-fill"
        padding="300"
        borderRadius="300"
        borderColor="border"
        borderWidth="0165"
        maxWidth="100%"
        minWidth="32%"
      >
        <Text>{currData.header}</Text>
        <InlineStack>
          <Box width="12px">
            <Icon viewBox="0 0 10 10" source={StarFilledIcon} tone="base" />
          </Box>
          <Box width="12px">
            <Icon viewBox="0 0 10 10" source={StarFilledIcon} tone="base" />
          </Box>
          <Box width="12px">
            <Icon viewBox="0 0 10 10" source={StarFilledIcon} tone="base" />
          </Box>
          <Box width="12px">
            <Icon viewBox="0 0 10 10" source={StarFilledIcon} tone="base" />
          </Box>
          <Box width="12px">
            <Icon viewBox="0 0 10 10" source={StarFilledIcon} tone="base" />
          </Box>
        </InlineStack>
        <Text>{currData.content}</Text>
      </Box>
    </Box>
  );
}
