import React, { createContext, useState } from "react";

const initialState = {
  active: "",
  setActive: () => {},
};

export const NavbarContext = createContext(initialState);

export const NavbarProvider = ({ initialRoute = "", ...props }) => {
  const [active, setActive] = useState(initialRoute);
  return (
    <NavbarContext.Provider value={{ active, setActive }}>
      {props.children}
    </NavbarContext.Provider>
  );
};
