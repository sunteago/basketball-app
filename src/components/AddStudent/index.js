import React from "react";
import { Form, Input, Button } from "antd";
import classes from "./index.module.css";

const requiredRules = [
  {
    required: true,
  },
];

export default function AddStudent() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      className={classes.Form}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
    >
      <Form.Item name="student" label="Alumno" rules={requiredRules}>
        <Input />
      </Form.Item>
      <Form.Item name="docket" label="Legajo" rules={requiredRules}>
        <Input />
      </Form.Item>

      <Form.Item className={classes.FormButtons}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
}
