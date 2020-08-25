import React, { useState, useEffect } from "react";
import UIContext from "./UIContext";
import { Grid } from "antd";

const { useBreakpoint } = Grid;
export default function UIState({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const screens = useBreakpoint();

  useEffect(() => {
    if (screens.md) setIsCollapsed(false);
  }, [screens]);

  return (
    <UIContext.Provider
      value={{
        isCollapsed,
        screens,
        setIsCollapsed,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}
