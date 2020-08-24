import React, { useContext } from "react";
import { Form, Input, Button } from "antd";
import classes from "./index.module.css";
import StudentsList from "../StudentsList";
import StudentsContext from "../../context/students/StudentsContext";

const requiredRules = (field) => [
  {
    transform: (val = "") => val.trim(),
    message: `El ${field} es inválido o demasiado corto!`,
    required: true,
    min: 5,
    whitespace: true,
  },
];

export default function AddStudent() {
  const [form] = Form.useForm();

  const { setStudents } = useContext(StudentsContext);

  const onFinishHandler = (values) => {
    setStudents((prevStudents) => [
      ...prevStudents,
      {
        student: values.student,
        docket: values.docket,
        added: new Date().getTime(),
        key: Math.random(),
      },
    ]);
    resetFields();
  };

  const resetFields = () => form.resetFields();

  return (
    <>
      <Form
        className={classes.Form}
        form={form}
        name="control-hooks"
        onFinish={onFinishHandler}
      >
        <Form.Item
          name="student"
          label="Alumno"
          rules={requiredRules("alumno")}
        >
          <Input />
        </Form.Item>
        <Form.Item name="docket" label="Legajo" rules={requiredRules("legajo")}>
          <Input />
        </Form.Item>

        <Form.Item className={classes.FormButtons}>
          <Button type="primary" htmlType="submit">
            Agregar
          </Button>
          <Button htmlType="button" onClick={resetFields}>
            Borrar todo
          </Button>
        </Form.Item>
      </Form>
      <StudentsList />
    </>
  );
}
