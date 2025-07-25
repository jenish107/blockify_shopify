import { Navigation, Text } from "@shopify/polaris";
import { NavLink, useLocation, useNavigate } from "react-router";

import { HomeIcon, ProductIcon } from "@shopify/polaris-icons";
import { useEffect, useState } from "react";

export default function Navigation_bar() {
  let navigate = useNavigate();
  const location = useLocation();

  const basePath = "/" + location.pathname.split("/")[1];

  const handleNavigationOnClick = (path) => {
    navigate(path);
  };

  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: "#",
            onClick: () => handleNavigationOnClick("/Blockify-Checkout"),
            label: "Blockify Checkout",
            selected: basePath == "/Blockify-Checkout",
            icon: ProductIcon,
            subNavigationItems: [
              {
                url: "#",
                onClick: () => handleNavigationOnClick("/Checkout-rules"),
                matches: basePath == "/Checkout-rules",
                label: "Checkout rules",
              },
              {
                url: "#",
                onClick: () => handleNavigationOnClick("/Cash-on-Delive"),
                matches: basePath == "/Cash-on-Delive",
                label: "Cash on Delive",
              },
              {
                url: "#",
                onClick: () => handleNavigationOnClick("/Checkout"),
                matches: basePath == "/Checkout",
                label: (
                  <Text
                    fontWeight={basePath == "/Checkout" ? "bold" : ""}
                    truncate
                  >
                    Postpurchase customization
                  </Text>
                ),
              },
              {
                url: "#",
                onClick: () => handleNavigationOnClick("/Settings"),
                matches: basePath == "/Settings",
                label: "Settings",
              },
              {
                url: "#",
                onClick: () => handleNavigationOnClick("/Pricing"),
                matches: basePath == "/Pricing",
                label: "Pricing",
              },
              {
                url: "#",
                onClick: () => handleNavigationOnClick("/Analytics"),
                label: "Analytics",
                matches: basePath == "/Analytics",
              },
            ],
          },
        ]}
        // items={[
        //   {
        //     url: "/Blockify-Checkout",
        //     label: "Blockify Checkout",
        //     selected: window.location.pathname == "/Blockify-Checkout",
        //     icon: ProductIcon,
        //     subNavigationItems: [
        //       {
        //         url: "/Checkout-rules",
        //         matches: window.location.pathname == "/Checkout-rules",
        //         label: "Checkout rules",
        //       },
        //       {
        //         url: "/Cash-on-Delive",
        //         matches: window.location.pathname == "/Cash-on-Delive",
        //         label: "Cash on Delive",
        //       },
        //       {
        //         url: "/Checkout",
        //         matches: window.location.pathname == "/Checkout",
        //         label: (
        //           <Text
        //             fontWeight={
        //               window.location.pathname == "/Checkout" ? "bold" : ""
        //             }
        //             truncate
        //           >
        //             Postpurchase customization
        //           </Text>
        //         ),
        //       },
        //       {
        //         url: "/Settings",
        //         matches: window.location.pathname == "/Settings",
        //         label: "Settings",
        //       },
        //       {
        //         url: "/Pricing",
        //         matches: window.location.pathname == "/Pricing",
        //         label: "Pricing",
        //       },
        //       {
        //         url: "/Analytics",
        //         label: "Analytics",
        //         matches: window.location.pathname == "/Analytics",
        //       },
        //     ],
        //   },
        // ]}
      />
    </Navigation>
  );
}
