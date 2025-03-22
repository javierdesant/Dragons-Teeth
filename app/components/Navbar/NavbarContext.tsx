import React, { createContext, useContext } from "react";

const NavbarContext = createContext<NavbarProps>({
  filters: ["admin"],
  hrefPrefix: "",
});

export const NavbarProvider: React.FC<React.PropsWithChildren<NavbarProps>> = ({
  children,
  filters = [],
  hrefPrefix = "",
}) => {
  return (
    <NavbarContext.Provider value={{ filters, hrefPrefix }}>
      {children}
    </NavbarContext.Provider>
  );
};

// Hook para consumir el contexto en cualquier componente
export const useNavbar = () => useContext(NavbarContext);
