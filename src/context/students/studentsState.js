import React, { useState, useEffect } from "react";
import StudentsContext from "./studentsContext";

export default function ShotsState({ children }) {
  const [shots, setShots] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const savedShots = sessionStorage.getItem("bbApp_shots");
    const savedStudents = localStorage.getItem("bbApp_students");
    if (savedShots) setShots(JSON.parse(savedShots));
    if (savedStudents) setStudents(JSON.parse(savedStudents));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("bbApp_shots", JSON.stringify(shots));
  }, [shots]);

  useEffect(() => {
    localStorage.setItem("bbApp_students", JSON.stringify(students));
  }, [students]);

  return (
    <StudentsContext.Provider
      value={{
        students,
        shots,
        setStudents,
        setShots,
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
}
