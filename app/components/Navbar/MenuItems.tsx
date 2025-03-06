import React from "react";
import { type RouteConfigEntry } from "@react-router/dev/routes";
import { cfl } from "~/utils/stringUtils";
import routes from "~/routes";
import { NavLink } from "react-router";

interface MenuItemsProps {
  hrefPrefix?: string;
}

const MenuItems: React.FC<MenuItemsProps> = ({
  hrefPrefix = "",
}): React.ReactElement => {
  const renderMenuItems = (routes: RouteConfigEntry[], hrefPrefix?: string) => {
    return routes
      .sort((a, b) => (a.path || "").localeCompare(b.path || ""))
      .map((route, index): React.ReactElement => {
        if (!route.path) {
          return <React.Fragment key={`empty-${index}`} />;
        } else if (route.children && route.children.length > 0) {
          return (
            <li key={route.id}>
              <details>
                <summary>{cfl(route.path)}</summary>
                <ul className="p-2">
                  {renderMenuItems(
                    route.children,
                    hrefPrefix && hrefPrefix.length > 0
                      ? `${hrefPrefix}/${route.path}`
                      : route.path,
                  )}
                </ul>
              </details>
            </li>
          );
        } else {
          return (
            <li key={route.id}>
              <NavLink to={`${hrefPrefix}/${route.path}`}>
                {cfl(route.path)}
              </NavLink>
            </li>
          );
        }
      });
  };

  return <>{renderMenuItems(routes, hrefPrefix)}</>;
};

export default MenuItems;
