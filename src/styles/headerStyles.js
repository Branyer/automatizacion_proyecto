import { createStyles } from "@mantine/core";

export const headerStyles = createStyles((theme) => ({
  header: {
    backgroundColor: "#178F8C",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    padding: theme.spacing.md,
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },
  logo: {
    height: '50px',
  },
  title: {
    color: "#FFF",
    fontSize: 32
  }
}));
