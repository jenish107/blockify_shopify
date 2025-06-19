import { Navigation, Text } from "@shopify/polaris";

import { HomeIcon, ProductIcon } from "@shopify/polaris-icons";

export default function Navigation_bar() {
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: "/Blockify-Checkout",
            label: "Blockify Checkout",
            selected: window.location.pathname == "/Blockify-Checkout",
            icon: ProductIcon,
            subNavigationItems: [
              {
                url: "/Checkout-rules",
                matches: window.location.pathname == "/Checkout-rules",
                label: "Checkout rules",
              },
              {
                url: "/Cash-on-Delive",
                matches: window.location.pathname == "/Cash-on-Delive",
                label: "Cash on Delive",
              },
              {
                url: "/Checkout",
                matches: window.location.pathname == "/Checkout",
                label: (
                  <Text
                    fontWeight={
                      window.location.pathname == "/Checkout" ? "bold" : ""
                    }
                    truncate
                  >
                    Postpurchase customization
                  </Text>
                ),
              },
              {
                url: "/Settings",
                matches: window.location.pathname == "/Settings",
                label: "Settings",
              },
              {
                url: "/Pricing",
                matches: window.location.pathname == "/Pricing",
                label: "Pricing",
              },
              {
                url: "/Analytics",
                label: "Analytics",
                matches: window.location.pathname == "/Analytics",
              },
            ],
          },
        ]}
      />
    </Navigation>
  );
}
