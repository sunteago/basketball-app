import React, { useState, useContext, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import StudentsContext from "../../context/students/StudentsContext";
import ShotsContext from "../../context/shots/ShotsContext";
import UIContext from "../../context/UI/UIContext";

import { Form, Button, InputNumber, Divider, Checkbox, Select } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import classes from "./index.module.css";
import SelectInput from "../form/SelectOptions";
import { Link } from "react-router-dom";

const requiredRules = (field) => [
  {
    message: `Seleccione ${field}`,
    required: true,
  },
];

const selectProps = {
  showSearch: true,
  style: { width: "100%" },
  placeholder: "Alumno",
  optionFilterProp: "children",
  filterOption: (input, option) =>
    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
};

export default function AddShot() {
  const [checked, setChecked] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [form] = Form.useForm();

  const { students } = useContext(StudentsContext);
  const { setShots } = useContext(ShotsContext);
  const { isCollapsed, setIsCollapsed, screens } = useContext(UIContext);

  const studentsSelectRef = useRef();

  const history = useHistory();

  useEffect(() => {
    let timerId;
    if (!isCollapsed) {
      if (students.length > 0) {
        studentsSelectRef.current.focus();
      }
      timerId = setTimeout(() => setDropdownOpen(true), 200);
    }
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [isCollapsed, students]);

  const onFinishHandler = (values) => {
    setShots((prevShots) => [
      ...prevShots,
      {
        key: Math.random(),
        student: values.student,
        position: values.position,
        distance: values.distance,
        scored: checked,
        date: Date.now(),
      },
    ]);
    resetFields();
    history.push("/");
    setTimeout(() => setDropdownOpen(true), 300);
  };

  const onClickAddStudent = () => {
    setDropdownOpen(false);
    if (!screens.lg && !screens.xl) setIsCollapsed(true);
  };

  const studentsNotFound = (
    <span>
      No existe alumno,{" "}
      <Link onClick={onClickAddStudent} to="/add-student">
        desea agregar?
      </Link>
    </span>
  );

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
          rules={requiredRules("alumno")}
        >
          <Select
            {...selectProps}
            open={dropdownOpen}
            ref={studentsSelectRef}
            className={classes.SelectStudent}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            notFoundContent={studentsNotFound}
          >
            {SelectInput({ students })}
          </Select>
        </Form.Item>

        <Form.Item
          labelCol={{ span: 12 }}
          name="position"
          label="Posición"
          className={classes.FormInput}
          rules={requiredRules("posición")}
        >
          <Select {...selectProps}>{SelectInput()}</Select>
        </Form.Item>

        <Form.Item
          name="distance"
          label="Metros"
          className={`${classes.FormInput}`}
          rules={requiredRules("metros")}
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
