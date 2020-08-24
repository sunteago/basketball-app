import React, { useState } from "react";
import ShotsContext from "./ShotsContext";

export default function ShotsState({ children }) {
  const [shots, setShots] = useState([]);

  return (
    <ShotsContext.Provider
      value={{
        shots,
        setShots,
      }}
    >
      {children}
    </ShotsContext.Provider>
  );
}
