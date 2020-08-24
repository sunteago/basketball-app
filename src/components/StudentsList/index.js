import React, { useContext } from "react";
import { Table } from "antd";
import classes from "./index.module.css";
import StudentsContext from "../../context/students/StudentsContext";
import { formatTime } from "../../utils";

const studentsColumn = [
  {
    title: "Alumno",
    dataIndex: "student",
    key: "student",
    render: (text) => text,
  },
  {
    title: "Legajo",
    dataIndex: "docket",
    key: "docket",
    render: (text) => text,
  },
  {
    title: "Agregado",
    dataIndex: "added",
    key: "added",
    render: formatTime,
  },
];

export default function StudentsList() {
  const { students } = useContext(StudentsContext);

  const sortedStudents = students && students.sort((a, b) => b.added - a.added);

  return (
    <Table
      className={classes.Table}
      tableLayout="auto"
      columns={studentsColumn}
      dataSource={sortedStudents}
      size="small"
      locale={{
        emptyText: "No has agregado a ningun alumno aún",
      }}
    />
  );
}
