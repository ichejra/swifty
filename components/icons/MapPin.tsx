import React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

const MapPin = (props: SvgProps) => {
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
      {...props}>
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Circle cx="12" cy="11" r="3" />
      <Path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
    </Svg>
  );
};

export default MapPin;
