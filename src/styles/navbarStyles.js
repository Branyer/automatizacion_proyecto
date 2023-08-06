import { createStyles } from "@mantine/core";

export const navbarStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: "#178F8C",
    padding: theme.spacing.md,
  },
  navbar_item: {
    ...theme.fn.focusStyles(),
    color: "#FFF",
    textDecoration: "none",
    padding: theme.spacing.xs,
    borderRadius: theme.radius.md,
    transition: "all ease-in 200ms",

    "&:hover": {
      color: "#DB8E0D",
    },
  },
  navbar_item_active: {
    backgroundColor: "#DB8E0D",

    "&:hover": {
      color: "#FFF",
    },
  },
  text: {
    fontSize: theme.fontSizes.md,
    fontWeight: "500",
  },
}));
