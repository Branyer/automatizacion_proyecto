import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavbarContext } from "../../../context/NavbarContext";
import { Text, Box, Group } from "@mantine/core";
import { navbarStyles } from "../../../styles/navbarStyles";

export const NavbarItem = ({ path, icon, route }) => {
  const { classes, cx } = navbarStyles();
  const { active, setActive } = useContext(NavbarContext);

  return (
    <Box
      component={Link}
      to={path}
      className={cx(classes.navbar_item, {
        [classes.navbar_item_active]: path === active,
      })}
      onClick={() => setActive(path)}
    >
      <Group spacing="xs">
        {icon}
        <Text className={classes.text}>{route}</Text>
      </Group>
    </Box>
  );
};
