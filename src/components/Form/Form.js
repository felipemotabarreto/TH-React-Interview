import React, { useMemo, useRef } from "react";
import { validateFields } from "../../utils/validations";

import "./Form.css";

export default function Form({ onSubmit, scheme, children }) {
  const dataRef = useRef(scheme);
  const fieldRefs = useMemo(() => {
    const _data = dataRef.current;
    if (!_data) {
      return {};
    }

    return Object.keys(_data).reduce(
      (fields, key) => ({ ...fields, [key]: React.createRef() }),
      {}
    );
  }, [dataRef]);

  const childrenArray = Array.isArray(children) ? children : [children];

  const isFormComponent = (name) => !!fieldRefs[name];

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateFields(fieldRefs);
    if (isValid) {
      const data = Object.keys(fieldRefs).reduce((data, key) => {
        data[key] = fieldRefs[key]?.current?.getData();
        return data;
      }, {});
      onSubmit(data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {childrenArray?.map((child, index) => {
        let formChild = child;
        if (isFormComponent(child.props.name)) {
          formChild = React.cloneElement(child, {
            ...child.props,
            validationRef: fieldRefs[child.props.name],
            initialValue: scheme[child.props.name],
          });
        }
        return <React.Fragment key={index}>{formChild}</React.Fragment>;
      })}
    </form>
  );
}
