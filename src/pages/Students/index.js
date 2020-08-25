import React, { useContext } from "react";
import { Typography } from "antd";

import classes from "./index.module.css";
import AddStudentForm from "../../components/AddStudent";
import StudentsList from "../../components/StudentsList";
import studentsContext from "../../context/students/studentsContext";

const { Title } = Typography;

export default function Students() {
  const { students, setStudents } = useContext(studentsContext);

  return (
    <>
      <Title className={classes.Title}>Nuevo Alumno</Title>
      <div className={classes.Container}>
        <AddStudentForm setStudents={setStudents} />
        <StudentsList students={students} setStudents={setStudents} />
      </div>
    </>
  );
}
