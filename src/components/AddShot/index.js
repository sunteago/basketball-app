import React, { useState, useContext, useRef, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import studentsContext from "../../context/students/studentsContext";
import UIContext from "../../context/UI/UIContext";

import { Form, Button, InputNumber, Divider, Checkbox, Select } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import classes from "./index.module.css";
import InputOptions from "./InputOptions";
import { addShotRules } from "../../utils";
import { Shot } from "../../models";

const selectProps = {
  showSearch: true,
  style: { width: "100%" },
  optionFilterProp: "children",
  filterOption: (input, option) =>
    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
};

export default function AddShot() {
  const [checked, setChecked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [form] = Form.useForm();

  const { students, setShots } = useContext(studentsContext);
  const { isCollapsed, setIsCollapsed, screens } = useContext(UIContext);

  const studentsSelectRef = useRef();

  const history = useHistory();

  useEffect(() => {
    let timerId;
    if (!isCollapsed) {
      studentsSelectRef.current.focus();
      if (students.length === 0) {
        timerId = setTimeout(() => setIsDropdownOpen(true), 200);
      }
    }
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [isCollapsed, students.length]);

  useEffect(() => {
    if (isCollapsed && isDropdownOpen) setIsDropdownOpen(false);
  }, [isDropdownOpen, isCollapsed]);

  const onFinishHandler = (values) => {
    setShots((prevShots) => [...prevShots, new Shot(values, checked)]);
    form.resetFields();
    history.push("/");
    setChecked(false);
  };

  const onClickAddStudent = () => {
    setIsDropdownOpen(false);
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
          rules={addShotRules("alumno")}
        >
          <Select
            {...selectProps}
            open={isDropdownOpen}
            ref={studentsSelectRef}
            className={classes.SelectStudent}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            notFoundContent={studentsNotFound}
            onChange={() => setIsDropdownOpen(false)}
          >
            {InputOptions({ students })}
          </Select>
        </Form.Item>

        <Form.Item
          labelCol={{ span: 12 }}
          name="position"
          label="Posición"
          className={classes.FormInput}
          rules={addShotRules("posición")}
        >
          <Select {...selectProps}>{InputOptions()}</Select>
        </Form.Item>

        <Form.Item
          name="distance"
          label="Metros"
          className={`${classes.FormInput}`}
          rules={addShotRules("metros")}
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
