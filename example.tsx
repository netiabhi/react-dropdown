import React, { Component, useEffect, useState } from "react";

import CreatableSelect from "react-select/creatable";
import {
  ColourOption,
  colourOptions,
  groupedOptions,
  GroupedOption
} from "./docs/data";
import { ActionMeta, OnChangeValue } from "react-select";

export default function CreatableSingle(props) {
  const [defaultValue, setDefaultValue] = useState(colourOptions[5]);
  useEffect(() => {
    console.group("Default color");
    console.log(defaultValue);
    console.groupEnd();
  }, [defaultValue]);

  const handleChange = (
    newValue: OnChangeValue<GroupedOption, false>,
    actionMeta: ActionMeta<GroupedOption>
  ) => {
    console.group("Value Changed");
    console.log(newValue);
    setDefaultValue(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  return (
    <>
      <CreatableSelect
        onChange={handleChange}
        options={groupedOptions}
        value={defaultValue}
      />
      <button onClick={() => setDefaultValue(colourOptions[2])}>
        change default
      </button>
    </>
  );
}
