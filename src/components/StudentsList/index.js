import React from "react";
import { Table } from "antd";
import classes from "./index.module.css";
import { formatTime } from "../../utils";

const studentsColumn = (onDelete) => [
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
  {
    title: "Borrar",
    key: "key",
    render: (student) => (
      <span onClick={onDelete(student)} className={classes.DeleteIcon}>
        &times;
      </span>
    ),
  },
];

export default function StudentsList({ students, setStudents }) {
  const onDeleteHandler = (student) => () => {
    setStudents(students.filter((std) => std.key !== student.key));
  };
  const sortedStudents = students && students.sort((a, b) => b.added - a.added);

  return (
    <Table
      className={classes.Table}
      tableLayout="auto"
      columns={studentsColumn(onDeleteHandler)}
      dataSource={sortedStudents}
      size="small"
      locale={{
        emptyText: "No has agregado a ningun alumno aún",
      }}
      pagination={{ pageSize: 5 }}
    />
  );
}
