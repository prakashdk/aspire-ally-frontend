import React from "react";

import {RadioGroup, Radio} from "@nextui-org/react";

export default function Quiz({question,options, next}) {
  return (
    <RadioGroup
      label="Select your favorite city"
    >
      <Radio value="buenos-aires">Buenos Aires</Radio>
      <Radio value="sydney">Sydney</Radio>
      <Radio value="san-francisco">San Francisco</Radio>
      <Radio value="london">London</Radio>
      <Radio value="tokyo">Tokyo</Radio>
      <div className="right">
                <Button onClick={next} color="primary">
                  Next <ArrowForwardIosOutlined />{" "}
                </Button>
              </div>
    </RadioGroup>
  );
}
