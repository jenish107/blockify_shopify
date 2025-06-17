import { Navigation } from "@shopify/polaris";

import { HomeIcon, ProductIcon } from "@shopify/polaris-icons";

export default function Navigation_bar() {
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: "/",
            label: "Blockify Checkout",
            icon: ProductIcon,

            subNavigationItems: [
              {
                url: "/Checkout-rules",
                label: "Checkout rules",
              },
              {
                url: "/Cash-on-Delive",
                label: "Cash on Delive",
              },
              {
                url: "/Checkout",
                label: "Checkout",
              },
              {
                url: "/Settings",
                label: "Settings",
              },
              {
                url: "/Pricing",
                label: "Pricing",
              },
              {
                url: "#",
                matches: true,
                label: "Inventory",
              },
            ],
          },
        ]}
      />
    </Navigation>
  );
}
