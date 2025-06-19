import * as React from "react";
import { PolarisVizProvider, BarChart, LineChart } from "@shopify/polaris-viz";
import "@shopify/polaris-viz/build/esm/styles.css";

export default function Carousel() {
  return (
    <PolarisVizProvider>
      <LineChart
        data={[
          {
            data: [
              { value: 0, key: "2020-04-01T12:00:00" },
              { value: 0, key: "2020-04-02T12:00:00" },
              { value: 0, key: "2020-04-03T12:00:00" },
              // { value: 0, key: "2020-04-04T12:00:00" },
              // { value: 0, key: "2020-04-05T12:00:00" },
              // { value: 0, key: "2020-04-06T12:00:00" },
              // { value: 0, key: "2020-04-07T12:00:00" },
            ],
          },
        ]}
      />
    </PolarisVizProvider>
  );
}
