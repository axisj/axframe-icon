import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const RFIMore: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 11.6C4 10.7163 4.74557 10 5.66528 10H5.6786C6.59831 10 7.34388 10.7163 7.34388 11.6C7.34388 12.4837 6.59831 13.2 5.6786 13.2H5.66528C4.74557 13.2 4 12.4837 4 11.6Z"
      fill="#C7CED9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.3281 11.6C10.3281 10.7163 11.0736 10 11.9933 10H12.0067C12.9264 10 13.6719 10.7163 13.6719 11.6C13.6719 12.4837 12.9264 13.2 12.0067 13.2H11.9933C11.0736 13.2 10.3281 12.4837 10.3281 11.6Z"
      fill="#C7CED9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.6561 11.6C16.6561 10.7163 17.4017 10 18.3214 10H18.3347C19.2544 10 20 10.7163 20 11.6C20 12.4837 19.2544 13.2 18.3347 13.2H18.3214C17.4017 13.2 16.6561 12.4837 16.6561 11.6Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
