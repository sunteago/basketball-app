import React, { useState, useEffect } from "react";
import StudentsContext from "./StudentsContext";

export default function StudentsState({ children }) {
  const [students, setStudents] = useState([
    // {
    //   student: "Santi",
    //   docket: "12323",
    //   added: new Date(),
    //   key: Math.random(),
    // },
  ]);

  useEffect(() => {
    const savedStudents = localStorage.getItem("bbApp_students");
    if (savedStudents) setStudents(JSON.parse(savedStudents));
  }, []);

  useEffect(() => {
    localStorage.setItem("bbApp_students", JSON.stringify(students));
  }, [students]);

  return (
    <StudentsContext.Provider
      value={{
        students,
        setStudents,
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
}
