import React from "react";
import Svg, { Circle, Line, Path, SvgProps } from "react-native-svg";

const Trophy = (props: SvgProps) => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke="#f6f6f6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Line x1="8" y1="21" x2="16" y2="21" />
      <Line x1="12" y1="17" x2="12" y2="21" />
      <Line x1="7" y1="4" x2="17" y2="4" />
      <Path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
      <Circle cx="5" cy="9" r="2" />
      <Circle cx="19" cy="9" r="2" />
    </Svg>
  );
};

export default Trophy;
