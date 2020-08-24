import React, { useState, useEffect } from "react";
import ShotsContext from "./ShotsContext";

export default function ShotsState({ children }) {
  const [shots, setShots] = useState([]);

  useEffect(() => {
    const savedShots = sessionStorage.getItem("bbApp_shots");
    if (savedShots) setShots(JSON.parse(savedShots));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("bbApp_shots", JSON.stringify(shots));
  }, [shots]);

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
