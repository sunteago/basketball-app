import React from "react";
import "antd/dist/antd.css";
import { Select } from "antd";
import { shotPositions } from "../../../utils";

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

export default function SelectInput({ placeholder, students }) {
  let selectInputList;

  if (students) {
    selectInputList =
      students.length > 0
        ? students.map((std) => (
            <Option key={std.key} value={std.key}>
              {std.student}
            </Option>
          ))
        : null;
  } else {
    selectInputList = shotPositions.map((pos) => (
      <Option key={pos.key} value={pos.position}>
        {pos.positionName}
      </Option>
    ));
  }

  return (
    <Select
      showSearch
      style={{ width: "100%" }}
      placeholder={placeholder}
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {selectInputList}
    </Select>
  );
}
