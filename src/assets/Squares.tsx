import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SquaresIcon = (props: SvgProps) => (
  <Svg width="17" height="17" viewBox="0 0 17 17" fill="none">
    <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
      <Path
        d="M6.66667 2.5H2V7.16667H6.66667V2.5Z"
        stroke="#2E3E4B"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.9997 2.5H9.33301V7.16667H13.9997V2.5Z"
        stroke="#2E3E4B"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.9997 9.8335H9.33301V14.5002H13.9997V9.8335Z"
        stroke="#2E3E4B"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.66667 9.8335H2V14.5002H6.66667V9.8335Z"
        stroke="#2E3E4B"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  </Svg>
);
export default SquaresIcon;
