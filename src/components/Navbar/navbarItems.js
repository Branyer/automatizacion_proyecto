import { IconGauge, IconChartBar } from "@tabler/icons-react";

export const navbarItems = [
  {
    path: "/",
    route: "Dashboard",
    icon: <IconGauge size={30} />,
  },
  {
    path: "/analytics",
    route: "Analytics",
    icon: <IconChartBar size={30} />,
  },
];
