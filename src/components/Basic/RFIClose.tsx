import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const RFIClose: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.34171 5.34171C5.79732 4.8861 6.53601 4.8861 6.99162 5.34171L12 10.3501L17.0084 5.34171C17.464 4.8861 18.2027 4.8861 18.6583 5.34171C19.1139 5.79732 19.1139 6.53601 18.6583 6.99162L13.6499 12L18.6583 17.0084C19.1139 17.464 19.1139 18.2027 18.6583 18.6583C18.2027 19.1139 17.464 19.1139 17.0084 18.6583L12 13.6499L6.99162 18.6583C6.53601 19.1139 5.79732 19.1139 5.34171 18.6583C4.8861 18.2027 4.8861 17.464 5.34171 17.0084L10.3501 12L5.34171 6.99162C4.8861 6.53601 4.8861 5.79732 5.34171 5.34171Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
