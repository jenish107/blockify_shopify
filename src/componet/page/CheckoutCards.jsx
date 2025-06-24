import {
  Badge,
  BlockStack,
  Box,
  Button,
  ButtonGroup,
  Card,
  Divider,
  Grid,
  Icon,
  InlineStack,
  LegacyCard,
  Page,
  SkeletonBodyText,
  Text,
} from "@shopify/polaris";
import { useNavigate } from "react-router";
import {
  AlertCircleIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
} from "@shopify/polaris-icons";

import "../../style/CheckoutCards.css";

export default function CheckoutCards() {
  let navigate = useNavigate();

  return (
    <Page
      title="Select component"
      backAction={{ content: "", onAction: () => navigate(-1) }}
    >
      <BlockStack gap="500">
        <LegacyCard>
          <LegacyCard.Section>
            <ButtonGroup>
              <Button tone="success" pressed={true} variant="tertiary">
                Order status page
              </Button>
              <Button variant="plain" disabled>
                Thank you page
              </Button>
              <Badge>Coming soon</Badge>
            </ButtonGroup>
          </LegacyCard.Section>

          <Divider />
          <LegacyCard.Section>
            <Grid columns={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3 }}>
              <Card padding="0">
                <BlockStack align="space-between">
                  <Box padding="300" id="background_liner_Gradient">
                    <BlockStack align="center" inlineAlign="center">
                      <img
                        src="https://protection.blockifyapp.com/static/media/product_offer.48b0a9e4fa0742a505cf5ed8e77b6548.svg"
                        alt=""
                      />
                    </BlockStack>
                  </Box>
                  <Box padding="300" minHeight="min-content">
                    <Box paddingBlockEnd="500">
                      <BlockStack gap="200" align="space-between">
                        <Box>
                          <Text variant="headingMd" as="h6">
                            Product offer
                          </Text>
                          <Text tone="subdued">
                            Upsell with relevant product deals.
                          </Text>
                        </Box>
                      </BlockStack>
                    </Box>
                    <Box
                      position="relative"
                      insetBlockStart="100"
                      insetInlineEnd="100"
                    >
                      <Button>Create</Button>
                    </Box>
                  </Box>
                </BlockStack>
              </Card>

              <Card padding="0">
                <BlockStack align="space-between">
                  <Box
                    padding="300"
                    minHeight="12rem"
                    position="relative"
                    id="background_liner_Gradient"
                  >
                    <BlockStack align="center" gap="200">
                      <Box
                        insetBlockStart="300"
                        position="absolute"
                        padding="200"
                        borderRadius="150"
                        background="bg-surface-warning"
                      >
                        <InlineStack
                          wrap={false}
                          align="center"
                          blockAlign="center"
                          gap="200"
                        >
                          <Box>
                            <Icon source={AlertTriangleIcon} tone="base" />
                          </Box>
                          <BlockStack gap="100">
                            <Text variant="bodyXs" fontWeight="medium">
                              {" "}
                              New arrivals
                            </Text>
                            <Text variant="bodyXs">
                              Discount 10% off for all items of New arrivals.
                            </Text>
                          </BlockStack>
                        </InlineStack>
                      </Box>

                      <Box
                        insetBlockStart="1600"
                        insetInlineStart="600"
                        position="absolute"
                        padding="200"
                        borderRadius="150"
                        background="bg-surface-success"
                      >
                        <InlineStack
                          wrap={false}
                          align="center"
                          blockAlign="center"
                          gap="200"
                        >
                          <Box>
                            <Icon source={CheckCircleIcon} tone="base" />
                          </Box>

                          <Box>
                            <BlockStack gap="100">
                              <Text variant="bodyXs" fontWeight="medium">
                                You’ve got a discount 🎁
                              </Text>
                              <Text variant="bodyXs">
                                Buy 2 more products to unlock the discount.
                              </Text>
                            </BlockStack>
                          </Box>
                        </InlineStack>
                      </Box>

                      <Box
                        insetBlockEnd="300"
                        insetInlineStart="1000"
                        position="absolute"
                        padding="200"
                        color="text-caution-secondary"
                        borderRadius="150"
                        background="bg-surface"
                      >
                        <InlineStack
                          wrap={false}
                          align="center"
                          blockAlign="center"
                          gap="200"
                        >
                          <Box>
                            <Icon tone="critical" source={AlertCircleIcon} />
                          </Box>
                          <BlockStack gap="100">
                            <Text variant="bodyXs" fontWeight="medium">
                              Your order will be delayed until...
                            </Text>
                            <Text variant="bodyXs">
                              Due to the high volume of deliveries, your order…
                            </Text>
                          </BlockStack>
                        </InlineStack>
                      </Box>
                    </BlockStack>
                  </Box>
                  <Box padding="300">
                    <Box paddingBlockEnd="500">
                      <BlockStack gap="200" align="space-between">
                        <Box>
                          <Text variant="headingMd" as="h6">
                            Custom banner
                          </Text>
                          <Text tone="subdued">
                            Share updates, promotions, or messages.
                          </Text>
                        </Box>
                      </BlockStack>
                    </Box>
                    <Box
                      position="relative"
                      insetBlockStart="100"
                      insetInlineEnd="100"
                    >
                      <Button>Create</Button>
                    </Box>
                  </Box>
                </BlockStack>
              </Card>

              <Card padding="0">
                <BlockStack align="space-between">
                  <Box
                    padding="300"
                    minHeight="12rem"
                    id="background_liner_Gradient"
                  >
                    <Box
                      background="bg-fill"
                      padding="300"
                      borderRadius="300"
                      borderColor="border"
                      borderWidth="0165"
                      minHeight="100%"
                      zIndex="2"
                      position="relative"
                    >
                      <SkeletonBodyText lines={2} />
                      <Box paddingBlockStart="400">
                        <Grid columns={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }}>
                          <Box>
                            <img
                              width="50%"
                              src="https://protection.blockifyapp.com/static/media/free_shipping.fbd4dcbd211190c648f2774c23c80714.svg"
                              alt="Black choker necklace"
                            />
                            <Text id="small_text" as="p">
                              FREE SHIPPING
                            </Text>
                          </Box>

                          <Box>
                            <img
                              width="50%"
                              src="https://protection.blockifyapp.com/static/media/easy_return.67675171f12b8a8bdf35c80946a12142.svg"
                            />
                            <Text id="small_text" as="p">
                              EASY RETURNS
                            </Text>
                          </Box>

                          <Box>
                            <img
                              src="https://protection.blockifyapp.com/static/media/money_back.5c1baea1e45d95a6cd2a7e48b7eb612e.svg"
                              width="40%"
                            />
                            <Text id="small_text" as="p">
                              MONEY BACK GUARANTEE
                            </Text>
                          </Box>

                          <Box>
                            <img
                              width="40%"
                              src="https://protection.blockifyapp.com/static/media/customer_service.011b4e9a126af745c481e0406836de1e.svg"
                            />
                            <Text id="small_text" as="p">
                              NON-STOP CUSTOMER SERVICE
                            </Text>
                          </Box>
                        </Grid>
                      </Box>
                    </Box>
                    <Box
                      position="absolute"
                      background="input-border"
                      minHeight="70%"
                      width="90%"
                      insetBlockStart="1000"
                      insetInlineStart="400"
                      borderRadius="200"
                      borderWidth="0165"
                      zIndex="1"
                      borderColor="border"
                    ></Box>
                  </Box>
                  <Box padding="300">
                    <Box paddingBlockEnd="500">
                      <BlockStack gap="200" align="space-between">
                        <Box>
                          <Text variant="headingMd" as="h6">
                            Trust badge
                          </Text>
                          <Text tone="subdued">
                            Strengthen trust and optimize checkout conversion
                            rates.
                          </Text>
                        </Box>
                      </BlockStack>
                    </Box>
                    <Box
                      position="relative"
                      insetBlockStart="100"
                      insetInlineEnd="100"
                    >
                      <Button>Create</Button>
                    </Box>
                  </Box>
                </BlockStack>
              </Card>

              <Card padding="0">
                <BlockStack>
                  <Box
                    padding="300"
                    paddingBlock="1200"
                    minHeight="12rem"
                    id="background_liner_Gradient"
                  >
                    <Box
                      background="bg-fill"
                      padding="300"
                      borderRadius="300"
                      borderColor="border"
                      borderWidth="0165"
                      minHeight="100%"
                      zIndex="2"
                      position="relative"
                    >
                      <Box paddingBlockEnd="300">
                        <Text>Follow us on social media</Text>
                      </Box>
                      <InlineStack gap="200">
                        <img
                          width="10%"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHlSURBVHgBxVfdbcIwEL5Yhed0g3QC2KDwhhBSs0E7Ap0AskGyQUfIAwLegA3SCeoNmr4CIv0OOZEVURJM43xSFN/55z77zmfboRImk8kgy7IXfAOIruM4LsoumUNiDIl/0ul0ojiOpV7p5AXf993D4TCDsSk1CJAJQSQAkbQgwMb3+/0GxT7ZQdLtdodMQrDEM7donNFXNsnB7D3M/otagBBiKGC8UZ9fw+l08gWCokd3AP23PBP49HG5XDr8ofzEOlTLiu7PD4h6jwyBvu8wGJb1aqvJ8XhcNYTLQeiRGYLVahXSfTgTMAL890H3w30gA7Df1+u1LOtVFn3VDUC+OpYRAQwqyzq1nTd0I0xd8FNWwPiADGBKIL2g88gigX9DrRhA0KXwe6rLf7SRJbVHVWMjWWRUjQAJZ043QJ2w31XtGnPB8Xisdbo2RgCJyqvTrskgrLUCdRNRD7HypskJYiLRG6C+rxvlU7YqC95CwFdfjoBJXGgzy4U6xhmt5wFxaU9bJaAnmBYgW10BfrDwCuyoJcD2J+6OIqaWgGQVisVisUU5IvuI+FZ13oa4Rs/hj4TsgZ9mcy6cCfAbDQ9GvsfbWIkofxeyUGRCpZiORqMQcTFVqdQj82t7cY9Q/x3Hm3J5gV+/bNP725fJNAAAAABJRU5ErkJggg=="
                          alt="Black choker necklace"
                        />

                        <img
                          width="10%"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMhSURBVHgBvVc9ctpAFH4S2C5DOneRx427OF264M7YnjEpUwVOEPsEhhOYG4BPYMHw10GZLrjz0HhzgpAWBvD32VqPRrOWVsDwzWi02rf7/t/ukyMhFIvF3HQ6/eU4Th6fx8vlMiebwwhPY3d3t+n7vtKTjh5cXFzkIfB+w0JNUJBx3ev1/DcFCoVCEVbfyxbhuu5Ju90eOnC7B7cPMOfJdjFBOA6ys9msmCBc4Wlyg6QDQ3kZw5v5dpXF4KeJipBMFotFWcdqRVydnZ2V8L4xKQIZ37JIiGPDRjWfz0/6/b4KkpOWHEs6qJ2dnSoyvnF6ejrMZDJ/oglO2Q40XBo2l7vdbgM0al6R9VABryoNgUcHUaJr2KAonMm5hnAfCfYRLr4mDwpnxstrPiUqwIQTJOeNxIA5gmeEZ8hxlAdcP+l0OjV+wPJimHcYWQNvzcwTMxRquBxY9IZIst3gm0p+Rpxf3hHesQq8CzC729vbu6J1QUw9MM8h2XwmG8Lmw3M1rGNl1Sk8Ca7YQ1E4B7CuHiQUhdyinp/Oz8/rpEEZrlG2TNMowJKawMJbjEtRIhQpkcY1DJFYwlaBia4MCnpvEWk64w2JuboCzHa+g2M7FsyLYKjEAlYK6BMM70SrQqfd5jwgQUkitippIRTQd4fV0W2rQC4U27uYdQ3eHzwTbBsb6ypAbOts2VhmPA+idM7h+L3mGnk9kKyQpgy9oAQFV3QJCh0EZ32Z3Q3nSMOZwDWeLdO0J2EJAvJwcZVliamapjFEoNUlZWdlUkBn/ANeeQPdw1PHyUdLR4w1POHBI7kYxVWYdximEFy+EFw3thOiYDx5sWjfoVw1zDtJAS90f1dlfVR1ZYipLYMr/xksYMf6hT8QaKd441XgkU+SAgwhvUhD4jpvKjAIXBmFovZBsq2MhB+eEXvCisTXrYIHfDD4LymAPR+wJ7bl5x8Sf0xyqO+nLfySRaGQnCcu729o+122DFrP5MzwYzweq6OjowdMfhVDrW4S7BOQnAXkVp/fGU2AEo+Hh4dNEP9i0T6m9mVDCDro3xjyvvjRarUeNe0ZVBK/bz9qqgYAAAAASUVORK5CYII="
                        />

                        <img
                          width="10%"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMJSURBVHgBxVc7cuJAEG0JTCzfQA6Il3AzQ8avyvIJzJ5g2RMYTmA4gXG2GVRBARlwAnBKstoTmJiv38MjSgziX+CumppPa2beTL/pbhmiSTabjS8WiweUOLqWYRgW2pacLi7WcFEPbm5uyrVazfUrDa/hOI41mUyesVleLigAUwKQIoCMVgC4+Xg87qAZk+vIIBKJJAjCZI8nv+LmlJjaUwyc3sbp/8k3iGmaCRObX9Tmu2Q+nzsmSPFDzhPa846nQbuI9bqsm82mEQqFHtEf7Zh7b4L1tpwnvel0amOdJ7Rd1H+weYGKer1eI8Adcy2S0JYzBBt2eZWoc+i+ovTpS6jj69pzwCWAswQbDHQzAlA1nU5XwXSS25YLAnDb7barvObawijOIR70XADv3nWfKuFjPiajcao3+SIW2e9yHCRMMGagdlDfyxG82gWggvIfhfaN4Zn9ajQa3S3feuNkvcD+OVTPDEIA3CMR0X4Kmmjg40XAeNF7ShSy2Qsep0omk8kDyIs+HsgBXG3J3/c2JxC6btkiSh9IPETAStD4wSRUMaPPuIHTdHR9KpVyoPtgQTvIvVsHA8D73bgqejtR5Ap4dkuMXgP23tAD2IscCoBeTRFpJeFwmMx3Vbesz4Hfr/jmV/w6tZYjhwJQi6xdGXkAYt4x8KDeuGK+EOhuWVqtVk1T29v22foM8eweUJX0cT2n00EGjdM34ECBc7Y9Qw9Ewv/2QcQYbFmVr2da8Y1bs9ksjkI7P0K3ioDq+l+37bETAIQnSgQsSCdDEw1oKrRt1X7zA8O3Meg6u2KCgSf1sS9oMMbDrmvm4OK4oeU8ENTVTYMY8RvzCvvW5g3sC5meML8vM/77b8QvylfQ5eYOXhM30MeiR2XEKs1agfDMcOwPDNO3MIOFHJmSq43i2pgcK5jzDjOaNfkmQeZUCg2HQzcajd6i/1OuK2UQ++/SE8J7FWCPgVxPmMwU2FgCoAdDuGReX5bLS9n7L2TH0LXJZNIGL/LMdFVKbcuJolK4kap75JueVX0CklecsH6L2kMAAAAASUVORK5CYII="
                        />

                        <img
                          width="10%"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJaSURBVHgBxVc7khoxEO0RC/H4BuOA2DhztkxGAVWeG9jcYG8AcwPmBMaZwwn4ZeyewGxKsjoCMRTg11TjoqYW0cKAX5VKUqmlfpJa3a2ACmi32/XdbvcVpY5uGARBiHZIl8NiDYt6Xi6XszzP7fFgcGgkSRKu1+sulD3RDQEyfRBJQWT5lwArX61WMzRrdB/MK5VKzCQM93jnd1TOqIlOCrD7CLt/o/8AY0xsoPymd+7CdrtNDIzik88kyLPxpLjDj+PxOOCC/meUDoolPzwGzWaTjz9STrBgHU+nU/veYKPRiHCsM5/1jIcw31nnlHIGj7EM6REaD2E7HA6fzwmJjCUdvAi8agXhzF60sj4E5lpBcb0qPJwZt2L1y81mMyAlYKiDUqn0iOY+huBEapcS+DkajXrkCTHUmNsIbl0XAX6GO9diOIGBBA9LHtAGt7M2gAW+w1v+BlF1rGD3DuVvmsiqNcJQ8gMVoDzR5hDqV4AFc60sDDYX470agdTlAYsQ2VQjqyGQIuD0yBN4PX0NiZME5Ag7lyg/QOY6o+RJArjzGAsM6B/Ba7gClNMP4BSeUVJNEHoPkmF3XS/IuKyVJ8Ktzlqt1jfyBM/hueeer09CYo/+CByYMqn5pOqo9n8J3hBqS7ok1z7IBIUsRUdyvPiPQ+d4vhBUeU2OmsYndl8b0P0KAzVqD3dtwEb6pcViYavV6gf0v9B9kU0mk197P4AUu4f7UGc8VwB/zXrc2BPgPxpiPicQGd0e2eFfyJ2gOCq5/RN/WGAkEXmk7UXIC1tK/cL2VnRqfwALhji6b8nLOgAAAABJRU5ErkJggg=="
                        />

                        <img
                          width="10%"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJGSURBVHgBxVc9bsIwFH5OATGmN0gH5sLWDbIhQGp6AugNeoPCCUpOUMZupRJ/W+EGdGVpblBGBAL6vShGFFEwwSGfZMVOHL/P9nufnwXtoFKpFNbr9T1KAU1TCGGiblJ4eBjDw3OcTCbddrvtbX8UsuI4jrlYLJ5h7IkiBMg0QaQBItMNATY+n88/Uc3SZTBOpVI2kzC4xTO/oHFGNrBJArO3MPtvigGGYdgGjEe654ewWq0cA05xS/Ehb8DrLYoPJjuhRWcAy3jT6/UEFzQ9Og0+AZ34oNOglwBWowmfmp7yj1YCg8HAWy6XOZAYqv6jewt8Et1u14bSXZOCT2glwJIu61LrdRPwUFyUx317DXl9L5VKNRRlWU+odGJjcLBGv99vyncwwlr+55gONOU1+K4ytBoBDGzD+JgigAqBFkRmY1wmLKhyokLnQoWAKyu87NiKOmnEUSeUsw88vH6oL6dvpJuAxGw22zt4Op3eREOY3PEoARlSLDB7FK4l4519g0JAxQccFH8bkEw+cAIDInnMdgS124Ql2lUKAVEul3+OLN0UhnK76fQ2WHwoiP9TwQnJMcn0M2bOHfd9xASqWJEXCgcvwSqnEM9+4gpjLV56Jo2E0sJ7eYEJBb6wJHhAUkzJ0beGRw0/kg4RwhhfmIjRppjACczVZDLxMpkMn913dFm4OF/efB2Al9exrJEcNv+Ar2Z1rvgEWEwQ4zZt6X6EcOW9kBti92uxWLTgFyw2t8H5blFIBBE2DZ4j9rdOpzPc7vML1GsNUC5ZnPIAAAAASUVORK5CYII="
                        />

                        <img
                          width="10%"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJDSURBVHgBxZc9UsJAFMdflsBQxhvEgtqUdkLH14w5AjfQGwg3ICdw7CwpGKATTyC2NO4NpGT49P9i4ji6GxJY4DcTdjcb3vtnP96+WPSHZrNZ3m63t7jKaDqWZTmoO7Q/EjYkykk+nw96vZ783WnFFd/3neVy+QBn93REIKYLIR0Imf0IYOeLxeIFVY9Ow6RQKFRYhOAWv/kJnTNe5JMsvL2Lt/+gMyCEqAg4P+qcJ7HZbHyBRXFF5+NGYNW7dD4cGz+uqgcjM4O4J97DKMMtgzmTlAKOHev1OowhGGYP5Y3GTyhAhYSBymg0kmSAarXq5nK5N0VAc4TqD3gwMOWcYVtsU9WnFAC1EzIMpm+svK+6uVqtJCXAkZMyorOpFFAsFmeUbMyr1+sfuFqUEp1NpYD4oNiBi+sxrRCdTUGH48ZCarWaTxkxIYCRuDrD4bBHGbHpAKJgFeBo7aactn8oR2DXKrdtm511kFhcDgaDdhrnOpvKEZjP5/yw1igccpzIFCvYJmLBv/vKEcAbumQYnU2lABwgZTIM1oqXWgC440yJDMG2IOBO1Wc1Go1PTdrN6fQY5Tsfx2mPYiY+ikMH3wlPS5fa29FZr+pk1a24gWmhtMDpTx02kh6VnJLttX9NwMkOp2SvdCbg+x1TKzKHT1NgWru56XQqS6XSBdrXdFoCnB3P4TZELG9jPoxnQQnwp1mbK6EAjuWI6xVWRccniL8LuWH97eUMFuvinvdv9M3g0p5Ep+UsKl95vfX7/fHvZ74ApiMHGhpPDpcAAAAASUVORK5CYII="
                        />

                        <img
                          width="10%"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALtSURBVHgBxVdNctowGJVNYU1OELNgHZbd1ewYYCb0BCEnSHqCwAmKT1Cy6y50hr8d5ARxtmyq3iDdwgz0PSpR4XFk89s3YyRZsr73/Uo4IoJ6ve6vVqtrPD6Gecdx8ujnxf6Q2EOiDbPZbNDr9aQ56ehOo9HILxaLBwi7FycEyHRApA0ibxsCFD6fzyfolsR5EOZyuTJJuBxR8zMKJ0pKpnCgvQftf4r/ANd1yy6Ep/Y5/Ee/BZlM5jNMWBgOhw4f9C+4Gea/YF6m3W+5XDacWq02URFvFYzF7dFo1BEpUK1Wm/jma4rsCR0spvk9yyIJ4eXxeCz1C5WqjJlLtL+5BlaYmilWqVQ8WGWStDcJrCwLaKaCFo61JaWZH7c2mmJq/cRiib9ZYEE7ItzqLtYQRPeTHiM+QrwLLPvnrQSgfZctMwXNk6EJ399i/BhDwgfZlh7DNda4eZcAtJ1q7ZEpvvjnyzY0u8XTRVAy2KYx337SfboD41DsSgCavBob3ui+toox/hXzrR9Z8yp2JQC8xbyTZjasN3DdS3EAbAQ2G6sCRGxFM8+Qd4Jyi7yNpI2Arzsw4Q9NgNmg3yM2GnEfxvi8tA8BjwWHHQZcXCBBs+u4D83sUEUrvw8Bav6NZlZDmlUyt435OM24pmuQuREWJBUinpQvyhIUthXNsEoQGU9ZtvWYZwIING0CPohkeNh0ovo9c2IwGHRALsQ8677s9/tTQ7gu2+JQAiY25ofgOwgMTKHmHAS30twlEw8jA/RtgR3jEiPxPKqWLrhC09zlEruLBTb+V6WZ8PA86PdJ5o6DaxSZJGzMb9b6Q+GCdVoCkj80f1Jk7wCZ2gLarzjv78SRwD8stMBzmsVIsyum1jH/uPDExb5uL+XiJpoXcUSgfnQys9lMFovFC4w/ivMiwIXm+7oU49rUst1aTgD+NWuxsybAaxNus6zhgTg9Av2/kAMnOqvu8/esavC7J+z3eiuYYUxz1T4z3qKl+w/GOp7u1PEkDAAAAABJRU5ErkJggg=="
                        />
                      </InlineStack>
                    </Box>
                    <Box
                      position="absolute"
                      background="input-border"
                      minHeight="37%"
                      width="91%"
                      insetBlockStart="1600"
                      insetInlineStart="200"
                      borderRadius="200"
                      borderWidth="0165"
                      zIndex="1"
                      borderColor="border"
                    ></Box>
                  </Box>
                  <Box padding="300">
                    <Box paddingBlockEnd="500">
                      <BlockStack gap="200" align="space-between">
                        <Box>
                          <Text variant="headingMd" as="h6">
                            Trust badge
                          </Text>
                          <Text tone="subdued">
                            Strengthen trust and optimize checkout conversion
                            rates.
                          </Text>
                        </Box>
                      </BlockStack>
                    </Box>
                    <Box
                      position="relative"
                      insetBlockStart="100"
                      insetInlineEnd="100"
                    >
                      <Button>Create</Button>
                    </Box>
                  </Box>
                </BlockStack>
              </Card>

              <Card padding="0">
                <BlockStack>
                  <Box
                    padding="300"
                    paddingBlock="500"
                    minHeight="12rem"
                    id="background_liner_Gradient"
                  >
                    <Box
                      background="bg-fill"
                      padding="300"
                      borderRadius="300"
                      borderColor="border"
                      borderWidth="0165"
                      minHeight="100%"
                      zIndex="2"
                      position="relative"
                    >
                      <BlockStack gap="200">
                        <Box
                          background="bg-fill-info-active"
                          padding="300"
                          borderRadius="200"
                          color="text-brand-on-bg-fill"
                        >
                          <Text alignment="center">Need any help?</Text>
                        </Box>
                        <Box
                          borderWidth="025"
                          borderColor="border"
                          padding="300"
                          borderRadius="200"
                          color="text-info"
                        >
                          <Text alignment="center">Chat with us</Text>
                        </Box>
                      </BlockStack>
                    </Box>
                    <Box
                      position="absolute"
                      background="input-border"
                      minHeight="60%"
                      width="91%"
                      insetBlockStart="800"
                      insetInlineStart="200"
                      borderRadius="200"
                      borderWidth="0165"
                      zIndex="1"
                      borderColor="border"
                    ></Box>
                  </Box>
                  <Box padding="300">
                    <Box paddingBlockEnd="500">
                      <BlockStack gap="200" align="space-between">
                        <Box>
                          <Text variant="headingMd" as="h6">
                            Trust badge
                          </Text>
                          <Text tone="subdued">
                            Strengthen trust and optimize checkout conversion
                            rates.
                          </Text>
                        </Box>
                      </BlockStack>
                    </Box>
                    <Box
                      position="relative"
                      insetBlockStart="100"
                      insetInlineEnd="100"
                    >
                      <Button>Create</Button>
                    </Box>
                  </Box>
                </BlockStack>
              </Card>

              <Card padding="0">
                <Box
                  padding="300"
                  minHeight="12rem"
                  id="background_liner_Gradient"
                >
                  <BlockStack align="center" inlineAlign="center">
                    <img
                      height="150"
                      src="https://protection.blockifyapp.com/static/media/promote_banner_checkout.334c52c5c6942fb28da0.png"
                      alt=""
                    />
                  </BlockStack>
                </Box>
                <Box padding="300">
                  <Box paddingBlockEnd="500">
                    <BlockStack gap="200" align="space-between">
                      <Box>
                        <Text variant="headingMd" as="h6">
                          Trust badge
                        </Text>
                        <Text tone="subdued">
                          Strengthen trust and optimize checkout conversion
                          rates.
                        </Text>
                      </Box>
                    </BlockStack>
                  </Box>
                  <Box
                    position="relative"
                    insetBlockStart="100"
                    insetInlineEnd="100"
                  >
                    <Button>Create</Button>
                  </Box>
                </Box>

                <Box
                  background="bg-fill"
                  opacity="0.4"
                  position="absolute"
                  minHeight="100%"
                  width="100%"
                  insetBlockStart="0"
                ></Box>
              </Card>
            </Grid>
          </LegacyCard.Section>
        </LegacyCard>
      </BlockStack>
    </Page>
  );
}
