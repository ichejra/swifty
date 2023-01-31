import React from "react";
import { Path, Svg } from "react-native-svg";

const ExclamationMark = () => {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#c0c0c0"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M12 19v.01" />
      <Path d="M12 15v-10" />
    </Svg>
  );
};

export default ExclamationMark;
