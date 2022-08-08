import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const RFIMoreVertical: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6 20C10.7163 20 10 19.2544 10 18.3347L10 18.3214C10 17.4017 10.7163 16.6561 11.6 16.6561C12.4837 16.6561 13.2 17.4017 13.2 18.3214L13.2 18.3347C13.2 19.2544 12.4837 20 11.6 20Z"
      fill="#C7CED9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6 13.6719C10.7163 13.6719 10 12.9264 10 12.0067L10 11.9933C10 11.0736 10.7163 10.3281 11.6 10.3281C12.4837 10.3281 13.2 11.0736 13.2 11.9933L13.2 12.0067C13.2 12.9264 12.4837 13.6719 11.6 13.6719Z"
      fill="#C7CED9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6 7.34388C10.7163 7.34388 10 6.59831 10 5.6786L10 5.66528C10 4.74557 10.7163 4 11.6 4C12.4837 4 13.2 4.74557 13.2 5.66528L13.2 5.6786C13.2 6.59831 12.4837 7.34388 11.6 7.34388Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
