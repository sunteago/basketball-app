import React, { useState, useContext } from "react";
import StudentsContext from "../../context/students/StudentsContext";
import ShotsContext from "../../context/shots/ShotsContext";

import { Form, Button, InputNumber, Divider, Checkbox, Select } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import classes from "./index.module.css";
import SelectInput from "../form/SelectOptions";

export default function AddShot() {
  const [checked, setChecked] = useState(false);

  const [form] = Form.useForm();

  const { students } = useContext(StudentsContext);
  const { setShots } = useContext(ShotsContext);

  const onFinishHandler = (values) => {
    setShots((prevShots) => [
      ...prevShots,
      {
        key: Math.random(),
        student: values.student,
        position: values.position,
        distance: values.distance,
        scored: checked,
      },
    ]);
    resetFields();
  };

  const resetFields = () => form.resetFields();

  return (
    <>
      <div className={classes.TitleContainer}>
        <h2 className={classes.Title}>Agregar Tiro</h2>
      </div>
      <Divider className={classes.Divider} />
      <Form
        form={form}
        name="control-hooks"
        layout="vertical"
        onFinish={onFinishHandler}
        className={classes.FormContainer}
        colon={false}
        labelAlign="left"
        initialValues={{
          student: "",
          position: "",
          distance: 1.5,
        }}
      >
        <Form.Item
          name="student"
          labelCol={{ span: 12 }}
          label="Alumno"
          className={classes.FormInput}
        >
          <Select
            showSearch
            style={{ width: "100%" }}
            placeholder="Alumno"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {SelectInput({ students })}
          </Select>
        </Form.Item>

        <Form.Item
          labelCol={{ span: 12 }}
          name="position"
          label="Posición"
          className={classes.FormInput}
        >
          <Select
            showSearch
            style={{ width: "100%" }}
            placeholder="Alumno"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {SelectInput()}
          </Select>
        </Form.Item>

        <Form.Item
          name="distance"
          label="Metros"
          className={`${classes.FormInput}`}
        >
          <InputNumber
            className={classes.Meters}
            min={0}
            max={10}
            step={0.5}
            id="distance"
          />
        </Form.Item>

        <Form.Item
          labelAlign="left"
          colon={false}
          className={`${classes.FormInput} ${classes.SwitchContainer}`}
        >
          <Checkbox
            className={classes.Switch}
            checked={checked}
            onChange={() => setChecked((prev) => !prev)}
          >
            Encesto?
          </Checkbox>
        </Form.Item>

        <Form.Item
          className={`${classes.FormInput} ${classes.ButtonContainer}`}
        >
          <Button
            className={classes.Button}
            type="primary"
            size="small"
            htmlType="submit"
            icon={<PlusCircleOutlined />}
          >
            Agregar Tiro
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
