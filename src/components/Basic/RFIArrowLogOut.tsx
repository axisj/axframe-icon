import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const RFIArrowLogOut: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <g clipPath="url(#clip0_25_3)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071C14.9024 16.3166 14.9024 15.6834 15.2929 15.2929L17.5858 13H9.33333C8.78105 13 8.33333 12.5523 8.33333 12C8.33333 11.4477 8.78105 11 9.33333 11H17.5858L15.2929 8.70711C14.9024 8.31658 14.9024 7.68342 15.2929 7.29289Z"
        fill="#C7CED9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4C3 3.44772 3.44772 3 4 3H12C12.5523 3 13 3.44772 13 4C13 4.55228 12.5523 5 12 5H5V19H12C12.5523 19 13 19.4477 13 20C13 20.5523 12.5523 21 12 21H4C3.44772 21 3 20.5523 3 20V4Z"
        fill="#C7CED9"
      />
    </g>
    <defs>
      <clipPath id="clip0_25_3">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </SvgComponent>
);
