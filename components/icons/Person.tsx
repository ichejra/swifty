import React from "react";
import { Path, Svg, SvgProps } from "react-native-svg";

const Person = (props: SvgProps) => {
  return (
    <Svg
      width="16"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#f6f6f6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <Path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </Svg>
  );
};

export default Person;
