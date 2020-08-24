import React from "react";
import "antd/dist/antd.css";
import { Select } from "antd";
import { shotPositions } from "../../../utils";

const { Option } = Select;

export default function SelectOptions({ students } = {}) {
  return students
    ? students.length > 0
      ? students.map((std) => (
          <Option key={std.key} value={std.student}>
            {std.student}
          </Option>
        ))
      : null
    : shotPositions.map((pos) => (
        <Option key={pos.key} value={pos.position}>
          {pos.positionName}
        </Option>
      ));
}
