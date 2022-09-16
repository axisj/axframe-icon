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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.2929 7.29289C14.6834 6.90237 15.3166 6.90237 15.7071 7.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L15.7071 16.7071C15.3166 17.0976 14.6834 17.0976 14.2929 16.7071C13.9024 16.3166 13.9024 15.6834 14.2929 15.2929L16.5858 13H8.33333C7.78105 13 7.33333 12.5523 7.33333 12C7.33333 11.4477 7.78105 11 8.33333 11H16.5858L14.2929 8.70711C13.9024 8.31658 13.9024 7.68342 14.2929 7.29289Z"
      fill="#C7CED9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 4C2 3.44772 2.44772 3 3 3H11C11.5523 3 12 3.44772 12 4C12 4.55228 11.5523 5 11 5H4V19H11C11.5523 19 12 19.4477 12 20C12 20.5523 11.5523 21 11 21H3C2.44772 21 2 20.5523 2 20V4Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
