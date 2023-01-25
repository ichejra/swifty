import * as React from "react";
import Svg, { SvgProps, Path, Polyline } from "react-native-svg";

const ChevronLeft = (props: SvgProps) => (
  <Svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="#01dade"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <Polyline points="15 6 9 12 15 18" />
  </Svg>
);

export default ChevronLeft;
