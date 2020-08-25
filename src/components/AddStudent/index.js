import React, { useRef, useEffect } from "react";
import { Form, Input, Button } from "antd";
import classes from "./index.module.css";

import { Student } from "../../models";
import { addStudentRules } from "../../utils";

export default function Students({ setStudents }) {
  const [form] = Form.useForm();

  const studentRef = useRef();

  useEffect(() => {
    studentRef.current.focus();
  }, []);

  const onFinishHandler = (values) => {
    setStudents((prevStudents) => [...prevStudents, new Student(values)]);
    form.resetFields();
    studentRef.current.focus();
  };

  return (
    <Form className={classes.Form} form={form} onFinish={onFinishHandler}>
      <Form.Item
        className={classes.FormItem}
        name="student"
        label="Alumno"
        rules={addStudentRules("alumno")}
      >
        <Input ref={studentRef} />
      </Form.Item>
      <Form.Item
        className={classes.FormItem}
        name="docket"
        label="Legajo"
        rules={addStudentRules("legajo")}
      >
        <Input />
      </Form.Item>

      <Form.Item className={classes.FormButtons}>
        <Button type="primary" htmlType="submit">
          Agregar
        </Button>
        <Button htmlType="button" onClick={form.resetFields}>
          Limpiar campos
        </Button>
      </Form.Item>
    </Form>
  );
}
