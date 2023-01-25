import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const Wallet = (props: SvgProps) => {
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
      <Path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
      <Path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
    </Svg>
  );
};

export default Wallet;
