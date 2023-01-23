import * as React from 'react';
import Svg, {SvgProps, Path, Line} from 'react-native-svg';

const Building = (props: SvgProps) => (
  <Svg
    width="18"
    height="20"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="#01BABC"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <Line x1="3" y1="21" x2="21" y2="21" />
    <Path d="M5 21v-14l8 -4v18" />
    <Path d="M19 21v-10l-6 -4" />
    <Line x1="9" y1="9" x2="9" y2="9.01" />
    <Line x1="9" y1="12" x2="9" y2="12.01" />
    <Line x1="9" y1="15" x2="9" y2="15.01" />
    <Line x1="9" y1="18" x2="9" y2="18.01" />
  </Svg>
);

export default Building;
