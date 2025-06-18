import { Navigation } from "@shopify/polaris";

import { HomeIcon, ProductIcon } from "@shopify/polaris-icons";

export default function Navigation_bar() {
  console.log("path--------", window.location.pathname);
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
                matches:
                  window.location.pathname == "/Checkout-rules" ? true : false,
                label: "Checkout rules",
              },
              {
                url: "/Cash-on-Delive",
                matches:
                  window.location.pathname == "/Cash-on-Delive" ? true : false,
                label: "Cash on Delive",
              },
              {
                url: "/Checkout",
                matches: window.location.pathname == "/Checkout" ? true : false,
                label: "Checkout Componet",
              },
              {
                url: "/Settings",
                matches: window.location.pathname == "/Settings" ? true : false,
                label: "Settings",
              },
              {
                url: "/Pricing",
                matches: window.location.pathname == "/Pricing" ? true : false,
                label: "Pricing",
              },
              {
                url: "/Analytics",
                label: "Analytics",
                matches:
                  window.location.pathname == "/Analytics" ? true : false,
              },
            ],
          },
        ]}
      />
    </Navigation>
  );
}
