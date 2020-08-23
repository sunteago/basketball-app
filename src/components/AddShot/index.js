import React, { useState } from "react";
import classes from "./index.module.css";
import { Checkbox, Button, InputNumber, Divider } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import SelectInput from "../form/SelectInput/";

export default function AddShot() {
  const [checked, setChecked] = useState(false);
  const [distance, setDistance] = useState(1);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={classes.TitleContainer}>
        <h2 className={classes.Title}>Agregar Tiro</h2>
      </div>
      <Divider className={classes.Divider} />
      <form className={classes.FormContainer} onSubmit={onSubmitHandler}>
        <div className={classes.FormInput}>
          <SelectInput />
        </div>

        <div className={classes.FormInput}>
          <SelectInput />
        </div>

        <div className={classes.FormInput}>
          <InputNumber
            className={classes.Meters}
            defaultValue={distance}
            min={0}
            max={10}
            step={0.5}
            onChange={(value) => setDistance(value)}
            id="distance"
          />
          <label htmlFor="distance">mts</label>
        </div>

        <div className={classes.FormInput}>
          <Checkbox
            className={classes.Checkbox}
            checked={checked}
            onChange={() => setChecked((prev) => !prev)}
          >
            Encesto
          </Checkbox>
        </div>

        <Button
          className={classes.Button}
          type="primary"
          size="small"
          disabled={false}
          icon={<PlusCircleOutlined />}
          onClick={() => {}}
        >
          Agregar Tiro
        </Button>
      </form>
    </>
  );
}
