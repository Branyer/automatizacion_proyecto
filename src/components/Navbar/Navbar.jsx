import React from "react";
import { useLocation } from "react-router";
import { Navbar as MantineNavbar, Stack } from "@mantine/core";
import { NavbarItem } from "./components/NavbarItem";
import { NavbarProvider } from "../../context/NavbarContext";
import { navbarStyles } from "../../styles/navbarStyles";
import { navbarItems } from "./navbarItems";

export const Navbar = () => {
  const { classes } = navbarStyles();
  const route = useLocation();

  return (
    <NavbarProvider initialRoute={route.pathname}>
      <MantineNavbar className={classes.navbar} width={{ base: 250 }}>
        <MantineNavbar.Section grow>
          <Stack spacing="xs">
            {navbarItems.map((item, index) => (
              <NavbarItem {...item} key={index} />
            ))}
          </Stack>
        </MantineNavbar.Section>
      </MantineNavbar>
    </NavbarProvider>
  );
};
